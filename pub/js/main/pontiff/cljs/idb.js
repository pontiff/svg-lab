// Compiled by ClojureScript .
goog.provide('pontiff.cljs.idb');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.db');
goog.require('goog.db');
goog.inherits(pontiff.cljs.idb.Idb = (function Idb(dbName,dbVersion){var this$ = this;goog.db.openDatabase(dbName,dbVersion,((function (this$){
return (function (ev,db,tx){var store = dbName.concat(".objects");if(cljs.core.not.call(null,db.getObjectStoreNames().contains(store)))
{return db.createObjectStore(store).put([],"keys");
} else
{return null;
}
});})(this$))
).addCallback(((function (this$){
return (function (db){this$.store = dbName.concat(".objects");
this$.db = db;
this$.index = "indices";
return this$.dispatchEvent("dbOpen");
});})(this$))
);
this$.put = ((function (this$){
return (function (val,key){return this$.db.createTransaction([this$.store],goog.db.Transaction.TransactionMode.READ_WRITE).objectStore(this$.store).put(val,key);
});})(this$))
;
this$.get = ((function (this$){
return (function (key,callback){return this$.db.createTransaction([this$.store],goog.db.Transaction.TransactionMode.READ).objectStore(this$.store).get(key).addCallback(callback);
});})(this$))
;
return this$;
}),goog.events.EventTarget);
