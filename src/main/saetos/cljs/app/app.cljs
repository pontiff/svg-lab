(ns saetos.cljs.app)

(defn init []

  (saetos.cljs.app.mainVideo.init)
  (saetos.cljs.app.narratorVideo.init)
  (dev.init)
  (def elements.mainVideo.state 1)

 (comment
  (def workerThread (saetos.cljs.threads.Thread.))
  (.setCallback workerThread (fn [message] 
                               (. workerThread kill)
                               (set! workerThread nil)))
  (.exec workerThread 
       (fn []
         (js.importScripts "http://localhost/js/threads/threads.js")
            (goog.events.listenOnce
            (saetos.cljs.threads.idb.Idb. "testdb" "1")
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
  
   (def svgRoot (js.Snap "#svgRoot"))
   (def db (saetos.cljs.idb.Idb. "testdb" "1"))

   (.get db "rect3027" (fn [dat] (def rect3027 (.select (.append svgRoot (js.Snap.parse dat)) "#rect3027"))))
   (.get db "rect3021" (fn [dat] (def rect3021 (.select (.append svgRoot (js.Snap.parse dat)) "#rect3021"))))

   (.get db "path3023" (fn [dat] (def path3023 (.select (.append svgRoot (js.Snap.parse dat)) "#path3023"))))
   (.get db "path3019" (fn [dat] (def path3019 (.select (.append svgRoot (js.Snap.parse dat)) "#path3019"))))
 
   (.get db "rect3021" (fn [dat] (def mik3 (js.Snap.parse dat))))
   (def mika (.select mik1))
   (.drag rect3021)
   (.drag path3019)
   (.drag path3023)
   (.drag rect3027)

   (def bigcir (.circle svgRoot 150 150 100))
   (.drag bigcir)

   (def mike (.select svgRoot "path3019"))

   (.appendChild mike (.. path3019 -documentElement))
 )
  
 )

