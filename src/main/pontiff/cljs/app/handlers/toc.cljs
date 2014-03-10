(ns pontiff.cljs.app.handlers.toc
  (:require [pontiff.cljs.util :as util]
            [clojure.string :as string]))

(defn init []
  (doseq [ v (util/nodelist->coll (goog.dom.getElementsByClass "toc")) ]
  (let [ actions (partition 2 (string/split
                               (goog.string.collapseWhitespace (.getAttribute v "index")) #" "))
        actionList (for [[k v] actions] (list (goog.dom.getElement k) (int v))) ]
    (goog.events.listen v "click" #(processActionList actionList)))))

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

