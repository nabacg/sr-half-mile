(ns ^:shared sr-client.behavior
    (:require [clojure.string :as string]
              [io.pedestal.app.messages :as msg]
              [io.pedestal.app :as app]))

(defn shift-gear-transform [old_value _]
  ((fnil inc 0) old_value))

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

(defn init-main [_]
  [[:transform-enable [:main :my-car :gear]
    :shift-gear [{msg/topic [:my-car :gear]}]]])

(def sr-half-mile-app
  {:version 2
   :transform [[:shift-gear [:my-car :gear] shift-gear-transform]
               [:swap [:**] swap-transform]]
   :emit [{:init init-main}
          [#{[:my-car :gear]
             [:other-players :*]
             [:total-count]
             [:total-gears]
             [:players]} (app/default-emitter [:main])]]
   :effect #{[#{[:my-car]} publish-player :single-val]}
   :derive #{[{[:my-car] :me [:other-players] :others} [:players] merge-players :map]
             [#{[:players :*]} [:total-count] total-count :vals]
             [#{[:players :* :gear]} [:total-gears] sum-all :vals]}})
