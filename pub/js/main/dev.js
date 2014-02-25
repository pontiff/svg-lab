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
dev.init = (function init(){
window.onbeforeunload = (function (){
if(cljs.core.truth_(dev.autoReturnCheckbox.checked))
{if(cljs.core.truth_((function (){var or__3943__auto__ = isNaN(dev.timeReturnField.value);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,"",dev.timeReturnField.value);
}
})()))
{return localStorage.setItem("returnFrame","N");
} else
{return localStorage.setItem("returnFrame",dev.timeReturnField.value);
}
} else
{return null;
}
});
dev.returnFrame = localStorage.getItem("returnFrame");
if(!(cljs.core._EQ_.call(null,"N",dev.returnFrame)))
{var value_9848 = parseInt(dev.returnFrame);
dev.autoReturnCheckbox.checked = true;
if(!(cljs.core._EQ_.call(null,0,value_9848)))
{dev.mainVideo.currentTime = (value_9848 / 15);
} else
{}
dev.timeReturnField.value = dev.returnFrame;
} else
{}
goog.events.listen(dev.playButton,"click",(function (){
return dev.mainVideo.play();
}));
goog.events.listen(dev.pauseButton,"click",(function (){
return dev.mainVideo.pause();
}));
goog.events.listen(dev.skipForwardButton,"click",(function (evt){
dev.mainVideo.pause();
dev.mainVideo.currentTime = (dev.mainVideo.currentTime + (parseInt(dev.forwardStepCountField.value) / dev.FPS));
var frame = Math.floor((15 * dev.mainVideo.currentTime));
var frameOp = (dev.mainVideo.timeline[frame]);
if(cljs.core.truth_(frameOp))
{return frameOp.call(null);
} else
{return null;
}
}));
goog.events.listen(dev.skipBackwardButton,"click",(function (evt){
dev.mainVideo.pause();
dev.mainVideo.currentTime = (dev.mainVideo.currentTime - (parseInt(dev.backwardStepCountField.value) / dev.FPS));
var frame = Math.floor((15 * dev.mainVideo.currentTime));
var frameOp = (dev.mainVideo.timeline[frame]);
if(cljs.core.truth_(frameOp))
{return frameOp.call(null);
} else
{return null;
}
}));
dev.mainVideo.ontimeupdate = (function (){
return dev.timeReturnField.value = Math.floor((dev.mainVideo.currentTime * 15));
});
return goog.events.listen(dev.ecpMovePointShadow,["mousedown","mouseup","mousemove","mouseout"],(new dev.videoEditBarDragHandler(dev.editControlPanelDiv)).fire);
});
dev.videoEditBarDragHandler = (function videoEditBarDragHandler(target){
var this$ = this;
this$.selected = false;
this$.fire = (function (evt){
evt.preventDefault();
if(cljs.core._EQ_.call(null,"mousedown",evt.type))
{this$.selected = true;
this$.sX = evt.clientX;
this$.sY = evt.clientY;
this$.sLeft = parseInt(target.style.left);
return this$.sTop = parseInt(target.style.top);
} else
{if(cljs.core._EQ_.call(null,"mousemove",evt.type))
{if(cljs.core.truth_(this$.selected))
{var newLeft = [cljs.core.str((this$.sLeft + (evt.clientX - this$.sX))),cljs.core.str("px")].join('');
var newRight = [cljs.core.str((this$.sTop + (evt.clientY - this$.sY))),cljs.core.str("px")].join('');
target.style.left = newLeft;
return target.style.top = newRight;
} else
{return null;
}
} else
{if((function (){var or__3943__auto__ = cljs.core._EQ_.call(null,evt.type,"mouseup");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,evt.type,"mouseout");
}
})())
{return this$.selected = false;
} else
{return null;
}
}
}
});
return this$;
});
