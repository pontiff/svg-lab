(ns saetos.cljs.time
  (:require [saetos.cljs.css :as css]))

(defn setTimeline [ elem target ]
  (if-not (. target -timeLine) (set! (. target -timeLine) {}))
  (.forEach
   (.match
    (.getAttribute elem "keyframes")
    (js.RegExp. "\\w+\\s+\\w+\\s+\\w+\\s+\\w+\\s+\\w+" "g"))
   (fn [itm idx arr]
     (let [ atArr (.split itm (js.RegExp. "\\s+" "g"))
           sFrame (js.parseInt (aget atArr 0))
           style (aget atArr 1)
           startVal (js.parseInt (aget atArr 2))
           endVal (js.parseInt (aget atArr 3))
           eFrame (+ sFrame (js.parseInt (aget atArr 4)))
           fRange (range sFrame eFrame)
           step   (/(js.Math.round (*(/ 1 (-(- eFrame sFrame)1))100))100) 
           count  (atom 0)
          ]
      (doseq [ v fRange ]
        (let [ frame (+ sFrame @count)
               frameMap ((. target -timeLine) frame)
               sVal (if (> endVal startVal)
                     (+ startVal (* @count step))
                     (- startVal (* @count step)))
             ]
          (cond
           (= "opacity" style)
           (do
             (if frameMap
               (do
                    (set! (. target -timeLine)
                         (assoc (. target -timeLine) frame
                             (cons
                               #(css/setOpacity elem sVal)    
                               ((. target -timeLine) frame)))))
               (do
                    (set! (. target -timeLine)
                          (assoc (. target -timeLine) frame
                                 (array #(css/setOpacity elem sVal))))))))
          (swap!  count inc )))))))
