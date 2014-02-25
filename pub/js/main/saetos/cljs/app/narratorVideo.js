goog.provide('saetos.cljs.app.narratorVideo');
goog.require('cljs.core');
saetos.cljs.app.narratorVideo.FPS = 30;
saetos.cljs.app.narratorVideo.frameInterval = .03;
saetos.cljs.app.narratorVideo.init = (function init(){
elements.narratorVideo.onplay = (function (){
var this$ = this;
var time = this$.currentTime;
if((time > 0))
{this$.timeStamp = this$.currentTime;
} else
{this$.timeStamp = (this$.currentTime - .03);
}
return this$.requestId = this$.doFrame.fire();
});
elements.narratorVideo.onpause = (function (){
var this$ = this;
if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
elements.narratorVideo.onended = (function (){
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
{var time_11718 = ctxt.currentTime;
var frame_11719 = Math.floor((30 * time_11718));
var frameSet_11720 = (elements.narratorVideo.timeline[frame_11719]);
ctxt.timeStamp = time_11718;
if(cljs.core.truth_(frameSet_11720))
{frameSet_11720.call(null);
} else
{}
} else
{}
return ctxt.requestId = requestAnimationFrame(this$.fire);
});})(this$))
;
return this$;
});
return elements.narratorVideo.doFrame = (new doFrame(elements.narratorVideo));
});
