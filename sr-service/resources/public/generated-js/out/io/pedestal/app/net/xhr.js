goog.provide('io.pedestal.app.net.xhr');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.structs.Map');
goog.require('goog.net.XhrManager');
io.pedestal.app.net.xhr._STAR_xhr_manager_STAR_ = (new goog.net.XhrManager(null,null,null,6,(60 * 1000)));
io.pedestal.app.net.xhr.success_QMARK_ = (function success_QMARK_(p__13512){
var map__13514 = p__13512;
var map__13514__$1 = ((cljs.core.seq_QMARK_.call(null,map__13514))?cljs.core.apply.call(null,cljs.core.hash_map,map__13514):map__13514);
var status = cljs.core.get.call(null,map__13514__$1,"\uFDD0:status");
var or__3943__auto__ = (function (){var and__3941__auto__ = (status >= 200);
if(and__3941__auto__)
{return (status < 300);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,status,304);
}
});
io.pedestal.app.net.xhr.redirect_QMARK_ = (function redirect_QMARK_(p__13515){
var map__13517 = p__13515;
var map__13517__$1 = ((cljs.core.seq_QMARK_.call(null,map__13517))?cljs.core.apply.call(null,cljs.core.hash_map,map__13517):map__13517);
var status = cljs.core.get.call(null,map__13517__$1,"\uFDD0:status");
return cljs.core.boolean$.call(null,cljs.core.PersistentHashSet.fromArray([301,null,302,null,303,null,307,null], true).call(null,status));
});
io.pedestal.app.net.xhr.error_QMARK_ = (function error_QMARK_(p__13518){
var map__13520 = p__13518;
var map__13520__$1 = ((cljs.core.seq_QMARK_.call(null,map__13520))?cljs.core.apply.call(null,cljs.core.hash_map,map__13520):map__13520);
var status = cljs.core.get.call(null,map__13520__$1,"\uFDD0:status");
return (status >= 400);
});
io.pedestal.app.net.xhr.headers__GT_map = (function headers__GT_map(xhr){
var headers = clojure.string.split_lines.call(null,clojure.string.trim.call(null,clojure.string.lower_case.call(null,xhr.getAllResponseHeaders())));
try{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__13521_SHARP_){
return clojure.string.split.call(null,p1__13521_SHARP_,/\s*:\s+/);
}),headers));
}catch (e13523){if((e13523 instanceof Error))
{var e = e13523;
return cljs.core.PersistentArrayMap.EMPTY;
} else
{if("\uFDD0:else")
{throw e13523;
} else
{return null;
}
}
}});
io.pedestal.app.net.xhr.handle_response = (function handle_response(on_success,on_error,id,e){
var xhr = e.currentTarget;
var response = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",id,"\uFDD0:body",xhr.getResponseText(),"\uFDD0:status",xhr.getStatus(),"\uFDD0:headers",io.pedestal.app.net.xhr.headers__GT_map.call(null,xhr),"\uFDD0:xhr",xhr], true);
var handler = (cljs.core.truth_(io.pedestal.app.net.xhr.success_QMARK_.call(null,response))?on_success:on_error);
return handler.call(null,response);
});
/**
* Asynchronously make a network request for the resource at uri. If
* provided via the `:on-success` and `:on-error` keyword arguments,
* the appropriate one of `on-success` or `on-error` will be called on
* completion. They will be passed a map containing the keys `:id`,
* `:body`, `:status`, and `:event`. The entry for `:event` contains an
* instance of the `goog.net.XhrManager.Event`.
* 
* Other allowable keyword arguments are `:request-method`, `:body`,
* `:headers`, `:priority`, and `:retries`. `:request-method` defaults
* to "GET" and `:retries` defaults to `0`.
* 
* `priority` defaults to 100. The lower the number the higher the
* priority.
* @param {...*} var_args
*/
io.pedestal.app.net.xhr.request = (function() { 
var request__delegate = function (id,uri,p__13524){
var map__13527 = p__13524;
var map__13527__$1 = ((cljs.core.seq_QMARK_.call(null,map__13527))?cljs.core.apply.call(null,cljs.core.hash_map,map__13527):map__13527);
var on_error = cljs.core.get.call(null,map__13527__$1,"\uFDD0:on-error");
var on_success = cljs.core.get.call(null,map__13527__$1,"\uFDD0:on-success");
var retries = cljs.core.get.call(null,map__13527__$1,"\uFDD0:retries",0);
var priority = cljs.core.get.call(null,map__13527__$1,"\uFDD0:priority");
var headers = cljs.core.get.call(null,map__13527__$1,"\uFDD0:headers");
var body = cljs.core.get.call(null,map__13527__$1,"\uFDD0:body");
var request_method = cljs.core.get.call(null,map__13527__$1,"\uFDD0:request-method","GET");
if(cljs.core.truth_(on_success))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("on-success keyword argument is required"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"on-success","on-success",314661838,null)))].join('')));
}
if(cljs.core.truth_(on_error))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("on-error keyword argument is required"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"on-error","on-error",-1235858861,null)))].join('')));
}
try{return io.pedestal.app.net.xhr._STAR_xhr_manager_STAR_.send(id,uri,request_method,body,(cljs.core.truth_(headers)?cljs.core.clj__GT_js.call(null,headers):null),priority,cljs.core.partial.call(null,io.pedestal.app.net.xhr.handle_response,on_success,on_error,id),retries);
}catch (e13528){if((e13528 instanceof Error))
{var e = e13528;
console.log(e);
return null;
} else
{if("\uFDD0:else")
{throw e13528;
} else
{return null;
}
}
}};
var request = function (id,uri,var_args){
var p__13524 = null;
if (arguments.length > 2) {
  p__13524 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return request__delegate.call(this, id, uri, p__13524);
};
request.cljs$lang$maxFixedArity = 2;
request.cljs$lang$applyTo = (function (arglist__13529){
var id = cljs.core.first(arglist__13529);
arglist__13529 = cljs.core.next(arglist__13529);
var uri = cljs.core.first(arglist__13529);
var p__13524 = cljs.core.rest(arglist__13529);
return request__delegate(id, uri, p__13524);
});
request.cljs$core$IFn$_invoke$arity$variadic = request__delegate;
return request;
})()
;
io.pedestal.app.net.xhr.url = (function url(path){
return [cljs.core.str(document.location.origin),cljs.core.str(path)].join('');
});
