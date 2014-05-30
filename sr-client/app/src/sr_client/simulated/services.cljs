(ns sr-client.simulated.services
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app.messages :as msg]
            [io.pedestal.app.util.platform :as platform]))

(def players (atom {"GearHead1984" {:gear 0}
                     "Stefan" {:gear 0}}))


(defn shift-gear [key t input-queue]
  (p/put-message input-queue {msg/type :swap
                                  msg/topic [:other-players key]
                              :value (get-in (swap! players update-in [key :gear] inc)
                                             [key])})
  (platform/create-timeout t #(shift-gear key t input-queue)))


(defn receive-messages [input-queue]
  (shift-gear "GearHead1984" 2000 input-queue)
  (shift-gear "Stefan" 5000 input-queue))

(defn consume-effects [message input-queue]
  (.log js/console (str "Sending current player to server:" message)))

(defrecord MockServices [app]
  p/Activity
  (start [this]
    (receive-messages (:input app)))
  (stop [this]))

(defn send-heartbeat [input-queue]
  (p/put-message input-queue {msg/type :heartbeat
                              msg/topic [:time]})
  (platform/create-timeout 3000 #(send-heartbeat input-queue)))

(defrecord HeartbeatService [app]
  p/Activity
  (start [this]
    (send-heartbeat (:input app)))
  (stop [this]))
