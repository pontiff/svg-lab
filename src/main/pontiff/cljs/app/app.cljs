(ns pontiff.cljs.app)

(defn init []

  (pontiff.cljs.app.mainVideo.init)
  (pontiff.cljs.app.narratorVideo.init)
  (pontiff.cljs.app.handlers.mainVideo.init)
  (pontiff.cljs.app.handlers.narratorVideo.init)
  (pontiff.cljs.app.handlers.toc.init)
  (dev.init)
  
)
