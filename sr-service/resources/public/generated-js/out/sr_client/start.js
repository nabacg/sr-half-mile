goog.provide('sr_client.start');
goog.require('cljs.core');
goog.require('sr_client.services');
goog.require('sr_client.rendering');
goog.require('sr_client.behavior');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.render');
goog.require('io.pedestal.app.render.push');
goog.require('io.pedestal.app');
goog.require('io.pedestal.app.protocols');
sr_client.start.create_app = (function create_app(render_config){
var app = io.pedestal.app.build.call(null,sr_client.behavior.sr_half_mile_app);
var render_fn = io.pedestal.app.render.push.renderer.call(null,"content",render_config,io.pedestal.app.render.log_fn);
var app_model = io.pedestal.app.render.consume_app_model.call(null,app,render_fn);
io.pedestal.app.begin.call(null,app);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:app",app,"\uFDD0:app-model",app_model], true);
});
sr_client.start.main = (function main(){
var app = sr_client.start.create_app.call(null,sr_client.rendering.render_config.call(null));
var services = sr_client.services.__GT_Services.call(null,(new cljs.core.Keyword("\uFDD0:app")).call(null,app));
io.pedestal.app.consume_effects.call(null,(new cljs.core.Keyword("\uFDD0:app")).call(null,app),sr_client.services.consume_effects);
io.pedestal.app.protocols.start.call(null,services);
return app;
});
goog.exportSymbol('sr_client.start.main', sr_client.start.main);
