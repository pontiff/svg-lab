goog.provide('saetos.cljs.app.elements.mainVideo');
goog.require('cljs.core');
goog.require('saetos.cljs.app.elements');
saetos.cljs.app.elements.mainVideo.init = (function init(){
var mainVideo = goog.dom.getElement("mainVideo");
mainVideo.onplay = (function (){
var this$ = this;
this$.timeStamp = this$.currentTime;
return this$.requestId = this$.frameWatch.fire();
});
mainVideo.onpause = (function (){
var this$ = this;
if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
mainVideo.onended = (function (){
var this$ = this;
if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
return mainVideo.frameWatch = (function (){var frameWatch = (function (ctxt){
var this$ = this;
this$.fire = ((function (this$){
return (function (){
if(((ctxt.currentTime - ctxt.timeStamp) > .062))
{var time_5838 = ctxt.currentTime;
ctxt.timeStamp = time_5838;
goog.events.fireListeners(ctxt,[cljs.core.str(Math.floor((15 * time_5838)))].join(''),false);
} else
{}
return ctxt.requestId = requestAnimationFrame(this$.fire);
});})(this$))
;
return this$;
});
return mainVideo.frameWatch = (new frameWatch(mainVideo));
})();
});
