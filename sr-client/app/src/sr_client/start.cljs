(ns sr-client.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [sr-client.behavior :as behavior]
            [sr-client.rendering :as rendering]
            [sr-client.services :as services]))

;{msg/type :shift-gear msg/topic [:my-car :gear]}
(defn create-app [render-config]
  (let [app (app/build behavior/sr-half-mile-app)
        render-fn (push-render/renderer "content" render-config render/log-fn)
        app-model (render/consume-app-model app render-fn)]
    (app/begin app)
    ;(p/put-message (:input app) {msg/type :shift-gear msg/topic [:my-car :gear]})
    {:app app :app-model app-model}))

(defn ^:export main []
  (let [app (create-app (rendering/render-config))
        services (services/->Services (:app app))]
    (app/consume-effects (:app app) services/consume-effects)
    (p/start services)
    app))
