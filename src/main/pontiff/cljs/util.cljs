(ns pontiff.cljs.util)

(defn nodelist->coll [nl]
  (for [x (range 0 (.-length nl))]
    (aget nl x)))

