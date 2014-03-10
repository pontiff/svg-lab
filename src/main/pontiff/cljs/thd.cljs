(ns pontiff.cljs.threads)

(defn Thread [ ]
  (this-as this
      (set! (. this -thread)
            (js.Worker.
             (js.URL.createObjectURL
              (js.Blob.
                (array
                 (str "onmessage = " (fn [ message ] (js.eval
                                                      (.concat
                                                        "("
                                                        (.toString (.. message -data -exec))
                                                        ")();")))";"))
                (js-obj "type" "text/javascript")))))
      
      (set! (. this -exec)
            (fn [ code ]
              (.postMessage
               (. this -thread) (js-obj "exec" (str code)))))
      (set! (. this -setCallback)
            (fn [ clbk ]
              (set! (.. this -thread -onmessage) clbk)))
      (set! (. this -kill)
            (fn [] (.. this -thread terminate)))
      this))

