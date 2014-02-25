goog.provide('saetos.cljs.app.mainVideo');
goog.require('cljs.core');
saetos.cljs.app.mainVideo.FPS = 30;
saetos.cljs.app.mainVideo.frameInterval = .03;
saetos.cljs.app.mainVideo.init = (function init(){
elements.mainVideo.onplay = (function (){
var this$ = this;
var time = this$.currentTime;
if((time > 0))
{this$.timeStamp = this$.currentTime;
} else
{this$.timeStamp = (this$.currentTime - .03);
}
return this$.requestId = this$.doFrame.fire();
});
elements.mainVideo.onpause = (function (){
var this$ = this;
if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
elements.mainVideo.onended = (function (){
var this$ = this;
if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
var doFrame = (function (ctxt){
var this$ = this;
this$.fire = ((function (this$){
return (function (){
if(((ctxt.currentTime - ctxt.timeStamp) > .03))
{var time_13570 = ctxt.currentTime;
var frame_13571 = Math.floor((30 * time_13570));
var frameSet_13572 = (elements.mainVideo.timeline[frame_13571]);
ctxt.timeStamp = time_13570;
if(cljs.core.truth_(frameSet_13572))
{frameSet_13572.call(null);
} else
{var state_13573 = elements.mainVideo.state;
if(!(cljs.core._EQ_.call(null,state_13573,0)))
{(elements.mainVideo.takeDowns[state_13573]).call(null);
} else
{}
}
} else
{}
return ctxt.requestId = requestAnimationFrame(this$.fire);
});})(this$))
;
return this$;
});
return elements.mainVideo.doFrame = (new doFrame(elements.mainVideo));
});
