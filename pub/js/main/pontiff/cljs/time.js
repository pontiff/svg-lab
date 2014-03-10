// Compiled by ClojureScript .
goog.provide('pontiff.cljs.time');
goog.require('cljs.core');
goog.require('pontiff.cljs.css');
goog.require('pontiff.cljs.css');
pontiff.cljs.time.setTimeline = (function setTimeline(elem,target){if(cljs.core.not.call(null,target.timeLine))
{target.timeLine = cljs.core.PersistentArrayMap.EMPTY;
} else
{}
return elem.getAttribute("keyframes").match((new RegExp("\\w+\\s+\\w+\\s+\\w+\\s+\\w+\\s+\\w+","g"))).forEach((function (itm,idx,arr){var atArr = itm.split((new RegExp("\\s+","g")));var sFrame = parseInt((atArr[0]));var style = (atArr[1]);var startVal = parseInt((atArr[2]));var endVal = parseInt((atArr[3]));var eFrame = (sFrame + parseInt((atArr[4])));var fRange = cljs.core.range.call(null,sFrame,eFrame);var step = (Math.round(((1 / ((eFrame - sFrame) - 1)) * 100)) / 100);var count = cljs.core.atom.call(null,0);var seq__13637 = cljs.core.seq.call(null,fRange);var chunk__13638 = null;var count__13639 = 0;var i__13640 = 0;while(true){
if((i__13640 < count__13639))
{var v = cljs.core._nth.call(null,chunk__13638,i__13640);var frame_13641 = (sFrame + cljs.core.deref.call(null,count));var frameMap_13642 = target.timeLine.call(null,frame_13641);var sVal_13643 = (((endVal > startVal))?(startVal + (cljs.core.deref.call(null,count) * step)):(startVal - (cljs.core.deref.call(null,count) * step)));if(cljs.core._EQ_.call(null,"opacity",style))
{if(cljs.core.truth_(frameMap_13642))
{target.timeLine = cljs.core.assoc.call(null,target.timeLine,frame_13641,cljs.core.cons.call(null,((function (seq__13637,chunk__13638,count__13639,i__13640,frame_13641,frameMap_13642,sVal_13643,v,atArr,sFrame,style,startVal,endVal,eFrame,fRange,step,count){
return (function (){return pontiff.cljs.css.setOpacity.call(null,elem,sVal_13643);
});})(seq__13637,chunk__13638,count__13639,i__13640,frame_13641,frameMap_13642,sVal_13643,v,atArr,sFrame,style,startVal,endVal,eFrame,fRange,step,count))
,target.timeLine.call(null,frame_13641)));
} else
{target.timeLine = cljs.core.assoc.call(null,target.timeLine,frame_13641,[((function (seq__13637,chunk__13638,count__13639,i__13640,frame_13641,frameMap_13642,sVal_13643,v,atArr,sFrame,style,startVal,endVal,eFrame,fRange,step,count){
return (function (){return pontiff.cljs.css.setOpacity.call(null,elem,sVal_13643);
});})(seq__13637,chunk__13638,count__13639,i__13640,frame_13641,frameMap_13642,sVal_13643,v,atArr,sFrame,style,startVal,endVal,eFrame,fRange,step,count))
]);
}
} else
{}
cljs.core.swap_BANG_.call(null,count,cljs.core.inc);
{
var G__13644 = seq__13637;
var G__13645 = chunk__13638;
var G__13646 = count__13639;
var G__13647 = (i__13640 + 1);
seq__13637 = G__13644;
chunk__13638 = G__13645;
count__13639 = G__13646;
i__13640 = G__13647;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13637);if(temp__4092__auto__)
{var seq__13637__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13637__$1))
{var c__3910__auto__ = cljs.core.chunk_first.call(null,seq__13637__$1);{
var G__13648 = cljs.core.chunk_rest.call(null,seq__13637__$1);
var G__13649 = c__3910__auto__;
var G__13650 = cljs.core.count.call(null,c__3910__auto__);
var G__13651 = 0;
seq__13637 = G__13648;
chunk__13638 = G__13649;
count__13639 = G__13650;
i__13640 = G__13651;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__13637__$1);var frame_13652 = (sFrame + cljs.core.deref.call(null,count));var frameMap_13653 = target.timeLine.call(null,frame_13652);var sVal_13654 = (((endVal > startVal))?(startVal + (cljs.core.deref.call(null,count) * step)):(startVal - (cljs.core.deref.call(null,count) * step)));if(cljs.core._EQ_.call(null,"opacity",style))
{if(cljs.core.truth_(frameMap_13653))
{target.timeLine = cljs.core.assoc.call(null,target.timeLine,frame_13652,cljs.core.cons.call(null,((function (seq__13637,chunk__13638,count__13639,i__13640,frame_13652,frameMap_13653,sVal_13654,v,seq__13637__$1,temp__4092__auto__,atArr,sFrame,style,startVal,endVal,eFrame,fRange,step,count){
return (function (){return pontiff.cljs.css.setOpacity.call(null,elem,sVal_13654);
});})(seq__13637,chunk__13638,count__13639,i__13640,frame_13652,frameMap_13653,sVal_13654,v,seq__13637__$1,temp__4092__auto__,atArr,sFrame,style,startVal,endVal,eFrame,fRange,step,count))
,target.timeLine.call(null,frame_13652)));
} else
{target.timeLine = cljs.core.assoc.call(null,target.timeLine,frame_13652,[((function (seq__13637,chunk__13638,count__13639,i__13640,frame_13652,frameMap_13653,sVal_13654,v,seq__13637__$1,temp__4092__auto__,atArr,sFrame,style,startVal,endVal,eFrame,fRange,step,count){
return (function (){return pontiff.cljs.css.setOpacity.call(null,elem,sVal_13654);
});})(seq__13637,chunk__13638,count__13639,i__13640,frame_13652,frameMap_13653,sVal_13654,v,seq__13637__$1,temp__4092__auto__,atArr,sFrame,style,startVal,endVal,eFrame,fRange,step,count))
]);
}
} else
{}
cljs.core.swap_BANG_.call(null,count,cljs.core.inc);
{
var G__13655 = cljs.core.next.call(null,seq__13637__$1);
var G__13656 = null;
var G__13657 = 0;
var G__13658 = 0;
seq__13637 = G__13655;
chunk__13638 = G__13656;
count__13639 = G__13657;
i__13640 = G__13658;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
