goog.provide('sr_client.services');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('io.pedestal.app.protocols');
sr_client.services.receive_sse = (function receive_sse(app,event){
var message = cljs.reader.read_string.call(null,event.data);
return io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
});
sr_client.services.consume_effects = (function consume_effects(message,input_queue){
var body = cljs.core.pr_str.call(null,message);
var http = (new XMLHttpRequest());
http.open("POST","/msgs",true);
http.setRequestHeader("Content-type","application/edn");
return http.send(body);
});
goog.provide('sr_client.services.Services');

/**
* @constructor
* @param {*} app
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
sr_client.services.Services = (function (app,__meta,__extmap){
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
sr_client.services.Services.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9604__auto__){
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
sr_client.services.Services.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9609__auto__,k__9610__auto__){
var self__ = this;
return this__9609__auto__.cljs$core$ILookup$_lookup$arity$3(this__9609__auto__,k__9610__auto__,null);
});
sr_client.services.Services.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9611__auto__,k11533,else__9612__auto__){
var self__ = this;
if((k11533 === "\uFDD0:app"))
{return self__.app;
} else
{if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k11533,else__9612__auto__);
} else
{return null;
}
}
});
sr_client.services.Services.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9616__auto__,k__9617__auto__,G__11532){
var self__ = this;
var pred__11535 = cljs.core.identical_QMARK_;
var expr__11536 = k__9617__auto__;
if(pred__11535.call(null,"\uFDD0:app",expr__11536))
{return (new sr_client.services.Services(G__11532,self__.__meta,self__.__extmap,null));
} else
{return (new sr_client.services.Services(self__.app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9617__auto__,G__11532),null));
}
});
sr_client.services.Services.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9623__auto__,writer__9624__auto__,opts__9625__auto__){
var self__ = this;
var pr_pair__9626__auto__ = (function (keyval__9627__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9624__auto__,cljs.core.pr_writer,""," ","",opts__9625__auto__,keyval__9627__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__9624__auto__,pr_pair__9626__auto__,"#sr-client.services.Services{",", ","}",opts__9625__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:app",self__.app)], true),self__.__extmap));
});
sr_client.services.Services.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9614__auto__,entry__9615__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__9615__auto__))
{return this__9614__auto__.cljs$core$IAssociative$_assoc$arity$3(this__9614__auto__,cljs.core._nth.call(null,entry__9615__auto__,0),cljs.core._nth.call(null,entry__9615__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__9614__auto__,entry__9615__auto__);
}
});
sr_client.services.Services.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9621__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:app",self__.app)], true),self__.__extmap));
});
sr_client.services.Services.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9613__auto__){
var self__ = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});
sr_client.services.Services.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9605__auto__,other__9606__auto__){
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
sr_client.services.Services.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9608__auto__,G__11532){
var self__ = this;
return (new sr_client.services.Services(self__.app,G__11532,self__.__extmap,self__.__hash));
});
sr_client.services.Services.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9607__auto__){
var self__ = this;
return self__.__meta;
});
sr_client.services.Services.prototype.io$pedestal$app$protocols$Activity$ = true;
sr_client.services.Services.prototype.io$pedestal$app$protocols$Activity$start$arity$1 = (function (this$){
var self__ = this;
var event_source = (new EventSource("/msgs"));
return event_source.addEventListener("msg",(function (e){
return sr_client.services.receive_sse.call(null,self__.app,e);
}),false);
});
sr_client.services.Services.prototype.io$pedestal$app$protocols$Activity$stop$arity$1 = (function (this$){
var self__ = this;
return null;
});
sr_client.services.Services.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9618__auto__,k__9619__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:app",null], true),k__9619__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9618__auto__),self__.__meta),k__9619__auto__);
} else
{return (new sr_client.services.Services(self__.app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9619__auto__)),null));
}
});
sr_client.services.Services.cljs$lang$type = true;
sr_client.services.Services.cljs$lang$ctorPrSeq = (function (this__9643__auto__){
return cljs.core.list.call(null,"sr-client.services/Services");
});
sr_client.services.Services.cljs$lang$ctorPrWriter = (function (this__9643__auto__,writer__9644__auto__){
return cljs.core._write.call(null,writer__9644__auto__,"sr-client.services/Services");
});
sr_client.services.__GT_Services = (function __GT_Services(app){
return (new sr_client.services.Services(app));
});
sr_client.services.map__GT_Services = (function map__GT_Services(G__11534){
return (new sr_client.services.Services((new cljs.core.Keyword("\uFDD0:app")).call(null,G__11534),null,cljs.core.dissoc.call(null,G__11534,"\uFDD0:app")));
});
