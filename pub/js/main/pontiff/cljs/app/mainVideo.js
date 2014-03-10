// Compiled by ClojureScript .
goog.provide('pontiff.cljs.app.mainVideo');
goog.require('cljs.core');
pontiff.cljs.app.mainVideo.FPS = 30;
pontiff.cljs.app.mainVideo.frameInterval = .03;
pontiff.cljs.app.mainVideo.init = (function init(){pontiff.cljs.app.mainVideo.groundState = cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,elements.mainVideo.state.length,0)));
elements.mainVideo.onplay = (function (){var this$ = this;this$.timeStamp = (this$.currentTime - .04);
return this$.requestId = this$.doFrame.fire();
});
elements.mainVideo.onpause = (function (){var this$ = this;if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
elements.mainVideo.onended = (function (){var this$ = this;if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
var doFrame = (function (ctxt){var this$ = this;this$.fire = ((function (this$){
return (function (){if(((ctxt.currentTime - ctxt.timeStamp) > .03))
{var time_15048 = ctxt.currentTime;var frame_15049 = Math.floor((30 * time_15048));var frameSet_15050 = (elements.mainVideo.timeline[frame_15049]);ctxt.timeStamp = time_15048;
if(cljs.core.truth_(frameSet_15050))
{frameSet_15050.call(null);
} else
{elements.mainVideo.state.forEach(((function (time_15048,frame_15049,frameSet_15050,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.mainVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(time_15048,frame_15049,frameSet_15050,this$))
);
elements.mainVideo.state = pontiff.cljs.app.mainVideo.groundState;
}
} else
{}
return ctxt.requestId = requestAnimationFrame(this$.fire);
});})(this$))
;
return this$;
});return elements.mainVideo.doFrame = (new doFrame(elements.mainVideo));
});
