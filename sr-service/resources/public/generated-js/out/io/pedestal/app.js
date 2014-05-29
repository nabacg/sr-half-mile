goog.provide('io.pedestal.app');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.util.log');
goog.require('io.pedestal.app.util.adapters');
goog.require('io.pedestal.app.dataflow');
goog.require('io.pedestal.app.tree');
goog.require('io.pedestal.app.queue');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.protocols');
goog.require('clojure.set');
/**
* The default emitter function used by the previous dataflow
* version. All new dataflows should use the default-emitter function.
*/
io.pedestal.app.default_emitter_fn = (function() {
var default_emitter_fn = null;
var default_emitter_fn__1 = (function (inputs){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (p__10712){
var vec__10713 = p__10712;
var k = cljs.core.nth.call(null,vec__10713,0,null);
var v = cljs.core.nth.call(null,vec__10713,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray([k], true),"\uFDD0:map"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray([k], true),null,(new cljs.core.Keyword("\uFDD0:new")).call(null,v)], true)], true);
}),inputs));
});
var default_emitter_fn__2 = (function (inputs,changed_inputs){
return cljs.core.mapv.call(null,(function (changed_input){
return cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray([changed_input], true),(new cljs.core.Keyword("\uFDD0:new")).call(null,cljs.core.get.call(null,inputs,changed_input))], true);
}),changed_inputs);
});
default_emitter_fn = function(inputs,changed_inputs){
switch(arguments.length){
case 1:
return default_emitter_fn__1.call(this,inputs);
case 2:
return default_emitter_fn__2.call(this,inputs,changed_inputs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
default_emitter_fn.cljs$core$IFn$_invoke$arity$1 = default_emitter_fn__1;
default_emitter_fn.cljs$core$IFn$_invoke$arity$2 = default_emitter_fn__2;
return default_emitter_fn;
})()
;
io.pedestal.app.filter_changes = (function filter_changes(p__10714,changes){
var map__10718 = p__10714;
var map__10718__$1 = ((cljs.core.seq_QMARK_.call(null,map__10718))?cljs.core.apply.call(null,cljs.core.hash_map,map__10718):map__10718);
var processed_inputs = cljs.core.get.call(null,map__10718__$1,"\uFDD0:processed-inputs");
var mode = cljs.core.get.call(null,map__10718__$1,"\uFDD0:mode");
if(cljs.core._EQ_.call(null,mode,"\uFDD0:always"))
{return changes;
} else
{return cljs.core.remove.call(null,(function (p__10719){
var vec__10720 = p__10719;
var k = cljs.core.nth.call(null,vec__10720,0,null);
var v = cljs.core.nth.call(null,vec__10720,1,null);
return cljs.core.some.call(null,cljs.core.partial.call(null,io.pedestal.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
}
});
var prefixed = (function prefixed(k,p){
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.keyword_QMARK_.call(null,p))?cljs.core.PersistentVector.fromArray([p], true):p),k));
});
/**
* Return an emitter function which will emit deltas under the
* provided path prefix.
*/
io.pedestal.app.default_emitter = (function default_emitter(prefix){
return (function (inputs){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = io.pedestal.app.filter_changes.call(null,inputs,io.pedestal.app.dataflow.added_inputs.call(null,inputs));
return cljs.core.mapcat.call(null,(function (p__10727){
var vec__10728 = p__10727;
var k = cljs.core.nth.call(null,vec__10728,0,null);
var v = cljs.core.nth.call(null,vec__10728,1,null);
var k__$1 = prefixed.call(null,k,prefix);
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",k__$1,"\uFDD0:map"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,v], true)], true);
}),added);
})(),(function (){var updates = io.pedestal.app.filter_changes.call(null,inputs,io.pedestal.app.dataflow.updated_inputs.call(null,inputs));
return cljs.core.mapv.call(null,(function (p__10729){
var vec__10730 = p__10729;
var k = cljs.core.nth.call(null,vec__10730,0,null);
var v = cljs.core.nth.call(null,vec__10730,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:value",prefixed.call(null,k,prefix),v], true);
}),updates);
})(),(function (){var removed = io.pedestal.app.filter_changes.call(null,inputs,io.pedestal.app.dataflow.removed_inputs.call(null,inputs));
return cljs.core.mapcat.call(null,(function (p__10731){
var vec__10732 = p__10731;
var k = cljs.core.nth.call(null,vec__10732,0,null);
var v = cljs.core.nth.call(null,vec__10732,1,null);
var k__$1 = prefixed.call(null,k,prefix);
if(cljs.core._EQ_.call(null,v,"\uFDD0:io.pedestal.app.dataflow/removed"))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,null], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",k__$1], true)], true);
} else
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,v], true)], true);
}
}),removed);
})()));
});
});
io.pedestal.app.process_app_model_message = (function (){var method_table__9838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9842__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("process-app-model-message",(function (state,flow,message){
return io.pedestal.app.messages.type.call(null,message);
}),"\uFDD0:default",hierarchy__9842__auto__,method_table__9838__auto__,prefer_table__9839__auto__,method_cache__9840__auto__,cached_hierarchy__9841__auto__));
})();
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:default",(function (state,flow,message){
return state;
}));
io.pedestal.app.refresh_emitters = (function refresh_emitters(state,flow){
return cljs.core.reduce.call(null,(function (deltas,p__10735){
var map__10736 = p__10735;
var map__10736__$1 = ((cljs.core.seq_QMARK_.call(null,map__10736))?cljs.core.apply.call(null,cljs.core.hash_map,map__10736):map__10736);
var in$ = cljs.core.get.call(null,map__10736__$1,"\uFDD0:in");
var init_emitter = cljs.core.get.call(null,map__10736__$1,"\uFDD0:init");
var emitter = cljs.core.get.call(null,map__10736__$1,"\uFDD0:fn");
var init_emitter__$1 = (function (){var or__3943__auto__ = init_emitter;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return emitter;
}
})();
var dm = (new cljs.core.Keyword("\uFDD0:data-model")).call(null,state);
var inputs = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:new-model",dm,"\uFDD0:old-model",dm,"\uFDD0:input-paths",in$,"\uFDD0:added",in$,"\uFDD0:updated",cljs.core.PersistentHashSet.EMPTY,"\uFDD0:removed",cljs.core.PersistentHashSet.EMPTY,"\uFDD0:message",(new cljs.core.Keyword("\uFDD0:io.pedestal.app/input")).call(null,state)], true);
if(cljs.core.truth_(init_emitter__$1))
{return cljs.core.into.call(null,deltas,init_emitter__$1.call(null,inputs));
} else
{return deltas;
}
}),cljs.core.PersistentVector.EMPTY,(new cljs.core.Keyword("\uFDD0:emit")).call(null,flow));
});
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:navigate",(function (state,flow,message){
var deltas = io.pedestal.app.refresh_emitters.call(null,state,flow);
var paths = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths",(new cljs.core.Keyword("\uFDD0:name")).call(null,message)], true));
var old_paths = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/subscriptions")).call(null,state);
var destroy_paths = cljs.core.remove.call(null,cljs.core.set.call(null,paths),old_paths);
return cljs.core.assoc.call(null,state,"\uFDD0:io.pedestal.app/subscriptions",paths,"\uFDD0:emit",cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p1__10737_SHARP_){
return cljs.core.vector.call(null,"\uFDD0:navigate-node-destroy",p1__10737_SHARP_);
}),destroy_paths),deltas));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:set-focus",(function (state,flow,message){
return io.pedestal.app.process_app_model_message.call(null,state,flow,cljs.core.assoc.call(null,message,io.pedestal.app.messages.type,"\uFDD0:navigate"));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:subscribe",(function (state,flow,message){
var deltas = io.pedestal.app.refresh_emitters.call(null,state,flow);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/subscriptions"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),(new cljs.core.Keyword("\uFDD0:paths")).call(null,message)),"\uFDD0:emit",deltas);
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:unsubscribe",(function (state,flow,message){
var paths = cljs.core.set.call(null,(new cljs.core.Keyword("\uFDD0:paths")).call(null,message));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/subscriptions"], true),(function (s){
return cljs.core.remove.call(null,(function (p1__10738_SHARP_){
return cljs.core.contains_QMARK_.call(null,paths,p1__10738_SHARP_);
}),s);
})),"\uFDD0:emit",cljs.core.mapv.call(null,(function (p1__10739_SHARP_){
return cljs.core.vector.call(null,"\uFDD0:navigate-node-destroy",p1__10739_SHARP_);
}),paths));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:add-named-paths",(function (state,flow,message){
var map__10740 = message;
var map__10740__$1 = ((cljs.core.seq_QMARK_.call(null,map__10740))?cljs.core.apply.call(null,cljs.core.hash_map,map__10740):map__10740);
var name = cljs.core.get.call(null,map__10740__$1,"\uFDD0:name");
var paths = cljs.core.get.call(null,map__10740__$1,"\uFDD0:paths");
return cljs.core.assoc_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths",name], true),paths);
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:remove-named-paths",(function (state,flow,message){
var map__10741 = message;
var map__10741__$1 = ((cljs.core.seq_QMARK_.call(null,map__10741))?cljs.core.apply.call(null,cljs.core.hash_map,map__10741):map__10741);
var name = cljs.core.get.call(null,map__10741__$1,"\uFDD0:name");
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths"], true),cljs.core.dissoc,name);
}));
io.pedestal.app.path_starts_with_QMARK_ = (function path_starts_with_QMARK_(path,prefix){
return cljs.core._EQ_.call(null,cljs.core.take.call(null,cljs.core.count.call(null,prefix),path),prefix);
});
io.pedestal.app.special_ops = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:navigate-node-destroy","\uFDD0:node-destroy"], true);
io.pedestal.app.filter_deltas = (function filter_deltas(state,deltas){
var subscriptions = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/subscriptions")).call(null,state);
return cljs.core.mapv.call(null,(function (p__10746){
var vec__10747 = p__10746;
var op = cljs.core.nth.call(null,vec__10747,0,null);
var xs = cljs.core.nthnext.call(null,vec__10747,1);
var delta = vec__10747;
if(cljs.core.truth_(io.pedestal.app.special_ops.call(null,op)))
{return cljs.core.apply.call(null,cljs.core.vector,io.pedestal.app.special_ops.call(null,op),xs);
} else
{return delta;
}
}),cljs.core.filter.call(null,(function (p__10748){
var vec__10749 = p__10748;
var op = cljs.core.nth.call(null,vec__10749,0,null);
var path = cljs.core.nth.call(null,vec__10749,1,null);
var or__3943__auto__ = io.pedestal.app.special_ops.call(null,op);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some.call(null,(function (s){
return io.pedestal.app.path_starts_with_QMARK_.call(null,path,s);
}),subscriptions);
}
}),cljs.core.mapcat.call(null,io.pedestal.app.tree.expand_map,deltas)));
});
io.pedestal.app.run_dataflow = (function run_dataflow(state,flow,message){
return io.pedestal.app.dataflow.run.call(null,state,flow,message);
});
/**
* Using the given flow, process the given message producing a new
* state.
*/
io.pedestal.app.process_message = (function process_message(state,flow,message){
var old_state = state;
var new_state = ((cljs.core._EQ_.call(null,io.pedestal.app.messages.topic.call(null,message),io.pedestal.app.messages.app_model))?io.pedestal.app.process_app_model_message.call(null,state,flow,message):((cljs.core._EQ_.call(null,io.pedestal.app.messages.topic.call(null,message),io.pedestal.app.messages.output))?cljs.core.assoc.call(null,state,"\uFDD0:effect",cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0:payload")).call(null,message)], true)):(("\uFDD0:else")?io.pedestal.app.run_dataflow.call(null,state,flow,message):null)));
var new_deltas = io.pedestal.app.filter_deltas.call(null,new_state,(new cljs.core.Keyword("\uFDD0:emit")).call(null,new_state));
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,new_state,"\uFDD0:io.pedestal.app/emitter-deltas",new_deltas),"\uFDD0:emit");
});
io.pedestal.app.transact_one = (function transact_one(state,flow,message){
return io.pedestal.app.process_message.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,state,"\uFDD0:io.pedestal.app/input",message),"\uFDD0:effect","\uFDD0:continue-inputs"),flow,message);
});
io.pedestal.app.pre_process = (function pre_process(flow,message){
var map__10751 = (new cljs.core.Keyword("\uFDD0:input-adapter")).call(null,flow).call(null,message);
var map__10751__$1 = ((cljs.core.seq_QMARK_.call(null,map__10751))?cljs.core.apply.call(null,cljs.core.hash_map,map__10751):map__10751);
var out_path = cljs.core.get.call(null,map__10751__$1,"\uFDD0:out");
var key = cljs.core.get.call(null,map__10751__$1,"\uFDD0:key");
var pre_fn = io.pedestal.app.dataflow.find_message_transformer.call(null,(new cljs.core.Keyword("\uFDD0:pre")).call(null,flow),out_path,key);
if(cljs.core.truth_(pre_fn))
{return pre_fn.call(null,message);
} else
{return cljs.core.PersistentVector.fromArray([message], true);
}
});
io.pedestal.app.receive_input_message = (function receive_input_message(state,flow,input_queue){
return io.pedestal.app.protocols.take_message.call(null,input_queue,(function (message){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:pre")).call(null,flow)))
{var seq__10756_10760 = cljs.core.seq.call(null,io.pedestal.app.pre_process.call(null,flow,message));
var chunk__10757_10761 = null;
var count__10758_10762 = 0;
var i__10759_10763 = 0;
while(true){
if((i__10759_10763 < count__10758_10762))
{var message_10764__$1 = cljs.core._nth.call(null,chunk__10757_10761,i__10759_10763);
cljs.core.swap_BANG_.call(null,state,io.pedestal.app.transact_one,flow,message_10764__$1);
{
var G__10765 = seq__10756_10760;
var G__10766 = chunk__10757_10761;
var G__10767 = count__10758_10762;
var G__10768 = (i__10759_10763 + 1);
seq__10756_10760 = G__10765;
chunk__10757_10761 = G__10766;
count__10758_10762 = G__10767;
i__10759_10763 = G__10768;
continue;
}
} else
{var temp__4092__auto___10769 = cljs.core.seq.call(null,seq__10756_10760);
if(temp__4092__auto___10769)
{var seq__10756_10770__$1 = temp__4092__auto___10769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10756_10770__$1))
{var c__9781__auto___10771 = cljs.core.chunk_first.call(null,seq__10756_10770__$1);
{
var G__10772 = cljs.core.chunk_rest.call(null,seq__10756_10770__$1);
var G__10773 = c__9781__auto___10771;
var G__10774 = cljs.core.count.call(null,c__9781__auto___10771);
var G__10775 = 0;
seq__10756_10760 = G__10772;
chunk__10757_10761 = G__10773;
count__10758_10762 = G__10774;
i__10759_10763 = G__10775;
continue;
}
} else
{var message_10776__$1 = cljs.core.first.call(null,seq__10756_10770__$1);
cljs.core.swap_BANG_.call(null,state,io.pedestal.app.transact_one,flow,message_10776__$1);
{
var G__10777 = cljs.core.next.call(null,seq__10756_10770__$1);
var G__10778 = null;
var G__10779 = 0;
var G__10780 = 0;
seq__10756_10760 = G__10777;
chunk__10757_10761 = G__10778;
count__10758_10762 = G__10779;
i__10759_10763 = G__10780;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.swap_BANG_.call(null,state,io.pedestal.app.transact_one,flow,message);
}
return io.pedestal.app.util.platform.create_timeout.call(null,0,(function (){
return receive_input_message.call(null,state,flow,input_queue);
}));
}));
});
io.pedestal.app.post_process_effects = (function post_process_effects(flow,message){
var post_fn = cljs.core.some.call(null,(function (p__10783){
var vec__10784 = p__10783;
var pred = cljs.core.nth.call(null,vec__10784,0,null);
var f = cljs.core.nth.call(null,vec__10784,1,null);
if(cljs.core.truth_(pred.call(null,message)))
{return f;
} else
{return null;
}
}),(new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow)));
if(cljs.core.truth_(post_fn))
{return post_fn.call(null,message);
} else
{return cljs.core.PersistentVector.fromArray([message], true);
}
});
io.pedestal.app.continue_inputs = (function continue_inputs(app,flow,input_queue){
return cljs.core.add_watch.call(null,app,"\uFDD0:continue-inputs-watcher",(function (_,___$1,___$2,new_state){
var seq__10789 = cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0:continue-inputs")).call(null,new_state));
var chunk__10790 = null;
var count__10791 = 0;
var i__10792 = 0;
while(true){
if((i__10792 < count__10791))
{var message = cljs.core._nth.call(null,chunk__10790,i__10792);
io.pedestal.app.protocols.put_message.call(null,input_queue,message);
{
var G__10793 = seq__10789;
var G__10794 = chunk__10790;
var G__10795 = count__10791;
var G__10796 = (i__10792 + 1);
seq__10789 = G__10793;
chunk__10790 = G__10794;
count__10791 = G__10795;
i__10792 = G__10796;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10789);
if(temp__4092__auto__)
{var seq__10789__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10789__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__10789__$1);
{
var G__10797 = cljs.core.chunk_rest.call(null,seq__10789__$1);
var G__10798 = c__9781__auto__;
var G__10799 = cljs.core.count.call(null,c__9781__auto__);
var G__10800 = 0;
seq__10789 = G__10797;
chunk__10790 = G__10798;
count__10791 = G__10799;
i__10792 = G__10800;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__10789__$1);
io.pedestal.app.protocols.put_message.call(null,input_queue,message);
{
var G__10801 = cljs.core.next.call(null,seq__10789__$1);
var G__10802 = null;
var G__10803 = 0;
var G__10804 = 0;
seq__10789 = G__10801;
chunk__10790 = G__10802;
count__10791 = G__10803;
i__10792 = G__10804;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
io.pedestal.app.send_effects = (function send_effects(app,flow,output_queue){
return cljs.core.add_watch.call(null,app,"\uFDD0:effects-watcher",(function (_,___$1,___$2,new_state){
var seq__10817 = cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0:effect")).call(null,new_state));
var chunk__10818 = null;
var count__10819 = 0;
var i__10820 = 0;
while(true){
if((i__10820 < count__10819))
{var message = cljs.core._nth.call(null,chunk__10818,i__10820);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow))))
{var seq__10821_10829 = cljs.core.seq.call(null,io.pedestal.app.post_process_effects.call(null,flow,message));
var chunk__10822_10830 = null;
var count__10823_10831 = 0;
var i__10824_10832 = 0;
while(true){
if((i__10824_10832 < count__10823_10831))
{var message_10833__$1 = cljs.core._nth.call(null,chunk__10822_10830,i__10824_10832);
io.pedestal.app.protocols.put_message.call(null,output_queue,message_10833__$1);
{
var G__10834 = seq__10821_10829;
var G__10835 = chunk__10822_10830;
var G__10836 = count__10823_10831;
var G__10837 = (i__10824_10832 + 1);
seq__10821_10829 = G__10834;
chunk__10822_10830 = G__10835;
count__10823_10831 = G__10836;
i__10824_10832 = G__10837;
continue;
}
} else
{var temp__4092__auto___10838 = cljs.core.seq.call(null,seq__10821_10829);
if(temp__4092__auto___10838)
{var seq__10821_10839__$1 = temp__4092__auto___10838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10821_10839__$1))
{var c__9781__auto___10840 = cljs.core.chunk_first.call(null,seq__10821_10839__$1);
{
var G__10841 = cljs.core.chunk_rest.call(null,seq__10821_10839__$1);
var G__10842 = c__9781__auto___10840;
var G__10843 = cljs.core.count.call(null,c__9781__auto___10840);
var G__10844 = 0;
seq__10821_10829 = G__10841;
chunk__10822_10830 = G__10842;
count__10823_10831 = G__10843;
i__10824_10832 = G__10844;
continue;
}
} else
{var message_10845__$1 = cljs.core.first.call(null,seq__10821_10839__$1);
io.pedestal.app.protocols.put_message.call(null,output_queue,message_10845__$1);
{
var G__10846 = cljs.core.next.call(null,seq__10821_10839__$1);
var G__10847 = null;
var G__10848 = 0;
var G__10849 = 0;
seq__10821_10829 = G__10846;
chunk__10822_10830 = G__10847;
count__10823_10831 = G__10848;
i__10824_10832 = G__10849;
continue;
}
}
} else
{}
}
break;
}
} else
{io.pedestal.app.protocols.put_message.call(null,output_queue,message);
}
{
var G__10850 = seq__10817;
var G__10851 = chunk__10818;
var G__10852 = count__10819;
var G__10853 = (i__10820 + 1);
seq__10817 = G__10850;
chunk__10818 = G__10851;
count__10819 = G__10852;
i__10820 = G__10853;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10817);
if(temp__4092__auto__)
{var seq__10817__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10817__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__10817__$1);
{
var G__10854 = cljs.core.chunk_rest.call(null,seq__10817__$1);
var G__10855 = c__9781__auto__;
var G__10856 = cljs.core.count.call(null,c__9781__auto__);
var G__10857 = 0;
seq__10817 = G__10854;
chunk__10818 = G__10855;
count__10819 = G__10856;
i__10820 = G__10857;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__10817__$1);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow))))
{var seq__10825_10858 = cljs.core.seq.call(null,io.pedestal.app.post_process_effects.call(null,flow,message));
var chunk__10826_10859 = null;
var count__10827_10860 = 0;
var i__10828_10861 = 0;
while(true){
if((i__10828_10861 < count__10827_10860))
{var message_10862__$1 = cljs.core._nth.call(null,chunk__10826_10859,i__10828_10861);
io.pedestal.app.protocols.put_message.call(null,output_queue,message_10862__$1);
{
var G__10863 = seq__10825_10858;
var G__10864 = chunk__10826_10859;
var G__10865 = count__10827_10860;
var G__10866 = (i__10828_10861 + 1);
seq__10825_10858 = G__10863;
chunk__10826_10859 = G__10864;
count__10827_10860 = G__10865;
i__10828_10861 = G__10866;
continue;
}
} else
{var temp__4092__auto___10867__$1 = cljs.core.seq.call(null,seq__10825_10858);
if(temp__4092__auto___10867__$1)
{var seq__10825_10868__$1 = temp__4092__auto___10867__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10825_10868__$1))
{var c__9781__auto___10869 = cljs.core.chunk_first.call(null,seq__10825_10868__$1);
{
var G__10870 = cljs.core.chunk_rest.call(null,seq__10825_10868__$1);
var G__10871 = c__9781__auto___10869;
var G__10872 = cljs.core.count.call(null,c__9781__auto___10869);
var G__10873 = 0;
seq__10825_10858 = G__10870;
chunk__10826_10859 = G__10871;
count__10827_10860 = G__10872;
i__10828_10861 = G__10873;
continue;
}
} else
{var message_10874__$1 = cljs.core.first.call(null,seq__10825_10868__$1);
io.pedestal.app.protocols.put_message.call(null,output_queue,message_10874__$1);
{
var G__10875 = cljs.core.next.call(null,seq__10825_10868__$1);
var G__10876 = null;
var G__10877 = 0;
var G__10878 = 0;
seq__10825_10858 = G__10875;
chunk__10826_10859 = G__10876;
count__10827_10860 = G__10877;
i__10828_10861 = G__10878;
continue;
}
}
} else
{}
}
break;
}
} else
{io.pedestal.app.protocols.put_message.call(null,output_queue,message);
}
{
var G__10879 = cljs.core.next.call(null,seq__10817__$1);
var G__10880 = null;
var G__10881 = 0;
var G__10882 = 0;
seq__10817 = G__10879;
chunk__10818 = G__10880;
count__10819 = G__10881;
i__10820 = G__10882;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
io.pedestal.app.post_process_deltas = (function post_process_deltas(flow,deltas){
var post_processors = (new cljs.core.Keyword("\uFDD0:app-model")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow));
return cljs.core.reduce.call(null,(function (acc,p__10885){
var vec__10886 = p__10885;
var op = cljs.core.nth.call(null,vec__10886,0,null);
var path = cljs.core.nth.call(null,vec__10886,1,null);
var delta = vec__10886;
var temp__4090__auto__ = io.pedestal.app.dataflow.find_message_transformer.call(null,post_processors,path,op);
if(cljs.core.truth_(temp__4090__auto__))
{var post_fn = temp__4090__auto__;
return cljs.core.into.call(null,acc,post_fn.call(null,delta));
} else
{return cljs.core.conj.call(null,acc,delta);
}
}),cljs.core.PersistentVector.EMPTY,deltas);
});
io.pedestal.app.send_app_model_deltas = (function send_app_model_deltas(app,flow,app_model_queue){
return cljs.core.add_watch.call(null,app,"\uFDD0:app-model-delta-watcher",(function (_,___$1,old_state,new_state){
var deltas = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/emitter-deltas")).call(null,new_state);
if(!((function (){var or__3943__auto__ = cljs.core.empty_QMARK_.call(null,deltas);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0:io.pedestal.app/emitter-deltas")).call(null,old_state),deltas);
}
})()))
{var deltas__$1 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:app-model")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow)))?io.pedestal.app.post_process_deltas.call(null,flow,deltas):deltas);
return io.pedestal.app.protocols.put_message.call(null,app_model_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:deltas","\uFDD0:deltas",deltas__$1], true));
} else
{return null;
}
}));
});
io.pedestal.app.ensure_default_emitter = (function ensure_default_emitter(emit){
if(cljs.core.empty_QMARK_.call(null,emit))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:*"], true),null], true),io.pedestal.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY)], true)], true);
} else
{return emit;
}
});
io.pedestal.app.ensure_input_adapter = (function ensure_input_adapter(input_adapter){
if(cljs.core.not.call(null,input_adapter))
{return (function (m){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",io.pedestal.app.messages.type.call(null,m),"\uFDD0:out",io.pedestal.app.messages.topic.call(null,m)], true);
});
} else
{return input_adapter;
}
});
io.pedestal.app.rekey_transforms = (function rekey_transforms(transforms){
return cljs.core.mapv.call(null,(function (p1__10887_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__10887_SHARP_))
{return clojure.set.rename_keys.call(null,p1__10887_SHARP_,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:key",io.pedestal.app.messages.topic,"\uFDD0:out"], true));
} else
{return p1__10887_SHARP_;
}
}),transforms);
});
io.pedestal.app.standardize_pre_if_exists = (function standardize_pre_if_exists(description){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:pre")).call(null,description)))
{return cljs.core.update_in.call(null,description,cljs.core.PersistentVector.fromArray(["\uFDD0:pre"], true),io.pedestal.app.dataflow.transform_maps);
} else
{return description;
}
});
io.pedestal.app.standardize_post_app_model_if_exists = (function standardize_post_app_model_if_exists(description){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:app-model")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,description))))
{return cljs.core.update_in.call(null,description,cljs.core.PersistentVector.fromArray(["\uFDD0:post","\uFDD0:app-model"], true),io.pedestal.app.dataflow.transform_maps);
} else
{return description;
}
});
io.pedestal.app.create_start_messages = (function create_start_messages(focus){
return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__10892){
var vec__10893 = p__10892;
var name = cljs.core.nth.call(null,vec__10893,0,null);
var paths = cljs.core.nth.call(null,vec__10893,1,null);
return cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:add-named-paths","\uFDD0:paths",paths,"\uFDD0:name",name], true);
}),cljs.core.remove.call(null,(function (p__10894){
var vec__10895 = p__10894;
var k = cljs.core.nth.call(null,vec__10895,0,null);
var v = cljs.core.nth.call(null,vec__10895,1,null);
return cljs.core._EQ_.call(null,k,"\uFDD0:default");
}),focus)),(function (){var temp__4092__auto__ = (new cljs.core.Keyword("\uFDD0:default")).call(null,focus);
if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:navigate","\uFDD0:name",n], true)], true);
} else
{return null;
}
})());
});
io.pedestal.app.begin = (function() {
var begin = null;
var begin__1 = (function (app){
return begin.call(null,app,null);
});
var begin__2 = (function (app,start_messages){
var map__10901 = app;
var map__10901__$1 = ((cljs.core.seq_QMARK_.call(null,map__10901))?cljs.core.apply.call(null,cljs.core.hash_map,map__10901):map__10901);
var default_emitter = cljs.core.get.call(null,map__10901__$1,"\uFDD0:default-emitter");
var dataflow = cljs.core.get.call(null,map__10901__$1,"\uFDD0:dataflow");
var description = cljs.core.get.call(null,map__10901__$1,"\uFDD0:description");
var start_messages__$1 = (cljs.core.truth_(start_messages)?start_messages:(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:focus")).call(null,description))?io.pedestal.app.create_start_messages.call(null,(new cljs.core.Keyword("\uFDD0:focus")).call(null,description)):(("\uFDD0:else")?cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:subscribe","\uFDD0:paths",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true)], true)], true):null)));
var init_messages = cljs.core.vec.call(null,cljs.core.mapcat.call(null,"\uFDD0:init",(new cljs.core.Keyword("\uFDD0:transform")).call(null,description)));
var seq__10902 = cljs.core.seq.call(null,cljs.core.concat.call(null,start_messages__$1,init_messages));
var chunk__10903 = null;
var count__10904 = 0;
var i__10905 = 0;
while(true){
if((i__10905 < count__10904))
{var message = cljs.core._nth.call(null,chunk__10903,i__10905);
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10906 = seq__10902;
var G__10907 = chunk__10903;
var G__10908 = count__10904;
var G__10909 = (i__10905 + 1);
seq__10902 = G__10906;
chunk__10903 = G__10907;
count__10904 = G__10908;
i__10905 = G__10909;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10902);
if(temp__4092__auto__)
{var seq__10902__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10902__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__10902__$1);
{
var G__10910 = cljs.core.chunk_rest.call(null,seq__10902__$1);
var G__10911 = c__9781__auto__;
var G__10912 = cljs.core.count.call(null,c__9781__auto__);
var G__10913 = 0;
seq__10902 = G__10910;
chunk__10903 = G__10911;
count__10904 = G__10912;
i__10905 = G__10913;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__10902__$1);
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10914 = cljs.core.next.call(null,seq__10902__$1);
var G__10915 = null;
var G__10916 = 0;
var G__10917 = 0;
seq__10902 = G__10914;
chunk__10903 = G__10915;
count__10904 = G__10916;
i__10905 = G__10917;
continue;
}
}
} else
{return null;
}
}
break;
}
});
begin = function(app,start_messages){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,start_messages);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
io.pedestal.app.consume_output_queue = (function consume_output_queue(out_queue,in_queue,services_fn){
return io.pedestal.app.protocols.take_message.call(null,out_queue,(function (message){
services_fn.call(null,message,in_queue);
return consume_output_queue.call(null,out_queue,in_queue,services_fn);
}));
});
io.pedestal.app.consume_output = (function consume_output(app,services_fn){
return io.pedestal.app.consume_output_queue.call(null,(new cljs.core.Keyword("\uFDD0:output")).call(null,app),(new cljs.core.Keyword("\uFDD0:input")).call(null,app),services_fn);
});
io.pedestal.app.consume_effects = (function consume_effects(app,services_fn){
return io.pedestal.app.consume_output.call(null,app,services_fn);
});
io.pedestal.app.run_BANG_ = (function run_BANG_(app,script){
if((function (){var or__3943__auto__ = cljs.core.vector_QMARK_.call(null,script);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.list_QMARK_.call(null,script);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The passed script must be a vector or list"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-1302740715,null),new cljs.core.Symbol(null,"script","script",1746750084,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1537549030,null),new cljs.core.Symbol(null,"script","script",1746750084,null)))))].join('')));
}
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,script))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Each element of the passed script must be a map"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"script","script",1746750084,null))))].join('')));
}
var seq__10922 = cljs.core.seq.call(null,script);
var chunk__10923 = null;
var count__10924 = 0;
var i__10925 = 0;
while(true){
if((i__10925 < count__10924))
{var message = cljs.core._nth.call(null,chunk__10923,i__10925);
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10926 = seq__10922;
var G__10927 = chunk__10923;
var G__10928 = count__10924;
var G__10929 = (i__10925 + 1);
seq__10922 = G__10926;
chunk__10923 = G__10927;
count__10924 = G__10928;
i__10925 = G__10929;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10922);
if(temp__4092__auto__)
{var seq__10922__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10922__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__10922__$1);
{
var G__10930 = cljs.core.chunk_rest.call(null,seq__10922__$1);
var G__10931 = c__9781__auto__;
var G__10932 = cljs.core.count.call(null,c__9781__auto__);
var G__10933 = 0;
seq__10922 = G__10930;
chunk__10923 = G__10931;
count__10924 = G__10932;
i__10925 = G__10933;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__10922__$1);
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10934 = cljs.core.next.call(null,seq__10922__$1);
var G__10935 = null;
var G__10936 = 0;
var G__10937 = 0;
seq__10922 = G__10934;
chunk__10923 = G__10935;
count__10924 = G__10936;
i__10925 = G__10937;
continue;
}
}
} else
{return null;
}
}
break;
}
});
io.pedestal.app.adapt_description = (function (){var method_table__9838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9842__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("adapt-description",(function (description){
return (new cljs.core.Keyword("\uFDD0:version")).call(null,description);
}),"\uFDD0:default",hierarchy__9842__auto__,method_table__9838__auto__,prefer_table__9839__auto__,method_cache__9840__auto__,cached_hierarchy__9841__auto__));
})();
cljs.core._add_method.call(null,io.pedestal.app.adapt_description,2,(function (description){
return description;
}));
cljs.core._add_method.call(null,io.pedestal.app.adapt_description,1,(function (description){
return io.pedestal.app.util.adapters.adapt_v1_to_v2.call(null,description);
}));
cljs.core._add_method.call(null,io.pedestal.app.adapt_description,"\uFDD0:default",(function (description){
io.pedestal.app.util.log.warn.call(null,"\uFDD0:adapt-description",[cljs.core.str("WARNING!! Converting dataflow description from version 1 to 2.")].join(''));
return io.pedestal.app.util.adapters.adapt_v1_to_v2.call(null,description);
}));
io.pedestal.app.build = (function build(description){
var app_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-model",cljs.core.PersistentArrayMap.EMPTY], true));
var description__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,io.pedestal.app.standardize_post_app_model_if_exists.call(null,io.pedestal.app.standardize_pre_if_exists.call(null,io.pedestal.app.adapt_description.call(null,description))),cljs.core.PersistentVector.fromArray(["\uFDD0:emit"], true),io.pedestal.app.ensure_default_emitter),cljs.core.PersistentVector.fromArray(["\uFDD0:input-adapter"], true),io.pedestal.app.ensure_input_adapter),cljs.core.PersistentVector.fromArray(["\uFDD0:transform"], true),io.pedestal.app.rekey_transforms);
var dataflow = io.pedestal.app.dataflow.build.call(null,description__$1);
var input_queue = io.pedestal.app.queue.queue.call(null,"\uFDD0:input");
var output_queue = io.pedestal.app.queue.queue.call(null,"\uFDD0:output");
var app_model_queue = io.pedestal.app.queue.queue.call(null,"\uFDD0:app-model");
io.pedestal.app.receive_input_message.call(null,app_atom,dataflow,input_queue);
io.pedestal.app.send_effects.call(null,app_atom,dataflow,output_queue);
io.pedestal.app.continue_inputs.call(null,app_atom,dataflow,input_queue);
io.pedestal.app.send_app_model_deltas.call(null,app_atom,dataflow,app_model_queue);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:state",app_atom,"\uFDD0:description",description__$1,"\uFDD0:dataflow",dataflow,"\uFDD0:input",input_queue,"\uFDD0:output",output_queue,"\uFDD0:app-model",app_model_queue], true);
});
