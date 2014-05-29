goog.provide('sr_client.simulated.services');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.protocols');
sr_client.simulated.services.players = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["GearHead1984",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:gear",0], true),"Stefan",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:gear",0], true)], true));
sr_client.simulated.services.shift_gear = (function shift_gear(key,t,input_queue){
io.pedestal.app.protocols.put_message.call(null,input_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:swap",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:other-players",key], true),"\uFDD0:value",cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,sr_client.simulated.services.players,cljs.core.update_in,cljs.core.PersistentVector.fromArray([key,"\uFDD0:gear"], true),cljs.core.inc),cljs.core.PersistentVector.fromArray([key], true))], true));
return io.pedestal.app.util.platform.create_timeout.call(null,t,(function (){
return shift_gear.call(null,key,t,input_queue);
}));
});
sr_client.simulated.services.receive_messages = (function receive_messages(input_queue){
sr_client.simulated.services.shift_gear.call(null,"GearHead1984",2000,input_queue);
return sr_client.simulated.services.shift_gear.call(null,"Stefan",5000,input_queue);
});
sr_client.simulated.services.consume_effects = (function consume_effects(message,input_queue){
return console.log([cljs.core.str("Sending current player to server:"),cljs.core.str(message)].join(''));
});
goog.provide('sr_client.simulated.services.MockServices');

/**
* @constructor
* @param {*} app
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
sr_client.simulated.services.MockServices = (function (app,__meta,__extmap){
this.app = app;
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
sr_client.simulated.services.MockServices.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9604__auto__){
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
sr_client.simulated.services.MockServices.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9609__auto__,k__9610__auto__){
var self__ = this;
return this__9609__auto__.cljs$core$ILookup$_lookup$arity$3(this__9609__auto__,k__9610__auto__,null);
});
sr_client.simulated.services.MockServices.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9611__auto__,k11491,else__9612__auto__){
var self__ = this;
if((k11491 === "\uFDD0:app"))
{return self__.app;
} else
{if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k11491,else__9612__auto__);
} else
{return null;
}
}
});
sr_client.simulated.services.MockServices.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9616__auto__,k__9617__auto__,G__11490){
var self__ = this;
var pred__11493 = cljs.core.identical_QMARK_;
var expr__11494 = k__9617__auto__;
if(pred__11493.call(null,"\uFDD0:app",expr__11494))
{return (new sr_client.simulated.services.MockServices(G__11490,self__.__meta,self__.__extmap,null));
} else
{return (new sr_client.simulated.services.MockServices(self__.app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9617__auto__,G__11490),null));
}
});
sr_client.simulated.services.MockServices.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9623__auto__,writer__9624__auto__,opts__9625__auto__){
var self__ = this;
var pr_pair__9626__auto__ = (function (keyval__9627__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9624__auto__,cljs.core.pr_writer,""," ","",opts__9625__auto__,keyval__9627__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__9624__auto__,pr_pair__9626__auto__,"#sr-client.simulated.services.MockServices{",", ","}",opts__9625__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:app",self__.app)], true),self__.__extmap));
});
sr_client.simulated.services.MockServices.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9614__auto__,entry__9615__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__9615__auto__))
{return this__9614__auto__.cljs$core$IAssociative$_assoc$arity$3(this__9614__auto__,cljs.core._nth.call(null,entry__9615__auto__,0),cljs.core._nth.call(null,entry__9615__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__9614__auto__,entry__9615__auto__);
}
});
sr_client.simulated.services.MockServices.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9621__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:app",self__.app)], true),self__.__extmap));
});
sr_client.simulated.services.MockServices.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9613__auto__){
var self__ = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});
sr_client.simulated.services.MockServices.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9605__auto__,other__9606__auto__){
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
sr_client.simulated.services.MockServices.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9608__auto__,G__11490){
var self__ = this;
return (new sr_client.simulated.services.MockServices(self__.app,G__11490,self__.__extmap,self__.__hash));
});
sr_client.simulated.services.MockServices.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9607__auto__){
var self__ = this;
return self__.__meta;
});
sr_client.simulated.services.MockServices.prototype.io$pedestal$app$protocols$Activity$ = true;
sr_client.simulated.services.MockServices.prototype.io$pedestal$app$protocols$Activity$start$arity$1 = (function (this$){
var self__ = this;
return sr_client.simulated.services.receive_messages.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,self__.app));
});
sr_client.simulated.services.MockServices.prototype.io$pedestal$app$protocols$Activity$stop$arity$1 = (function (this$){
var self__ = this;
return null;
});
sr_client.simulated.services.MockServices.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9618__auto__,k__9619__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:app",null], true),k__9619__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9618__auto__),self__.__meta),k__9619__auto__);
} else
{return (new sr_client.simulated.services.MockServices(self__.app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9619__auto__)),null));
}
});
sr_client.simulated.services.MockServices.cljs$lang$type = true;
sr_client.simulated.services.MockServices.cljs$lang$ctorPrSeq = (function (this__9643__auto__){
return cljs.core.list.call(null,"sr-client.simulated.services/MockServices");
});
sr_client.simulated.services.MockServices.cljs$lang$ctorPrWriter = (function (this__9643__auto__,writer__9644__auto__){
return cljs.core._write.call(null,writer__9644__auto__,"sr-client.simulated.services/MockServices");
});
sr_client.simulated.services.__GT_MockServices = (function __GT_MockServices(app){
return (new sr_client.simulated.services.MockServices(app));
});
sr_client.simulated.services.map__GT_MockServices = (function map__GT_MockServices(G__11492){
return (new sr_client.simulated.services.MockServices((new cljs.core.Keyword("\uFDD0:app")).call(null,G__11492),null,cljs.core.dissoc.call(null,G__11492,"\uFDD0:app")));
});
