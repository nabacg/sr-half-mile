(ns sr-client.services
  (:require [io.pedestal.app.protocols :as p]
            [cljs.reader :as reader]))


(defn receive-sse [app event]
  (let [message (reader/read-string (.-data event))]
    (p/put-message (:input app) message)))

(defn consume-effects [message input-queue]
  (let [body (pr-str message)]
    (let [http (js/XMLHttpRequest.)]
      (.open http "POST" "/msgs" true)
      (.setRequestHeader http "Content-type" "application/edn")
      (.send http body))))

(defrecord Services [app]
  p/Activity
  (start [this]
    (let [event-source (js/EventSource. "/msgs")]
      (.addEventListener event-source
                         "msg"
                         (fn [e] (receive-sse app e))
                         false)))
  (stop [this]))
