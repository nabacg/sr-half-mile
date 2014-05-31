(ns sr-client.simulated.start
  (:require [io.pedestal.app.render.push.handlers.automatic :as d]
            [io.pedestal.app :as app]
            [sr-client.start :as start]
            [sr-client.rendering :as rendering]
            [goog.Uri]
            ;; This needs to be included somewhere in order for the
            ;; tools to work.
            [io.pedestal.app-tools.tooling :as tooling]
            [io.pedestal.app.protocols :as p]
            [sr-client.simulated.services :as services]
            [sr-client.services :as heartbeatServices]))

(defn param [name]
  (let [uri (goog.Uri. (.toString  (.-location js/document)))]
    (.getParameterValue uri name)))

(defn ^:export main []
  (let [app (start/create-app d/data-renderer-config)
        services (services/->MockServices (:app app))
        heartbeatService (heartbeatServices/->HeartbeatService (:app app))]
    (app/consume-effects (:app app) services/consume-effects)
    (p/start services)
    (p/start heartbeatService)
    app))
