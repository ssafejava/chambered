(ns minecraft-cljs.macros)

(defmacro forloop [[init test step] body]
  `(loop [~@init]
     (when ~test
       ~@body
       (recur ~step))))
