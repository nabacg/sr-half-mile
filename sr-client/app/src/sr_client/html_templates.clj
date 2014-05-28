(ns sr-client.html-templates
  (:use [io.pedestal.app.templates :only [tfn dtfn tnodes]]))

(defmacro sr-client-templates
  []
  {:sr-client-page (dtfn (tnodes "sr-client.html" "tutorial" [[:#other-players] [:#my-player]])
                         #{:id})
   :other-players (dtfn (tnodes "sr-client.html" "other-players") #{:id})
   :my-player (dtfn (tnodes "sr-client.html" "my-player") #{:id})})
