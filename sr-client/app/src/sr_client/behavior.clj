(ns ^:shared sr-client.behavior
    (:require [clojure.string :as string]
              [io.pedestal.app.messages :as msg]
              [io.pedestal.app :as app]))

(defn shift-gear-transform [gear _]
  ((fnil inc 0) gear))

(defn publish-player [player]
  [{msg/type :swap msg/topic [:other-players] :value player}])

(defn swap-transform [_ message]
  (:value message))

;msg
;{msg/type :shift-gear msg/topic [:my-car :gear]}
(defn total-count [_ nums]
  (do
    (.log js/console "!!!!!!!!!!" nums)
    (count nums)))

(defn sum-all [_ nums] (apply + nums))

(defn merge-players [_ {:keys [me others]}]
  (assoc others "Me" me))

(defn inc-transform [old_value _]
  ((fnil inc 0) old_value))

(def max-rpm 15000)

(defn get-speed [old_value {:keys [gear rpm]}]
  (if (nil? old_value)
    15
    (+ old_value (* old_value 0.2 (- 1 (/ rpm max-rpm))))))

(defn get-rpm [old_value {:keys [gear time]}]
  (if (nil? old_value)
    100
    (let [new_value (+ old_value (* max-rpm 0.05))]
      (if (> new_value max-rpm)
        max-rpm
        new_value))))

(defn init-main [_]
  [[:transform-enable [:main :my-car :gear]
    :shift-gear [{msg/topic [:my-car :gear]}]]
   [:transform-enable [:time]
    :heartbeat [{msg/topic [:time]}]]])

(def sr-half-mile-app
  {:version 2
   :transform [[:shift-gear [:my-car :gear] shift-gear-transform]
               [:swap [:**] swap-transform]
               [:heartbeat [:time] inc-transform]
               [:debug [:pedestal :**] swap-transform]]
   :emit [{:init init-main}
          [#{[:my-car :gear]
             [:time]
             [:my-car :rpm]
             [:speed]
             [:other-players :*]
             [:total-count]
             [:total-gears]} (app/default-emitter [:main])]
          [#{[:pedestal :debug :*]} (app/default-emitter [])]]
   :effect #{[#{[:my-car]} publish-player :single-val]}
   :derive #{[{[:my-car] :me [:other-players] :others} [:players] merge-players :map]
             [{[:my-car :gear] :gear [:my-car :rpm] :rpm} [:speed] get-speed :map]
             [{[:my-car :gear] :gear [:time] :time} [:my-car :rpm] get-rpm :map]
             [#{[:players :*]} [:total-count] total-count :vals]
             [#{[:players :* :gear]} [:total-gears] sum-all :vals]}
   :debug true})
