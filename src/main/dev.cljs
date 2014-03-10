(ns dev)

  (def FPS 15)
  (def ecpMovePoint (goog.dom.getElement "ecpMovePoint"))
  (def ecpMovePointShadow (goog.dom.getElement "ecpMovePointShadow"))
  (def editControlPanelDiv (goog.dom.getElement "editControlPanelDiv"))

  (def mainVideo (goog.dom.getElement "mainVideo"))
  (def pauseButton (goog.dom.getElement "pauseButton"))
  (def playButton (goog.dom.getElement "playButton"))
  (def skipForwardButton (goog.dom.getElement "skipForwardButton"))
  (def forwardStepCountField (goog.dom.getElement "forwardStepCountField"))
  (def backwardStepCountField (goog.dom.getElement "backwardStepCountField"))
  (def skipBackwardButton (goog.dom.getElement "skipBackwardButton"))
  (def autoReturnCheckbox (goog.dom.getElement "autoReturnCheckbox"))
  (def timeReturnField (goog.dom.getElement "timeReturnField"))

  (def ecpMovePoint2 (goog.dom.getElement "ecpMovePoint2"))
  (def ecpMovePointShadow2 (goog.dom.getElement "ecpMovePointShadow2"))
  (def editControlPanelDiv2 (goog.dom.getElement "editControlPanelDiv2"))

  (def mainVideo2 (goog.dom.getElement "narratorVideo"))
  (def pauseButton2 (goog.dom.getElement "pauseButton2"))
  (def playButton2 (goog.dom.getElement "playButton2"))
  (def skipForwardButton2 (goog.dom.getElement "skipForwardButton2"))
  (def forwardStepCountField2 (goog.dom.getElement "forwardStepCountField2"))
  (def backwardStepCountField2 (goog.dom.getElement "backwardStepCountField2"))
  (def skipBackwardButton2 (goog.dom.getElement "skipBackwardButton2"))
  (def autoReturnCheckbox2 (goog.dom.getElement "autoReturnCheckbox2"))
  (def timeReturnField2 (goog.dom.getElement "timeReturnField2"))



(defn init []

  (set! (. js.window -onbeforeunload)
        (fn []
          (if (.-checked autoReturnCheckbox)
            (if (or (js.isNaN (. timeReturnField -value)) (= "" (. timeReturnField -value) ) )
              (js.localStorage.setItem "returnFrame" "N")
              (js.localStorage.setItem "returnFrame" (. timeReturnField -value))))

          (if (.-checked autoReturnCheckbox2)
            (if (or (js.isNaN (. timeReturnField2 -value)) (= "" (. timeReturnField2 -value) ) )
              (js.localStorage.setItem "returnFrame2" "N")
              (js.localStorage.setItem "returnFrame2" (. timeReturnField2 -value))))))

  
  (def returnFrame (js.localStorage.getItem "returnFrame"))
  (def returnFrame2 (js.localStorage.getItem "returnFrame2"))
  
  (if-not (= "N" returnFrame) 
    (let [ value (js.parseInt returnFrame) ]
      (set! (. autoReturnCheckbox -checked) true)
      (if-not (= 0 value) (set! (. mainVideo -currentTime) (/ value 15)))
      (set! (.-value timeReturnField) returnFrame)))

   (if-not (= "N" returnFrame2) 
    (let [ value (js.parseInt returnFrame2) ]
      (set! (. autoReturnCheckbox2 -checked) true)
      (if-not (= 0 value) (set! (. mainVideo2 -currentTime) (/ value 15)))
      (set! (.-value timeReturnField2) returnFrame2)))

  
  (goog.events.listen
   playButton
   "click"
   (fn [] (.play mainVideo) ))
  (goog.events.listen
   playButton2
   "click"
   (fn [] (.play mainVideo2) ))
  
  (goog.events.listen
   pauseButton
   "click"
   (fn [] (.pause mainVideo)))
  (goog.events.listen
   pauseButton2
   "click"
   (fn [] (.pause mainVideo2)))

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
    skipForwardButton2
   "click"
   (fn [evt] (.pause mainVideo2)
     (set!  (.-currentTime mainVideo2)
             (+ (. mainVideo2 -currentTime)
                (/ (js.parseInt (. forwardStepCountField2 -value))FPS)))
     (let [ frame (js.Math.floor(* 15 (. mainVideo2 -currentTime) ) )
            frameOp (aget  (. mainVideo2 -timeline) frame) ]
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
   skipBackwardButton2
   "click"
   (fn [evt] (.pause mainVideo2)
     (set!  (.-currentTime mainVideo2)
             (- (. mainVideo2 -currentTime)
                (/ (js.parseInt (. backwardStepCountField2 -value))FPS)))
     (let [ frame (js.Math.floor(* 15 (. mainVideo2 -currentTime) ) )
            frameOp (aget (. mainVideo2 -timeline) frame)  ]
       (if frameOp (frameOp)))))

  (set!
   (. mainVideo -ontimeupdate)
   (fn []
     (set! (.-value timeReturnField)
         (js.Math.floor (* (.-currentTime mainVideo) 15)))))

  (set!
   (. mainVideo2 -ontimeupdate)
   (fn []
     (set! (.-value timeReturnField2)
         (js.Math.floor (* (.-currentTime mainVideo2) 15)))))

  (goog.events.listen
   ecpMovePointShadow (array "mousedown" "mouseup" "mousemove" "mouseout")
   (. (videoEditBarDragHandler. editControlPanelDiv) -fire))
  (goog.events.listen
   ecpMovePointShadow2 (array "mousedown" "mouseup" "mousemove" "mouseout")
   (. (videoEditBarDragHandler. editControlPanelDiv2) -fire))
                

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

