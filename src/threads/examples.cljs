(ns pontiff.cljs.threads.examples)

 (comment
  (def workerThread (pontiff.cljs.threads.Thread.))
  (.setCallback workerThread (fn [message] 
                               (. workerThread kill)
                               (set! workerThread nil)))
  (.exec workerThread 
       (fn []
         (js.importScripts "http://localhost/js/threads/threads.js")
            (goog.events.listenOnce
            (pontiff.cljs.threads.idb.Idb. "testdb" "1")
            "dbOpen"  
         (fn [evt]
           (let [ db (. evt -target)
                 textReq (js.XMLHttpRequest.) ]
             (.open textReq  "GET"  "http://localhost/svg/assets/group1.xml"  true )
             (set! (. textReq -responseType) "text/xml")
             (set! (. textReq -onload)
                   (fn [evt]
                     (let [ rawStr (.replace (.. evt -target -response) (js.RegExp."[\\u200B]" "g") "")
                            items (js->clj (.split rawStr "\n/////\n"))
                            endCount (count items)
                            counter (atom 0)  ]
                       (doseq [ v items ]
                         (let [ key (aget (.match v #"(?:id=\u0022)(\w+)") 1) ]
                           (swap! counter inc)
                           (if (= @counter endCount)
                             (.get db key
                               (fn [response]
                                 (if response
                                   (js.postMessage "done")
                                   (.put db key v
                                         (fn [] (js.postMessage "done")))))))
                           (.get db key
                                 (fn [response ]
                                     (if response
                                       nil
                                     (.put db key v nil)))))))))
             
             (.send textReq nil))))))
  
  )


