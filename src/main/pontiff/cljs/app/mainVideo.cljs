(ns pontiff.cljs.app.mainVideo)

(def FPS 30); here for reference **this is the animation rate, not the framerade of the underlying video
(def frameInterval .03); here for reference, literal value used for speed, below.

(defn init []

    (def groundState (clj->js (into [] (repeat (.-length (.-state elements.mainVideo)) 0))))
  
    (set! (. elements.mainVideo -onplay)
        (fn []
          (this-as this
                   (set! (. this -timeStamp) (-(. this -currentTime) .04))
                   (set! (. this -requestId) (.. this -doFrame fire)))))
    
    (set! (. elements.mainVideo -onpause)
        (fn []
          (this-as this
            (if (. this -requestId)
              (do
                (js.cancelAnimationFrame (. this -requestId))
                (set! (. this -requestedId) nil))))))
    
    (set! (. elements.mainVideo -onended)
        (fn []
          (this-as this
            (if (. this -requestId)
              (do
                (js.cancelAnimationFrame (. this -requestId))
                (set! (. this -requestedId) nil))))))
    (let [ doFrame
               (fn [ ctxt ]
                 (this-as this
                   (set! (. this -fire)
                     (fn []
                           (if (> (- (. ctxt -currentTime) (. ctxt -timeStamp)) .03 )
                             (let [ time (. ctxt -currentTime)
                                    frame (js.Math.floor (* 30 time))
                                    frameSet (aget (. elements.mainVideo -timeline) frame) ]
                               (set! (. ctxt -timeStamp) time)
                               (if frameSet
                                 (frameSet)
                                 (do
                                    (.forEach elements.mainVideo.state
                                           (fn [ el idx arr ]
                                             (if-not ( = 0 el)
                                               (do
                                                 ((aget (aget elements.mainVideo.stateMap idx) 0))
                                                 (aset arr idx 0)))))
                                    (set! elements.mainVideo.state groundState))))) 
                           
                            (set! (. ctxt -requestId) (js.requestAnimationFrame (. this -fire)))))
                   this)) ]
         
     (set! (. elements.mainVideo -doFrame) (doFrame. elements.mainVideo)))

 )


