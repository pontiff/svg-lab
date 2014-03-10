// Compiled by ClojureScript .
goog.provide('pontiff.cljs.app.narratorVideo');
goog.require('cljs.core');
pontiff.cljs.app.narratorVideo.FPS = 30;
pontiff.cljs.app.narratorVideo.frameInterval = .03;
pontiff.cljs.app.narratorVideo.init = (function init(){pontiff.cljs.app.narratorVideo.groundState = cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,elements.narratorVideo.state.length,0)));
elements.narratorVideo.onplay = (function (){var this$ = this;var time = this$.currentTime;if((time > 0))
{this$.timeStamp = this$.currentTime;
} else
{this$.timeStamp = (this$.currentTime - .03);
}
return this$.requestId = this$.doFrame.fire();
});
elements.narratorVideo.onpause = (function (){var this$ = this;if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
elements.narratorVideo.onended = (function (){var this$ = this;if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
var doFrame = (function (ctxt){var this$ = this;this$.fire = ((function (this$){
return (function (){if(((ctxt.currentTime - ctxt.timeStamp) > .03))
{var time_16824 = ctxt.currentTime;var frame_16825 = Math.floor((30 * time_16824));var frameSet_16826 = (elements.narratorVideo.timeline[frame_16825]);ctxt.timeStamp = time_16824;
if(cljs.core.truth_(frameSet_16826))
{frameSet_16826.call(null);
} else
{elements.narratorVideo.state.forEach(((function (time_16824,frame_16825,frameSet_16826,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.narratorVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(time_16824,frame_16825,frameSet_16826,this$))
);
elements.mainVideo.state = pontiff.cljs.app.narratorVideo.groundState;
}
} else
{}
return ctxt.requestId = requestAnimationFrame(this$.fire);
});})(this$))
;
return this$;
});return elements.narratorVideo.doFrame = (new doFrame(elements.narratorVideo));
});
