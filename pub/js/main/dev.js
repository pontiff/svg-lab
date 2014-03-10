// Compiled by ClojureScript .
goog.provide('dev');
goog.require('cljs.core');
dev.FPS = 15;
dev.ecpMovePoint = goog.dom.getElement("ecpMovePoint");
dev.ecpMovePointShadow = goog.dom.getElement("ecpMovePointShadow");
dev.editControlPanelDiv = goog.dom.getElement("editControlPanelDiv");
dev.mainVideo = goog.dom.getElement("mainVideo");
dev.pauseButton = goog.dom.getElement("pauseButton");
dev.playButton = goog.dom.getElement("playButton");
dev.skipForwardButton = goog.dom.getElement("skipForwardButton");
dev.forwardStepCountField = goog.dom.getElement("forwardStepCountField");
dev.backwardStepCountField = goog.dom.getElement("backwardStepCountField");
dev.skipBackwardButton = goog.dom.getElement("skipBackwardButton");
dev.autoReturnCheckbox = goog.dom.getElement("autoReturnCheckbox");
dev.timeReturnField = goog.dom.getElement("timeReturnField");
dev.ecpMovePoint2 = goog.dom.getElement("ecpMovePoint2");
dev.ecpMovePointShadow2 = goog.dom.getElement("ecpMovePointShadow2");
dev.editControlPanelDiv2 = goog.dom.getElement("editControlPanelDiv2");
dev.mainVideo2 = goog.dom.getElement("narratorVideo");
dev.pauseButton2 = goog.dom.getElement("pauseButton2");
dev.playButton2 = goog.dom.getElement("playButton2");
dev.skipForwardButton2 = goog.dom.getElement("skipForwardButton2");
dev.forwardStepCountField2 = goog.dom.getElement("forwardStepCountField2");
dev.backwardStepCountField2 = goog.dom.getElement("backwardStepCountField2");
dev.skipBackwardButton2 = goog.dom.getElement("skipBackwardButton2");
dev.autoReturnCheckbox2 = goog.dom.getElement("autoReturnCheckbox2");
dev.timeReturnField2 = goog.dom.getElement("timeReturnField2");
dev.init = (function init(){window.onbeforeunload = (function (){if(cljs.core.truth_(dev.autoReturnCheckbox.checked))
{if(cljs.core.truth_((function (){var or__3162__auto__ = isNaN(dev.timeReturnField.value);if(cljs.core.truth_(or__3162__auto__))
{return or__3162__auto__;
} else
{return cljs.core._EQ_.call(null,"",dev.timeReturnField.value);
}
})()))
{localStorage.setItem("returnFrame","N");
} else
{localStorage.setItem("returnFrame",dev.timeReturnField.value);
}
} else
{}
if(cljs.core.truth_(dev.autoReturnCheckbox2.checked))
{if(cljs.core.truth_((function (){var or__3162__auto__ = isNaN(dev.timeReturnField2.value);if(cljs.core.truth_(or__3162__auto__))
{return or__3162__auto__;
} else
{return cljs.core._EQ_.call(null,"",dev.timeReturnField2.value);
}
})()))
{return localStorage.setItem("returnFrame2","N");
} else
{return localStorage.setItem("returnFrame2",dev.timeReturnField2.value);
}
} else
{return null;
}
});
dev.returnFrame = localStorage.getItem("returnFrame");
dev.returnFrame2 = localStorage.getItem("returnFrame2");
if(!(cljs.core._EQ_.call(null,"N",dev.returnFrame)))
{var value_17532 = parseInt(dev.returnFrame);dev.autoReturnCheckbox.checked = true;
if(!(cljs.core._EQ_.call(null,0,value_17532)))
{dev.mainVideo.currentTime = (value_17532 / 15);
} else
{}
dev.timeReturnField.value = dev.returnFrame;
} else
{}
if(!(cljs.core._EQ_.call(null,"N",dev.returnFrame2)))
{var value_17533 = parseInt(dev.returnFrame2);dev.autoReturnCheckbox2.checked = true;
if(!(cljs.core._EQ_.call(null,0,value_17533)))
{dev.mainVideo2.currentTime = (value_17533 / 15);
} else
{}
dev.timeReturnField2.value = dev.returnFrame2;
} else
{}
goog.events.listen(dev.playButton,"click",(function (){return dev.mainVideo.play();
}));
goog.events.listen(dev.playButton2,"click",(function (){return dev.mainVideo2.play();
}));
goog.events.listen(dev.pauseButton,"click",(function (){return dev.mainVideo.pause();
}));
goog.events.listen(dev.pauseButton2,"click",(function (){return dev.mainVideo2.pause();
}));
goog.events.listen(dev.skipForwardButton,"click",(function (evt){dev.mainVideo.pause();
dev.mainVideo.currentTime = (dev.mainVideo.currentTime + (parseInt(dev.forwardStepCountField.value) / dev.FPS));
var frame = Math.floor((15 * dev.mainVideo.currentTime));var frameOp = (dev.mainVideo.timeline[frame]);if(cljs.core.truth_(frameOp))
{return frameOp.call(null);
} else
{return null;
}
}));
goog.events.listen(dev.skipForwardButton2,"click",(function (evt){dev.mainVideo2.pause();
dev.mainVideo2.currentTime = (dev.mainVideo2.currentTime + (parseInt(dev.forwardStepCountField2.value) / dev.FPS));
var frame = Math.floor((15 * dev.mainVideo2.currentTime));var frameOp = (dev.mainVideo2.timeline[frame]);if(cljs.core.truth_(frameOp))
{return frameOp.call(null);
} else
{return null;
}
}));
goog.events.listen(dev.skipBackwardButton,"click",(function (evt){dev.mainVideo.pause();
dev.mainVideo.currentTime = (dev.mainVideo.currentTime - (parseInt(dev.backwardStepCountField.value) / dev.FPS));
var frame = Math.floor((15 * dev.mainVideo.currentTime));var frameOp = (dev.mainVideo.timeline[frame]);if(cljs.core.truth_(frameOp))
{return frameOp.call(null);
} else
{return null;
}
}));
dev.mainVideo.ontimeupdate = (function (){return dev.timeReturnField.value = Math.floor((dev.mainVideo.currentTime * 15));
});
goog.events.listen(dev.skipBackwardButton2,"click",(function (evt){dev.mainVideo2.pause();
dev.mainVideo2.currentTime = (dev.mainVideo2.currentTime - (parseInt(dev.backwardStepCountField2.value) / dev.FPS));
var frame = Math.floor((15 * dev.mainVideo2.currentTime));var frameOp = (dev.mainVideo2.timeline[frame]);if(cljs.core.truth_(frameOp))
{return frameOp.call(null);
} else
{return null;
}
}));
dev.mainVideo.ontimeupdate = (function (){return dev.timeReturnField.value = Math.floor((dev.mainVideo.currentTime * 15));
});
dev.mainVideo2.ontimeupdate = (function (){return dev.timeReturnField2.value = Math.floor((dev.mainVideo2.currentTime * 15));
});
goog.events.listen(dev.ecpMovePointShadow,["mousedown","mouseup","mousemove","mouseout"],(new dev.videoEditBarDragHandler(dev.editControlPanelDiv)).fire);
return goog.events.listen(dev.ecpMovePointShadow2,["mousedown","mouseup","mousemove","mouseout"],(new dev.videoEditBarDragHandler(dev.editControlPanelDiv2)).fire);
});
dev.videoEditBarDragHandler = (function videoEditBarDragHandler(target){var this$ = this;this$.selected = false;
this$.fire = ((function (this$){
return (function (evt){evt.preventDefault();
if(cljs.core._EQ_.call(null,"mousedown",evt.type))
{this$.selected = true;
this$.sX = evt.clientX;
this$.sY = evt.clientY;
this$.sLeft = parseInt(target.style.left);
return this$.sTop = parseInt(target.style.top);
} else
{if(cljs.core._EQ_.call(null,"mousemove",evt.type))
{if(cljs.core.truth_(this$.selected))
{var newLeft = [cljs.core.str((this$.sLeft + (evt.clientX - this$.sX))),cljs.core.str("px")].join('');var newRight = [cljs.core.str((this$.sTop + (evt.clientY - this$.sY))),cljs.core.str("px")].join('');target.style.left = newLeft;
return target.style.top = newRight;
} else
{return null;
}
} else
{if((cljs.core._EQ_.call(null,evt.type,"mouseup")) || (cljs.core._EQ_.call(null,evt.type,"mouseout")))
{return this$.selected = false;
} else
{return null;
}
}
}
});})(this$))
;
return this$;
});
