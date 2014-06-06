(ns ^:shared sr-client.behavior
    (:require [clojure.string :as string]
              [io.pedestal.app.messages :as msg]
              [io.pedestal.app :as app]))


(def max-rpm 15000)
(def race-distance-meters 402)
(def max-gear 5)

(defn shift-gear-transform [{:keys [gear rpm speed distance]} _]
  (let [new-gear ((fnil inc 0) gear)]
    {:gear (if (> new-gear max-gear) gear new-gear)
     :rpm 0
     :speed speed
     :distance distance}))

(defn publish-player [player]
  [{msg/type :swap msg/topic [:other-players] :value player}])

(defn swap-transform [_ message]
  (:value message))

(defn total-count [_ nums]
  (do
    ;(.log js/console "!!!!!!!!!!" nums)
    (count nums)))

(defn sum-all [_ nums] (apply + nums))

(defn merge-players [_ {:keys [me others]}]
  (assoc others "Me" me))

(defn inc-transform [old_value _]
  ((fnil inc 0) old_value))

(defn get-speed [old_value {:keys [gear rpm]}]
  (if (nil? old_value)
    8
    (+ old_value (* old_value 0.2 (- 1 (/ rpm max-rpm))))))

(defn get-rpm [old_value {:keys [gear time]}]
 (if (nil? old_value)
    100
    (let [new_value (+ old_value (* max-rpm 0.1))]
      (if (> new_value max-rpm)
        max-rpm
        new_value))))

(defn init-main [_]
  [[:transform-enable [:main :my-car]
    :shift-gear [{msg/topic [:my-car]}]]
   [:transform-enable [:time]
    :heartbeat [{msg/topic [:time]}]]])

(defn get-distance [_ {:keys [speed time]}]
  (let [speed-meters-sec (float (* speed (/ 1000 3600)))
        time-sec time
        new-distance (- race-distance-meters (* speed-meters-sec time-sec))]
    (if (> new-distance 0)
      new-distance
      0)))

(def sr-half-mile-app
  {:version 2
   :transform [[:shift-gear [:my-car] shift-gear-transform]
               [:swap [:**] swap-transform]
               [:heartbeat [:time] inc-transform]
               [:debug [:pedestal :**] swap-transform]]
   :emit [{:init init-main}
          [#{[:my-car :gear]
             [:time]
             [:my-car :rpm]
             [:my-car :speed]
             [:my-car :distance]
             [:other-players :*]
             [:total-count]
             [:total-gears]} (app/default-emitter [:main])]
          [#{[:pedestal :debug :*]} (app/default-emitter [])]]
   :effect #{[#{[:my-car]} publish-player :single-val]}
   :derive #{[{[:my-car] :me [:other-players] :others} [:players] merge-players :map]
             [{[:my-car :gear] :gear [:my-car :rpm] :rpm} [:my-car :speed] get-speed :map]
             [{[:my-car :speed] :speed [:time] :time} [:my-car :distance] get-distance :map]
             [{[:my-car :gear] :gear [:time] :time} [:my-car :rpm] get-rpm :map]
             [#{[:players :*]} [:total-count] total-count :vals]
             [#{[:players :* :gear]} [:total-gears] sum-all :vals]}
   :debug true})
