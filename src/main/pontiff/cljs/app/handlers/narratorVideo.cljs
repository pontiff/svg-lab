(ns pontiff.cljs.app.handlers.narratorVideo
  (:require [pontiff.cljs.util :as util]))

(defn init []
  
  (def tocPanels (concat (util/nodelist->coll (goog.dom.getElementsByClass "ntocPanel" (goog.dom.getElement "rtocs")))
                       (util/nodelist->coll (goog.dom.getElementsByClass "ntocPanel" (goog.dom.getElement "ltocs")))))

  (def rTocList
     (sort-by first >
         (for [v  (util/nodelist->coll (goog.dom.getElementsByClass "ntoc" (goog.dom.getElement "rtocs")))]
           (list  (int (.getAttribute v "frame")) v (.-parentNode v)))))

  (def lTocList
     (sort-by first >
         (for [v  (util/nodelist->coll (goog.dom.getElementsByClass "ntoc" (goog.dom.getElement "ltocs")))]
           (list  (int (.getAttribute v "frame")) v (.-parentNode v)))))
   
  (doseq [[x y z] (concat lTocList rTocList)]
     (goog.events.listen y "click" tocNodeHandler))

  (goog.events.listen (goog.dom.getElement "narratorTOCsL") "click"
                      (fn [] (pontiff.cljs.app.handlers.mainVideo.closeTempPanels)))

  (goog.events.listen (goog.dom.getElement "narratorTOCsR") "click"
                      (fn [] (pontiff.cljs.app.handlers.mainVideo.closeTempPanels)))

   (goog.events.listen (goog.dom.getElement "narratorController") "click"
                      (fn [] (pontiff.cljs.app.handlers.mainVideo.closeTempPanels)))

  (goog.events.listen elements.narratorVideo "click"
    (fn []                      
         (.pause elements.narratorVideo)
         (let [ frame (* 30 (. elements.narratorVideo -currentTime))
                toc (if (< 45 (+ (/ (js.parseFloat (.. elements.narratorDiv -style -width)) 2)
                                 (js.parseFloat (.. elements.narratorDiv -style -left))))
                      (.-parentNode (second (some #(if (<= (first %) frame) %) lTocList)))
                      (.-parentNode (second (some #(if (<= (first %) frame) %) rTocList)))) ]
           (set! (.. elements.narratorController -style -display) "inline")
           (set! (.. toc -style -display) "inline")
           (reset! tempPanels (list* toc elements.narratorController @tempPanels)))))

  (goog.events.listen elements.narratorDisableButton "click"
     (fn [evt]
       (.stopPropagation evt)                   
       (closeTempPanels)
       (set! (.-className elements.narratorVideo) "quickAnim")
       (set! (.. elements.narratorVideo -style -width) "0%")
       (set! (.. elements.narratorVideo -style -height) "0%")
       (set! (.. elements.narratorVideo -style -margin) "50%")
       (.play elements.mainVideo)))
                    
  (goog.events.listen elements.narratorPlayButton "click"
     (fn [evt]
       (.stopPropagation evt)                  
       (doseq [v tocPanels ]
       (closeTempPanels)   
       (.play elements.narratorVideo))))
)


(defn tocNodeHandler [ evt ]
  (.stopPropagation evt)
  (let [frame (.getAttribute (. evt -target) "frame")]
    (set! (. elements.narratorVideo -currentTime) (/ frame 30))
    (closeTempPanels)
    ((aget (. elements.narratorVideo -timeline) frame))
    (.play elements.narratorVideo)))


(def tempPanels (atom ()))

(defn closeTempPanels []
  (doseq [v @tempPanels] (set! (.. v -style -display) "none"))
  (reset! tempPanels '()))

