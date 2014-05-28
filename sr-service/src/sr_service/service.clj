(ns sr-service.service
    (:require [io.pedestal.service.http :as bootstrap]
              [io.pedestal.service.http.route :as route]
              [io.pedestal.service.http.body-params :as body-params]
              [io.pedestal.service.http.route.definition :refer [defroutes]]
              [ring.util.response :as ring-resp]
              [io.pedestal.service.http.sse :as sse]
              [io.pedestal.service.log :as log]
              [io.pedestal.service.http.ring-middlewares :as middlewares]
              [io.pedestal.service.interceptor :refer [definterceptor]]
              [ring.middleware.session.cookie :as cookie]))

(defn about-page
  [request]
  (ring-resp/response (format "Clojure %s - served from %s"
                              (clojure-version)
                              (route/url-for ::about-page))))

(def ^:private streaming-contexts (atom {}))

(defn- new-session-id []
  (.toString (java.util.UUID/randomUUID)))

(defn- session-from-request
  "extract session id from request"
  [request]
  (get-in request [:cookies "client-id" :value]))

(defn- session-from-context
  "extract session-id from streaming context"
  [streaming-context]
  (get-in streaming-context [:request :cookies "client-id" :value]))

(defn- clean-up
  "Remove given streaming context and shut down event stream"
  [streaming-context]
  (swap! streaming-contexts dissoc (session-from-context streaming-context))
  (sse/end-event-stream streaming-context))

(defn- notify [session-id event-name event-data]
  (when-let [streaming-context (get @streaming-contexts session-id)]
    (try
      (sse/send-event streaming-context event-name event-data)
      (catch java.io.IOException ioe
        (clean-up streaming-context)))))

(defn- notify-all-others [sending-session-id event-name event-data]
  (doseq [session-id (keys @streaming-contexts)]
    (when (not= session-id sending-session-id)
      (notify session-id event-name event-data))))

(defn subscribe
  "assign a session cookie to this request if it doesn't exist. Redirect to events
channel"
  [request]
  (let [session-id (or (session-from-request request)
                       (new-session-id))
        cookie {:client-id {:value session-id :path "/"}}]
    (-> (ring-resp/redirect (route/url-for ::events))
        (update-in [:cookies] merge cookie))))

(defn publish
  [{msg-data :edn-params :as request}]
  (log/info :message "received message"
            :request request
            :msg-data msg-data)
  (let [session-id (or (session-from-request request)
                       (new-session-id))]
    (notify-all-others session-id
                       "msg"
                       (pr-str (update-in msg-data
                                          [:io.pedestal.app.messages/topic]
                                          conj
                                          (subs session-id 0 8))))
    (ring-resp/response "")))

(defn- store-streaming-context [streaming-context]
  (let [session-id (session-from-context streaming-context)]
    (swap! streaming-contexts assoc session-id streaming-context)))

(definterceptor session-interceptor
  (middlewares/session {:store (cookie/cookie-store)}))

(defn home-page
  [request]
  (ring-resp/response "Hello World!"))

(defroutes routes
  [[["/" {:get home-page}
     ;; Set default interceptors for /about and any other paths under /
     ^:interceptors [(body-params/body-params) bootstrap/html-body session-interceptor]
     ["/msgs" {:get subscribe :post publish}
      ["/events" {:get [::events (sse/start-event-stream store-streaming-context)]}]]]]])

;; Consumed by sr-service.server/create-server
;; See bootstrap/default-interceptors for additional options you can configure
(def service {:env :prod
              ;; You can bring your own non-default interceptors. Make
              ;; sure you include routing and set it up right for
              ;; dev-mode. If you do, many other keys for configuring
              ;; default interceptors will be ignored.
              ;; :bootstrap/interceptors []
              ::bootstrap/routes routes

              ;; Uncomment next line to enable CORS support, add
              ;; string(s) specifying scheme, host and port for
              ;; allowed source(s):
              ;;
              ;; "http://localhost:8080"
              ;;
              ;;::bootstrap/allowed-origins ["scheme://host:port"]

              ;; Root for resource interceptor that is available by default.
              ::bootstrap/resource-path "/public"

              ;; Either :jetty or :tomcat (see comments in project.clj
              ;; to enable Tomcat)
              ;;::bootstrap/host "localhost"
              ::bootstrap/type :jetty
              ::bootstrap/port 8080})
