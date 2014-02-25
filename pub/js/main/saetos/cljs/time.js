goog.provide('saetos.cljs.time');
goog.require('cljs.core');
goog.require('saetos.cljs.css');
saetos.cljs.time.setTimeline = (function setTimeline(elem,target){
if(cljs.core.not.call(null,target.timeLine))
{target.timeLine = cljs.core.PersistentArrayMap.EMPTY;
} else
{}
return elem.getAttribute("keyframes").match((new RegExp("\\w+\\s+\\w+\\s+\\w+\\s+\\w+\\s+\\w+","g"))).forEach((function (itm,idx,arr){
var atArr = itm.split((new RegExp("\\s+","g")));
var sFrame = parseInt((atArr[0]));
var style = (atArr[1]);
var startVal = parseInt((atArr[2]));
var endVal = parseInt((atArr[3]));
var eFrame = (sFrame + parseInt((atArr[4])));
var fRange = cljs.core.range.call(null,sFrame,eFrame);
var step = (Math.round(((1 / ((eFrame - sFrame) - 1)) * 100)) / 100);
var count = cljs.core.atom.call(null,0);
var seq__7099 = cljs.core.seq.call(null,fRange);
var chunk__7100 = null;
var count__7101 = 0;
var i__7102 = 0;
while(true){
if((i__7102 < count__7101))
{var v = cljs.core._nth.call(null,chunk__7100,i__7102);
var frame_7103 = (sFrame + cljs.core.deref.call(null,count));
var frameMap_7104 = target.timeLine.call(null,frame_7103);
var sVal_7105 = (((endVal > startVal))?(startVal + (cljs.core.deref.call(null,count) * step)):(startVal - (cljs.core.deref.call(null,count) * step)));
if(cljs.core._EQ_.call(null,"opacity",style))
{if(cljs.core.truth_(frameMap_7104))
{target.timeLine = cljs.core.assoc.call(null,target.timeLine,frame_7103,cljs.core.cons.call(null,((function (seq__7099,chunk__7100,count__7101,i__7102,frame_7103,frameMap_7104,sVal_7105,v){
return (function (){
return saetos.cljs.css.setOpacity.call(null,elem,sVal_7105);
});})(seq__7099,chunk__7100,count__7101,i__7102,frame_7103,frameMap_7104,sVal_7105,v))
,target.timeLine.call(null,frame_7103)));
} else
{target.timeLine = cljs.core.assoc.call(null,target.timeLine,frame_7103,[((function (seq__7099,chunk__7100,count__7101,i__7102,frame_7103,frameMap_7104,sVal_7105,v){
return (function (){
return saetos.cljs.css.setOpacity.call(null,elem,sVal_7105);
});})(seq__7099,chunk__7100,count__7101,i__7102,frame_7103,frameMap_7104,sVal_7105,v))
]);
}
} else
{}
cljs.core.swap_BANG_.call(null,count,cljs.core.inc);
{
var G__7106 = seq__7099;
var G__7107 = chunk__7100;
var G__7108 = count__7101;
var G__7109 = (i__7102 + 1);
seq__7099 = G__7106;
chunk__7100 = G__7107;
count__7101 = G__7108;
i__7102 = G__7109;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7099);
if(temp__4092__auto__)
{var seq__7099__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7099__$1))
{var c__2755__auto__ = cljs.core.chunk_first.call(null,seq__7099__$1);
{
var G__7110 = cljs.core.chunk_rest.call(null,seq__7099__$1);
var G__7111 = c__2755__auto__;
var G__7112 = cljs.core.count.call(null,c__2755__auto__);
var G__7113 = 0;
seq__7099 = G__7110;
chunk__7100 = G__7111;
count__7101 = G__7112;
i__7102 = G__7113;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__7099__$1);
var frame_7114 = (sFrame + cljs.core.deref.call(null,count));
var frameMap_7115 = target.timeLine.call(null,frame_7114);
var sVal_7116 = (((endVal > startVal))?(startVal + (cljs.core.deref.call(null,count) * step)):(startVal - (cljs.core.deref.call(null,count) * step)));
if(cljs.core._EQ_.call(null,"opacity",style))
{if(cljs.core.truth_(frameMap_7115))
{target.timeLine = cljs.core.assoc.call(null,target.timeLine,frame_7114,cljs.core.cons.call(null,((function (seq__7099,chunk__7100,count__7101,i__7102,frame_7114,frameMap_7115,sVal_7116,v,seq__7099__$1,temp__4092__auto__){
return (function (){
return saetos.cljs.css.setOpacity.call(null,elem,sVal_7116);
});})(seq__7099,chunk__7100,count__7101,i__7102,frame_7114,frameMap_7115,sVal_7116,v,seq__7099__$1,temp__4092__auto__))
,target.timeLine.call(null,frame_7114)));
} else
{target.timeLine = cljs.core.assoc.call(null,target.timeLine,frame_7114,[((function (seq__7099,chunk__7100,count__7101,i__7102,frame_7114,frameMap_7115,sVal_7116,v,seq__7099__$1,temp__4092__auto__){
return (function (){
return saetos.cljs.css.setOpacity.call(null,elem,sVal_7116);
});})(seq__7099,chunk__7100,count__7101,i__7102,frame_7114,frameMap_7115,sVal_7116,v,seq__7099__$1,temp__4092__auto__))
]);
}
} else
{}
cljs.core.swap_BANG_.call(null,count,cljs.core.inc);
{
var G__7117 = cljs.core.next.call(null,seq__7099__$1);
var G__7118 = null;
var G__7119 = 0;
var G__7120 = 0;
seq__7099 = G__7117;
chunk__7100 = G__7118;
count__7101 = G__7119;
i__7102 = G__7120;
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
