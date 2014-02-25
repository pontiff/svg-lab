(ns saetos.cljs.threads.idb
  (:require [goog.db :as db]
            [goog.events :as events]
 ))

(goog.inherits (defn Idb [dbName dbVersion]
 (this-as this
     (.addCallback
        (goog.db.openDatabase
           dbName
           dbVersion
           (fn [ ev db tx ]
             (let [ store (.concat dbName ".objects") ] 
               (if-not (.contains (.getObjectStoreNames db) store)
                       (.createObjectStore db store) (array)))))
        (fn [db]
          (set! (. this -store) (.concat dbName ".objects"))
          (set! (. this -db) db)
          (set! (. this -index) "indices")
          (. this dispatchEvent "dbOpen")))
     
     (set! (. this -put )
       (fn [ key val callback ]
         (.addCallback     
          (.put
           (.objectStore
            (.createTransaction
             (. this -db)
             (array (. this -store))
             goog.db.Transaction.TransactionMode.READ_WRITE)
           (. this -store))
          val key ) callback )))

     (set! (. this -get )
       (fn [ key callback ] ; callback is a function that recieves data as a param
         (.addCallback
           (.get
             (.objectStore
               (.createTransaction
                 (. this -db)
                 (array (. this -store))
                 goog.db.Transaction.TransactionMode.READ)
               (. this -store))
             key)
           callback)))
  this)) goog.events.EventTarget)
