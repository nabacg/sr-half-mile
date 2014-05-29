goog.provide('io.pedestal.app.dataflow');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.data.tracking_map');
/**
* Return true if the two elements match.
*/
io.pedestal.app.dataflow.matching_path_element_QMARK_ = (function matching_path_element_QMARK_(a,b){
var or__3943__auto__ = cljs.core._EQ_.call(null,a,b);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core._EQ_.call(null,a,"\uFDD0:*");
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljs.core._EQ_.call(null,b,"\uFDD0:*");
}
}
});
/**
* Return true if the two paths match.
*/
io.pedestal.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path_a,path_b){
var and__3941__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,path_a),cljs.core.count.call(null,path_b));
if(and__3941__auto__)
{return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (a,b){
return io.pedestal.app.dataflow.matching_path_element_QMARK_.call(null,a,b);
}),path_a,path_b));
} else
{return and__3941__auto__;
}
});
/**
* Return true if one path could be the parent of the other.
*/
io.pedestal.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){
var vec__10211 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?cljs.core.PersistentVector.fromArray([path_a,path_b], true):cljs.core.PersistentVector.fromArray([path_b,path_a], true));
var small = cljs.core.nth.call(null,vec__10211,0,null);
var large = cljs.core.nth.call(null,vec__10211,1,null);
return io.pedestal.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.take.call(null,cljs.core.count.call(null,small),large));
});
/**
* Returns a sequence of [path value] tuples
*/
io.pedestal.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){
return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__10213){
var vec__10215 = p__10213;
var x = cljs.core.nth.call(null,vec__10215,0,null);
var xs = cljs.core.nthnext.call(null,vec__10215,1);
if(cljs.core.truth_((function (){var and__3941__auto__ = x;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not_EQ_.call(null,data,"\uFDD0:io.pedestal.app.dataflow/nokey");
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,"\uFDD0:*"))
{return cljs.core.mapcat.call(null,(function (p1__10212_SHARP_){
return get_path.call(null,cljs.core.get.call(null,data,p1__10212_SHARP_),cljs.core.conj.call(null,context,p1__10212_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,"\uFDD0:io.pedestal.app.dataflow/nokey"),cljs.core.conj.call(null,context,x),xs);
}
} else
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([context,data], true)], true);
}
});
get_path = function(data,context,p__10213){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__10213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_path.cljs$core$IFn$_invoke$arity$2 = get_path__2;
get_path.cljs$core$IFn$_invoke$arity$3 = get_path__3;
return get_path;
})()
;
var rekey = (function rekey(k,path,arg_names){
if(cljs.core.truth_(arg_names))
{var new_key = cljs.core.get.call(null,arg_names,path);
if(cljs.core.keyword_QMARK_.call(null,new_key))
{return new_key;
} else
{return new_key.call(null,k);
}
} else
{return k;
}
});
var value_types = (function value_types(arg_names){
if(cljs.core.truth_(arg_names))
{return cljs.core.reduce.call(null,(function (a,p__10218){
var vec__10219 = p__10218;
var k = cljs.core.nth.call(null,vec__10219,0,null);
var v = cljs.core.nth.call(null,vec__10219,1,null);
if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),"\uFDD0:*"))
{return cljs.core.assoc.call(null,a,v,"\uFDD0:seq");
} else
{if(cljs.core.contains_QMARK_.call(null,a,v))
{return cljs.core.assoc.call(null,a,v,"\uFDD0:seq");
} else
{if((cljs.core.get.call(null,a,v) == null))
{return cljs.core.assoc.call(null,a,v,"\uFDD0:single");
} else
{if("\uFDD0:else")
{return a;
} else
{return null;
}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,arg_names);
} else
{return cljs.core.constantly.call(null,"\uFDD0:single");
}
});
io.pedestal.app.dataflow.input_map = (function() {
var input_map = null;
var input_map__1 = (function (inputs){
return input_map.call(null,inputs,null);
});
var input_map__2 = (function (p__10220,arg_names){
var map__10238 = p__10220;
var map__10238__$1 = ((cljs.core.seq_QMARK_.call(null,map__10238))?cljs.core.apply.call(null,cljs.core.hash_map,map__10238):map__10238);
var input_paths = cljs.core.get.call(null,map__10238__$1,"\uFDD0:input-paths");
var new_model = cljs.core.get.call(null,map__10238__$1,"\uFDD0:new-model");
var v_type = value_types.call(null,arg_names);
return cljs.core.reduce.call(null,(function (a,p__10239){
var vec__10240 = p__10239;
var k = cljs.core.nth.call(null,vec__10240,0,null);
var v = cljs.core.nth.call(null,vec__10240,1,null);
if(cljs.core._EQ_.call(null,v_type.call(null,k),"\uFDD0:seq"))
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([k], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9750__auto__ = (function iter__10241(s__10242){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10242__$1 = s__10242;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10242__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first.call(null,xs__4579__auto__);
var iterys__9746__auto__ = ((function (s__10242__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__10243(s__10244){
return (new cljs.core.LazySeq(null,false,((function (s__10242__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10244__$1 = s__10244;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10244__$1);
if(temp__4092__auto____$1)
{var s__10244__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10244__$2))
{var c__9748__auto__ = cljs.core.chunk_first.call(null,s__10244__$2);
var size__9749__auto__ = cljs.core.count.call(null,c__9748__auto__);
var b__10246 = cljs.core.chunk_buffer.call(null,size__9749__auto__);
if((function (){var i__10245 = 0;
while(true){
if((i__10245 < size__9749__auto__))
{var vec__10253 = cljs.core._nth.call(null,c__9748__auto__,i__10245);
var k = cljs.core.nth.call(null,vec__10253,0,null);
var v = cljs.core.nth.call(null,vec__10253,1,null);
if(cljs.core.not_EQ_.call(null,v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{cljs.core.chunk_append.call(null,b__10246,cljs.core.PersistentVector.fromArray([rekey.call(null,k,path,arg_names),v], true));
{
var G__10255 = (i__10245 + 1);
i__10245 = G__10255;
continue;
}
} else
{{
var G__10256 = (i__10245 + 1);
i__10245 = G__10256;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10246),iter__10243.call(null,cljs.core.chunk_rest.call(null,s__10244__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10246),null);
}
} else
{var vec__10254 = cljs.core.first.call(null,s__10244__$2);
var k = cljs.core.nth.call(null,vec__10254,0,null);
var v = cljs.core.nth.call(null,vec__10254,1,null);
if(cljs.core.not_EQ_.call(null,v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([rekey.call(null,k,path,arg_names),v], true),iter__10243.call(null,cljs.core.rest.call(null,s__10244__$2)));
} else
{{
var G__10257 = cljs.core.rest.call(null,s__10244__$2);
s__10244__$1 = G__10257;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__10242__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10242__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9747__auto__ = cljs.core.seq.call(null,iterys__9746__auto__.call(null,io.pedestal.app.dataflow.get_path.call(null,new_model,path)));
if(fs__9747__auto__)
{return cljs.core.concat.call(null,fs__9747__auto__,iter__10241.call(null,cljs.core.rest.call(null,s__10242__$1)));
} else
{{
var G__10258 = cljs.core.rest.call(null,s__10242__$1);
s__10242__$1 = G__10258;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9750__auto__.call(null,input_paths);
})());
});
input_map = function(p__10220,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__10220);
case 2:
return input_map__2.call(this,p__10220,arg_names);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
input_map.cljs$core$IFn$_invoke$arity$1 = input_map__1;
input_map.cljs$core$IFn$_invoke$arity$2 = input_map__2;
return input_map;
})()
;
io.pedestal.app.dataflow.input_vals = (function input_vals(inputs){
return cljs.core.vals.call(null,io.pedestal.app.dataflow.input_map.call(null,inputs));
});
io.pedestal.app.dataflow.single_val = (function single_val(inputs){
var m = io.pedestal.app.dataflow.input_map.call(null,inputs);
if((1 >= cljs.core.count.call(null,m)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("input is expected to have 0 or 1 values"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">=",">=",-1640529544,null),1,cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)))))].join('')));
}
return cljs.core.first.call(null,cljs.core.vals.call(null,m));
});
io.pedestal.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){
var vec__10274 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);
var model = cljs.core.nth.call(null,vec__10274,0,null);
var change_paths = cljs.core.nth.call(null,vec__10274,1,null);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9750__auto__ = (function iter__10275(s__10276){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10276__$1 = s__10276;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10276__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first.call(null,xs__4579__auto__);
var iterys__9746__auto__ = ((function (s__10276__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__10277(s__10278){
return (new cljs.core.LazySeq(null,false,((function (s__10276__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10278__$1 = s__10278;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10278__$1);
if(temp__4092__auto____$1)
{var s__10278__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10278__$2))
{var c__9748__auto__ = cljs.core.chunk_first.call(null,s__10278__$2);
var size__9749__auto__ = cljs.core.count.call(null,c__9748__auto__);
var b__10280 = cljs.core.chunk_buffer.call(null,size__9749__auto__);
if((function (){var i__10279 = 0;
while(true){
if((i__10279 < size__9749__auto__))
{var vec__10287 = cljs.core._nth.call(null,c__9748__auto__,i__10279);
var k = cljs.core.nth.call(null,vec__10287,0,null);
var v = cljs.core.nth.call(null,vec__10287,1,null);
if(cljs.core.not_EQ_.call(null,v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{cljs.core.chunk_append.call(null,b__10280,cljs.core.PersistentVector.fromArray([k,v], true));
{
var G__10289 = (i__10279 + 1);
i__10279 = G__10289;
continue;
}
} else
{{
var G__10290 = (i__10279 + 1);
i__10279 = G__10290;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10280),iter__10277.call(null,cljs.core.chunk_rest.call(null,s__10278__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10280),null);
}
} else
{var vec__10288 = cljs.core.first.call(null,s__10278__$2);
var k = cljs.core.nth.call(null,vec__10288,0,null);
var v = cljs.core.nth.call(null,vec__10288,1,null);
if(cljs.core.not_EQ_.call(null,v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),iter__10277.call(null,cljs.core.rest.call(null,s__10278__$2)));
} else
{{
var G__10291 = cljs.core.rest.call(null,s__10278__$2);
s__10278__$1 = G__10291;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__10276__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10276__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9747__auto__ = cljs.core.seq.call(null,iterys__9746__auto__.call(null,io.pedestal.app.dataflow.get_path.call(null,model,path)));
if(fs__9747__auto__)
{return cljs.core.concat.call(null,fs__9747__auto__,iter__10275.call(null,cljs.core.rest.call(null,s__10276__$1)));
} else
{{
var G__10292 = cljs.core.rest.call(null,s__10276__$1);
s__10276__$1 = G__10292;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9750__auto__.call(null,change_paths);
})());
});
io.pedestal.app.dataflow.updated_map = (function updated_map(inputs){
return io.pedestal.app.dataflow.change_map.call(null,inputs,"\uFDD0:new-model","\uFDD0:updated");
});
io.pedestal.app.dataflow.added_map = (function added_map(inputs){
return io.pedestal.app.dataflow.change_map.call(null,inputs,"\uFDD0:new-model","\uFDD0:added");
});
io.pedestal.app.dataflow.removed_map = (function removed_map(inputs){
return io.pedestal.app.dataflow.change_map.call(null,inputs,"\uFDD0:old-model","\uFDD0:removed");
});
io.pedestal.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){
var input_m = io.pedestal.app.dataflow.input_map.call(null,inputs);
var changed = cljs.core.keys.call(null,f.call(null,inputs));
return cljs.core.reduce.call(null,(function (a,p__10296){
var vec__10297 = p__10296;
var k = cljs.core.nth.call(null,vec__10297,0,null);
var v = cljs.core.nth.call(null,vec__10297,1,null);
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10293_SHARP_){
return io.pedestal.app.dataflow.descendant_QMARK_.call(null,k,p1__10293_SHARP_);
}),changed)))
{return cljs.core.assoc.call(null,a,k,v);
} else
{return a;
}
}),cljs.core.PersistentArrayMap.EMPTY,input_m);
});
io.pedestal.app.dataflow.added_inputs = (function added_inputs(inputs){
return io.pedestal.app.dataflow.changed_inputs.call(null,inputs,io.pedestal.app.dataflow.added_map);
});
io.pedestal.app.dataflow.updated_inputs = (function updated_inputs(inputs){
return io.pedestal.app.dataflow.changed_inputs.call(null,inputs,io.pedestal.app.dataflow.updated_map);
});
io.pedestal.app.dataflow.old_and_new = (function old_and_new(inputs,path){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:old",cljs.core.get_in.call(null,inputs,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model"], true),path)),"\uFDD0:new",cljs.core.get_in.call(null,inputs,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path))], true);
});
var actual_input_paths = (function actual_input_paths(p__10299){
var map__10315 = p__10299;
var map__10315__$1 = ((cljs.core.seq_QMARK_.call(null,map__10315))?cljs.core.apply.call(null,cljs.core.hash_map,map__10315):map__10315);
var input_paths = cljs.core.get.call(null,map__10315__$1,"\uFDD0:input-paths");
var old_model = cljs.core.get.call(null,map__10315__$1,"\uFDD0:old-model");
var iter__9750__auto__ = (function iter__10316(s__10317){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10317__$1 = s__10317;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10317__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first.call(null,xs__4579__auto__);
var iterys__9746__auto__ = ((function (s__10317__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__10318(s__10319){
return (new cljs.core.LazySeq(null,false,((function (s__10317__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10319__$1 = s__10319;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10319__$1);
if(temp__4092__auto____$1)
{var s__10319__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10319__$2))
{var c__9748__auto__ = cljs.core.chunk_first.call(null,s__10319__$2);
var size__9749__auto__ = cljs.core.count.call(null,c__9748__auto__);
var b__10321 = cljs.core.chunk_buffer.call(null,size__9749__auto__);
if((function (){var i__10320 = 0;
while(true){
if((i__10320 < size__9749__auto__))
{var vec__10328 = cljs.core._nth.call(null,c__9748__auto__,i__10320);
var k = cljs.core.nth.call(null,vec__10328,0,null);
var v = cljs.core.nth.call(null,vec__10328,1,null);
cljs.core.chunk_append.call(null,b__10321,k);
{
var G__10330 = (i__10320 + 1);
i__10320 = G__10330;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10321),iter__10318.call(null,cljs.core.chunk_rest.call(null,s__10319__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10321),null);
}
} else
{var vec__10329 = cljs.core.first.call(null,s__10319__$2);
var k = cljs.core.nth.call(null,vec__10329,0,null);
var v = cljs.core.nth.call(null,vec__10329,1,null);
return cljs.core.cons.call(null,k,iter__10318.call(null,cljs.core.rest.call(null,s__10319__$2)));
}
} else
{return null;
}
break;
}
});})(s__10317__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10317__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9747__auto__ = cljs.core.seq.call(null,iterys__9746__auto__.call(null,io.pedestal.app.dataflow.get_path.call(null,old_model,path)));
if(fs__9747__auto__)
{return cljs.core.concat.call(null,fs__9747__auto__,iter__10316.call(null,cljs.core.rest.call(null,s__10317__$1)));
} else
{{
var G__10331 = cljs.core.rest.call(null,s__10317__$1);
s__10317__$1 = G__10331;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9750__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){
return cljs.core.reduce.call(null,(function (acc,path){
return cljs.core.reduce.call(null,(function (a,cp){
return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__10298_SHARP_){
return io.pedestal.app.dataflow.descendant_QMARK_.call(null,path,p1__10298_SHARP_);
}),changed_paths));
}),cljs.core.PersistentArrayMap.EMPTY,input_paths);
});
io.pedestal.app.dataflow.removed_inputs = (function removed_inputs(inputs){
var paths = actual_input_paths.call(null,inputs);
return cljs.core.into.call(null,removed.call(null,paths,cljs.core.keys.call(null,io.pedestal.app.dataflow.removed_map.call(null,inputs)),(function (m,path,changed_path){
if((cljs.core.count.call(null,changed_path) <= cljs.core.count.call(null,path)))
{return cljs.core.assoc.call(null,m,path,"\uFDD0:io.pedestal.app.dataflow/removed");
} else
{return cljs.core.assoc.call(null,m,path,cljs.core.get_in.call(null,inputs,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path)));
}
})),removed.call(null,paths,cljs.core.keys.call(null,io.pedestal.app.dataflow.updated_map.call(null,inputs)),(function (m,path,changed_path){
if((cljs.core.count.call(null,changed_path) < cljs.core.count.call(null,path)))
{var new_m = (new cljs.core.Keyword("\uFDD0:new-model")).call(null,inputs);
var parent = cljs.core.butlast.call(null,path);
var k = cljs.core.last.call(null,path);
var parent_m = ((cljs.core.seq.call(null,parent))?cljs.core.get_in.call(null,new_m,parent):new_m);
if(cljs.core.contains_QMARK_.call(null,parent_m,k))
{return cljs.core.assoc.call(null,m,path,cljs.core.get_in.call(null,inputs,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path)));
} else
{return cljs.core.assoc.call(null,m,path,"\uFDD0:io.pedestal.app.dataflow/removed");
}
} else
{return m;
}
})));
});
/**
* Perform a topological sort of the provided graph.
*/
io.pedestal.app.dataflow.topo_visit = (function topo_visit(graph,node){
var n = cljs.core.get.call(null,graph,node);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:visited")).call(null,n)))
{return graph;
} else
{var graph__$1 = cljs.core.assoc_in.call(null,graph,cljs.core.PersistentVector.fromArray([node,"\uFDD0:visited"], true),true);
var graph__$2 = cljs.core.reduce.call(null,topo_visit,graph__$1,(new cljs.core.Keyword("\uFDD0:deps")).call(null,n));
return cljs.core.assoc.call(null,graph__$2,"\uFDD0:io.pedestal.app.dataflow/order",cljs.core.conj.call(null,(new cljs.core.Keyword("\uFDD0:io.pedestal.app.dataflow/order")).call(null,graph__$2),node));
}
});
/**
* Return a sorted sequence of derive function configurations.
*/
io.pedestal.app.dataflow.sort_derive_fns = (function sort_derive_fns(derive_fns){
var derive_fns__$1 = cljs.core.map.call(null,(function (p1__10332_SHARP_){
return cljs.core.assoc.call(null,p1__10332_SHARP_,"\uFDD0:id",cljs.core.gensym.call(null));
}),derive_fns);
var index = cljs.core.reduce.call(null,((function (derive_fns__$1){
return (function (a,x){
return cljs.core.assoc.call(null,a,(new cljs.core.Keyword("\uFDD0:id")).call(null,x),x);
});})(derive_fns__$1))
,cljs.core.PersistentArrayMap.EMPTY,derive_fns__$1);
var deps = (function (){var iter__9750__auto__ = ((function (derive_fns__$1,index){
return (function iter__10345(s__10346){
return (new cljs.core.LazySeq(null,false,((function (derive_fns__$1,index){
return (function (){
var s__10346__$1 = s__10346;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10346__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var map__10352 = cljs.core.first.call(null,xs__4579__auto__);
var map__10352__$1 = ((cljs.core.seq_QMARK_.call(null,map__10352))?cljs.core.apply.call(null,cljs.core.hash_map,map__10352):map__10352);
var id = cljs.core.get.call(null,map__10352__$1,"\uFDD0:id");
var out = cljs.core.get.call(null,map__10352__$1,"\uFDD0:out");
var in$ = cljs.core.get.call(null,map__10352__$1,"\uFDD0:in");
var iterys__9746__auto__ = ((function (s__10346__$1,map__10352,map__10352__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index){
return (function iter__10347(s__10348){
return (new cljs.core.LazySeq(null,false,((function (s__10346__$1,map__10352,map__10352__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index){
return (function (){
var s__10348__$1 = s__10348;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10348__$1);
if(temp__4092__auto____$1)
{var s__10348__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10348__$2))
{var c__9748__auto__ = cljs.core.chunk_first.call(null,s__10348__$2);
var size__9749__auto__ = cljs.core.count.call(null,c__9748__auto__);
var b__10350 = cljs.core.chunk_buffer.call(null,size__9749__auto__);
if((function (){var i__10349 = 0;
while(true){
if((i__10349 < size__9749__auto__))
{var i = cljs.core._nth.call(null,c__9748__auto__,i__10349);
cljs.core.chunk_append.call(null,b__10350,cljs.core.PersistentVector.fromArray([id,i,out], true));
{
var G__10357 = (i__10349 + 1);
i__10349 = G__10357;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10350),iter__10347.call(null,cljs.core.chunk_rest.call(null,s__10348__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10350),null);
}
} else
{var i = cljs.core.first.call(null,s__10348__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([id,i,out], true),iter__10347.call(null,cljs.core.rest.call(null,s__10348__$2)));
}
} else
{return null;
}
break;
}
});})(s__10346__$1,map__10352,map__10352__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index))
,null));
});})(s__10346__$1,map__10352,map__10352__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index))
;
var fs__9747__auto__ = cljs.core.seq.call(null,iterys__9746__auto__.call(null,in$));
if(fs__9747__auto__)
{return cljs.core.concat.call(null,fs__9747__auto__,iter__10345.call(null,cljs.core.rest.call(null,s__10346__$1)));
} else
{{
var G__10358 = cljs.core.rest.call(null,s__10346__$1);
s__10346__$1 = G__10358;
continue;
}
}
} else
{return null;
}
break;
}
});})(derive_fns__$1,index))
,null));
});})(derive_fns__$1,index))
;
return iter__9750__auto__.call(null,derive_fns__$1);
})();
var graph = cljs.core.reduce.call(null,((function (derive_fns__$1,index,deps){
return (function (a,p__10353){
var vec__10354 = p__10353;
var f = cljs.core.nth.call(null,vec__10354,0,null);
var _ = cljs.core.nth.call(null,vec__10354,1,null);
var out = cljs.core.nth.call(null,vec__10354,2,null);
return cljs.core.assoc.call(null,a,f,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:deps",cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (vec__10354,f,_,out,derive_fns__$1,index,deps){
return (function (p__10355){
var vec__10356 = p__10355;
var ___$1 = cljs.core.nth.call(null,vec__10356,0,null);
var in$ = cljs.core.nth.call(null,vec__10356,1,null);
return io.pedestal.app.dataflow.descendant_QMARK_.call(null,in$,out);
});})(vec__10354,f,_,out,derive_fns__$1,index,deps))
,deps)))], true));
});})(derive_fns__$1,index,deps))
,cljs.core.PersistentArrayMap.EMPTY,deps);
return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (a,b){
return cljs.core.conj.call(null,a,cljs.core.dissoc.call(null,cljs.core.get.call(null,index,b),"\uFDD0:id"));
}),cljs.core.PersistentVector.EMPTY,(new cljs.core.Keyword("\uFDD0:io.pedestal.app.dataflow/order")).call(null,cljs.core.reduce.call(null,io.pedestal.app.dataflow.topo_visit,cljs.core.assoc.call(null,graph,"\uFDD0:io.pedestal.app.dataflow/order",cljs.core.PersistentVector.EMPTY),cljs.core.keys.call(null,graph)))));
});
/**
* Given a transform configuration vector, find the first transform
* function which matches the given message.
*/
io.pedestal.app.dataflow.find_message_transformer = (function find_message_transformer(transforms,out_path,key){
var out_path__$1 = io.pedestal.app.util.platform.vec_unless_seqable.call(null,out_path);
return (new cljs.core.Keyword("\uFDD0:fn")).call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__10362){
var map__10363 = p__10362;
var map__10363__$1 = ((cljs.core.seq_QMARK_.call(null,map__10363))?cljs.core.apply.call(null,cljs.core.hash_map,map__10363):map__10363);
var op = cljs.core.get.call(null,map__10363__$1,"\uFDD0:key");
var path = cljs.core.get.call(null,map__10363__$1,"\uFDD0:out");
var vec__10364 = ((cljs.core._EQ_.call(null,cljs.core.last.call(null,path),"\uFDD0:**"))?(function (){var c = cljs.core.count.call(null,path);
return cljs.core.PersistentVector.fromArray([cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,(c - 1),path)),"\uFDD0:*"),cljs.core.vec.call(null,cljs.core.take.call(null,c,out_path__$1))], true);
})():cljs.core.PersistentVector.fromArray([path,out_path__$1], true));
var path__$1 = cljs.core.nth.call(null,vec__10364,0,null);
var out_path__$2 = cljs.core.nth.call(null,vec__10364,1,null);
var and__3941__auto__ = io.pedestal.app.dataflow.matching_path_element_QMARK_.call(null,op,key);
if(cljs.core.truth_(and__3941__auto__))
{return io.pedestal.app.dataflow.matching_path_QMARK_.call(null,path__$1,out_path__$2);
} else
{return and__3941__auto__;
}
}),transforms)));
});
io.pedestal.app.dataflow.merge_changes = (function merge_changes(old_changes,new_changes){
return cljs.core.merge_with.call(null,cljs.core.into,old_changes,new_changes);
});
io.pedestal.app.dataflow.update_flow_state = (function update_flow_state(state,tracking_map){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:data-model"], true),cljs.core.deref.call(null,tracking_map)),cljs.core.PersistentVector.fromArray(["\uFDD0:change"], true),io.pedestal.app.dataflow.merge_changes,io.pedestal.app.data.tracking_map.changes.call(null,tracking_map));
});
/**
* @param {...*} var_args
*/
io.pedestal.app.dataflow.track_update_in = (function() { 
var track_update_in__delegate = function (data_model,out_path,f,args){
return cljs.core.apply.call(null,cljs.core.update_in,io.pedestal.app.data.tracking_map.tracking_map.call(null,data_model),out_path,f,args);
};
var track_update_in = function (data_model,out_path,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return track_update_in__delegate.call(this, data_model, out_path, f, args);
};
track_update_in.cljs$lang$maxFixedArity = 3;
track_update_in.cljs$lang$applyTo = (function (arglist__10365){
var data_model = cljs.core.first(arglist__10365);
arglist__10365 = cljs.core.next(arglist__10365);
var out_path = cljs.core.first(arglist__10365);
arglist__10365 = cljs.core.next(arglist__10365);
var f = cljs.core.first(arglist__10365);
var args = cljs.core.rest(arglist__10365);
return track_update_in__delegate(data_model, out_path, f, args);
});
track_update_in.cljs$core$IFn$_invoke$arity$variadic = track_update_in__delegate;
return track_update_in;
})()
;
/**
* @param {...*} var_args
*/
io.pedestal.app.dataflow.apply_in = (function() { 
var apply_in__delegate = function (state,out_path,f,args){
var data_model = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:data-model"], true));
var new_data_model = cljs.core.apply.call(null,io.pedestal.app.dataflow.track_update_in,data_model,out_path,f,args);
return io.pedestal.app.dataflow.update_flow_state.call(null,state,new_data_model);
};
var apply_in = function (state,out_path,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return apply_in__delegate.call(this, state, out_path, f, args);
};
apply_in.cljs$lang$maxFixedArity = 3;
apply_in.cljs$lang$applyTo = (function (arglist__10366){
var state = cljs.core.first(arglist__10366);
arglist__10366 = cljs.core.next(arglist__10366);
var out_path = cljs.core.first(arglist__10366);
arglist__10366 = cljs.core.next(arglist__10366);
var f = cljs.core.first(arglist__10366);
var args = cljs.core.rest(arglist__10366);
return apply_in__delegate(state, out_path, f, args);
});
apply_in.cljs$core$IFn$_invoke$arity$variadic = apply_in__delegate;
return apply_in;
})()
;
/**
* Find the first transform function that matches the message and
* execute it, returning the updated flow state.
*/
io.pedestal.app.dataflow.transform_phase = (function transform_phase(p__10367){
var map__10370 = p__10367;
var map__10370__$1 = ((cljs.core.seq_QMARK_.call(null,map__10370))?cljs.core.apply.call(null,cljs.core.hash_map,map__10370):map__10370);
var state = map__10370__$1;
var context = cljs.core.get.call(null,map__10370__$1,"\uFDD0:context");
var dataflow = cljs.core.get.call(null,map__10370__$1,"\uFDD0:dataflow");
var new$ = cljs.core.get.call(null,map__10370__$1,"\uFDD0:new");
var map__10371 = (new cljs.core.Keyword("\uFDD0:input-adapter")).call(null,dataflow).call(null,(new cljs.core.Keyword("\uFDD0:message")).call(null,context));
var map__10371__$1 = ((cljs.core.seq_QMARK_.call(null,map__10371))?cljs.core.apply.call(null,cljs.core.hash_map,map__10371):map__10371);
var out_path = cljs.core.get.call(null,map__10371__$1,"\uFDD0:out");
var key = cljs.core.get.call(null,map__10371__$1,"\uFDD0:key");
var transform_fn = io.pedestal.app.dataflow.find_message_transformer.call(null,(new cljs.core.Keyword("\uFDD0:transform")).call(null,dataflow),out_path,key);
if(cljs.core.truth_(transform_fn))
{return io.pedestal.app.dataflow.apply_in.call(null,state,out_path,transform_fn,(new cljs.core.Keyword("\uFDD0:message")).call(null,context));
} else
{return state;
}
});
/**
* The default propagator predicate. Return true if any of the changed
* paths are on the same path as the input path.
*/
io.pedestal.app.dataflow.input_change_propagator = (function input_change_propagator(state,changed_inputs,input_path){
return cljs.core.some.call(null,cljs.core.partial.call(null,io.pedestal.app.dataflow.descendant_QMARK_,input_path),changed_inputs);
});
/**
* Return true if a dependent function should be run based on the
* state of its input paths.
* 
* Custom propagator predicates can be provided by attaching
* :propagator metadata to any input path.
*/
io.pedestal.app.dataflow.propagate_QMARK_ = (function propagate_QMARK_(p__10372,input_paths){
var map__10374 = p__10372;
var map__10374__$1 = ((cljs.core.seq_QMARK_.call(null,map__10374))?cljs.core.apply.call(null,cljs.core.hash_map,map__10374):map__10374);
var state = map__10374__$1;
var change = cljs.core.get.call(null,map__10374__$1,"\uFDD0:change");
var changed_inputs = ((cljs.core.seq.call(null,change))?cljs.core.reduce.call(null,cljs.core.into,cljs.core.vals.call(null,change)):cljs.core.PersistentVector.EMPTY);
return cljs.core.some.call(null,(function (input_path){
var propagator_pred = (new cljs.core.Keyword("\uFDD0:propagator")).call(null,cljs.core.meta.call(null,input_path));
return propagator_pred.call(null,state,changed_inputs,input_path);
}),input_paths);
});
io.pedestal.app.dataflow.input_set = (function input_set(changes,f,input_paths){
return cljs.core.set.call(null,f.call(null,(function (x){
return cljs.core.some.call(null,cljs.core.partial.call(null,io.pedestal.app.dataflow.descendant_QMARK_,x),input_paths);
}),changes));
});
io.pedestal.app.dataflow.update_input_sets = (function update_input_sets(m,ks,f,input_paths){
return cljs.core.reduce.call(null,(function (a,k){
return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([k], true),io.pedestal.app.dataflow.input_set,f,input_paths);
}),m,ks);
});
io.pedestal.app.dataflow.flow_input = (function flow_input(context,state,input_paths,change){
return io.pedestal.app.dataflow.update_input_sets.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,context,"\uFDD0:new-model",cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:data-model"], true))),"\uFDD0:old-model",cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:old","\uFDD0:data-model"], true))),"\uFDD0:input-paths",input_paths),cljs.core.select_keys.call(null,change,cljs.core.PersistentVector.fromArray(["\uFDD0:added","\uFDD0:updated","\uFDD0:removed"], true))),cljs.core.PersistentVector.fromArray(["\uFDD0:added","\uFDD0:updated","\uFDD0:removed"], true),cljs.core.filter,input_paths);
});
io.pedestal.app.dataflow.dataflow_fn_args = (function dataflow_fn_args(inputs,args_key,arg_names){
var G__10376 = args_key;
if(cljs.core._EQ_.call(null,"\uFDD0:default",G__10376))
{return cljs.core.PersistentVector.fromArray([inputs], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:single-val",G__10376))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.single_val.call(null,inputs)], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:map-seq",G__10376))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,io.pedestal.app.dataflow.input_map.call(null,inputs,arg_names)));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:map",G__10376))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.input_map.call(null,inputs,arg_names)], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:vals",G__10376))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.input_vals.call(null,inputs)], true);
} else
{if("\uFDD0:else")
{return cljs.core.PersistentVector.fromArray([inputs], true);
} else
{return null;
}
}
}
}
}
}
});
/**
* Execute each derive function in dependency order only if some input to the
* function has changed. Return an updated flow state.
*/
io.pedestal.app.dataflow.derive_phase = (function derive_phase(p__10377){
var map__10383 = p__10377;
var map__10383__$1 = ((cljs.core.seq_QMARK_.call(null,map__10383))?cljs.core.apply.call(null,cljs.core.hash_map,map__10383):map__10383);
var state = map__10383__$1;
var context = cljs.core.get.call(null,map__10383__$1,"\uFDD0:context");
var dataflow = cljs.core.get.call(null,map__10383__$1,"\uFDD0:dataflow");
var derives = (new cljs.core.Keyword("\uFDD0:derive")).call(null,dataflow);
return cljs.core.reduce.call(null,(function (p__10384,p__10385){
var map__10386 = p__10384;
var map__10386__$1 = ((cljs.core.seq_QMARK_.call(null,map__10386))?cljs.core.apply.call(null,cljs.core.hash_map,map__10386):map__10386);
var acc = map__10386__$1;
var change = cljs.core.get.call(null,map__10386__$1,"\uFDD0:change");
var map__10387 = p__10385;
var map__10387__$1 = ((cljs.core.seq_QMARK_.call(null,map__10387))?cljs.core.apply.call(null,cljs.core.hash_map,map__10387):map__10387);
var input_paths = cljs.core.get.call(null,map__10387__$1,"\uFDD0:in");
var derive_fn = cljs.core.get.call(null,map__10387__$1,"\uFDD0:fn");
var out_path = cljs.core.get.call(null,map__10387__$1,"\uFDD0:out");
var args = cljs.core.get.call(null,map__10387__$1,"\uFDD0:args");
var arg_names = cljs.core.get.call(null,map__10387__$1,"\uFDD0:arg-names");
if(cljs.core.truth_(io.pedestal.app.dataflow.propagate_QMARK_.call(null,acc,input_paths)))
{return cljs.core.apply.call(null,io.pedestal.app.dataflow.apply_in,acc,out_path,derive_fn,io.pedestal.app.dataflow.dataflow_fn_args.call(null,io.pedestal.app.dataflow.flow_input.call(null,context,acc,input_paths,change),args,arg_names));
} else
{return acc;
}
}),state,derives);
});
/**
* Execute each function. Return an updated flow state.
*/
io.pedestal.app.dataflow.output_phase = (function output_phase(p__10388,k){
var map__10394 = p__10388;
var map__10394__$1 = ((cljs.core.seq_QMARK_.call(null,map__10394))?cljs.core.apply.call(null,cljs.core.hash_map,map__10394):map__10394);
var state = map__10394__$1;
var context = cljs.core.get.call(null,map__10394__$1,"\uFDD0:context");
var dataflow = cljs.core.get.call(null,map__10394__$1,"\uFDD0:dataflow");
var fns = k.call(null,dataflow);
return cljs.core.reduce.call(null,(function (p__10395,p__10396){
var map__10397 = p__10395;
var map__10397__$1 = ((cljs.core.seq_QMARK_.call(null,map__10397))?cljs.core.apply.call(null,cljs.core.hash_map,map__10397):map__10397);
var acc = map__10397__$1;
var change = cljs.core.get.call(null,map__10397__$1,"\uFDD0:change");
var map__10398 = p__10396;
var map__10398__$1 = ((cljs.core.seq_QMARK_.call(null,map__10398))?cljs.core.apply.call(null,cljs.core.hash_map,map__10398):map__10398);
var f = cljs.core.get.call(null,map__10398__$1,"\uFDD0:fn");
var input_paths = cljs.core.get.call(null,map__10398__$1,"\uFDD0:in");
var args = cljs.core.get.call(null,map__10398__$1,"\uFDD0:args");
var arg_names = cljs.core.get.call(null,map__10398__$1,"\uFDD0:arg-names");
if(cljs.core.truth_(io.pedestal.app.dataflow.propagate_QMARK_.call(null,acc,input_paths)))
{return cljs.core.update_in.call(null,acc,cljs.core.PersistentVector.fromArray(["\uFDD0:new",k], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,f,io.pedestal.app.dataflow.dataflow_fn_args.call(null,io.pedestal.app.dataflow.flow_input.call(null,context,acc,input_paths,change),args,arg_names)));
} else
{return acc;
}
}),state,fns);
});
/**
* Execute each continue function. Return an updated flow state.
*/
io.pedestal.app.dataflow.continue_phase = (function continue_phase(state){
return io.pedestal.app.dataflow.output_phase.call(null,state,"\uFDD0:continue");
});
/**
* Execute each effect function. Return an updated flow state.
*/
io.pedestal.app.dataflow.effect_phase = (function effect_phase(state){
return io.pedestal.app.dataflow.output_phase.call(null,state,"\uFDD0:effect");
});
var remover = (function remover(change_set,input_paths){
return cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__10399_SHARP_){
return cljs.core.some.call(null,cljs.core.partial.call(null,io.pedestal.app.dataflow.matching_path_QMARK_,p1__10399_SHARP_),input_paths);
}),change_set));
});
io.pedestal.app.dataflow.remove_matching_changes = (function remove_matching_changes(change,input_paths){
return cljs.core.reduce.call(null,(function (a,k){
return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([k], true),remover,input_paths);
}),change,cljs.core.PersistentVector.fromArray(["\uFDD0:inspect","\uFDD0:added","\uFDD0:updated","\uFDD0:removed"], true));
});
io.pedestal.app.dataflow.emit_phase = (function emit_phase(p__10400){
var map__10406 = p__10400;
var map__10406__$1 = ((cljs.core.seq_QMARK_.call(null,map__10406))?cljs.core.apply.call(null,cljs.core.hash_map,map__10406):map__10406);
var state = map__10406__$1;
var change = cljs.core.get.call(null,map__10406__$1,"\uFDD0:change");
var context = cljs.core.get.call(null,map__10406__$1,"\uFDD0:context");
var dataflow = cljs.core.get.call(null,map__10406__$1,"\uFDD0:dataflow");
var emits = (new cljs.core.Keyword("\uFDD0:emit")).call(null,dataflow);
return cljs.core.dissoc.call(null,cljs.core.reduce.call(null,(function (p__10407,p__10408){
var map__10409 = p__10407;
var map__10409__$1 = ((cljs.core.seq_QMARK_.call(null,map__10409))?cljs.core.apply.call(null,cljs.core.hash_map,map__10409):map__10409);
var acc = map__10409__$1;
var processed_inputs = cljs.core.get.call(null,map__10409__$1,"\uFDD0:processed-inputs");
var remaining_change = cljs.core.get.call(null,map__10409__$1,"\uFDD0:remaining-change");
var change__$1 = cljs.core.get.call(null,map__10409__$1,"\uFDD0:change");
var map__10410 = p__10408;
var map__10410__$1 = ((cljs.core.seq_QMARK_.call(null,map__10410))?cljs.core.apply.call(null,cljs.core.hash_map,map__10410):map__10410);
var input_paths = cljs.core.get.call(null,map__10410__$1,"\uFDD0:in");
var emit_fn = cljs.core.get.call(null,map__10410__$1,"\uFDD0:fn");
var mode = cljs.core.get.call(null,map__10410__$1,"\uFDD0:mode");
var report_change = ((cljs.core._EQ_.call(null,mode,"\uFDD0:always"))?change__$1:remaining_change);
if(cljs.core.truth_(io.pedestal.app.dataflow.propagate_QMARK_.call(null,cljs.core.assoc.call(null,acc,"\uFDD0:change",report_change),input_paths)))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,acc,cljs.core.PersistentVector.fromArray(["\uFDD0:remaining-change"], true),io.pedestal.app.dataflow.remove_matching_changes,input_paths),cljs.core.PersistentVector.fromArray(["\uFDD0:processed-inputs"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:emit"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),emit_fn.call(null,cljs.core.assoc.call(null,io.pedestal.app.dataflow.flow_input.call(null,context,acc,input_paths,report_change),"\uFDD0:mode",mode,"\uFDD0:processed-inputs",processed_inputs)));
} else
{return acc;
}
}),cljs.core.assoc.call(null,state,"\uFDD0:remaining-change",change),emits),"\uFDD0:remaining-change");
});
/**
* Given a dataflow, a state and a message, run the message through
* the dataflow and return the updated state. The dataflow will be
* run only once.
*/
io.pedestal.app.dataflow.flow_phases_step = (function flow_phases_step(state,dataflow,message){
var state__$1 = cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:new"], true),cljs.core.dissoc,"\uFDD0:continue");
return io.pedestal.app.dataflow.continue_phase.call(null,io.pedestal.app.dataflow.derive_phase.call(null,io.pedestal.app.dataflow.transform_phase.call(null,cljs.core.assoc_in.call(null,state__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:context","\uFDD0:message"], true),message))));
});
io.pedestal.app.dataflow.run_flow_phases = (function run_flow_phases(state,dataflow,message){
var map__10415 = io.pedestal.app.dataflow.flow_phases_step.call(null,state,dataflow,message);
var map__10415__$1 = ((cljs.core.seq_QMARK_.call(null,map__10415))?cljs.core.apply.call(null,cljs.core.hash_map,map__10415):map__10415);
var result = map__10415__$1;
var map__10416 = cljs.core.get.call(null,map__10415__$1,"\uFDD0:new");
var map__10416__$1 = ((cljs.core.seq_QMARK_.call(null,map__10416))?cljs.core.apply.call(null,cljs.core.hash_map,map__10416):map__10416);
var continue$ = cljs.core.get.call(null,map__10416__$1,"\uFDD0:continue");
var input = cljs.core.filter.call(null,((function (map__10415,map__10415__$1,result,map__10416,map__10416__$1,continue$){
return (function (p1__10411_SHARP_){
return (new cljs.core.Keyword("\uFDD0:input")).call(null,cljs.core.meta.call(null,p1__10411_SHARP_));
});})(map__10415,map__10415__$1,result,map__10416,map__10416__$1,continue$))
,continue$);
var continue$__$1 = cljs.core.remove.call(null,((function (map__10415,map__10415__$1,result,map__10416,map__10416__$1,continue$,input){
return (function (p1__10412_SHARP_){
return (new cljs.core.Keyword("\uFDD0:input")).call(null,cljs.core.meta.call(null,p1__10412_SHARP_));
});})(map__10415,map__10415__$1,result,map__10416,map__10416__$1,continue$,input))
,continue$);
var new_state = ((cljs.core.empty_QMARK_.call(null,continue$__$1))?cljs.core.update_in.call(null,result,cljs.core.PersistentVector.fromArray(["\uFDD0:new"], true),cljs.core.dissoc,"\uFDD0:continue"):cljs.core.reduce.call(null,((function (map__10415,map__10415__$1,result,map__10416,map__10416__$1,continue$,input,continue$__$1){
return (function (a,c_message){
return run_flow_phases.call(null,cljs.core.assoc.call(null,a,"\uFDD0:old",(new cljs.core.Keyword("\uFDD0:new")).call(null,a)),dataflow,c_message);
});})(map__10415,map__10415__$1,result,map__10416,map__10416__$1,continue$,input,continue$__$1))
,result,continue$__$1));
if(cljs.core.empty_QMARK_.call(null,input))
{return new_state;
} else
{return cljs.core.update_in.call(null,new_state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:continue-inputs"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input);
}
});
io.pedestal.app.dataflow.run_all_phases = (function run_all_phases(model,dataflow,message){
var state = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:old",model,"\uFDD0:new",model,"\uFDD0:change",cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:dataflow",dataflow,"\uFDD0:context",cljs.core.PersistentArrayMap.EMPTY], true);
var new_state = io.pedestal.app.dataflow.run_flow_phases.call(null,state,dataflow,message);
return (new cljs.core.Keyword("\uFDD0:new")).call(null,io.pedestal.app.dataflow.emit_phase.call(null,io.pedestal.app.dataflow.effect_phase.call(null,cljs.core.assoc_in.call(null,new_state,cljs.core.PersistentVector.fromArray(["\uFDD0:context","\uFDD0:message"], true),message))));
});
io.pedestal.app.dataflow.add_default = (function add_default(v,d){
var or__3943__auto__ = v;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return d;
}
});
/**
* Add a propagator predicate to each input path returning a set of
* input paths.
* 
* The single argument version will add the default propagator
* predicate.
*/
io.pedestal.app.dataflow.with_propagator = (function() {
var with_propagator = null;
var with_propagator__1 = (function (ins){
return with_propagator.call(null,ins,io.pedestal.app.dataflow.input_change_propagator);
});
var with_propagator__2 = (function (ins,propagator){
return cljs.core.set.call(null,cljs.core.mapv.call(null,(function (i){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:propagator")).call(null,cljs.core.meta.call(null,i))))
{return i;
} else
{return cljs.core.vary_meta.call(null,i,cljs.core.assoc,"\uFDD0:propagator",propagator);
}
}),ins));
});
with_propagator = function(ins,propagator){
switch(arguments.length){
case 1:
return with_propagator__1.call(this,ins);
case 2:
return with_propagator__2.call(this,ins,propagator);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
with_propagator.cljs$core$IFn$_invoke$arity$1 = with_propagator__1;
with_propagator.cljs$core$IFn$_invoke$arity$2 = with_propagator__2;
return with_propagator;
})()
;
io.pedestal.app.dataflow.transform_maps = (function transform_maps(transforms){
return cljs.core.mapv.call(null,(function (x){
if(cljs.core.vector_QMARK_.call(null,x))
{var vec__10418 = x;
var key = cljs.core.nth.call(null,vec__10418,0,null);
var out = cljs.core.nth.call(null,vec__10418,1,null);
var fn = cljs.core.nth.call(null,vec__10418,2,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",key,"\uFDD0:out",out,"\uFDD0:fn",fn], true);
} else
{return x;
}
}),transforms);
});
io.pedestal.app.dataflow.add_arg_names = (function add_arg_names(p__10419){
var map__10421 = p__10419;
var map__10421__$1 = ((cljs.core.seq_QMARK_.call(null,map__10421))?cljs.core.apply.call(null,cljs.core.hash_map,map__10421):map__10421);
var m = map__10421__$1;
var in$ = cljs.core.get.call(null,map__10421__$1,"\uFDD0:in");
var arg_names = ((cljs.core.map_QMARK_.call(null,in$))?in$:null);
var in$__$1 = ((cljs.core.map_QMARK_.call(null,in$))?cljs.core.set.call(null,cljs.core.keys.call(null,in$)):in$);
return cljs.core.assoc.call(null,m,"\uFDD0:in",in$__$1,"\uFDD0:arg-names",arg_names);
});
io.pedestal.app.dataflow.dataflow_maps = (function dataflow_maps(coll,f){
return cljs.core.mapv.call(null,(function (x){
return cljs.core.update_in.call(null,io.pedestal.app.dataflow.add_arg_names.call(null,((cljs.core.vector_QMARK_.call(null,x))?f.call(null,x):x)),cljs.core.PersistentVector.fromArray(["\uFDD0:in"], true),io.pedestal.app.dataflow.with_propagator);
}),coll);
});
io.pedestal.app.dataflow.derive_maps = (function derive_maps(derives){
return io.pedestal.app.dataflow.dataflow_maps.call(null,derives,(function (p__10424){
var vec__10425 = p__10424;
var in$ = cljs.core.nth.call(null,vec__10425,0,null);
var out = cljs.core.nth.call(null,vec__10425,1,null);
var fn = cljs.core.nth.call(null,vec__10425,2,null);
var args = cljs.core.nth.call(null,vec__10425,3,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",in$,"\uFDD0:out",out,"\uFDD0:fn",fn,"\uFDD0:args",args], true);
}));
});
io.pedestal.app.dataflow.output_maps = (function output_maps(outputs){
return io.pedestal.app.dataflow.dataflow_maps.call(null,outputs,(function (p__10428){
var vec__10429 = p__10428;
var in$ = cljs.core.nth.call(null,vec__10429,0,null);
var fn = cljs.core.nth.call(null,vec__10429,1,null);
var args = cljs.core.nth.call(null,vec__10429,2,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",in$,"\uFDD0:fn",fn,"\uFDD0:args",args], true);
}));
});
/**
* Given a dataflow description map, return a dataflow engine. An example dataflow
* configuration is shown below:
* 
* {:transform [[:op [:output :path] transform-fn]]
* :effect    #{{:fn effect-fn :in #{[:input :path]}}}
* :derive    #{{:fn derive-fn :in #{[:input :path]} :out [:output :path]}}
* :continue  #{{:fn some-continue-fn :in #{[:input :path]}}}
* :emit      [[#{[:input :path]} emit-fn]]}
* 
*/
io.pedestal.app.dataflow.build = (function build(description){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,description,cljs.core.PersistentVector.fromArray(["\uFDD0:transform"], true),io.pedestal.app.dataflow.transform_maps),cljs.core.PersistentVector.fromArray(["\uFDD0:derive"], true),io.pedestal.app.dataflow.derive_maps),cljs.core.PersistentVector.fromArray(["\uFDD0:continue"], true),cljs.core.comp.call(null,cljs.core.set,io.pedestal.app.dataflow.output_maps)),cljs.core.PersistentVector.fromArray(["\uFDD0:effect"], true),cljs.core.comp.call(null,cljs.core.set,io.pedestal.app.dataflow.output_maps)),cljs.core.PersistentVector.fromArray(["\uFDD0:emit"], true),io.pedestal.app.dataflow.output_maps),cljs.core.PersistentVector.fromArray(["\uFDD0:derive"], true),io.pedestal.app.dataflow.sort_derive_fns),cljs.core.PersistentVector.fromArray(["\uFDD0:input-adapter"], true),io.pedestal.app.dataflow.add_default,cljs.core.identity);
});
io.pedestal.app.dataflow.run = (function run(model,dataflow,message){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:debug")).call(null,dataflow)))
{var start = io.pedestal.app.util.platform.date.call(null).getTime();
var new_model = io.pedestal.app.dataflow.run_all_phases.call(null,model,dataflow,message);
var end = io.pedestal.app.util.platform.date.call(null).getTime();
return io.pedestal.app.dataflow.run_all_phases.call(null,new_model,cljs.core.assoc.call(null,dataflow,"\uFDD0:input-adapter",cljs.core.identity),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key","\uFDD0:debug","\uFDD0:out",cljs.core.PersistentVector.fromArray(["\uFDD0:pedestal","\uFDD0:debug","\uFDD0:dataflow-time"], true),"\uFDD0:value",(end - start)], true));
} else
{return io.pedestal.app.dataflow.run_all_phases.call(null,model,dataflow,message);
}
});
