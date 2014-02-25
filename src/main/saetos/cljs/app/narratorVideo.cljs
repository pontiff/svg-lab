(ns saetos.cljs.app.narratorVideo)

(def FPS 30); here for reference
(def frameInterval .03); here mostly for reference, literal value used for speed, below.

(defn init []

    (set! (. elements.narratorVideo -onplay)
        (fn []
          (this-as this
            (let [ time (. this -currentTime) ]
              (if (> time 0)
                (set! (. this -timeStamp) (. this -currentTime))
                (set! (. this -timeStamp) (-(. this -currentTime) .03))) ; this is to make even the very first frame addressable.
              (set! (. this -requestId) (.. this -doFrame fire))))))
    
    (set! (. elements.narratorVideo -onpause)
        (fn []
          (this-as this
            (if (. this -requestId)
              (do
                (js.cancelAnimationFrame (. this -requestId))
                (set! (. this -requestedId) nil))))))
    
    (set! (. elements.narratorVideo -onended)
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
                                    frameSet (aget (. elements.narratorVideo -timeline) frame) ]
                               (set! (. ctxt -timeStamp) time)
                               (if frameSet (frameSet))))
                           (set! (. ctxt -requestId) (js.requestAnimationFrame (. this -fire)))))
                   this)) ]
         
     (set! (. elements.narratorVideo -doFrame) (doFrame. elements.narratorVideo)))

 )


