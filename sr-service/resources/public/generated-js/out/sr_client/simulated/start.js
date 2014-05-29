goog.provide('sr_client.simulated.start');
goog.require('cljs.core');
goog.require('sr_client.simulated.services');
goog.require('io.pedestal.app.protocols');
goog.require('io.pedestal.app_tools.tooling');
goog.require('goog.Uri');
goog.require('sr_client.rendering');
goog.require('sr_client.start');
goog.require('io.pedestal.app');
goog.require('io.pedestal.app.render.push.handlers.automatic');
sr_client.simulated.start.param = (function param(name){
var uri = (new goog.Uri(document.location.toString()));
return uri.getParameterValue(name);
});
sr_client.simulated.start.main = (function main(){
var app = sr_client.start.create_app.call(null,io.pedestal.app.render.push.handlers.automatic.data_renderer_config);
var services = sr_client.simulated.services.__GT_MockServices.call(null,(new cljs.core.Keyword("\uFDD0:app")).call(null,app));
io.pedestal.app.consume_effects.call(null,(new cljs.core.Keyword("\uFDD0:app")).call(null,app),sr_client.simulated.services.consume_effects);
io.pedestal.app.protocols.start.call(null,services);
return app;
});
goog.exportSymbol('sr_client.simulated.start.main', sr_client.simulated.start.main);
