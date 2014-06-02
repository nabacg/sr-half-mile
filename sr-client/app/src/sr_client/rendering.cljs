(ns sr-client.rendering
  (:require [domina :as dom]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.render.push.templates :as templates]
            [io.pedestal.app.render.push.handlers.automatic :as d]
            [io.pedestal.app.render.push.handlers :as h])
  (:require-macros [sr-client.html-templates :as html-templates]))

(def templates (html-templates/sr-client-templates))

;(.log js/console (str "KEEEYS " (keys templates)))

(defn render-template [template-name initial-value-fn]
  (fn [renderer [_ path :as delta] input-queue]
    (let [parent (render/get-parent-id renderer path)
          id (render/new-id! renderer path)
          html (templates/add-template renderer path (template-name templates))]
      (dom/append! (dom/by-id parent) (html (assoc (initial-value-fn delta) :id id))))))


(defn render-value [renderer [_ path _ new-value] input-queue]
  (let [key (last path)]
    (templates/update-t renderer [:main] {key (str new-value)})))

(defn render-other-counters-element [renderer [_ path] _]
  (render/new-id! renderer path "other-players"))

(defn render-other-counter-value [renderer [_ path _ {:keys [speed distance]}] input-queue]
  (let [key (last path)]
    (templates/update-t renderer path {:count (str  speed)
                                       :distance (str distance)})))

(defn render-my-car [renderer [_ path _ new-value] input-queue]
  (.log js/console (last path) (str new-value))
  (templates/update-t renderer [:main] {(last path) (str new-value)}))

(defn render-config []
  [[:node-create [:main] (render-template :sr-client-page
                                          (constantly {:gear 0}))]
   ;[:node-create [:main :my-car :gear] (render-template :my-player                                                    (constantly {:count 0}))]
   [:node-destroy [:main] h/default-destroy]
   [:transform-enable [:main :my-car] (h/add-send-on-click "inc-button")]
   [:transform-disable [:main :my-car] (h/remove-send-on-click "inc-button")]
   [:value [:main :my-car :*] render-my-car]
   [:value [:main :*] render-value]
   [:value [:pedestal :debug :*] render-value]

   [:node-create [:main :other-players] render-other-counters-element]
   [:node-create [:main :other-players :*]
    (render-template :other-players
                     (fn [[_ path]] {:counter-id (last path)}))]
   [:node-destroy [:main :other-players :*] h/default-destroy]
   [:value [:main :other-players :*] render-other-counter-value]
                                        ;[:value [:main :my-car :*] render-my-car-value]
   ])
