(ns sbx
  (:require [pontiff.cljs.util :as util]
            [clojure.string :as string]))

(comment

(def mainControls (goog.dom.getElement "mainControls"))
(def duration 1040.47)

(def rTocPanels (util/nodelist->coll (goog.dom.getElementsByClass "rtocList" (goog.dom.getElement "timelineTocs"))))
(def rTocElements (util/nodelist->coll (goog.dom.getElementsByClass "rtoc" (goog.dom.getElement "timelineTocs"))))
(def rTocIndices  (atom ()))

(doseq [ v rTocPanels ]
  (let [ node (goog.dom.createElement "div")
         frame (int (.getAttribute v "frame"))  ] 
    (set! (.. node -style -cssText)
          (str "width:1%; position:absolute; z-index:0; height:20%; top:40%; border-radius:50%;
            background-color:#6176c0; left:"(/ frame 15 duration)"%;"))
    (reset! rTocIndices (concat @rTocIndices (list (+ (/ frame 15 duration) (* (/ frame 15 duration) .02)) v)))         
    (goog.dom.appendChild mainControls node)
    (goog.events.listen node "click" (fn [ evt ] (set! (.. v -style -display) "inline")))))

(doseq [ v rTocElements ]
   (let [  actions (partition 2 (string/split
                                  (goog.string.collapseWhitespace (.getAttribute v "index")) #" "))
           actionList (for [[k v] actions] (list (goog.dom.getElement k) (int v))) ]
     (goog.events.listen v "click" #(processActionList actionList))))

(defn processActionList [ actionList ]
  (pontiff.cljs.app.handlers.narratorVideo.closeTempPanels)
  (set! (.. elements.mainPlayButton -style -display) "none")

  (goog.events.listenOnce (first (last actionList)) "seeked"
                          #(.play (first (last actionList))))
  (doseq [[k v] actionList]
    (do
      (. k pause)
      ((aget (. k -timeline) (* 2 v)))
      (set! (. k -currentTime) (/ v 15)))))



)