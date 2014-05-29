goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__9650__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.prevent_default[goog.typeOf(x__9650__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__9650__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.stop_propagation[goog.typeOf(x__9650__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__9650__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.target[goog.typeOf(x__9650__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__9650__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.current_target[goog.typeOf(x__9650__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.current_target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__9650__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.event_type[goog.typeOf(x__9650__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.event_type["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__9650__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.raw_event[goog.typeOf(x__9650__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.raw_event["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.builtin_events = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if(cljs.core.contains_QMARK_.call(null,domina.events.builtin_events,evt_type))
{return cljs.core.name.call(null,evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){if((void 0 === domina.events.t12711))
{goog.provide('domina.events.t12711');

/**
* @constructor
*/
domina.events.t12711 = (function (evt,f,create_listener_function,meta12712){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12712 = meta12712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12711.cljs$lang$type = true;
domina.events.t12711.cljs$lang$ctorStr = "domina.events/t12711";
domina.events.t12711.cljs$lang$ctorPrWriter = (function (this__9591__auto__,writer__9592__auto__,opt__9593__auto__){
return cljs.core._write.call(null,writer__9592__auto__,"domina.events/t12711");
});
domina.events.t12711.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t12711.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12711.prototype.domina$events$Event$ = true;
domina.events.t12711.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12711.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12711.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12711.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12711.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12711.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12713){
var self__ = this;
return self__.meta12712;
});
domina.events.t12711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12713,meta12712__$1){
var self__ = this;
return (new domina.events.t12711(self__.evt,self__.f,self__.create_listener_function,meta12712__$1));
});
domina.events.__GT_t12711 = (function __GT_t12711(evt__$1,f__$1,create_listener_function__$1,meta12712){
return (new domina.events.t12711(evt__$1,f__$1,create_listener_function__$1,meta12712));
});
} else
{}
return (new domina.events.t12711(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__9750__auto__ = (function iter__12718(s__12719){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12719__$1 = s__12719;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12719__$1);
if(temp__4092__auto__)
{var s__12719__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12719__$2))
{var c__9748__auto__ = cljs.core.chunk_first.call(null,s__12719__$2);
var size__9749__auto__ = cljs.core.count.call(null,c__9748__auto__);
var b__12721 = cljs.core.chunk_buffer.call(null,size__9749__auto__);
if((function (){var i__12720 = 0;
while(true){
if((i__12720 < size__9749__auto__))
{var node = cljs.core._nth.call(null,c__9748__auto__,i__12720);
cljs.core.chunk_append.call(null,b__12721,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__12722 = (i__12720 + 1);
i__12720 = G__12722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12721),iter__12718.call(null,cljs.core.chunk_rest.call(null,s__12719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12721),null);
}
} else
{var node = cljs.core.first.call(null,s__12719__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__12718.call(null,cljs.core.rest.call(null,s__12719__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9750__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var seq__12731 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12732 = null;
var count__12733 = 0;
var i__12734 = 0;
while(true){
if((i__12734 < count__12733))
{var node = cljs.core._nth.call(null,chunk__12732,i__12734);
goog.events.removeAll(node);
{
var G__12739 = seq__12731;
var G__12740 = chunk__12732;
var G__12741 = count__12733;
var G__12742 = (i__12734 + 1);
seq__12731 = G__12739;
chunk__12732 = G__12740;
count__12733 = G__12741;
i__12734 = G__12742;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12731);
if(temp__4092__auto__)
{var seq__12731__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12731__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__12731__$1);
{
var G__12743 = cljs.core.chunk_rest.call(null,seq__12731__$1);
var G__12744 = c__9781__auto__;
var G__12745 = cljs.core.count.call(null,c__9781__auto__);
var G__12746 = 0;
seq__12731 = G__12743;
chunk__12732 = G__12744;
count__12733 = G__12745;
i__12734 = G__12746;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__12731__$1);
goog.events.removeAll(node);
{
var G__12747 = cljs.core.next.call(null,seq__12731__$1);
var G__12748 = null;
var G__12749 = 0;
var G__12750 = 0;
seq__12731 = G__12747;
chunk__12732 = G__12748;
count__12733 = G__12749;
i__12734 = G__12750;
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
var unlisten_BANG___2 = (function (content,type){
var type__$1 = domina.events.find_builtin_type.call(null,type);
var seq__12735 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12736 = null;
var count__12737 = 0;
var i__12738 = 0;
while(true){
if((i__12738 < count__12737))
{var node = cljs.core._nth.call(null,chunk__12736,i__12738);
goog.events.removeAll(node,type__$1);
{
var G__12751 = seq__12735;
var G__12752 = chunk__12736;
var G__12753 = count__12737;
var G__12754 = (i__12738 + 1);
seq__12735 = G__12751;
chunk__12736 = G__12752;
count__12737 = G__12753;
i__12738 = G__12754;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12735);
if(temp__4092__auto__)
{var seq__12735__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12735__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__12735__$1);
{
var G__12755 = cljs.core.chunk_rest.call(null,seq__12735__$1);
var G__12756 = c__9781__auto__;
var G__12757 = cljs.core.count.call(null,c__9781__auto__);
var G__12758 = 0;
seq__12735 = G__12755;
chunk__12736 = G__12756;
count__12737 = G__12757;
i__12738 = G__12758;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__12735__$1);
goog.events.removeAll(node,type__$1);
{
var G__12759 = cljs.core.next.call(null,seq__12735__$1);
var G__12760 = null;
var G__12761 = 0;
var G__12762 = 0;
seq__12735 = G__12759;
chunk__12736 = G__12760;
count__12737 = G__12761;
i__12738 = G__12762;
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
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.call(null,n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4090__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;
{
var G__12763 = parent;
var G__12764 = cljs.core.cons.call(null,parent,so_far);
n = G__12763;
so_far = G__12764;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__12773_12781 = cljs.core.seq.call(null,ancestors);
var chunk__12774_12782 = null;
var count__12775_12783 = 0;
var i__12776_12784 = 0;
while(true){
if((i__12776_12784 < count__12775_12783))
{var n_12785 = cljs.core._nth.call(null,chunk__12774_12782,i__12776_12784);
if(cljs.core.truth_(n_12785.propagationStopped))
{} else
{evt.currentTarget = n_12785;
goog.events.fireListeners(n_12785,evt.type,true,evt);
}
{
var G__12786 = seq__12773_12781;
var G__12787 = chunk__12774_12782;
var G__12788 = count__12775_12783;
var G__12789 = (i__12776_12784 + 1);
seq__12773_12781 = G__12786;
chunk__12774_12782 = G__12787;
count__12775_12783 = G__12788;
i__12776_12784 = G__12789;
continue;
}
} else
{var temp__4092__auto___12790 = cljs.core.seq.call(null,seq__12773_12781);
if(temp__4092__auto___12790)
{var seq__12773_12791__$1 = temp__4092__auto___12790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12773_12791__$1))
{var c__9781__auto___12792 = cljs.core.chunk_first.call(null,seq__12773_12791__$1);
{
var G__12793 = cljs.core.chunk_rest.call(null,seq__12773_12791__$1);
var G__12794 = c__9781__auto___12792;
var G__12795 = cljs.core.count.call(null,c__9781__auto___12792);
var G__12796 = 0;
seq__12773_12781 = G__12793;
chunk__12774_12782 = G__12794;
count__12775_12783 = G__12795;
i__12776_12784 = G__12796;
continue;
}
} else
{var n_12797 = cljs.core.first.call(null,seq__12773_12791__$1);
if(cljs.core.truth_(n_12797.propagationStopped))
{} else
{evt.currentTarget = n_12797;
goog.events.fireListeners(n_12797,evt.type,true,evt);
}
{
var G__12798 = cljs.core.next.call(null,seq__12773_12791__$1);
var G__12799 = null;
var G__12800 = 0;
var G__12801 = 0;
seq__12773_12781 = G__12798;
chunk__12774_12782 = G__12799;
count__12775_12783 = G__12800;
i__12776_12784 = G__12801;
continue;
}
}
} else
{}
}
break;
}
var seq__12777_12802 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__12778_12803 = null;
var count__12779_12804 = 0;
var i__12780_12805 = 0;
while(true){
if((i__12780_12805 < count__12779_12804))
{var n_12806 = cljs.core._nth.call(null,chunk__12778_12803,i__12780_12805);
if(cljs.core.truth_(n_12806.propagationStopped))
{} else
{evt.currentTarget = n_12806;
goog.events.fireListeners(n_12806,evt.type,false,evt);
}
{
var G__12807 = seq__12777_12802;
var G__12808 = chunk__12778_12803;
var G__12809 = count__12779_12804;
var G__12810 = (i__12780_12805 + 1);
seq__12777_12802 = G__12807;
chunk__12778_12803 = G__12808;
count__12779_12804 = G__12809;
i__12780_12805 = G__12810;
continue;
}
} else
{var temp__4092__auto___12811 = cljs.core.seq.call(null,seq__12777_12802);
if(temp__4092__auto___12811)
{var seq__12777_12812__$1 = temp__4092__auto___12811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12777_12812__$1))
{var c__9781__auto___12813 = cljs.core.chunk_first.call(null,seq__12777_12812__$1);
{
var G__12814 = cljs.core.chunk_rest.call(null,seq__12777_12812__$1);
var G__12815 = c__9781__auto___12813;
var G__12816 = cljs.core.count.call(null,c__9781__auto___12813);
var G__12817 = 0;
seq__12777_12802 = G__12814;
chunk__12778_12803 = G__12815;
count__12779_12804 = G__12816;
i__12780_12805 = G__12817;
continue;
}
} else
{var n_12818 = cljs.core.first.call(null,seq__12777_12812__$1);
if(cljs.core.truth_(n_12818.propagationStopped))
{} else
{evt.currentTarget = n_12818;
goog.events.fireListeners(n_12818,evt.type,false,evt);
}
{
var G__12819 = cljs.core.next.call(null,seq__12777_12812__$1);
var G__12820 = null;
var G__12821 = 0;
var G__12822 = 0;
seq__12777_12802 = G__12819;
chunk__12778_12803 = G__12820;
count__12779_12804 = G__12821;
i__12780_12805 = G__12822;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3941__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__3941__auto__))
{return o.dispatchEvent;
} else
{return and__3941__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var seq__12829_12835 = cljs.core.seq.call(null,evt_map);
var chunk__12830_12836 = null;
var count__12831_12837 = 0;
var i__12832_12838 = 0;
while(true){
if((i__12832_12838 < count__12831_12837))
{var vec__12833_12839 = cljs.core._nth.call(null,chunk__12830_12836,i__12832_12838);
var k_12840 = cljs.core.nth.call(null,vec__12833_12839,0,null);
var v_12841 = cljs.core.nth.call(null,vec__12833_12839,1,null);
(evt[k_12840] = v_12841);
{
var G__12842 = seq__12829_12835;
var G__12843 = chunk__12830_12836;
var G__12844 = count__12831_12837;
var G__12845 = (i__12832_12838 + 1);
seq__12829_12835 = G__12842;
chunk__12830_12836 = G__12843;
count__12831_12837 = G__12844;
i__12832_12838 = G__12845;
continue;
}
} else
{var temp__4092__auto___12846 = cljs.core.seq.call(null,seq__12829_12835);
if(temp__4092__auto___12846)
{var seq__12829_12847__$1 = temp__4092__auto___12846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12829_12847__$1))
{var c__9781__auto___12848 = cljs.core.chunk_first.call(null,seq__12829_12847__$1);
{
var G__12849 = cljs.core.chunk_rest.call(null,seq__12829_12847__$1);
var G__12850 = c__9781__auto___12848;
var G__12851 = cljs.core.count.call(null,c__9781__auto___12848);
var G__12852 = 0;
seq__12829_12835 = G__12849;
chunk__12830_12836 = G__12850;
count__12831_12837 = G__12851;
i__12832_12838 = G__12852;
continue;
}
} else
{var vec__12834_12853 = cljs.core.first.call(null,seq__12829_12847__$1);
var k_12854 = cljs.core.nth.call(null,vec__12834_12853,0,null);
var v_12855 = cljs.core.nth.call(null,vec__12834_12853,1,null);
(evt[k_12854] = v_12855);
{
var G__12856 = cljs.core.next.call(null,seq__12829_12847__$1);
var G__12857 = null;
var G__12858 = 0;
var G__12859 = 0;
seq__12829_12835 = G__12856;
chunk__12830_12836 = G__12857;
count__12831_12837 = G__12858;
i__12832_12838 = G__12859;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__$1 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__12860_SHARP_){
return goog.events.getListeners(p1__12860_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
