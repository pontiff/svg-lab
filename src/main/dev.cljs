(ns dev)


  (def FPS 15)
  (def ecpMovePoint (goog.dom.getElement "ecpMovePoint"))
  (def ecpMovePointShadow (goog.dom.getElement "ecpMovePointShadow"))
  (def editControlPanelDiv (goog.dom.getElement "editControlPanelDiv"))

  (def mainVideo (goog.dom.getElement "mainVideo"))
  ;(def mainVideo (goog.dom.getElement "narratorVideo"))
  (def pauseButton (goog.dom.getElement "pauseButton"))
  (def playButton (goog.dom.getElement "playButton"))
  (def skipForwardButton (goog.dom.getElement "skipForwardButton"))
  (def forwardStepCountField (goog.dom.getElement "forwardStepCountField"))
  (def backwardStepCountField (goog.dom.getElement "backwardStepCountField"))
  (def skipBackwardButton (goog.dom.getElement "skipBackwardButton"))
  (def autoReturnCheckbox (goog.dom.getElement "autoReturnCheckbox"))
  (def timeReturnField (goog.dom.getElement "timeReturnField"))

(defn init []

  (set! (. js.window -onbeforeunload)
        (fn []
          (if (.-checked autoReturnCheckbox)
            (if (or (js.isNaN (. timeReturnField -value)) (= "" (. timeReturnField -value) ) )
              (js.localStorage.setItem "returnFrame" "N")
              (js.localStorage.setItem "returnFrame" (. timeReturnField -value))))))
  
  (def returnFrame (js.localStorage.getItem "returnFrame"))
  
  (if-not (= "N" returnFrame) 
    (let [ value (js.parseInt returnFrame) ]
      (set! (. autoReturnCheckbox -checked) true)
      (if-not (= 0 value) (set! (. mainVideo -currentTime) (/ value 15)))
      (set! (.-value timeReturnField) returnFrame)))
  
  (goog.events.listen
   playButton
   "click"
   (fn [] (.play mainVideo) ))
  
  (goog.events.listen
   pauseButton
   "click"
   (fn [] (.pause mainVideo)))

  (goog.events.listen
   skipForwardButton
   "click"
   (fn [evt] (.pause mainVideo)
     (set!  (.-currentTime mainVideo)
             (+ (. mainVideo -currentTime)
                (/ (js.parseInt (. forwardStepCountField -value))FPS)))
     (let [ frame (js.Math.floor(* 15 (. mainVideo -currentTime) ) )
            frameOp (aget  (. mainVideo -timeline) frame) ]
       (if frameOp (frameOp)))))

  (goog.events.listen
   skipBackwardButton
   "click"
   (fn [evt] (.pause mainVideo)
     (set!  (.-currentTime mainVideo)
             (- (. mainVideo -currentTime)
                (/ (js.parseInt (. backwardStepCountField -value))FPS)))
     (let [ frame (js.Math.floor(* 15 (. mainVideo -currentTime) ) )
            frameOp (aget (. mainVideo -timeline) frame)  ]
       (if frameOp (frameOp)))))

  (set!
   (. mainVideo -ontimeupdate)
   (fn []
     (set! (.-value timeReturnField)
         (js.Math.floor (* (.-currentTime mainVideo) 15)))))

  (goog.events.listen
   ecpMovePointShadow (array "mousedown" "mouseup" "mousemove" "mouseout")
   (. (videoEditBarDragHandler. editControlPanelDiv) -fire))
                

)


(defn videoEditBarDragHandler [ target ]
  (this-as this
     (set! (. this -selected) false)      
     (set! (. this -fire)
           (fn [evt]
             (.preventDefault evt)
             (cond
              (= "mousedown" (. evt -type))
              (do
                (set! (. this -selected) true)
                (set! (.-sX this) (.-clientX evt))
                (set! (.-sY this) (.-clientY evt))
                (set! (.-sLeft this) (js.parseInt (.. target -style -left)))
                (set! (.-sTop this) (js.parseInt (.. target -style -top))))
              (= "mousemove" (. evt -type))
              (if (. this -selected)
                (let [newLeft  (str (+ (. this -sLeft) (- (. evt -clientX) (. this -sX))) "px")
                      newRight (str (+ (. this -sTop) (- (. evt -clientY) (. this -sY))) "px") ]
                  (set! (.. target -style -left) newLeft)
                  (set! (.. target -style -top) newRight)))
                
              (or (= (. evt -type) "mouseup")
                  (= (. evt -type) "mouseout"))
              
              (set! (. this -selected) false))))
     this))

