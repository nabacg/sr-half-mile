goog.provide('sr_client.behavior');
goog.require('cljs.core');
goog.require('io.pedestal.app');
goog.require('io.pedestal.app.messages');
goog.require('clojure.string');
sr_client.behavior.shift_gear_transform = (function shift_gear_transform(old_value,_){
return cljs.core.fnil.call(null,cljs.core.inc,0).call(null,old_value);
});
sr_client.behavior.publish_player = (function publish_player(player){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:swap",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:other-players"], true),"\uFDD0:value",player], true)], true);
});
sr_client.behavior.swap_transform = (function swap_transform(_,message){
return (new cljs.core.Keyword("\uFDD0:value")).call(null,message);
});
sr_client.behavior.total_count = (function total_count(_,nums){
console.log("!!!!!!!!!!",nums);
return cljs.core.count.call(null,nums);
});
sr_client.behavior.sum_all = (function sum_all(_,nums){
return cljs.core.apply.call(null,cljs.core._PLUS_,nums);
});
sr_client.behavior.merge_players = (function merge_players(_,p__10938){
var map__10940 = p__10938;
var map__10940__$1 = ((cljs.core.seq_QMARK_.call(null,map__10940))?cljs.core.apply.call(null,cljs.core.hash_map,map__10940):map__10940);
var others = cljs.core.get.call(null,map__10940__$1,"\uFDD0:others");
var me = cljs.core.get.call(null,map__10940__$1,"\uFDD0:me");
return cljs.core.assoc.call(null,others,"Me",me);
});
sr_client.behavior.init_main = (function init_main(_){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",cljs.core.PersistentVector.fromArray(["\uFDD0:main","\uFDD0:my-car","\uFDD0:gear"], true),"\uFDD0:shift-gear",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:my-car","\uFDD0:gear"], true)], true)], true)], true)], true);
});
sr_client.behavior.sr_half_mile_app = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:version",2,"\uFDD0:transform",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:shift-gear",cljs.core.PersistentVector.fromArray(["\uFDD0:my-car","\uFDD0:gear"], true),sr_client.behavior.shift_gear_transform], true),cljs.core.PersistentVector.fromArray(["\uFDD0:swap",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),sr_client.behavior.swap_transform], true),cljs.core.PersistentVector.fromArray(["\uFDD0:debug",cljs.core.PersistentVector.fromArray(["\uFDD0:pedestal","\uFDD0:**"], true),sr_client.behavior.swap_transform], true)], true),"\uFDD0:emit",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:init",sr_client.behavior.init_main], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:total-count"], true),null,cljs.core.PersistentVector.fromArray(["\uFDD0:total-gears"], true),null,cljs.core.PersistentVector.fromArray(["\uFDD0:other-players","\uFDD0:*"], true),null,cljs.core.PersistentVector.fromArray(["\uFDD0:my-car","\uFDD0:gear"], true),null], true),io.pedestal.app.default_emitter.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:main"], true))], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:pedestal","\uFDD0:debug","\uFDD0:*"], true),null], true),io.pedestal.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY)], true)], true),"\uFDD0:effect",cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:my-car"], true),null], true),sr_client.behavior.publish_player,"\uFDD0:single-val"], true),null], true),"\uFDD0:derive",cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:players","\uFDD0:*"], true),null], true),cljs.core.PersistentVector.fromArray(["\uFDD0:total-count"], true),sr_client.behavior.total_count,"\uFDD0:vals"], true),null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:players","\uFDD0:*","\uFDD0:gear"], true),null], true),cljs.core.PersistentVector.fromArray(["\uFDD0:total-gears"], true),sr_client.behavior.sum_all,"\uFDD0:vals"], true),null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:my-car"], true),"\uFDD0:me",cljs.core.PersistentVector.fromArray(["\uFDD0:other-players"], true),"\uFDD0:others"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:players"], true),sr_client.behavior.merge_players,"\uFDD0:map"], true),null], true),"\uFDD0:debug",true], true);
