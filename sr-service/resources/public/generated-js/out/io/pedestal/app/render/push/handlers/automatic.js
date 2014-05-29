goog.provide('io.pedestal.app.render.push.handlers.automatic');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('io.pedestal.app.render.push.templates');
goog.require('io.pedestal.app.render.events');
goog.require('io.pedestal.app.render.push.cljs_formatter');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.render.push');
goog.require('io.pedestal.app.util.log');
goog.require('cljs.reader');
io.pedestal.app.render.push.handlers.automatic.prompt_values = (function prompt_values(syms){
return cljs.core.zipmap.call(null,syms,cljs.core.mapv.call(null,(function (p1__12511_SHARP_){
return prompt([cljs.core.str("Enter value for: "),cljs.core.str(cljs.core.name.call(null,p1__12511_SHARP_))].join(''));
}),syms));
});
io.pedestal.app.render.push.handlers.automatic.get_missing_input = (function get_missing_input(messages){
var syms = io.pedestal.app.messages.message_params.call(null,messages);
if(cljs.core.seq.call(null,syms))
{return (function (_){
var env = io.pedestal.app.render.push.handlers.automatic.prompt_values.call(null,syms);
return io.pedestal.app.messages.fill_params.call(null,env,messages);
});
} else
{return messages;
}
});
io.pedestal.app.render.push.handlers.automatic.modal_id = (function modal_id(id,transform_name){
return [cljs.core.str(id),cljs.core.str("-modal-"),cljs.core.str(cljs.core.name.call(null,transform_name))].join('');
});
io.pedestal.app.render.push.handlers.automatic.modal_continue_button_id = (function modal_continue_button_id(id,transform_name){
return [cljs.core.str(io.pedestal.app.render.push.handlers.automatic.modal_id.call(null,id,transform_name)),cljs.core.str("-continue")].join('');
});
io.pedestal.app.render.push.handlers.automatic.modal_field_id = (function modal_field_id(id,transform_name,sym){
return [cljs.core.str(io.pedestal.app.render.push.handlers.automatic.modal_id.call(null,id,transform_name)),cljs.core.str("-field-"),cljs.core.str(cljs.core.name.call(null,sym))].join('');
});
io.pedestal.app.render.push.handlers.automatic.modal_title = (function (){var method_table__9838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9842__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("modal-title",(function (transform_name,messages){
return transform_name;
}),"\uFDD0:default",hierarchy__9842__auto__,method_table__9838__auto__,prefer_table__9839__auto__,method_cache__9840__auto__,cached_hierarchy__9841__auto__));
})();
cljs.core._add_method.call(null,io.pedestal.app.render.push.handlers.automatic.modal_title,"\uFDD0:default",(function (transform_name,_){
return cljs.core.pr_str.call(null,transform_name);
}));
io.pedestal.app.render.push.handlers.automatic.modal_content = (function (){var method_table__9838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9842__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("modal-content",(function (transform_name,messages){
return transform_name;
}),"\uFDD0:default",hierarchy__9842__auto__,method_table__9838__auto__,prefer_table__9839__auto__,method_cache__9840__auto__,cached_hierarchy__9841__auto__));
})();
cljs.core._add_method.call(null,io.pedestal.app.render.push.handlers.automatic.modal_content,"\uFDD0:default",(function (transform_name,_){
return "";
}));
io.pedestal.app.render.push.handlers.automatic.modal_field = (function (){var method_table__9838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9842__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("modal-field",(function (transform_name,field_name){
return cljs.core.PersistentVector.fromArray([transform_name,field_name], true);
}),"\uFDD0:default",hierarchy__9842__auto__,method_table__9838__auto__,prefer_table__9839__auto__,method_cache__9840__auto__,cached_hierarchy__9841__auto__));
})();
cljs.core._add_method.call(null,io.pedestal.app.render.push.handlers.automatic.modal_field,"\uFDD0:default",(function (_,field_name){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:field-name",[cljs.core.str(field_name),cljs.core.str(":")].join(''),"\uFDD0:placeholder",[cljs.core.str("Enter "),cljs.core.str(field_name)].join(''),"\uFDD0:input-class","input-xlarge","\uFDD0:default",null,"\uFDD0:validation-fn",(function (x){
return !((function (){var or__3943__auto__ = (x == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,x,"");
}
})());
}),"\uFDD0:inline-help","","\uFDD0:inline-help-error",[cljs.core.str(field_name),cljs.core.str(" is required")].join('')], true);
}));
io.pedestal.app.render.push.handlers.automatic.modal_input_field = (function modal_input_field(id,transform_name,sym){
var map__12513 = io.pedestal.app.render.push.handlers.automatic.modal_field.call(null,transform_name,cljs.core.name.call(null,sym));
var map__12513__$1 = ((cljs.core.seq_QMARK_.call(null,map__12513))?cljs.core.apply.call(null,cljs.core.hash_map,map__12513):map__12513);
var inline_help = cljs.core.get.call(null,map__12513__$1,"\uFDD0:inline-help");
var default$ = cljs.core.get.call(null,map__12513__$1,"\uFDD0:default");
var input_class = cljs.core.get.call(null,map__12513__$1,"\uFDD0:input-class");
var placeholder = cljs.core.get.call(null,map__12513__$1,"\uFDD0:placeholder");
var field_name = cljs.core.get.call(null,map__12513__$1,"\uFDD0:field-name");
var field_id = io.pedestal.app.render.push.handlers.automatic.modal_field_id.call(null,id,transform_name,sym);
return [cljs.core.str("<label class='control-label' for='"),cljs.core.str(field_id),cljs.core.str("'>"),cljs.core.str(field_name),cljs.core.str("</label>"),cljs.core.str("<div class='controls'>"),cljs.core.str("<input id='"),cljs.core.str(field_id),cljs.core.str("' "),cljs.core.str("       class='"),cljs.core.str(input_class),cljs.core.str("' type='text' placeholder='"),cljs.core.str(placeholder),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(default$)?[cljs.core.str(" value='"),cljs.core.str(default$),cljs.core.str("'")].join(''):null)),cljs.core.str(">"),cljs.core.str("<span class='help-inline' id='"),cljs.core.str(field_id),cljs.core.str("-help-inline'>"),cljs.core.str(inline_help),cljs.core.str("</span>"),cljs.core.str("</div>")].join('');
});
io.pedestal.app.render.push.handlers.automatic.modal_input_html = (function modal_input_html(id,transform_name,messages){
var syms = io.pedestal.app.messages.message_params.call(null,messages);
if(cljs.core.seq.call(null,syms))
{var modal_id = io.pedestal.app.render.push.handlers.automatic.modal_id.call(null,id,transform_name);
var continue_button_id = io.pedestal.app.render.push.handlers.automatic.modal_continue_button_id.call(null,id,transform_name);
return [cljs.core.str("<div class='modal hide fade' id='"),cljs.core.str(modal_id),cljs.core.str("' tabindex='-1' role='dialog'"),cljs.core.str("     aria-labelledby='"),cljs.core.str(modal_id),cljs.core.str("Label' aria-hidden='true'>"),cljs.core.str("  <div class='modal-header'>"),cljs.core.str("    <button type='button' class='close' data-dismiss='modal'"),cljs.core.str("            aria-hidden='true'>\u00D7</button>"),cljs.core.str("    <h3 id='"),cljs.core.str(modal_id),cljs.core.str("Label'>"),cljs.core.str(io.pedestal.app.render.push.handlers.automatic.modal_title.call(null,transform_name,messages)),cljs.core.str("</h3>"),cljs.core.str("  </div>"),cljs.core.str("  <div class='modal-body'>"),cljs.core.str(io.pedestal.app.render.push.handlers.automatic.modal_content.call(null,transform_name)),cljs.core.str("<div class='control-group' id='modal-control-group'>"),cljs.core.str("    <form onsubmit='return false;'>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.partial.call(null,io.pedestal.app.render.push.handlers.automatic.modal_input_field,id,transform_name),syms))),cljs.core.str("    </form>"),cljs.core.str("  </div>"),cljs.core.str("</div>"),cljs.core.str("  <div class='modal-footer'>"),cljs.core.str("    <button class='btn' data-dismiss='modal' aria-hidden='true'>Cancel</button>"),cljs.core.str("    <button class='btn btn-primary' id='"),cljs.core.str(continue_button_id),cljs.core.str("'>Continue</button>"),cljs.core.str("  </div>"),cljs.core.str("</div>")].join('');
} else
{return null;
}
});
io.pedestal.app.render.push.handlers.automatic.get_modal_value = (function get_modal_value(id,transform_name,sym){
var field_id = io.pedestal.app.render.push.handlers.automatic.modal_field_id.call(null,id,transform_name,sym);
var value = domina.by_id.call(null,field_id).value;
var map__12515 = io.pedestal.app.render.push.handlers.automatic.modal_field.call(null,transform_name,cljs.core.name.call(null,sym));
var map__12515__$1 = ((cljs.core.seq_QMARK_.call(null,map__12515))?cljs.core.apply.call(null,cljs.core.hash_map,map__12515):map__12515);
var inline_help_error = cljs.core.get.call(null,map__12515__$1,"\uFDD0:inline-help-error");
var validation_fn = cljs.core.get.call(null,map__12515__$1,"\uFDD0:validation-fn");
if(cljs.core.truth_(validation_fn.call(null,value)))
{return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",value], true);
} else
{return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",value,"\uFDD0:error",true,"\uFDD0:field-id",field_id,"\uFDD0:message",inline_help_error], true);
}
});
io.pedestal.app.render.push.handlers.automatic.get_modal_values = (function get_modal_values(id,transform_name,syms){
return cljs.core.reduce.call(null,(function (a,sym){
var v = io.pedestal.app.render.push.handlers.automatic.get_modal_value.call(null,id,transform_name,sym);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:error")).call(null,v)))
{return cljs.core.assoc_in.call(null,a,cljs.core.PersistentVector.fromArray(["\uFDD0:errors",sym], true),v);
} else
{return cljs.core.assoc_in.call(null,a,cljs.core.PersistentVector.fromArray(["\uFDD0:env",sym], true),v);
}
}),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:env",cljs.core.PersistentArrayMap.EMPTY], true),syms);
});
io.pedestal.app.render.push.handlers.automatic.hide_and_return_messages = (function hide_and_return_messages(id,transform_name,messages){
hideModal(io.pedestal.app.render.push.handlers.automatic.modal_id.call(null,id,transform_name));
return messages;
});
io.pedestal.app.render.push.handlers.automatic.highlight_errors = (function highlight_errors(errors){
var seq__12522 = cljs.core.seq.call(null,cljs.core.vals.call(null,errors));
var chunk__12523 = null;
var count__12524 = 0;
var i__12525 = 0;
while(true){
if((i__12525 < count__12524))
{var map__12526 = cljs.core._nth.call(null,chunk__12523,i__12525);
var map__12526__$1 = ((cljs.core.seq_QMARK_.call(null,map__12526))?cljs.core.apply.call(null,cljs.core.hash_map,map__12526):map__12526);
var message = cljs.core.get.call(null,map__12526__$1,"\uFDD0:message");
var field_id = cljs.core.get.call(null,map__12526__$1,"\uFDD0:field-id");
domina.add_class_BANG_.call(null,domina.by_id.call(null,"modal-control-group"),"error");
domina.set_text_BANG_.call(null,domina.by_id.call(null,[cljs.core.str(field_id),cljs.core.str("-help-inline")].join('')),message);
{
var G__12528 = seq__12522;
var G__12529 = chunk__12523;
var G__12530 = count__12524;
var G__12531 = (i__12525 + 1);
seq__12522 = G__12528;
chunk__12523 = G__12529;
count__12524 = G__12530;
i__12525 = G__12531;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12522);
if(temp__4092__auto__)
{var seq__12522__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12522__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__12522__$1);
{
var G__12532 = cljs.core.chunk_rest.call(null,seq__12522__$1);
var G__12533 = c__9781__auto__;
var G__12534 = cljs.core.count.call(null,c__9781__auto__);
var G__12535 = 0;
seq__12522 = G__12532;
chunk__12523 = G__12533;
count__12524 = G__12534;
i__12525 = G__12535;
continue;
}
} else
{var map__12527 = cljs.core.first.call(null,seq__12522__$1);
var map__12527__$1 = ((cljs.core.seq_QMARK_.call(null,map__12527))?cljs.core.apply.call(null,cljs.core.hash_map,map__12527):map__12527);
var message = cljs.core.get.call(null,map__12527__$1,"\uFDD0:message");
var field_id = cljs.core.get.call(null,map__12527__$1,"\uFDD0:field-id");
domina.add_class_BANG_.call(null,domina.by_id.call(null,"modal-control-group"),"error");
domina.set_text_BANG_.call(null,domina.by_id.call(null,[cljs.core.str(field_id),cljs.core.str("-help-inline")].join('')),message);
{
var G__12536 = cljs.core.next.call(null,seq__12522__$1);
var G__12537 = null;
var G__12538 = 0;
var G__12539 = 0;
seq__12522 = G__12536;
chunk__12523 = G__12537;
count__12524 = G__12538;
i__12525 = G__12539;
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
io.pedestal.app.render.push.handlers.automatic.submit_dialog_fn = (function submit_dialog_fn(id,transform_name,messages){
var syms = io.pedestal.app.messages.message_params.call(null,messages);
var messages_hash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9750__auto__ = ((function (syms){
return (function iter__12557(s__12558){
return (new cljs.core.LazySeq(null,false,((function (syms){
return (function (){
var s__12558__$1 = s__12558;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12558__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var m = cljs.core.first.call(null,xs__4579__auto__);
var iterys__9746__auto__ = ((function (s__12558__$1,m,xs__4579__auto__,temp__4092__auto__,syms){
return (function iter__12559(s__12560){
return (new cljs.core.LazySeq(null,false,((function (s__12558__$1,m,xs__4579__auto__,temp__4092__auto__,syms){
return (function (){
var s__12560__$1 = s__12560;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12560__$1);
if(temp__4092__auto____$1)
{var s__12560__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12560__$2))
{var c__9748__auto__ = cljs.core.chunk_first.call(null,s__12560__$2);
var size__9749__auto__ = cljs.core.count.call(null,c__9748__auto__);
var b__12562 = cljs.core.chunk_buffer.call(null,size__9749__auto__);
if((function (){var i__12561 = 0;
while(true){
if((i__12561 < size__9749__auto__))
{var vec__12569 = cljs.core._nth.call(null,c__9748__auto__,i__12561);
var k = cljs.core.nth.call(null,vec__12569,0,null);
var v = cljs.core.nth.call(null,vec__12569,1,null);
cljs.core.chunk_append.call(null,b__12562,cljs.core.PersistentVector.fromArray([k,v], true));
{
var G__12574 = (i__12561 + 1);
i__12561 = G__12574;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12562),iter__12559.call(null,cljs.core.chunk_rest.call(null,s__12560__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12562),null);
}
} else
{var vec__12570 = cljs.core.first.call(null,s__12560__$2);
var k = cljs.core.nth.call(null,vec__12570,0,null);
var v = cljs.core.nth.call(null,vec__12570,1,null);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),iter__12559.call(null,cljs.core.rest.call(null,s__12560__$2)));
}
} else
{return null;
}
break;
}
});})(s__12558__$1,m,xs__4579__auto__,temp__4092__auto__,syms))
,null));
});})(s__12558__$1,m,xs__4579__auto__,temp__4092__auto__,syms))
;
var fs__9747__auto__ = cljs.core.seq.call(null,iterys__9746__auto__.call(null,m));
if(fs__9747__auto__)
{return cljs.core.concat.call(null,fs__9747__auto__,iter__12557.call(null,cljs.core.rest.call(null,s__12558__$1)));
} else
{{
var G__12575 = cljs.core.rest.call(null,s__12558__$1);
s__12558__$1 = G__12575;
continue;
}
}
} else
{return null;
}
break;
}
});})(syms))
,null));
});})(syms))
;
return iter__9750__auto__.call(null,messages);
})());
var read_value = ((function (syms,messages_hash){
return (function (k,v){
var map__12571 = k.call(null,messages_hash);
var map__12571__$1 = ((cljs.core.seq_QMARK_.call(null,map__12571))?cljs.core.apply.call(null,cljs.core.hash_map,map__12571):map__12571);
var read_as = cljs.core.get.call(null,map__12571__$1,"\uFDD0:read-as");
if(cljs.core._EQ_.call(null,read_as,"\uFDD0:data"))
{return cljs.reader.read_string.call(null,v);
} else
{return v;
}
});})(syms,messages_hash))
;
return (function (_){
if(cljs.core.seq.call(null,syms))
{var values = io.pedestal.app.render.push.handlers.automatic.get_modal_values.call(null,id,transform_name,syms);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:errors")).call(null,values)))
{io.pedestal.app.render.push.handlers.automatic.highlight_errors.call(null,(new cljs.core.Keyword("\uFDD0:errors")).call(null,values));
return cljs.core.PersistentVector.EMPTY;
} else
{return io.pedestal.app.render.push.handlers.automatic.hide_and_return_messages.call(null,id,transform_name,io.pedestal.app.messages.fill_params.call(null,cljs.core.reduce.call(null,(function (a,p__12572){
var vec__12573 = p__12572;
var k = cljs.core.nth.call(null,vec__12573,0,null);
var v = cljs.core.nth.call(null,vec__12573,1,null);
return cljs.core.assoc.call(null,a,k,read_value.call(null,k,(new cljs.core.Keyword("\uFDD0:value")).call(null,v)));
}),cljs.core.PersistentArrayMap.EMPTY,(new cljs.core.Keyword("\uFDD0:env")).call(null,values)),messages));
}
} else
{return io.pedestal.app.render.push.handlers.automatic.hide_and_return_messages.call(null,id,transform_name,messages);
}
});
});
io.pedestal.app.render.push.handlers.automatic.generic_modal_collect_input = (function generic_modal_collect_input(parent_id,id,input_queue,transform_name,messages){
var modal_continue_button_id = io.pedestal.app.render.push.handlers.automatic.modal_continue_button_id.call(null,id,transform_name);
domina.append_BANG_.call(null,domina.by_id.call(null,parent_id),io.pedestal.app.render.push.handlers.automatic.modal_input_html.call(null,id,transform_name,messages));
io.pedestal.app.render.events.send_on_click.call(null,domina.by_id.call(null,modal_continue_button_id),input_queue,io.pedestal.app.render.push.handlers.automatic.submit_dialog_fn.call(null,id,transform_name,messages));
return showModal(io.pedestal.app.render.push.handlers.automatic.modal_id.call(null,id,transform_name));
});
io.pedestal.app.render.push.handlers.automatic.modal_collect_input = (function modal_collect_input(r,input_queue,path,transform_name,messages){
var path__$1 = cljs.core.conj.call(null,path,"\uFDD0:modal");
var parent_id = io.pedestal.app.render.push.get_parent_id.call(null,r,path__$1);
var id = io.pedestal.app.render.push.new_id_BANG_.call(null,r,path__$1);
return io.pedestal.app.render.push.handlers.automatic.generic_modal_collect_input.call(null,parent_id,id,input_queue,transform_name,messages);
});
io.pedestal.app.render.push.handlers.automatic.render_event_enter = (function render_event_enter(r,p__12577,input_queue){
var vec__12579 = p__12577;
var _ = cljs.core.nth.call(null,vec__12579,0,null);
var path = cljs.core.nth.call(null,vec__12579,1,null);
var transform_name = cljs.core.nth.call(null,vec__12579,2,null);
var messages = cljs.core.nth.call(null,vec__12579,3,null);
var control_id = io.pedestal.app.render.push.get_id.call(null,r,cljs.core.conj.call(null,path,"control"));
var button_id = io.pedestal.app.render.push.new_id_BANG_.call(null,r,cljs.core.conj.call(null,path,"control",transform_name));
var messages__$1 = cljs.core.map.call(null,cljs.core.partial.call(null,io.pedestal.app.messages.add_message_type,transform_name),messages);
var syms = io.pedestal.app.messages.message_params.call(null,messages__$1);
if(cljs.core.truth_(input_queue))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Input-Queue is nil"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"input-queue","input-queue",1257864967,null)))].join('')));
}
domina.append_BANG_.call(null,domina.by_id.call(null,control_id),[cljs.core.str("<a class='btn btn-primary' style='margin-top:5px;margin-right:5px;' "),cljs.core.str("id='"),cljs.core.str(button_id),cljs.core.str("'>"),cljs.core.str([cljs.core.str(transform_name)].join('')),cljs.core.str("</a>")].join(''));
if(cljs.core.seq.call(null,syms))
{domina.events.listen_BANG_.call(null,domina.by_id.call(null,button_id),"\uFDD0:click",(function (e){
domina.events.prevent_default.call(null,e);
return io.pedestal.app.render.push.handlers.automatic.modal_collect_input.call(null,r,input_queue,path,transform_name,messages__$1);
}));
} else
{io.pedestal.app.render.events.send_on_click.call(null,domina.by_id.call(null,button_id),input_queue,io.pedestal.app.render.push.handlers.automatic.get_missing_input.call(null,cljs.core.mapv.call(null,(function (p1__12576_SHARP_){
return cljs.core.assoc.call(null,p1__12576_SHARP_,"\uFDD0:from","\uFDD0:ui");
}),messages__$1)));
}
return io.pedestal.app.render.push.on_destroy_BANG_.call(null,r,path,(function (){
return domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,button_id),"\uFDD0:click");
}));
});
io.pedestal.app.render.push.handlers.automatic.render_node_enter = (function render_node_enter(r,p__12580,input_queue){
var vec__12582 = p__12580;
var _ = cljs.core.nth.call(null,vec__12582,0,null);
var path = cljs.core.nth.call(null,vec__12582,1,null);
var parent = io.pedestal.app.render.push.get_parent_id.call(null,r,path);
var id = io.pedestal.app.render.push.new_id_BANG_.call(null,r,path);
var data_id = io.pedestal.app.render.push.new_id_BANG_.call(null,r,cljs.core.conj.call(null,path,"data"));
var control_id = io.pedestal.app.render.push.new_id_BANG_.call(null,r,cljs.core.conj.call(null,path,"control"));
var path_length = cljs.core.count.call(null,path);
return domina.append_BANG_.call(null,domina.by_id.call(null,parent),[cljs.core.str("<div id='"),cljs.core.str(id),cljs.core.str("' class='"),cljs.core.str((((path_length <= 1))?"root-node-section":"node-section")),cljs.core.str("'>"),cljs.core.str("  <div class='row-fluid'>"),cljs.core.str("    <div class='span3' style='text-align:right' id='"),cljs.core.str(control_id),cljs.core.str("'></div>"),cljs.core.str("    <div class='span9'>"),cljs.core.str("      <h4 class='muted'>"),cljs.core.str(cljs.core.last.call(null,path)),cljs.core.str("</h4>"),cljs.core.str("      <div id='"),cljs.core.str(data_id),cljs.core.str("'></div>"),cljs.core.str("    </div>"),cljs.core.str("  </div>"),cljs.core.str("</div>")].join(''));
});
io.pedestal.app.render.push.handlers.automatic.render_value_update = (function render_value_update(r,p__12583,d){
var vec__12585 = p__12583;
var _ = cljs.core.nth.call(null,vec__12585,0,null);
var path = cljs.core.nth.call(null,vec__12585,1,null);
var ___$1 = cljs.core.nth.call(null,vec__12585,2,null);
var v = cljs.core.nth.call(null,vec__12585,3,null);
var data_id = io.pedestal.app.render.push.get_id.call(null,r,cljs.core.conj.call(null,path,"data"));
var container = domina.single_node.call(null,domina.by_id.call(null,data_id));
domina.destroy_children_BANG_.call(null,container);
if(cljs.core.truth_(v))
{var expression = domina.single_node.call(null,io.pedestal.app.render.push.cljs_formatter.html.call(null,v));
domina.append_BANG_.call(null,container,expression);
return io.pedestal.app.render.push.cljs_formatter.arrange_BANG_.call(null,expression,container);
} else
{return null;
}
});
io.pedestal.app.render.push.handlers.automatic.div_with_id = (function div_with_id(id){
return (function (r,p__12588,d){
var vec__12589 = p__12588;
var _ = cljs.core.nth.call(null,vec__12589,0,null);
var path = cljs.core.nth.call(null,vec__12589,1,null);
var parent = io.pedestal.app.render.push.get_parent_id.call(null,r,path);
var id__$1 = io.pedestal.app.render.push.new_id_BANG_.call(null,r,path,id);
return domina.append_BANG_.call(null,domina.by_id.call(null,parent),[cljs.core.str("<div id='"),cljs.core.str(id__$1),cljs.core.str("'></div>")].join(''));
});
});
io.pedestal.app.render.push.handlers.automatic.append_to_parent = (function append_to_parent(f){
return (function (r,p__12592,d){
var vec__12593 = p__12592;
var _ = cljs.core.nth.call(null,vec__12593,0,null);
var path = cljs.core.nth.call(null,vec__12593,1,null);
var parent = io.pedestal.app.render.push.get_parent_id.call(null,r,path);
var id = io.pedestal.app.render.push.new_id_BANG_.call(null,r,path);
return domina.append_BANG_.call(null,domina.by_id.call(null,parent),f.call(null,id));
});
});
io.pedestal.app.render.push.handlers.automatic.prepend_to_parent = (function prepend_to_parent(f){
return (function (r,p__12596,d){
var vec__12597 = p__12596;
var _ = cljs.core.nth.call(null,vec__12597,0,null);
var path = cljs.core.nth.call(null,vec__12597,1,null);
var parent = io.pedestal.app.render.push.get_parent_id.call(null,r,path);
var id = io.pedestal.app.render.push.new_id_BANG_.call(null,r,path);
return domina.prepend_BANG_.call(null,domina.by_id.call(null,parent),f.call(null,id));
});
});
io.pedestal.app.render.push.handlers.automatic.append_value = (function append_value(f){
return (function (r,p__12600,d){
var vec__12601 = p__12600;
var _ = cljs.core.nth.call(null,vec__12601,0,null);
var path = cljs.core.nth.call(null,vec__12601,1,null);
var v = cljs.core.nth.call(null,vec__12601,2,null);
var id = io.pedestal.app.render.push.get_id.call(null,r,path);
return domina.append_BANG_.call(null,domina.by_id.call(null,id),f.call(null,v));
});
});
io.pedestal.app.render.push.handlers.automatic.attach_click_event = (function attach_click_event(id,transform_name,messages,input_queue){
var messages__$1 = cljs.core.map.call(null,cljs.core.partial.call(null,io.pedestal.app.messages.add_message_type,transform_name),messages);
return io.pedestal.app.render.events.send_on_click.call(null,domina.by_id.call(null,id),input_queue,io.pedestal.app.render.push.handlers.automatic.get_missing_input.call(null,messages__$1));
});
io.pedestal.app.render.push.handlers.automatic.event_enter = (function() {
var event_enter = null;
var event_enter__0 = (function (){
return event_enter.call(null,null);
});
var event_enter__1 = (function (modal_path){
return (function (r,p__12604,input_queue){
var vec__12605 = p__12604;
var _ = cljs.core.nth.call(null,vec__12605,0,null);
var path = cljs.core.nth.call(null,vec__12605,1,null);
var transform_name = cljs.core.nth.call(null,vec__12605,2,null);
var messages = cljs.core.nth.call(null,vec__12605,3,null);
var modal_path__$1 = (function (){var or__3943__auto__ = modal_path;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return path;
}
})();
var item_id = io.pedestal.app.render.push.get_id.call(null,r,path);
var messages__$1 = cljs.core.map.call(null,cljs.core.partial.call(null,io.pedestal.app.messages.add_message_type,transform_name),messages);
var syms = io.pedestal.app.messages.message_params.call(null,messages__$1);
if(cljs.core.seq.call(null,syms))
{return domina.events.listen_BANG_.call(null,domina.by_id.call(null,item_id),"\uFDD0:click",(function (e){
domina.events.prevent_default.call(null,e);
return io.pedestal.app.render.push.handlers.automatic.modal_collect_input.call(null,r,input_queue,modal_path__$1,transform_name,messages__$1);
}));
} else
{return io.pedestal.app.render.events.send_on_click.call(null,domina.by_id.call(null,item_id),input_queue,io.pedestal.app.render.push.handlers.automatic.get_missing_input.call(null,messages__$1));
}
});
});
event_enter = function(modal_path){
switch(arguments.length){
case 0:
return event_enter__0.call(this);
case 1:
return event_enter__1.call(this,modal_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
event_enter.cljs$core$IFn$_invoke$arity$0 = event_enter__0;
event_enter.cljs$core$IFn$_invoke$arity$1 = event_enter__1;
return event_enter;
})()
;
io.pedestal.app.render.push.handlers.automatic.event_exit = (function event_exit(r,p__12606,_){
var vec__12608 = p__12606;
var ___$1 = cljs.core.nth.call(null,vec__12608,0,null);
var path = cljs.core.nth.call(null,vec__12608,1,null);
var transform_name = cljs.core.nth.call(null,vec__12608,2,null);
var node_id = io.pedestal.app.render.push.get_id.call(null,r,path);
var default_button_id = io.pedestal.app.render.push.get_id.call(null,r,cljs.core.conj.call(null,path,"control",transform_name));
var id = (function (){var or__3943__auto__ = default_button_id;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return node_id;
}
})();
if(cljs.core.truth_(id))
{domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,id),"\uFDD0:click");
} else
{}
if(cljs.core.truth_(default_button_id))
{return domina.destroy_BANG_.call(null,domina.by_id.call(null,default_button_id));
} else
{return null;
}
});
io.pedestal.app.render.push.handlers.automatic.destroy_BANG_ = (function destroy_BANG_(r,path){
var temp__4090__auto__ = io.pedestal.app.render.push.get_id.call(null,r,path);
if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;
io.pedestal.app.render.push.delete_id_BANG_.call(null,r,path);
return domina.destroy_BANG_.call(null,domina.by_id.call(null,id));
} else
{return io.pedestal.app.util.log.warn.call(null,"\uFDD0:in","\uFDD0:default-exit","\uFDD0:msg",[cljs.core.str("warning! no id "),cljs.core.str(io.pedestal.app.render.push.handlers.automatic.id),cljs.core.str(" found for path "),cljs.core.str(cljs.core.pr_str.call(null,path))].join(''));
}
});
io.pedestal.app.render.push.handlers.automatic.default_exit = (function default_exit(r,p__12609,d){
var vec__12611 = p__12609;
var _ = cljs.core.nth.call(null,vec__12611,0,null);
var path = cljs.core.nth.call(null,vec__12611,1,null);
return io.pedestal.app.render.push.handlers.automatic.destroy_BANG_.call(null,r,path);
});
io.pedestal.app.render.push.handlers.automatic.sync_class_BANG_ = (function sync_class_BANG_(pred,id,class_name){
var element = domina.by_id.call(null,id);
if(cljs.core.truth_(pred))
{if(cljs.core.not.call(null,domina.has_class_QMARK_.call(null,element,class_name)))
{return domina.add_class_BANG_.call(null,element,class_name);
} else
{return null;
}
} else
{if(cljs.core.truth_(domina.has_class_QMARK_.call(null,element,class_name)))
{return domina.remove_class_BANG_.call(null,element,class_name);
} else
{return null;
}
}
});
io.pedestal.app.render.push.handlers.automatic.data_renderer_config = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.EMPTY,cljs.core.constantly.call(null,null)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.EMPTY,cljs.core.constantly.call(null,null)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),io.pedestal.app.render.push.handlers.automatic.render_node_enter], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),io.pedestal.app.render.push.handlers.automatic.default_exit], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),io.pedestal.app.render.push.handlers.automatic.render_value_update], true),cljs.core.PersistentVector.fromArray(["\uFDD0:attr",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),cljs.core.constantly.call(null,null)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),io.pedestal.app.render.push.handlers.automatic.render_event_enter], true),cljs.core.PersistentVector.fromArray(["\uFDD0:transform-disable",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),io.pedestal.app.render.push.handlers.automatic.event_exit], true)], true);
