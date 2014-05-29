goog.provide('io.pedestal.app.queue');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.protocols');
io.pedestal.app.queue.pop_message_internal = (function pop_message_internal(queue_state){
var queues = (new cljs.core.Keyword("\uFDD0:queues")).call(null,queue_state);
var priority = ((cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0:high")).call(null,queues)))?"\uFDD0:high":"\uFDD0:low");
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,queue_state,"\uFDD0:item",cljs.core.first.call(null,priority.call(null,queues))),cljs.core.PersistentVector.fromArray(["\uFDD0:queues",priority], true),(function (p1__10503_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__10503_SHARP_));
}));
});
io.pedestal.app.queue.not_empty_QMARK_ = (function not_empty_QMARK_(queue){
var or__3943__auto__ = cljs.core.seq.call(null,cljs.core.get_in.call(null,queue,cljs.core.PersistentVector.fromArray(["\uFDD0:queues","\uFDD0:high"], true)));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.seq.call(null,cljs.core.get_in.call(null,queue,cljs.core.PersistentVector.fromArray(["\uFDD0:queues","\uFDD0:low"], true)));
}
});
io.pedestal.app.queue.process_next_item = (function process_next_item(queue,f){
if(cljs.core.truth_(io.pedestal.app.queue.not_empty_QMARK_.call(null,cljs.core.deref.call(null,queue))))
{var temp__4092__auto__ = (new cljs.core.Keyword("\uFDD0:item")).call(null,cljs.core.swap_BANG_.call(null,queue,io.pedestal.app.queue.pop_message_internal));
if(cljs.core.truth_(temp__4092__auto__))
{var item = temp__4092__auto__;
return io.pedestal.app.util.platform.log_exceptions.call(null,f,item);
} else
{return null;
}
} else
{return io.pedestal.app.util.platform.create_timeout.call(null,0,(function (){
return process_next_item.call(null,queue,f);
}));
}
});
io.pedestal.app.queue.count_queues = (function count_queues(queues){
return (cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0:high")).call(null,queues)) + cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0:low")).call(null,queues)));
});
goog.provide('io.pedestal.app.queue.AppMessageQueue');

/**
* @constructor
* @param {*} state
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
io.pedestal.app.queue.AppMessageQueue = (function (state,__meta,__extmap){
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9604__auto__){
var self__ = this;
var h__9476__auto__ = self__.__hash;
if(!((h__9476__auto__ == null)))
{return h__9476__auto__;
} else
{var h__9476__auto____$1 = cljs.core.hash_imap.call(null,this__9604__auto__);
self__.__hash = h__9476__auto____$1;
return h__9476__auto____$1;
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$TakeMessage$ = true;
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$TakeMessage$pop_message$arity$1 = (function (this$){
var self__ = this;
return (new cljs.core.Keyword("\uFDD0:item")).call(null,cljs.core.swap_BANG_.call(null,self__.state,io.pedestal.app.queue.pop_message_internal));
});
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$TakeMessage$take_message$arity$2 = (function (this$,f){
var self__ = this;
return io.pedestal.app.queue.process_next_item.call(null,self__.state,f);
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9609__auto__,k__9610__auto__){
var self__ = this;
return this__9609__auto__.cljs$core$ILookup$_lookup$arity$3(this__9609__auto__,k__9610__auto__,null);
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9611__auto__,k10505,else__9612__auto__){
var self__ = this;
if((k10505 === "\uFDD0:state"))
{return self__.state;
} else
{if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k10505,else__9612__auto__);
} else
{return null;
}
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9616__auto__,k__9617__auto__,G__10504){
var self__ = this;
var pred__10507 = cljs.core.identical_QMARK_;
var expr__10508 = k__9617__auto__;
if(pred__10507.call(null,"\uFDD0:state",expr__10508))
{return (new io.pedestal.app.queue.AppMessageQueue(G__10504,self__.__meta,self__.__extmap,null));
} else
{return (new io.pedestal.app.queue.AppMessageQueue(self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9617__auto__,G__10504),null));
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9623__auto__,writer__9624__auto__,opts__9625__auto__){
var self__ = this;
var pr_pair__9626__auto__ = (function (keyval__9627__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9624__auto__,cljs.core.pr_writer,""," ","",opts__9625__auto__,keyval__9627__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__9624__auto__,pr_pair__9626__auto__,"#io.pedestal.app.queue.AppMessageQueue{",", ","}",opts__9625__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:state",self__.state)], true),self__.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9614__auto__,entry__9615__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__9615__auto__))
{return this__9614__auto__.cljs$core$IAssociative$_assoc$arity$3(this__9614__auto__,cljs.core._nth.call(null,entry__9615__auto__,0),cljs.core._nth.call(null,entry__9615__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__9614__auto__,entry__9615__auto__);
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9621__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:state",self__.state)], true),self__.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9613__auto__){
var self__ = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$PutMessage$ = true;
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$PutMessage$put_message$arity$2 = (function (this$,message){
var self__ = this;
var priority = ((cljs.core._EQ_.call(null,io.pedestal.app.messages.priority.call(null,message),"\uFDD0:high"))?"\uFDD0:high":"\uFDD0:low");
var queues = (new cljs.core.Keyword("\uFDD0:queues")).call(null,cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,cljs.core.PersistentVector.fromArray(["\uFDD0:queues",priority], true),cljs.core.conj,message));
return io.pedestal.app.queue.count_queues.call(null,queues);
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9605__auto__,other__9606__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__9606__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__9605__auto__.constructor === other__9606__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__9605__auto__,other__9606__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9608__auto__,G__10504){
var self__ = this;
return (new io.pedestal.app.queue.AppMessageQueue(self__.state,G__10504,self__.__extmap,self__.__hash));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9607__auto__){
var self__ = this;
return self__.__meta;
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9618__auto__,k__9619__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:state",null], true),k__9619__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9618__auto__),self__.__meta),k__9619__auto__);
} else
{return (new io.pedestal.app.queue.AppMessageQueue(self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9619__auto__)),null));
}
});
io.pedestal.app.queue.AppMessageQueue.cljs$lang$type = true;
io.pedestal.app.queue.AppMessageQueue.cljs$lang$ctorPrSeq = (function (this__9643__auto__){
return cljs.core.list.call(null,"io.pedestal.app.queue/AppMessageQueue");
});
io.pedestal.app.queue.AppMessageQueue.cljs$lang$ctorPrWriter = (function (this__9643__auto__,writer__9644__auto__){
return cljs.core._write.call(null,writer__9644__auto__,"io.pedestal.app.queue/AppMessageQueue");
});
io.pedestal.app.queue.__GT_AppMessageQueue = (function __GT_AppMessageQueue(state){
return (new io.pedestal.app.queue.AppMessageQueue(state));
});
io.pedestal.app.queue.map__GT_AppMessageQueue = (function map__GT_AppMessageQueue(G__10506){
return (new io.pedestal.app.queue.AppMessageQueue((new cljs.core.Keyword("\uFDD0:state")).call(null,G__10506),null,cljs.core.dissoc.call(null,G__10506,"\uFDD0:state")));
});
io.pedestal.app.queue.queue_length = (function queue_length(app_message_queue){
var queues = (new cljs.core.Keyword("\uFDD0:queues")).call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0:state")).call(null,app_message_queue)));
return io.pedestal.app.queue.count_queues.call(null,queues);
});
io.pedestal.app.queue.queue = (function queue(name){
return io.pedestal.app.queue.__GT_AppMessageQueue.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:queues",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:high",cljs.core.PersistentVector.EMPTY,"\uFDD0:low",cljs.core.PersistentVector.EMPTY], true),"\uFDD0:item",null,"\uFDD0:name",name], true)));
});
/**
* Recursively process each item on the given queue with the
* provided function.
*/
io.pedestal.app.queue.consume_queue = (function consume_queue(queue,f){
return io.pedestal.app.protocols.take_message.call(null,queue,(function (message){
f.call(null,message);
return consume_queue.call(null,queue,f);
}));
});
