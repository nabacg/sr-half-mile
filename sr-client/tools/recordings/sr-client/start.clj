{:config {:order 0, :description "initial recording", :name :start}
 :data
 [
  [:node-create [] :map]
  [:node-create [:main] :map]
  [:node-create [:main :my-car] :map]
  [:node-create [:main :my-car :gear] :map]
  [:value [:main :my-car :gear] nil 1]
  [:transform-enable [:main :my-car :gear] :shift-gear [{:io.pedestal.app.messages/topic [:my-car :gear]}]]
  [:node-create [:main :total-count] :map]
  [:value [:main :total-count] nil 3]
  [:node-create [:main :total-gears] :map]
  [:value [:main :total-gears] nil 4]
  [:node-create [:main :other-players] :map]
  [:node-create [:main :other-players "GearHead1984"] :map]
  [:value [:main :other-players "GearHead1984"] nil {:gear 2}]
  [:node-create [:main :other-players "Stefan"] :map]
  [:value [:main :other-players "Stefan"] nil {:gear 1}]
  [:node-create [:pedestal] :map]
  [:node-create [:pedestal :debug] :map]
  [:node-create [:pedestal :debug :dataflow-time] :map]
  [:value [:pedestal :debug :dataflow-time] nil 65]
  :break
  [:value [:main :total-gears] 4 5]
  [:value [:main :other-players "GearHead1984"] {:gear 2} {:gear 3}]
  [:value [:pedestal :debug :dataflow-time] 65 36]
  :break
  [:value [:main :total-gears] 5 6]
  [:value [:main :other-players "Stefan"] {:gear 1} {:gear 2}]
  [:value [:pedestal :debug :dataflow-time] 36 64]
  :break
  [:value [:main :total-gears] 6 7]
  [:value [:main :other-players "GearHead1984"] {:gear 3} {:gear 4}]
  [:value [:pedestal :debug :dataflow-time] 64 43]
  :break
  [:value [:main :total-gears] 7 8]
  [:value [:main :my-car :gear] 1 2]
  [:value [:pedestal :debug :dataflow-time] 43 34]
  :break
  [:value [:main :total-gears] 8 9]
  [:value [:main :my-car :gear] 2 3]
  [:value [:pedestal :debug :dataflow-time] 34 60]
  :break
  [:value [:main :total-gears] 9 10]
  [:value [:main :other-players "GearHead1984"] {:gear 4} {:gear 5}]
  [:value [:pedestal :debug :dataflow-time] 60 46]
  :break
  [:value [:main :total-gears] 10 11]
  [:value [:main :my-car :gear] 3 4]
  [:value [:pedestal :debug :dataflow-time] 46 30]
  :break
  [:value [:main :total-gears] 11 12]
  [:value [:main :my-car :gear] 4 5]
  [:value [:pedestal :debug :dataflow-time] 30 26]
  :break
  [:value [:main :total-gears] 12 13]
  [:value [:main :my-car :gear] 5 6]
  [:value [:pedestal :debug :dataflow-time] 26 57]
  :break
  [:value [:main :total-gears] 13 14]
  [:value [:main :my-car :gear] 6 7]
  [:value [:pedestal :debug :dataflow-time] 57 39]
  :break
  [:value [:main :total-gears] 14 15]
  [:value [:main :my-car :gear] 7 8]
  [:value [:pedestal :debug :dataflow-time] 39 30]
  :break
  [:value [:main :total-gears] 15 16]
  [:value [:main :other-players "Stefan"] {:gear 2} {:gear 3}]
  [:value [:pedestal :debug :dataflow-time] 30 25]
  :break
  [:value [:main :total-gears] 16 17]
  [:value [:main :other-players "GearHead1984"] {:gear 5} {:gear 6}]
  [:value [:pedestal :debug :dataflow-time] 25 21]
  :break
  [:value [:main :total-gears] 17 18]
  [:value [:main :my-car :gear] 8 9]
  [:value [:pedestal :debug :dataflow-time] 21 52]
  :break
  [:value [:main :total-gears] 18 19]
  [:value [:main :my-car :gear] 9 10]
  [:value [:pedestal :debug :dataflow-time] 52 35]
  :break
  [:value [:main :total-gears] 19 20]
  [:value [:main :my-car :gear] 10 11]
  [:value [:pedestal :debug :dataflow-time] 35 24]
  :break
  [:value [:main :total-gears] 20 21]
  [:value [:main :other-players "GearHead1984"] {:gear 6} {:gear 7}]
  [:value [:pedestal :debug :dataflow-time] 24 27]
  :break
  [:value [:main :total-gears] 21 22]
  [:value [:main :my-car :gear] 11 12]
  [:value [:pedestal :debug :dataflow-time] 27 49]
  :break
  [:value [:main :total-gears] 22 23]
  [:value [:main :my-car :gear] 12 13]
  [:value [:pedestal :debug :dataflow-time] 49 39]
  :break
  [:value [:main :total-gears] 23 24]
  [:value [:main :other-players "GearHead1984"] {:gear 7} {:gear 8}]
  [:value [:pedestal :debug :dataflow-time] 39 40]
  :break
  [:value [:main :total-gears] 24 25]
  [:value [:main :other-players "Stefan"] {:gear 3} {:gear 4}]
  [:value [:pedestal :debug :dataflow-time] 40 61]
  :break
  [:value [:main :total-gears] 25 26]
  [:value [:main :other-players "GearHead1984"] {:gear 8} {:gear 9}]
  [:value [:pedestal :debug :dataflow-time] 61 37]
  :break
  [:value [:main :total-gears] 26 27]
  [:value [:main :my-car :gear] 13 14]
  [:value [:pedestal :debug :dataflow-time] 37 29]
  :break
  [:value [:main :total-gears] 27 28]
  [:value [:main :my-car :gear] 14 15]
  [:value [:pedestal :debug :dataflow-time] 29 26]
  :break
  [:value [:main :total-gears] 28 29]
  [:value [:main :my-car :gear] 15 16]
  [:value [:pedestal :debug :dataflow-time] 26 45]
  :break
  [:value [:main :total-gears] 29 30]
  [:value [:main :my-car :gear] 16 17]
  [:value [:pedestal :debug :dataflow-time] 45 37]
  :break
  [:value [:main :total-gears] 30 31]
  [:value [:main :my-car :gear] 17 18]
  [:value [:pedestal :debug :dataflow-time] 37 33]
  :break
  [:value [:main :total-gears] 31 32]
  [:value [:main :other-players "GearHead1984"] {:gear 9} {:gear 10}]
  [:value [:pedestal :debug :dataflow-time] 33 27]
  :break
  [:value [:main :total-gears] 32 33]
  [:value [:main :my-car :gear] 18 19]
  [:value [:pedestal :debug :dataflow-time] 27 32]
  :break
  [:value [:main :total-gears] 33 34]
  [:value [:main :my-car :gear] 19 20]
  [:value [:pedestal :debug :dataflow-time] 32 53]
  :break
  [:value [:main :total-gears] 34 35]
  [:value [:main :my-car :gear] 20 21]
  [:value [:pedestal :debug :dataflow-time] 53 37]
  :break
  [:value [:main :total-gears] 35 36]
  [:value [:main :my-car :gear] 21 22]
  [:value [:pedestal :debug :dataflow-time] 37 25]
  :break
  [:value [:main :total-gears] 36 37]
  [:value [:main :other-players "GearHead1984"] {:gear 10} {:gear 11}]
  [:value [:pedestal :debug :dataflow-time] 25 31]
  :break
  [:value [:main :total-gears] 37 38]
  [:value [:main :my-car :gear] 22 23]
  [:value [:pedestal :debug :dataflow-time] 31 57]
  :break
  [:value [:main :total-gears] 38 39]
  [:value [:main :other-players "Stefan"] {:gear 4} {:gear 5}]
  [:value [:pedestal :debug :dataflow-time] 57 37]
  :break
  [:value [:main :total-gears] 39 40]
  [:value [:main :my-car :gear] 23 24]
  [:value [:pedestal :debug :dataflow-time] 37 27]
  :break
  [:value [:main :total-gears] 40 41]
  [:value [:main :my-car :gear] 24 25]
  [:value [:pedestal :debug :dataflow-time] 27 23]
 ]}