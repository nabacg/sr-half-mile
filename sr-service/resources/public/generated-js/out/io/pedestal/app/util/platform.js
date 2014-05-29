goog.provide('io.pedestal.app.util.platform');
goog.require('cljs.core');
goog.require('cljs.reader');
io.pedestal.app.util.platform.safe_read_string = (function safe_read_string(s){
return cljs.reader.read_string.call(null,s);
});
io.pedestal.app.util.platform.parse_int = (function parse_int(s){
if((function (){var or__3943__auto__ = typeof s === 'number';
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.string_QMARK_.call(null,s);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("the value passed to parse-int must be a number or a string"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)))))].join('')));
}
return parseInt(s,10);
});
io.pedestal.app.util.platform.date = (function date(){
return (new Date());
});
io.pedestal.app.util.platform.create_timeout = (function create_timeout(msecs,f){
return setTimeout(f,msecs);
});
io.pedestal.app.util.platform.cancel_timeout = (function cancel_timeout(timeout){
return clearTimeout(timeout);
});
io.pedestal.app.util.platform.read_form_if_string = (function read_form_if_string(x){
if(cljs.core.string_QMARK_.call(null,x))
{try{return io.pedestal.app.util.platform.safe_read_string.call(null,x);
}catch (e12460){if((e12460 instanceof Error))
{var _ = e12460;
return null;
} else
{if("\uFDD0:else")
{throw e12460;
} else
{return null;
}
}
}} else
{return x;
}
});
io.pedestal.app.util.platform.log_group = (function log_group(group_name,coll){
console.group(group_name);
var seq__12465_12469 = cljs.core.seq.call(null,coll);
var chunk__12466_12470 = null;
var count__12467_12471 = 0;
var i__12468_12472 = 0;
while(true){
if((i__12468_12472 < count__12467_12471))
{var d_12473 = cljs.core._nth.call(null,chunk__12466_12470,i__12468_12472);
console.log(cljs.core.pr_str.call(null,d_12473));
{
var G__12474 = seq__12465_12469;
var G__12475 = chunk__12466_12470;
var G__12476 = count__12467_12471;
var G__12477 = (i__12468_12472 + 1);
seq__12465_12469 = G__12474;
chunk__12466_12470 = G__12475;
count__12467_12471 = G__12476;
i__12468_12472 = G__12477;
continue;
}
} else
{var temp__4092__auto___12478 = cljs.core.seq.call(null,seq__12465_12469);
if(temp__4092__auto___12478)
{var seq__12465_12479__$1 = temp__4092__auto___12478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12465_12479__$1))
{var c__9781__auto___12480 = cljs.core.chunk_first.call(null,seq__12465_12479__$1);
{
var G__12481 = cljs.core.chunk_rest.call(null,seq__12465_12479__$1);
var G__12482 = c__9781__auto___12480;
var G__12483 = cljs.core.count.call(null,c__9781__auto___12480);
var G__12484 = 0;
seq__12465_12469 = G__12481;
chunk__12466_12470 = G__12482;
count__12467_12471 = G__12483;
i__12468_12472 = G__12484;
continue;
}
} else
{var d_12485 = cljs.core.first.call(null,seq__12465_12479__$1);
console.log(cljs.core.pr_str.call(null,d_12485));
{
var G__12486 = cljs.core.next.call(null,seq__12465_12479__$1);
var G__12487 = null;
var G__12488 = 0;
var G__12489 = 0;
seq__12465_12469 = G__12486;
chunk__12466_12470 = G__12487;
count__12467_12471 = G__12488;
i__12468_12472 = G__12489;
continue;
}
}
} else
{}
}
break;
}
return console.groupEnd();
});
/**
* @param {...*} var_args
*/
io.pedestal.app.util.platform.log_exceptions = (function() { 
var log_exceptions__delegate = function (f,args){
try{return cljs.core.apply.call(null,f,args);
}catch (e12491){if((e12491 instanceof Error))
{var e = e12491;
console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if("\uFDD0:else")
{throw e12491;
} else
{return null;
}
}
}};
var log_exceptions = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log_exceptions__delegate.call(this, f, args);
};
log_exceptions.cljs$lang$maxFixedArity = 1;
log_exceptions.cljs$lang$applyTo = (function (arglist__12492){
var f = cljs.core.first(arglist__12492);
var args = cljs.core.rest(arglist__12492);
return log_exceptions__delegate(f, args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
io.pedestal.app.util.platform.vec_unless_seqable = (function vec_unless_seqable(x){
try{cljs.core.seq.call(null,x);
return x;
}catch (e12494){if((e12494 instanceof Error))
{var e = e12494;
return cljs.core.PersistentVector.fromArray([x], true);
} else
{if("\uFDD0:else")
{throw e12494;
} else
{return null;
}
}
}});
