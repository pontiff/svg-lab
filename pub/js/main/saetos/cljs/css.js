goog.provide('saetos.cljs.css');
goog.require('cljs.core');
saetos.cljs.css.setOpacity = (function setOpacity(elem,value){
return elem.style.opacity = value;
});
