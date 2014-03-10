(ns pontiff.cljs.app.handlers.mainVideo
  (:require [pontiff.cljs.util :as util]
            [clojure.string :as string]))


(defn init []
  
  ; video duration, must be hard-coded b.c. duration not necessarily available when first initialized
  (def duration 1040.47) 
  (def mainControls (goog.dom.getElement "mainControls"))
  (def controlBar (goog.dom.getElement "controlBar"))
  (def mainVideo elements.mainVideo)
  (def videoTrack (goog.dom.getElement "videoTrack"))
  (def tempPanels (atom (list elements.mainPlayButton videoTrack)))
  (def rTocPanels (util/nodelist->coll (goog.dom.getElementsByClass "rtocList" (goog.dom.getElement "timelineTocs"))))
  (def rTocElements (util/nodelist->coll (goog.dom.getElementsByClass "rtoc" (goog.dom.getElement "timelineTocs"))))
  (def rTocIndices  (atom ()))
 
(doseq [ v rTocPanels ]
  (let [ node (goog.dom.createElement "div")
         frame (int (.getAttribute v "frame"))
         position (+ (* 100 (+ (/ frame (* duration 15)))) (/ frame (* duration 15)))
       ] 
    (set! (.. node -style -cssText)
          (str "width:1%; position:absolute; z-index:0; height:20%; top:40%; border-radius:50%;
            background-color:#6176c0; left:"position"%;"))
    (reset! rTocIndices (concat @rTocIndices (list (list position v))))
    (goog.dom.appendChild videoTrack node)))

(doseq [ v rTocElements ]
   (let [  actions (partition 2 (string/split
                                  (goog.string.collapseWhitespace (.getAttribute v "index")) #" "))
           actionList (for [[k v] actions] (list (goog.dom.getElement k) (int v))) ]
     (goog.events.listen v "click" #(processActionList actionList))))

  (goog.events.listen mainControls "click" (.-fire (videoTimelineHandler. mainVideo duration controlBar)))

  (goog.events.listen mainVideo "timeupdate"
                    (fn [] 
                      (if-not (. mainVideo -paused)
                        (set! (.. controlBar -style -left)
                            (str (* 100 (/ (. mainVideo -currentTime) duration)) "%")))))  

  (goog.events.listen controlBar
                    (array "mousedown" "mouseup" "mouseout" "mousemove" "click")
                    (.-fire (controlButtonHandler. mainVideo duration )))
  (goog.events.listen elements.mainVideoSvg "click" mainPlayAreaHandler)
  (goog.events.listen elements.mainPlayButton "click" mainPlayButtonHandler)
  (goog.events.listen elements.screenChanger "click"
                      (fn [evt]
                        (.stopPropagation evt)
                        (if (= (. elements.videoContainer -className ) "contracted")
                          (set! (. elements.videoContainer -className) "expanded")
                          (set! (. elements.videoContainer -className) "contracted"))))

  )  

(defn closeTempPanels []
  (doseq [v @tempPanels] (set! (.. v -style -display) "none"))
  (set! (.-selected mainControls) false)
  (reset! tempPanels '()))

(defn controlButtonHandler [ video duration ]
  (this-as this
    (set! (. this -fire)
       (fn [evt]
         (.preventDefault evt)
         (.stopPropagation evt)
         (cond
          
          (= (. evt -type) "mousedown")
          (do
            (.pause video)
            (pontiff.cljs.app.handlers.narratorVideo.closeTempPanels)
            (doseq [ v @rTocIndices ]
                    (if (> (js.Math.abs (- (+ 1 (js.parseFloat (.. controlBar -style -left))) (+ .5 (first v)))) .5)
                      (set! (.. (second v) -style -display) "none")
                      (do
                        (set! (.. (second v) -style -display) "inline")
                        (if (empty? @tempPanels)
                          (reset! tempPanels (list (second v)))
                          (reset! tempPanels (concat @tempPanels (list (second v))))))))
            (set! (. this -selected) true)
            (set! (. this -width) (.. evt -target -parentNode -clientWidth))
            (set! (. this -startX) (. evt -clientX))) 
          
          (= (. evt -type) "mousemove")
          (if (. this -selected)
            (let [ distance (- (. evt -clientX) (. this -startX)) ]
              
              (cond
               (< (+ distance (.. evt -target -offsetLeft)) 0)
               (let [ frameSet (aget (. elements.mainVideo -timeline) 0) ]
                  (if frameSet
                    (frameSet)
                    (.forEach elements.mainVideo.state
                           (fn [ el idx arr ]
                               (if-not ( = 0 el)
                                   (do
                                      ((aget (aget elements.mainVideo.stateMap idx) 0))
                                      (aset arr idx 0))))))
                  (doseq [ v @rTocIndices ]
                    (if (> (js.Math.abs (- (+ 1 (js.parseFloat (.. controlBar -style -left))) (+ .5 (first v)))) .5)
                      (set! (.. (second v) -style -display) "none")
                      (do
                        (set! (.. (second v) -style -display) "inline")
                        (if (empty? @tempPanels)
                          (reset! tempPanels (list (second v)))
                          (reset! tempPanels (concat @tempPanels (list (second v))))))))
                  (set! (.. evt -target -left) "0%")
                  (set! (. video -currentTime) 0)
                  (set! (. this -startX) (. evt -clientX)))

               (> (+ distance (.. evt -target -offsetLeft)) (. this -width))
                 (let [ frameSet (aget (. elements.mainVideo -timeline) (* duration 30)) ]
                   (if frameSet
                     (frameSet)
                     (.forEach elements.mainVideo.state
                           (fn [ el idx arr ]
                               (if-not ( = 0 el)
                                   (do
                                      ((aget (aget elements.mainVideo.stateMap idx) 0))
                                      (aset arr idx 0))))))
                   (doseq [ v @rTocIndices ]
                     (if (> (js.Math.abs (- (+ 1 (js.parseFloat (.. controlBar -style -left))) (+ .5 (first v)))) .5)
                       (set! (.. (second v) -style -display) "none")
                       (do
                         (set! (.. (second v) -style -display) "inline")
                         (if (empty? @tempPanels)
                           (reset! tempPanels (list (second v)))
                           (reset! tempPanels (concat @tempPanels (list v)))))))
                   (set! (.. evt -target -left) "100%")
                   (set! (. video -currentTime) duration)
                   (set! (. this -startX) (. evt -clientX)))

              :else
               (let [ leftPos (* (/ (+ (.. evt -target -offsetLeft) distance)(. this -width)) 100)
                      time (* (/ leftPos 100) duration)
                      frameSet (aget (. elements.mainVideo -timeline) (js.Math.floor (* time 30))) ]
                  (if frameSet
                     (frameSet)
                     (.forEach elements.mainVideo.state
                           (fn [ el idx arr ]
                               (if-not ( = 0 el)
                                   (do
                                      ((aget (aget elements.mainVideo.stateMap idx) 0))
                                      (aset arr idx 0))))))
                  (doseq [ v @rTocIndices ]
                    (if (> (js.Math.abs (- (+ 1 (js.parseFloat (.. controlBar -style -left))) (+ .5 (first v)))) .5)
                      (set! (.. (second v) -style -display) "none")
                      (set! (.. (second v) -style -display) "inline")))
                 (set! (.. evt -target -style -left) (str leftPos "%"))
                 (set! (. video -currentTime) time)
                 (set! (. this -startX) (. evt -clientX))))))
          
          (or (= (. evt -type) "mouseup")
              (= (. evt -type) "mouseout"))
          (do
            (if (. this -selected) (set! (. this -selected) false))
            (if (. video -paused)
              (if (empty? @tempPanels)
                  (reset! tempPanels (list elements.mainPlayButton))
                  (reset! tempPanels (concat @tempPanels (list elements.mainPlayButton)))))))))
              
   this))

(defn processActionList [ actionList ]
  (pontiff.cljs.app.handlers.narratorVideo.closeTempPanels)
  (closeTempPanels)
  (goog.events.listenOnce (first (last actionList)) "seeked"
                          #(.play (first (last actionList))))
  (doseq [[k v] actionList]
    (do
      (. k pause)
      ((aget (. k -timeline) (* 2 v)))
      (set! (. k -currentTime) (/ v 15)))))

(defn videoTimelineHandler [ video length bar ]
  (this-as this
    (set! (. this -fire)
       (fn [evt]
         (.preventDefault evt)
         (.stopPropagation evt)
         (cond
          
          (.-selected mainControls)
          (do
            (pontiff.cljs.app.handlers.narratorVideo.closeTempPanels)
            (.pause video)
            (let [ xLoc  (- (. evt -clientX)
                         (+ (.. bar -parentNode -parentNode -parentNode -offsetLeft)
                         (.. bar -parentNode -parentNode -parentNode -parentNode -offsetLeft)))
                width (.. evt -target -offsetWidth)
                timeSet (* (/ xLoc width) length)
                newLoc  (str (* 100 (/ xLoc width))"%")
                frame (js.Math.floor (* 30 timeSet))
                frameSet (aget (. video -timeline) frame)  ]
           (set! (.. bar  -style -left) newLoc)
           (set! (. video -currentTime) timeSet)
           (if frameSet
             (frameSet)
               (.forEach elements.mainVideo.state
                  (fn [ el idx arr ]
                      (if-not ( = 0 el)
                         (do
                            ((aget (aget elements.mainVideo.stateMap idx) 0))
                            (aset arr idx 0))))))
           (doseq [ v @rTocIndices ]
              (if (> (js.Math.abs (- (+ 1 (js.parseFloat (.. controlBar -style -left))) (+ .5 (first v)))) .5)
                (set! (.. (second v) -style -display) "none")
                (do
                  (set! (.. (second v) -style -display) "inline")
                  (if (empty? @tempPanels)
                    (reset! tempPanels (list (second v)))
                    (reset! tempPanels (concat @tempPanels (list (second v))))))))))
          :else
          (do
            (set! (.-selected mainControls) true)
            (set! (.. videoTrack -style -display) "inline")
            (if (empty? @tempPanels)
                  (reset! tempPanels (list videoTrack))
                  (reset! tempPanels (concat @tempPanels (list videoTrack))))))))
    this))

(defn mainPlayAreaHandler [evt]
  (.stopPropagation evt)
  (cond
   (> (js.parseInt (.. elements.narratorDiv -style -zIndex)) 10)
    (closeTempPanels)
   
   (= (.. videoTrack -style -display) "inline")
   (do
     (closeTempPanels)
     (set! (.-selected mainControls) false)
     (.play mainVideo))

   :else
   (do
     (.pause mainVideo)
     (set! (.. elements.mainPlayButton -style -display) "inline")
     (set! (.-selected mainControls) true)
     (set! (.. videoTrack -style -display) "inline")
     (if (empty? @tempPanels)
       (reset! tempPanels (list elements.mainPlayButton videoTrack))
       (reset! tempPanels (concat @tempPanels (list elements.mainPlayButton videoTrack)))))))

(defn mainPlayButtonHandler [evt]
  (.stopPropagation evt)
   (if-not (> (js.parseInt (.. elements.narratorDiv -style -zIndex))10)
    (do
    (closeTempPanels)
    (set! (.-selected mainControls) false)
    (.play mainVideo))))
