goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_13076 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_13077 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_13078 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_13077,table_section_wrapper_13077,opt_wrapper_13076,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_13078,table_section_wrapper_13077,cell_wrapper_13078,opt_wrapper_13076,table_section_wrapper_13077,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_13077]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,tag_name,"table");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?(function (){var and__3941__auto__ = div.firstChild;
if(cljs.core.truth_(and__3941__auto__))
{return div.firstChild.childNodes;
} else
{return and__3941__auto__;
}
})():(((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,start_wrap,"<table>");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var seq__13083 = cljs.core.seq.call(null,tbody);
var chunk__13084 = null;
var count__13085 = 0;
var i__13086 = 0;
while(true){
if((i__13086 < count__13085))
{var child = cljs.core._nth.call(null,chunk__13084,i__13086);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__13087 = seq__13083;
var G__13088 = chunk__13084;
var G__13089 = count__13085;
var G__13090 = (i__13086 + 1);
seq__13083 = G__13087;
chunk__13084 = G__13088;
count__13085 = G__13089;
i__13086 = G__13090;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13083);
if(temp__4092__auto__)
{var seq__13083__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13083__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__13083__$1);
{
var G__13091 = cljs.core.chunk_rest.call(null,seq__13083__$1);
var G__13092 = c__9781__auto__;
var G__13093 = cljs.core.count.call(null,c__9781__auto__);
var G__13094 = 0;
seq__13083 = G__13091;
chunk__13084 = G__13092;
count__13085 = G__13093;
i__13086 = G__13094;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__13083__$1);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__13095 = cljs.core.next.call(null,seq__13083__$1);
var G__13096 = null;
var G__13097 = 0;
var G__13098 = 0;
seq__13083 = G__13095;
chunk__13084 = G__13096;
count__13085 = G__13097;
i__13086 = G__13098;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__13100 = cljs.core.get.call(null,domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__13100,0,null);
var start_wrap = cljs.core.nth.call(null,vec__13100,1,null);
var end_wrap = cljs.core.nth.call(null,vec__13100,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__13101 = wrapper.lastChild;
var G__13102 = (level - 1);
wrapper = G__13101;
level = G__13102;
continue;
}
} else
{return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3941__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3941__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3941__auto__ = content;
if(and__3941__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__9650__auto__ = (((content == null))?null:content);
return (function (){var or__3943__auto__ = (domina.nodes[goog.typeOf(x__9650__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.nodes["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3941__auto__ = nodeseq;
if(and__3941__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__9650__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3943__auto__ = (domina.single_node[goog.typeOf(x__9650__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.single_node["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3941__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3941__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3941__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__13103){
var mesg = cljs.core.seq(arglist__13103);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__13104){
var mesg = cljs.core.seq(arglist__13104);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t13108))
{goog.provide('domina.t13108');

/**
* @constructor
*/
domina.t13108 = (function (class_name,by_class,meta13109){
this.class_name = class_name;
this.by_class = by_class;
this.meta13109 = meta13109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t13108.cljs$lang$type = true;
domina.t13108.cljs$lang$ctorStr = "domina/t13108";
domina.t13108.cljs$lang$ctorPrWriter = (function (this__9591__auto__,writer__9592__auto__,opt__9593__auto__){
return cljs.core._write.call(null,writer__9592__auto__,"domina/t13108");
});
domina.t13108.prototype.domina$DomContent$ = true;
domina.t13108.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t13108.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t13108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13110){
var self__ = this;
return self__.meta13109;
});
domina.t13108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13110,meta13109__$1){
var self__ = this;
return (new domina.t13108(self__.class_name,self__.by_class,meta13109__$1));
});
domina.__GT_t13108 = (function __GT_t13108(class_name__$1,by_class__$1,meta13109){
return (new domina.t13108(class_name__$1,by_class__$1,meta13109));
});
} else
{}
return (new domina.t13108(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this, contents);
};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__13111){
var contents = cljs.core.seq(arglist__13111);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__13112_SHARP_){
return p1__13112_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__13113_SHARP_,p2__13114_SHARP_){
return goog.dom.insertChildAt(p1__13113_SHARP_,p2__13114_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13116_SHARP_,p2__13115_SHARP_){
return goog.dom.insertSiblingBefore(p2__13115_SHARP_,p1__13116_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13118_SHARP_,p2__13117_SHARP_){
return goog.dom.insertSiblingAfter(p2__13117_SHARP_,p1__13118_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13120_SHARP_,p2__13119_SHARP_){
return goog.dom.replaceNode(p2__13119_SHARP_,p1__13120_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__13125_13129 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13126_13130 = null;
var count__13127_13131 = 0;
var i__13128_13132 = 0;
while(true){
if((i__13128_13132 < count__13127_13131))
{var n_13133 = cljs.core._nth.call(null,chunk__13126_13130,i__13128_13132);
goog.style.setStyle(n_13133,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13134 = seq__13125_13129;
var G__13135 = chunk__13126_13130;
var G__13136 = count__13127_13131;
var G__13137 = (i__13128_13132 + 1);
seq__13125_13129 = G__13134;
chunk__13126_13130 = G__13135;
count__13127_13131 = G__13136;
i__13128_13132 = G__13137;
continue;
}
} else
{var temp__4092__auto___13138 = cljs.core.seq.call(null,seq__13125_13129);
if(temp__4092__auto___13138)
{var seq__13125_13139__$1 = temp__4092__auto___13138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13125_13139__$1))
{var c__9781__auto___13140 = cljs.core.chunk_first.call(null,seq__13125_13139__$1);
{
var G__13141 = cljs.core.chunk_rest.call(null,seq__13125_13139__$1);
var G__13142 = c__9781__auto___13140;
var G__13143 = cljs.core.count.call(null,c__9781__auto___13140);
var G__13144 = 0;
seq__13125_13129 = G__13141;
chunk__13126_13130 = G__13142;
count__13127_13131 = G__13143;
i__13128_13132 = G__13144;
continue;
}
} else
{var n_13145 = cljs.core.first.call(null,seq__13125_13139__$1);
goog.style.setStyle(n_13145,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13146 = cljs.core.next.call(null,seq__13125_13139__$1);
var G__13147 = null;
var G__13148 = 0;
var G__13149 = 0;
seq__13125_13129 = G__13146;
chunk__13126_13130 = G__13147;
count__13127_13131 = G__13148;
i__13128_13132 = G__13149;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13150){
var content = cljs.core.first(arglist__13150);
arglist__13150 = cljs.core.next(arglist__13150);
var name = cljs.core.first(arglist__13150);
var value = cljs.core.rest(arglist__13150);
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__13155_13159 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13156_13160 = null;
var count__13157_13161 = 0;
var i__13158_13162 = 0;
while(true){
if((i__13158_13162 < count__13157_13161))
{var n_13163 = cljs.core._nth.call(null,chunk__13156_13160,i__13158_13162);
n_13163.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13164 = seq__13155_13159;
var G__13165 = chunk__13156_13160;
var G__13166 = count__13157_13161;
var G__13167 = (i__13158_13162 + 1);
seq__13155_13159 = G__13164;
chunk__13156_13160 = G__13165;
count__13157_13161 = G__13166;
i__13158_13162 = G__13167;
continue;
}
} else
{var temp__4092__auto___13168 = cljs.core.seq.call(null,seq__13155_13159);
if(temp__4092__auto___13168)
{var seq__13155_13169__$1 = temp__4092__auto___13168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13155_13169__$1))
{var c__9781__auto___13170 = cljs.core.chunk_first.call(null,seq__13155_13169__$1);
{
var G__13171 = cljs.core.chunk_rest.call(null,seq__13155_13169__$1);
var G__13172 = c__9781__auto___13170;
var G__13173 = cljs.core.count.call(null,c__9781__auto___13170);
var G__13174 = 0;
seq__13155_13159 = G__13171;
chunk__13156_13160 = G__13172;
count__13157_13161 = G__13173;
i__13158_13162 = G__13174;
continue;
}
} else
{var n_13175 = cljs.core.first.call(null,seq__13155_13169__$1);
n_13175.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13176 = cljs.core.next.call(null,seq__13155_13169__$1);
var G__13177 = null;
var G__13178 = 0;
var G__13179 = 0;
seq__13155_13159 = G__13176;
chunk__13156_13160 = G__13177;
count__13157_13161 = G__13178;
i__13158_13162 = G__13179;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13180){
var content = cljs.core.first(arglist__13180);
arglist__13180 = cljs.core.next(arglist__13180);
var name = cljs.core.first(arglist__13180);
var value = cljs.core.rest(arglist__13180);
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__13185_13189 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13186_13190 = null;
var count__13187_13191 = 0;
var i__13188_13192 = 0;
while(true){
if((i__13188_13192 < count__13187_13191))
{var n_13193 = cljs.core._nth.call(null,chunk__13186_13190,i__13188_13192);
n_13193.removeAttribute(cljs.core.name.call(null,name));
{
var G__13194 = seq__13185_13189;
var G__13195 = chunk__13186_13190;
var G__13196 = count__13187_13191;
var G__13197 = (i__13188_13192 + 1);
seq__13185_13189 = G__13194;
chunk__13186_13190 = G__13195;
count__13187_13191 = G__13196;
i__13188_13192 = G__13197;
continue;
}
} else
{var temp__4092__auto___13198 = cljs.core.seq.call(null,seq__13185_13189);
if(temp__4092__auto___13198)
{var seq__13185_13199__$1 = temp__4092__auto___13198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13185_13199__$1))
{var c__9781__auto___13200 = cljs.core.chunk_first.call(null,seq__13185_13199__$1);
{
var G__13201 = cljs.core.chunk_rest.call(null,seq__13185_13199__$1);
var G__13202 = c__9781__auto___13200;
var G__13203 = cljs.core.count.call(null,c__9781__auto___13200);
var G__13204 = 0;
seq__13185_13189 = G__13201;
chunk__13186_13190 = G__13202;
count__13187_13191 = G__13203;
i__13188_13192 = G__13204;
continue;
}
} else
{var n_13205 = cljs.core.first.call(null,seq__13185_13199__$1);
n_13205.removeAttribute(cljs.core.name.call(null,name));
{
var G__13206 = cljs.core.next.call(null,seq__13185_13199__$1);
var G__13207 = null;
var G__13208 = 0;
var G__13209 = 0;
seq__13185_13189 = G__13206;
chunk__13186_13190 = G__13207;
count__13187_13191 = G__13208;
i__13188_13192 = G__13209;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__13211 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__13211,0,null);
var v = cljs.core.nth.call(null,vec__13211,1,null);
if(cljs.core.truth_((function (){var and__3941__auto__ = k;
if(cljs.core.truth_(and__3941__auto__))
{return v;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style))
{return domina.parse_style_attributes.call(null,style);
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__13212_SHARP_){
var attr = attrs__$1.item(p1__13212_SHARP_);
var value = attr.nodeValue;
if((function (){var and__3941__auto__ = cljs.core.not_EQ_.call(null,null,value);
if(and__3941__auto__)
{return cljs.core.not_EQ_.call(null,"",value);
} else
{return and__3941__auto__;
}
})())
{return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__13219_13225 = cljs.core.seq.call(null,styles);
var chunk__13220_13226 = null;
var count__13221_13227 = 0;
var i__13222_13228 = 0;
while(true){
if((i__13222_13228 < count__13221_13227))
{var vec__13223_13229 = cljs.core._nth.call(null,chunk__13220_13226,i__13222_13228);
var name_13230 = cljs.core.nth.call(null,vec__13223_13229,0,null);
var value_13231 = cljs.core.nth.call(null,vec__13223_13229,1,null);
domina.set_style_BANG_.call(null,content,name_13230,value_13231);
{
var G__13232 = seq__13219_13225;
var G__13233 = chunk__13220_13226;
var G__13234 = count__13221_13227;
var G__13235 = (i__13222_13228 + 1);
seq__13219_13225 = G__13232;
chunk__13220_13226 = G__13233;
count__13221_13227 = G__13234;
i__13222_13228 = G__13235;
continue;
}
} else
{var temp__4092__auto___13236 = cljs.core.seq.call(null,seq__13219_13225);
if(temp__4092__auto___13236)
{var seq__13219_13237__$1 = temp__4092__auto___13236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13219_13237__$1))
{var c__9781__auto___13238 = cljs.core.chunk_first.call(null,seq__13219_13237__$1);
{
var G__13239 = cljs.core.chunk_rest.call(null,seq__13219_13237__$1);
var G__13240 = c__9781__auto___13238;
var G__13241 = cljs.core.count.call(null,c__9781__auto___13238);
var G__13242 = 0;
seq__13219_13225 = G__13239;
chunk__13220_13226 = G__13240;
count__13221_13227 = G__13241;
i__13222_13228 = G__13242;
continue;
}
} else
{var vec__13224_13243 = cljs.core.first.call(null,seq__13219_13237__$1);
var name_13244 = cljs.core.nth.call(null,vec__13224_13243,0,null);
var value_13245 = cljs.core.nth.call(null,vec__13224_13243,1,null);
domina.set_style_BANG_.call(null,content,name_13244,value_13245);
{
var G__13246 = cljs.core.next.call(null,seq__13219_13237__$1);
var G__13247 = null;
var G__13248 = 0;
var G__13249 = 0;
seq__13219_13225 = G__13246;
chunk__13220_13226 = G__13247;
count__13221_13227 = G__13248;
i__13222_13228 = G__13249;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__13256_13262 = cljs.core.seq.call(null,attrs);
var chunk__13257_13263 = null;
var count__13258_13264 = 0;
var i__13259_13265 = 0;
while(true){
if((i__13259_13265 < count__13258_13264))
{var vec__13260_13266 = cljs.core._nth.call(null,chunk__13257_13263,i__13259_13265);
var name_13267 = cljs.core.nth.call(null,vec__13260_13266,0,null);
var value_13268 = cljs.core.nth.call(null,vec__13260_13266,1,null);
domina.set_attr_BANG_.call(null,content,name_13267,value_13268);
{
var G__13269 = seq__13256_13262;
var G__13270 = chunk__13257_13263;
var G__13271 = count__13258_13264;
var G__13272 = (i__13259_13265 + 1);
seq__13256_13262 = G__13269;
chunk__13257_13263 = G__13270;
count__13258_13264 = G__13271;
i__13259_13265 = G__13272;
continue;
}
} else
{var temp__4092__auto___13273 = cljs.core.seq.call(null,seq__13256_13262);
if(temp__4092__auto___13273)
{var seq__13256_13274__$1 = temp__4092__auto___13273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13256_13274__$1))
{var c__9781__auto___13275 = cljs.core.chunk_first.call(null,seq__13256_13274__$1);
{
var G__13276 = cljs.core.chunk_rest.call(null,seq__13256_13274__$1);
var G__13277 = c__9781__auto___13275;
var G__13278 = cljs.core.count.call(null,c__9781__auto___13275);
var G__13279 = 0;
seq__13256_13262 = G__13276;
chunk__13257_13263 = G__13277;
count__13258_13264 = G__13278;
i__13259_13265 = G__13279;
continue;
}
} else
{var vec__13261_13280 = cljs.core.first.call(null,seq__13256_13274__$1);
var name_13281 = cljs.core.nth.call(null,vec__13261_13280,0,null);
var value_13282 = cljs.core.nth.call(null,vec__13261_13280,1,null);
domina.set_attr_BANG_.call(null,content,name_13281,value_13282);
{
var G__13283 = cljs.core.next.call(null,seq__13256_13274__$1);
var G__13284 = null;
var G__13285 = 0;
var G__13286 = 0;
seq__13256_13262 = G__13283;
chunk__13257_13263 = G__13284;
count__13258_13264 = G__13285;
i__13259_13265 = G__13286;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__13291_13295 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13292_13296 = null;
var count__13293_13297 = 0;
var i__13294_13298 = 0;
while(true){
if((i__13294_13298 < count__13293_13297))
{var node_13299 = cljs.core._nth.call(null,chunk__13292_13296,i__13294_13298);
goog.dom.classes.add(node_13299,class$);
{
var G__13300 = seq__13291_13295;
var G__13301 = chunk__13292_13296;
var G__13302 = count__13293_13297;
var G__13303 = (i__13294_13298 + 1);
seq__13291_13295 = G__13300;
chunk__13292_13296 = G__13301;
count__13293_13297 = G__13302;
i__13294_13298 = G__13303;
continue;
}
} else
{var temp__4092__auto___13304 = cljs.core.seq.call(null,seq__13291_13295);
if(temp__4092__auto___13304)
{var seq__13291_13305__$1 = temp__4092__auto___13304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13291_13305__$1))
{var c__9781__auto___13306 = cljs.core.chunk_first.call(null,seq__13291_13305__$1);
{
var G__13307 = cljs.core.chunk_rest.call(null,seq__13291_13305__$1);
var G__13308 = c__9781__auto___13306;
var G__13309 = cljs.core.count.call(null,c__9781__auto___13306);
var G__13310 = 0;
seq__13291_13295 = G__13307;
chunk__13292_13296 = G__13308;
count__13293_13297 = G__13309;
i__13294_13298 = G__13310;
continue;
}
} else
{var node_13311 = cljs.core.first.call(null,seq__13291_13305__$1);
goog.dom.classes.add(node_13311,class$);
{
var G__13312 = cljs.core.next.call(null,seq__13291_13305__$1);
var G__13313 = null;
var G__13314 = 0;
var G__13315 = 0;
seq__13291_13295 = G__13312;
chunk__13292_13296 = G__13313;
count__13293_13297 = G__13314;
i__13294_13298 = G__13315;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__13320_13324 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13321_13325 = null;
var count__13322_13326 = 0;
var i__13323_13327 = 0;
while(true){
if((i__13323_13327 < count__13322_13326))
{var node_13328 = cljs.core._nth.call(null,chunk__13321_13325,i__13323_13327);
goog.dom.classes.remove(node_13328,class$);
{
var G__13329 = seq__13320_13324;
var G__13330 = chunk__13321_13325;
var G__13331 = count__13322_13326;
var G__13332 = (i__13323_13327 + 1);
seq__13320_13324 = G__13329;
chunk__13321_13325 = G__13330;
count__13322_13326 = G__13331;
i__13323_13327 = G__13332;
continue;
}
} else
{var temp__4092__auto___13333 = cljs.core.seq.call(null,seq__13320_13324);
if(temp__4092__auto___13333)
{var seq__13320_13334__$1 = temp__4092__auto___13333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13320_13334__$1))
{var c__9781__auto___13335 = cljs.core.chunk_first.call(null,seq__13320_13334__$1);
{
var G__13336 = cljs.core.chunk_rest.call(null,seq__13320_13334__$1);
var G__13337 = c__9781__auto___13335;
var G__13338 = cljs.core.count.call(null,c__9781__auto___13335);
var G__13339 = 0;
seq__13320_13324 = G__13336;
chunk__13321_13325 = G__13337;
count__13322_13326 = G__13338;
i__13323_13327 = G__13339;
continue;
}
} else
{var node_13340 = cljs.core.first.call(null,seq__13320_13334__$1);
goog.dom.classes.remove(node_13340,class$);
{
var G__13341 = cljs.core.next.call(null,seq__13320_13334__$1);
var G__13342 = null;
var G__13343 = 0;
var G__13344 = 0;
seq__13320_13324 = G__13341;
chunk__13321_13325 = G__13342;
count__13322_13326 = G__13343;
i__13323_13327 = G__13344;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_13353__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__13349_13354 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13350_13355 = null;
var count__13351_13356 = 0;
var i__13352_13357 = 0;
while(true){
if((i__13352_13357 < count__13351_13356))
{var node_13358 = cljs.core._nth.call(null,chunk__13350_13355,i__13352_13357);
goog.dom.classes.set(node_13358,classes_13353__$1);
{
var G__13359 = seq__13349_13354;
var G__13360 = chunk__13350_13355;
var G__13361 = count__13351_13356;
var G__13362 = (i__13352_13357 + 1);
seq__13349_13354 = G__13359;
chunk__13350_13355 = G__13360;
count__13351_13356 = G__13361;
i__13352_13357 = G__13362;
continue;
}
} else
{var temp__4092__auto___13363 = cljs.core.seq.call(null,seq__13349_13354);
if(temp__4092__auto___13363)
{var seq__13349_13364__$1 = temp__4092__auto___13363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13349_13364__$1))
{var c__9781__auto___13365 = cljs.core.chunk_first.call(null,seq__13349_13364__$1);
{
var G__13366 = cljs.core.chunk_rest.call(null,seq__13349_13364__$1);
var G__13367 = c__9781__auto___13365;
var G__13368 = cljs.core.count.call(null,c__9781__auto___13365);
var G__13369 = 0;
seq__13349_13354 = G__13366;
chunk__13350_13355 = G__13367;
count__13351_13356 = G__13368;
i__13352_13357 = G__13369;
continue;
}
} else
{var node_13370 = cljs.core.first.call(null,seq__13349_13364__$1);
goog.dom.classes.set(node_13370,classes_13353__$1);
{
var G__13371 = cljs.core.next.call(null,seq__13349_13364__$1);
var G__13372 = null;
var G__13373 = 0;
var G__13374 = 0;
seq__13349_13354 = G__13371;
chunk__13350_13355 = G__13372;
count__13351_13356 = G__13373;
i__13352_13357 = G__13374;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__13379_13383 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13380_13384 = null;
var count__13381_13385 = 0;
var i__13382_13386 = 0;
while(true){
if((i__13382_13386 < count__13381_13385))
{var node_13387 = cljs.core._nth.call(null,chunk__13380_13384,i__13382_13386);
goog.dom.setTextContent(node_13387,value);
{
var G__13388 = seq__13379_13383;
var G__13389 = chunk__13380_13384;
var G__13390 = count__13381_13385;
var G__13391 = (i__13382_13386 + 1);
seq__13379_13383 = G__13388;
chunk__13380_13384 = G__13389;
count__13381_13385 = G__13390;
i__13382_13386 = G__13391;
continue;
}
} else
{var temp__4092__auto___13392 = cljs.core.seq.call(null,seq__13379_13383);
if(temp__4092__auto___13392)
{var seq__13379_13393__$1 = temp__4092__auto___13392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13379_13393__$1))
{var c__9781__auto___13394 = cljs.core.chunk_first.call(null,seq__13379_13393__$1);
{
var G__13395 = cljs.core.chunk_rest.call(null,seq__13379_13393__$1);
var G__13396 = c__9781__auto___13394;
var G__13397 = cljs.core.count.call(null,c__9781__auto___13394);
var G__13398 = 0;
seq__13379_13383 = G__13395;
chunk__13380_13384 = G__13396;
count__13381_13385 = G__13397;
i__13382_13386 = G__13398;
continue;
}
} else
{var node_13399 = cljs.core.first.call(null,seq__13379_13393__$1);
goog.dom.setTextContent(node_13399,value);
{
var G__13400 = cljs.core.next.call(null,seq__13379_13393__$1);
var G__13401 = null;
var G__13402 = 0;
var G__13403 = 0;
seq__13379_13383 = G__13400;
chunk__13380_13384 = G__13401;
count__13381_13385 = G__13402;
i__13382_13386 = G__13403;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__13408_13412 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13409_13413 = null;
var count__13410_13414 = 0;
var i__13411_13415 = 0;
while(true){
if((i__13411_13415 < count__13410_13414))
{var node_13416 = cljs.core._nth.call(null,chunk__13409_13413,i__13411_13415);
goog.dom.forms.setValue(node_13416,value);
{
var G__13417 = seq__13408_13412;
var G__13418 = chunk__13409_13413;
var G__13419 = count__13410_13414;
var G__13420 = (i__13411_13415 + 1);
seq__13408_13412 = G__13417;
chunk__13409_13413 = G__13418;
count__13410_13414 = G__13419;
i__13411_13415 = G__13420;
continue;
}
} else
{var temp__4092__auto___13421 = cljs.core.seq.call(null,seq__13408_13412);
if(temp__4092__auto___13421)
{var seq__13408_13422__$1 = temp__4092__auto___13421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13408_13422__$1))
{var c__9781__auto___13423 = cljs.core.chunk_first.call(null,seq__13408_13422__$1);
{
var G__13424 = cljs.core.chunk_rest.call(null,seq__13408_13422__$1);
var G__13425 = c__9781__auto___13423;
var G__13426 = cljs.core.count.call(null,c__9781__auto___13423);
var G__13427 = 0;
seq__13408_13412 = G__13424;
chunk__13409_13413 = G__13425;
count__13410_13414 = G__13426;
i__13411_13415 = G__13427;
continue;
}
} else
{var node_13428 = cljs.core.first.call(null,seq__13408_13422__$1);
goog.dom.forms.setValue(node_13428,value);
{
var G__13429 = cljs.core.next.call(null,seq__13408_13422__$1);
var G__13430 = null;
var G__13431 = 0;
var G__13432 = 0;
seq__13408_13412 = G__13429;
chunk__13409_13413 = G__13430;
count__13410_13414 = G__13431;
i__13411_13415 = G__13432;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3941__auto__ = allows_inner_html_QMARK_;
if(and__3941__auto__)
{var and__3941__auto____$1 = (function (){var or__3943__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3941__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{var value_13443 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13439_13444 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13440_13445 = null;
var count__13441_13446 = 0;
var i__13442_13447 = 0;
while(true){
if((i__13442_13447 < count__13441_13446))
{var node_13448 = cljs.core._nth.call(null,chunk__13440_13445,i__13442_13447);
goog.events.removeAll(node_13448);
node_13448.innerHTML = value_13443;
{
var G__13449 = seq__13439_13444;
var G__13450 = chunk__13440_13445;
var G__13451 = count__13441_13446;
var G__13452 = (i__13442_13447 + 1);
seq__13439_13444 = G__13449;
chunk__13440_13445 = G__13450;
count__13441_13446 = G__13451;
i__13442_13447 = G__13452;
continue;
}
} else
{var temp__4092__auto___13453 = cljs.core.seq.call(null,seq__13439_13444);
if(temp__4092__auto___13453)
{var seq__13439_13454__$1 = temp__4092__auto___13453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13439_13454__$1))
{var c__9781__auto___13455 = cljs.core.chunk_first.call(null,seq__13439_13454__$1);
{
var G__13456 = cljs.core.chunk_rest.call(null,seq__13439_13454__$1);
var G__13457 = c__9781__auto___13455;
var G__13458 = cljs.core.count.call(null,c__9781__auto___13455);
var G__13459 = 0;
seq__13439_13444 = G__13456;
chunk__13440_13445 = G__13457;
count__13441_13446 = G__13458;
i__13442_13447 = G__13459;
continue;
}
} else
{var node_13460 = cljs.core.first.call(null,seq__13439_13454__$1);
goog.events.removeAll(node_13460);
node_13460.innerHTML = value_13443;
{
var G__13461 = cljs.core.next.call(null,seq__13439_13454__$1);
var G__13462 = null;
var G__13463 = 0;
var G__13464 = 0;
seq__13439_13444 = G__13461;
chunk__13440_13445 = G__13462;
count__13441_13446 = G__13463;
i__13442_13447 = G__13464;
continue;
}
}
} else
{}
}
break;
}
}catch (e13438){if((e13438 instanceof Error))
{var e_13465 = e13438;
domina.replace_children_BANG_.call(null,content,value_13443);
} else
{if("\uFDD0:else")
{throw e13438;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3941__auto__ = bubble;
if(cljs.core.truth_(and__3941__auto__))
{return (value == null);
} else
{return and__3941__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;
return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3943__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__13472_13476 = cljs.core.seq.call(null,children);
var chunk__13473_13477 = null;
var count__13474_13478 = 0;
var i__13475_13479 = 0;
while(true){
if((i__13475_13479 < count__13474_13478))
{var child_13480 = cljs.core._nth.call(null,chunk__13473_13477,i__13475_13479);
frag.appendChild(child_13480);
{
var G__13481 = seq__13472_13476;
var G__13482 = chunk__13473_13477;
var G__13483 = count__13474_13478;
var G__13484 = (i__13475_13479 + 1);
seq__13472_13476 = G__13481;
chunk__13473_13477 = G__13482;
count__13474_13478 = G__13483;
i__13475_13479 = G__13484;
continue;
}
} else
{var temp__4092__auto___13485 = cljs.core.seq.call(null,seq__13472_13476);
if(temp__4092__auto___13485)
{var seq__13472_13486__$1 = temp__4092__auto___13485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13472_13486__$1))
{var c__9781__auto___13487 = cljs.core.chunk_first.call(null,seq__13472_13486__$1);
{
var G__13488 = cljs.core.chunk_rest.call(null,seq__13472_13486__$1);
var G__13489 = c__9781__auto___13487;
var G__13490 = cljs.core.count.call(null,c__9781__auto___13487);
var G__13491 = 0;
seq__13472_13476 = G__13488;
chunk__13473_13477 = G__13489;
count__13474_13478 = G__13490;
i__13475_13479 = G__13491;
continue;
}
} else
{var child_13492 = cljs.core.first.call(null,seq__13472_13486__$1);
frag.appendChild(child_13492);
{
var G__13493 = cljs.core.next.call(null,seq__13472_13486__$1);
var G__13494 = null;
var G__13495 = 0;
var G__13496 = 0;
seq__13472_13476 = G__13493;
chunk__13473_13477 = G__13494;
count__13474_13478 = G__13495;
i__13475_13479 = G__13496;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__13466_SHARP_,p2__13467_SHARP_){
return f.call(null,p1__13466_SHARP_,p2__13467_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3941__auto__ = obj;
if(cljs.core.truth_(and__3941__auto__))
{return obj.length;
} else
{return and__3941__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__13498 = list_thing;
if(G__13498)
{if((function (){var or__3943__auto__ = (G__13498.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13498.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13498.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13498);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13498);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0:default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__13499 = content;
if(G__13499)
{if((function (){var or__3943__auto__ = (G__13499.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13499.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13499.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13499);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13499);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0:default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__13500 = content;
if(G__13500)
{if((function (){var or__3943__auto__ = (G__13500.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13500.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13500.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13500);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13500);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0:default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
