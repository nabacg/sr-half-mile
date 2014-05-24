(ns sr-client.html-templates
  (:use [io.pedestal.app.templates :only [tfn dtfn tnodes]]))

(defmacro sr-client-templates
  []
  {:sr-client-page (dtfn (tnodes "sr-client.html" "hello") #{:id})})
