(defproject chambered-cljs "0.1.0-SNAPSHOT"
  :description "A port of Notch's Chambered JavaScript demo"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2069"]]

  :source-paths ["src"]

  :plugins [[lein-cljsbuild "1.0.0"]]

  :hooks [leiningen.cljsbuild]

  :cljsbuild {:builds
               [{:id "chambered_dev"
                 :source-paths ["src"]
                 :compiler {:output-to "chambered-dev.js"
                            :optimizations :simple
                            :static-fns true}}
                {:id "chambered"
                 :source-paths ["src"]
                 :compiler {:output-to "chambered.js"
                            :optimizations :advanced}}]})
