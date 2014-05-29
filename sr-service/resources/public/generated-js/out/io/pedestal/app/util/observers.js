goog.provide('io.pedestal.app.util.observers');
goog.require('cljs.core');
io.pedestal.app.util.observers.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
io.pedestal.app.util.observers.publish = (function publish(topic,message){
var seq__10694 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,io.pedestal.app.util.observers.listeners),topic));
var chunk__10695 = null;
var count__10696 = 0;
var i__10697 = 0;
while(true){
if((i__10697 < count__10696))
{var f = cljs.core._nth.call(null,chunk__10695,i__10697);
f.call(null,message);
{
var G__10698 = seq__10694;
var G__10699 = chunk__10695;
var G__10700 = count__10696;
var G__10701 = (i__10697 + 1);
seq__10694 = G__10698;
chunk__10695 = G__10699;
count__10696 = G__10700;
i__10697 = G__10701;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10694);
if(temp__4092__auto__)
{var seq__10694__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10694__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__10694__$1);
{
var G__10702 = cljs.core.chunk_rest.call(null,seq__10694__$1);
var G__10703 = c__9781__auto__;
var G__10704 = cljs.core.count.call(null,c__9781__auto__);
var G__10705 = 0;
seq__10694 = G__10702;
chunk__10695 = G__10703;
count__10696 = G__10704;
i__10697 = G__10705;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__10694__$1);
f.call(null,message);
{
var G__10706 = cljs.core.next.call(null,seq__10694__$1);
var G__10707 = null;
var G__10708 = 0;
var G__10709 = 0;
seq__10694 = G__10706;
chunk__10695 = G__10707;
count__10696 = G__10708;
i__10697 = G__10709;
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
io.pedestal.app.util.observers.subscribe = (function subscribe(topic,f){
return cljs.core.swap_BANG_.call(null,io.pedestal.app.util.observers.listeners,cljs.core.update_in,cljs.core.PersistentVector.fromArray([topic], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
io.pedestal.app.util.observers.clear = (function clear(){
return cljs.core.reset_BANG_.call(null,io.pedestal.app.util.observers.listeners,cljs.core.PersistentArrayMap.EMPTY);
});
