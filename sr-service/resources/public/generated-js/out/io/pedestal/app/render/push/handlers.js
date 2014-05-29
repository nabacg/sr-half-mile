goog.provide('io.pedestal.app.render.push.handlers');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('io.pedestal.app.render.events');
goog.require('io.pedestal.app.render.push');
goog.require('io.pedestal.app.util.log');
io.pedestal.app.render.push.handlers.add_send_on = (function add_send_on(event_type,dom_content){
return (function (renderer,p__12863,input_queue){
var vec__12864 = p__12863;
var _ = cljs.core.nth.call(null,vec__12864,0,null);
var ___$1 = cljs.core.nth.call(null,vec__12864,1,null);
var transform_name = cljs.core.nth.call(null,vec__12864,2,null);
var messages = cljs.core.nth.call(null,vec__12864,3,null);
return io.pedestal.app.render.events.send_on.call(null,event_type,dom_content,input_queue,transform_name,messages);
});
});
io.pedestal.app.render.push.handlers.add_send_on_click = (function add_send_on_click(dom_content){
return io.pedestal.app.render.push.handlers.add_send_on.call(null,"\uFDD0:click",dom_content);
});
io.pedestal.app.render.push.handlers.remove_send_on = (function remove_send_on(event_type,dom_content){
return (function (renderer,p__12867,input_queue){
var vec__12868 = p__12867;
var _ = cljs.core.nth.call(null,vec__12868,0,null);
var ___$1 = cljs.core.nth.call(null,vec__12868,1,null);
var transform_name = cljs.core.nth.call(null,vec__12868,2,null);
var messages = cljs.core.nth.call(null,vec__12868,3,null);
return io.pedestal.app.render.events.remove_event.call(null,event_type,dom_content);
});
});
io.pedestal.app.render.push.handlers.remove_send_on_click = (function remove_send_on_click(dom_content){
return io.pedestal.app.render.push.handlers.remove_send_on.call(null,"\uFDD0:click",dom_content);
});
io.pedestal.app.render.push.handlers.destroy_BANG_ = (function destroy_BANG_(r,path){
var temp__4090__auto__ = io.pedestal.app.render.push.get_id.call(null,r,path);
if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;
io.pedestal.app.render.push.delete_id_BANG_.call(null,r,path);
return domina.destroy_BANG_.call(null,domina.by_id.call(null,id));
} else
{return io.pedestal.app.util.log.warn.call(null,"\uFDD0:in","\uFDD0:default-exit","\uFDD0:msg",[cljs.core.str("warning! no id "),cljs.core.str(io.pedestal.app.render.push.handlers.id),cljs.core.str(" found for path "),cljs.core.str(cljs.core.pr_str.call(null,path))].join(''));
}
});
io.pedestal.app.render.push.handlers.default_destroy = (function default_destroy(r,p__12869,_){
var vec__12871 = p__12869;
var ___$1 = cljs.core.nth.call(null,vec__12871,0,null);
var path = cljs.core.nth.call(null,vec__12871,1,null);
return io.pedestal.app.render.push.handlers.destroy_BANG_.call(null,r,path);
});
