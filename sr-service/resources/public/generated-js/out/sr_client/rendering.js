goog.provide('sr_client.rendering');
goog.require('cljs.core');
goog.require('io.pedestal.app.render.push.handlers');
goog.require('io.pedestal.app.render.push.handlers.automatic');
goog.require('io.pedestal.app.render.push.templates');
goog.require('io.pedestal.app.render.push');
goog.require('domina');
sr_client.rendering.templates = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:sr-client-page",(function templates(){
var G__14320 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__14323 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__14322 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__14321 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:my-gear",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",G__14320,"\uFDD0:type","\uFDD0:content"], true)], true),"\uFDD0:total-count",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",G__14321,"\uFDD0:type","\uFDD0:content"], true)], true),"\uFDD0:total-gears",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",G__14322,"\uFDD0:type","\uFDD0:content"], true)], true),"\uFDD0:dataflow-time",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",G__14323,"\uFDD0:type","\uFDD0:content"], true)], true)], true),(function (G__14318){
return (function (G__14324){
return [cljs.core.str("<div id=\""),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14324,"\uFDD0:id")),cljs.core.str("\" class=\"row-fluid\"><div class=\"span6\"><div><button id=\"inc-button\" class=\"btn btn-success\">Shift Gear</button></div><div class=\"counter-row\"><span class=\"counter-label\">My Gear:</span><span id=\""),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14324,"\uFDD0:G__14320")),cljs.core.str("\" class=\"counter\">"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14324,"\uFDD0:my-gear")),cljs.core.str("</span></div>\n\n\t<div id=\"my-player\"></div><div id=\"other-players\"></div></div><div class=\"span2\"><div class=\"stat-label\">\n           Total Count\n        </div><div id=\""),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14324,"\uFDD0:G__14321")),cljs.core.str("\" class=\"stat\">"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14324,"\uFDD0:total-count")),cljs.core.str("</div><div class=\"stat-label\">\n          Total Gears\n        </div><div id=\""),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14324,"\uFDD0:G__14322")),cljs.core.str("\" class=\"stat\">"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14324,"\uFDD0:total-gears")),cljs.core.str("</div></div><div class=\"span3\"><div class=\"stat-label\">\n          Dataflow Time\n        </div><div id=\""),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14324,"\uFDD0:G__14323")),cljs.core.str("\" class=\"stat\">"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14324,"\uFDD0:dataflow-time")),cljs.core.str("</div></div></div>")].join('');
}).call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__14318,"\uFDD0:G__14320",G__14320,cljs.core.array_seq(["\uFDD0:G__14323",G__14323,"\uFDD0:G__14322",G__14322,"\uFDD0:G__14321",G__14321], 0)));
})], true);
}),"\uFDD0:other-players",(function templates(){
var G__14327 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__14328 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:counter-id",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",G__14327,"\uFDD0:type","\uFDD0:content"], true)], true),"\uFDD0:count",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",G__14328,"\uFDD0:type","\uFDD0:content"], true)], true)], true),(function (G__14325){
return (function (G__14329){
return [cljs.core.str("<div id=\""),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14329,"\uFDD0:id")),cljs.core.str("\" class=\"counter-row\"><span class=\"counter-label\">Gear for <span id=\""),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14329,"\uFDD0:G__14327")),cljs.core.str("\">"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14329,"\uFDD0:counter-id")),cljs.core.str("</span>:</span><span id=\""),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14329,"\uFDD0:G__14328")),cljs.core.str("\" class=\"counter\">"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14329,"\uFDD0:count")),cljs.core.str("</span></div>")].join('');
}).call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__14325,"\uFDD0:G__14327",G__14327,cljs.core.array_seq(["\uFDD0:G__14328",G__14328], 0)));
})], true);
}),"\uFDD0:my-player",(function templates(){
var G__14332 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:count",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",G__14332,"\uFDD0:type","\uFDD0:content"], true)], true)], true),(function (G__14330){
return (function (G__14333){
return [cljs.core.str("<div id=\""),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14333,"\uFDD0:id")),cljs.core.str("\" class=\"counter-row\"><span class=\"counter-label\">My Player:</span><span id=\""),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14333,"\uFDD0:G__14332")),cljs.core.str("\" class=\"counter\">"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__14333,"\uFDD0:count")),cljs.core.str("</span></div>")].join('');
}).call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14330,"\uFDD0:G__14332",G__14332));
})], true);
})], true);
sr_client.rendering.render_template = (function render_template(template_name,initial_value_fn){
return (function (renderer,p__14336,input_queue){
var vec__14337 = p__14336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14337,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14337,1,null);
var delta = vec__14337;
var parent = (io.pedestal.app.render.push.get_parent_id.cljs$core$IFn$_invoke$arity$2 ? io.pedestal.app.render.push.get_parent_id.cljs$core$IFn$_invoke$arity$2(renderer,path) : io.pedestal.app.render.push.get_parent_id.call(null,renderer,path));
var id = (io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$2 ? io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$2(renderer,path) : io.pedestal.app.render.push.new_id_BANG_.call(null,renderer,path));
var html = io.pedestal.app.render.push.templates.add_template(renderer,path,(template_name.cljs$core$IFn$_invoke$arity$1 ? template_name.cljs$core$IFn$_invoke$arity$1(sr_client.rendering.templates) : template_name.call(null,sr_client.rendering.templates)));
return domina.append_BANG_(domina.by_id(parent),(html.cljs$core$IFn$_invoke$arity$1 ? html.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((initial_value_fn.cljs$core$IFn$_invoke$arity$1 ? initial_value_fn.cljs$core$IFn$_invoke$arity$1(delta) : initial_value_fn.call(null,delta)),"\uFDD0:id",id)) : html.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((initial_value_fn.cljs$core$IFn$_invoke$arity$1 ? initial_value_fn.cljs$core$IFn$_invoke$arity$1(delta) : initial_value_fn.call(null,delta)),"\uFDD0:id",id))));
});
});
sr_client.rendering.render_value = (function render_value(renderer,p__14338,input_queue){
var vec__14340 = p__14338;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14340,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14340,1,null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14340,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14340,3,null);
var key = cljs.core.last(path);
return io.pedestal.app.render.push.templates.update_t(renderer,cljs.core.PersistentVector.fromArray(["\uFDD0:main"], true),cljs.core.PersistentArrayMap.fromArray([key,[cljs.core.str(new_value)].join('')], true));
});
sr_client.rendering.render_other_counters_element = (function render_other_counters_element(renderer,p__14341,_){
var vec__14343 = p__14341;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14343,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14343,1,null);
return (io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$3(renderer,path,"other-players") : io.pedestal.app.render.push.new_id_BANG_.call(null,renderer,path,"other-players"));
});
sr_client.rendering.render_other_counter_value = (function render_other_counter_value(renderer,p__14344,input_queue){
var vec__14346 = p__14344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14346,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14346,1,null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14346,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14346,3,null);
var key = cljs.core.last(path);
return io.pedestal.app.render.push.templates.update_t(renderer,path,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:count",[cljs.core.str((new cljs.core.Keyword("\uFDD0:gear")).call(null,new_value))].join('')], true));
});
sr_client.rendering.render_my_car_value = (function render_my_car_value(renderer,p__14347,input_queue){
var vec__14349 = p__14347;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14349,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14349,1,null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14349,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14349,3,null);
return io.pedestal.app.render.push.templates.update_t(renderer,cljs.core.PersistentVector.fromArray(["\uFDD0:main"], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:my-gear",[cljs.core.str(new_value)].join('')], true));
});
sr_client.rendering.render_config = (function render_config(){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:main"], true),sr_client.rendering.render_template("\uFDD0:sr-client-page",cljs.core.constantly(cljs.core.PersistentArrayMap.fromArray(["\uFDD0:my-gear",0], true)))], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:main"], true),io.pedestal.app.render.push.handlers.default_destroy], true),cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",cljs.core.PersistentVector.fromArray(["\uFDD0:main","\uFDD0:my-car","\uFDD0:gear"], true),io.pedestal.app.render.push.handlers.add_send_on_click("inc-button")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:transform-disable",cljs.core.PersistentVector.fromArray(["\uFDD0:main","\uFDD0:my-car","\uFDD0:gear"], true),io.pedestal.app.render.push.handlers.remove_send_on_click("inc-button")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:main","\uFDD0:my-car","\uFDD0:gear"], true),sr_client.rendering.render_my_car_value], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:main","\uFDD0:*"], true),sr_client.rendering.render_value], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:pedestal","\uFDD0:debug","\uFDD0:*"], true),sr_client.rendering.render_value], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:main","\uFDD0:other-players"], true),sr_client.rendering.render_other_counters_element], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:main","\uFDD0:other-players","\uFDD0:*"], true),sr_client.rendering.render_template("\uFDD0:other-players",(function (p__14352){
var vec__14353 = p__14352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,1,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:counter-id",cljs.core.last(path)], true);
}))], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:main","\uFDD0:other-players","\uFDD0:*"], true),io.pedestal.app.render.push.handlers.default_destroy], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:main","\uFDD0:other-players","\uFDD0:*"], true),sr_client.rendering.render_other_counter_value], true)], true);
});
