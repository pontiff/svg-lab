(require '[cljs.closure :as cljsc])
(defn compile-project []
  (cljsc/build
   "src/main"
   { :optimizations :simple :pretty-print true :output-to "pub/js/index.js" :output-dir "pub/js/main" }))
(defn compile-threads []
  (cljsc/build
   "src/threads"
   { :optimizations :simple :pretty-print true :output-to "pub/js/threads/threads.js" :output-dir "pub/js/threads" }))