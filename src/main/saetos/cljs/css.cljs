(ns saetos.cljs.css)

(defn setOpacity [ elem value ]
  (set! (.. elem -style -opacity) value))

