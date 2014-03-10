// Compiled by ClojureScript .
goog.provide('pontiff.cljs.app.handlers.mainVideo');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('pontiff.cljs.util');
goog.require('pontiff.cljs.util');
pontiff.cljs.app.handlers.mainVideo.init = (function init(){pontiff.cljs.app.handlers.mainVideo.duration = 1040.47;
pontiff.cljs.app.handlers.mainVideo.mainControls = goog.dom.getElement("mainControls");
pontiff.cljs.app.handlers.mainVideo.controlBar = goog.dom.getElement("controlBar");
pontiff.cljs.app.handlers.mainVideo.mainVideo = elements.mainVideo;
pontiff.cljs.app.handlers.mainVideo.videoTrack = goog.dom.getElement("videoTrack");
pontiff.cljs.app.handlers.mainVideo.tempPanels = cljs.core.atom.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,pontiff.cljs.app.handlers.mainVideo.videoTrack),elements.mainPlayButton));
pontiff.cljs.app.handlers.mainVideo.rTocPanels = pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("rtocList",goog.dom.getElement("timelineTocs")));
pontiff.cljs.app.handlers.mainVideo.rTocElements = pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("rtoc",goog.dom.getElement("timelineTocs")));
pontiff.cljs.app.handlers.mainVideo.rTocIndices = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var seq__53929_53953 = cljs.core.seq.call(null,pontiff.cljs.app.handlers.mainVideo.rTocPanels);var chunk__53930_53954 = null;var count__53931_53955 = 0;var i__53932_53956 = 0;while(true){
if((i__53932_53956 < count__53931_53955))
{var v_53957 = cljs.core._nth.call(null,chunk__53930_53954,i__53932_53956);var node_53958 = goog.dom.createElement("div");var frame_53959 = (v_53957.getAttribute("frame") | 0);var position_53960 = ((100 * (frame_53959 / (pontiff.cljs.app.handlers.mainVideo.duration * 15))) + (frame_53959 / (pontiff.cljs.app.handlers.mainVideo.duration * 15)));node_53958.style.cssText = [cljs.core.str("width:1%; position:absolute; z-index:0; height:20%; top:40%; border-radius:50%;\n            background-color:#6176c0; left:"),cljs.core.str(position_53960),cljs.core.str("%;")].join('');
cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v_53957),position_53960))));
goog.dom.appendChild(pontiff.cljs.app.handlers.mainVideo.videoTrack,node_53958);
{
var G__53961 = seq__53929_53953;
var G__53962 = chunk__53930_53954;
var G__53963 = count__53931_53955;
var G__53964 = (i__53932_53956 + 1);
seq__53929_53953 = G__53961;
chunk__53930_53954 = G__53962;
count__53931_53955 = G__53963;
i__53932_53956 = G__53964;
continue;
}
} else
{var temp__4092__auto___53965 = cljs.core.seq.call(null,seq__53929_53953);if(temp__4092__auto___53965)
{var seq__53929_53966__$1 = temp__4092__auto___53965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53929_53966__$1))
{var c__3908__auto___53967 = cljs.core.chunk_first.call(null,seq__53929_53966__$1);{
var G__53968 = cljs.core.chunk_rest.call(null,seq__53929_53966__$1);
var G__53969 = c__3908__auto___53967;
var G__53970 = cljs.core.count.call(null,c__3908__auto___53967);
var G__53971 = 0;
seq__53929_53953 = G__53968;
chunk__53930_53954 = G__53969;
count__53931_53955 = G__53970;
i__53932_53956 = G__53971;
continue;
}
} else
{var v_53972 = cljs.core.first.call(null,seq__53929_53966__$1);var node_53973 = goog.dom.createElement("div");var frame_53974 = (v_53972.getAttribute("frame") | 0);var position_53975 = ((100 * (frame_53974 / (pontiff.cljs.app.handlers.mainVideo.duration * 15))) + (frame_53974 / (pontiff.cljs.app.handlers.mainVideo.duration * 15)));node_53973.style.cssText = [cljs.core.str("width:1%; position:absolute; z-index:0; height:20%; top:40%; border-radius:50%;\n            background-color:#6176c0; left:"),cljs.core.str(position_53975),cljs.core.str("%;")].join('');
cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v_53972),position_53975))));
goog.dom.appendChild(pontiff.cljs.app.handlers.mainVideo.videoTrack,node_53973);
{
var G__53976 = cljs.core.next.call(null,seq__53929_53966__$1);
var G__53977 = null;
var G__53978 = 0;
var G__53979 = 0;
seq__53929_53953 = G__53976;
chunk__53930_53954 = G__53977;
count__53931_53955 = G__53978;
i__53932_53956 = G__53979;
continue;
}
}
} else
{}
}
break;
}
var seq__53933_53980 = cljs.core.seq.call(null,pontiff.cljs.app.handlers.mainVideo.rTocElements);var chunk__53934_53981 = null;var count__53935_53982 = 0;var i__53936_53983 = 0;while(true){
if((i__53936_53983 < count__53935_53982))
{var v_53984 = cljs.core._nth.call(null,chunk__53934_53981,i__53936_53983);var actions_53985 = cljs.core.partition.call(null,2,clojure.string.split.call(null,goog.string.collapseWhitespace(v_53984.getAttribute("index")),/ /));var actionList_53986 = (function (){var iter__3877__auto__ = ((function (seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_53985,v_53984){
return (function iter__53937(s__53938){return (new cljs.core.LazySeq(null,((function (seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_53985,v_53984){
return (function (){var s__53938__$1 = s__53938;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__53938__$1);if(temp__4092__auto__)
{var s__53938__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53938__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__53938__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__53940 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__53939 = 0;while(true){
if((i__53939 < size__3876__auto__))
{var vec__53943 = cljs.core._nth.call(null,c__3875__auto__,i__53939);var k = cljs.core.nth.call(null,vec__53943,0,null);var v__$1 = cljs.core.nth.call(null,vec__53943,1,null);cljs.core.chunk_append.call(null,b__53940,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)));
{
var G__53987 = (i__53939 + 1);
i__53939 = G__53987;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53940),iter__53937.call(null,cljs.core.chunk_rest.call(null,s__53938__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53940),null);
}
} else
{var vec__53944 = cljs.core.first.call(null,s__53938__$2);var k = cljs.core.nth.call(null,vec__53944,0,null);var v__$1 = cljs.core.nth.call(null,vec__53944,1,null);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)),iter__53937.call(null,cljs.core.rest.call(null,s__53938__$2)));
}
} else
{return null;
}
break;
}
});})(seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_53985,v_53984))
,null,null));
});})(seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_53985,v_53984))
;return iter__3877__auto__.call(null,actions_53985);
})();goog.events.listen(v_53984,"click",((function (seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_53985,actionList_53986,v_53984){
return (function (){return pontiff.cljs.app.handlers.mainVideo.processActionList.call(null,actionList_53986);
});})(seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_53985,actionList_53986,v_53984))
);
{
var G__53988 = seq__53933_53980;
var G__53989 = chunk__53934_53981;
var G__53990 = count__53935_53982;
var G__53991 = (i__53936_53983 + 1);
seq__53933_53980 = G__53988;
chunk__53934_53981 = G__53989;
count__53935_53982 = G__53990;
i__53936_53983 = G__53991;
continue;
}
} else
{var temp__4092__auto___53992 = cljs.core.seq.call(null,seq__53933_53980);if(temp__4092__auto___53992)
{var seq__53933_53993__$1 = temp__4092__auto___53992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53933_53993__$1))
{var c__3908__auto___53994 = cljs.core.chunk_first.call(null,seq__53933_53993__$1);{
var G__53995 = cljs.core.chunk_rest.call(null,seq__53933_53993__$1);
var G__53996 = c__3908__auto___53994;
var G__53997 = cljs.core.count.call(null,c__3908__auto___53994);
var G__53998 = 0;
seq__53933_53980 = G__53995;
chunk__53934_53981 = G__53996;
count__53935_53982 = G__53997;
i__53936_53983 = G__53998;
continue;
}
} else
{var v_53999 = cljs.core.first.call(null,seq__53933_53993__$1);var actions_54000 = cljs.core.partition.call(null,2,clojure.string.split.call(null,goog.string.collapseWhitespace(v_53999.getAttribute("index")),/ /));var actionList_54001 = (function (){var iter__3877__auto__ = ((function (seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_54000,v_53999,seq__53933_53993__$1,temp__4092__auto___53992){
return (function iter__53945(s__53946){return (new cljs.core.LazySeq(null,((function (seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_54000,v_53999,seq__53933_53993__$1,temp__4092__auto___53992){
return (function (){var s__53946__$1 = s__53946;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__53946__$1);if(temp__4092__auto____$1)
{var s__53946__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53946__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__53946__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__53948 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__53947 = 0;while(true){
if((i__53947 < size__3876__auto__))
{var vec__53951 = cljs.core._nth.call(null,c__3875__auto__,i__53947);var k = cljs.core.nth.call(null,vec__53951,0,null);var v__$1 = cljs.core.nth.call(null,vec__53951,1,null);cljs.core.chunk_append.call(null,b__53948,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)));
{
var G__54002 = (i__53947 + 1);
i__53947 = G__54002;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53948),iter__53945.call(null,cljs.core.chunk_rest.call(null,s__53946__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53948),null);
}
} else
{var vec__53952 = cljs.core.first.call(null,s__53946__$2);var k = cljs.core.nth.call(null,vec__53952,0,null);var v__$1 = cljs.core.nth.call(null,vec__53952,1,null);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)),iter__53945.call(null,cljs.core.rest.call(null,s__53946__$2)));
}
} else
{return null;
}
break;
}
});})(seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_54000,v_53999,seq__53933_53993__$1,temp__4092__auto___53992))
,null,null));
});})(seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_54000,v_53999,seq__53933_53993__$1,temp__4092__auto___53992))
;return iter__3877__auto__.call(null,actions_54000);
})();goog.events.listen(v_53999,"click",((function (seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_54000,actionList_54001,v_53999,seq__53933_53993__$1,temp__4092__auto___53992){
return (function (){return pontiff.cljs.app.handlers.mainVideo.processActionList.call(null,actionList_54001);
});})(seq__53933_53980,chunk__53934_53981,count__53935_53982,i__53936_53983,actions_54000,actionList_54001,v_53999,seq__53933_53993__$1,temp__4092__auto___53992))
);
{
var G__54003 = cljs.core.next.call(null,seq__53933_53993__$1);
var G__54004 = null;
var G__54005 = 0;
var G__54006 = 0;
seq__53933_53980 = G__54003;
chunk__53934_53981 = G__54004;
count__53935_53982 = G__54005;
i__53936_53983 = G__54006;
continue;
}
}
} else
{}
}
break;
}
goog.events.listen(pontiff.cljs.app.handlers.mainVideo.mainControls,"click",(new pontiff.cljs.app.handlers.mainVideo.videoTimelineHandler(pontiff.cljs.app.handlers.mainVideo.mainVideo,pontiff.cljs.app.handlers.mainVideo.duration,pontiff.cljs.app.handlers.mainVideo.controlBar)).fire);
goog.events.listen(pontiff.cljs.app.handlers.mainVideo.mainVideo,"timeupdate",(function (){if(cljs.core.not.call(null,pontiff.cljs.app.handlers.mainVideo.mainVideo.paused))
{return pontiff.cljs.app.handlers.mainVideo.controlBar.style.left = [cljs.core.str((100 * (pontiff.cljs.app.handlers.mainVideo.mainVideo.currentTime / pontiff.cljs.app.handlers.mainVideo.duration))),cljs.core.str("%")].join('');
} else
{return null;
}
}));
goog.events.listen(pontiff.cljs.app.handlers.mainVideo.controlBar,["mousedown","mouseup","mouseout","mousemove","click"],(new pontiff.cljs.app.handlers.mainVideo.controlButtonHandler(pontiff.cljs.app.handlers.mainVideo.mainVideo,pontiff.cljs.app.handlers.mainVideo.duration)).fire);
goog.events.listen(elements.mainVideoSvg,"click",pontiff.cljs.app.handlers.mainVideo.mainPlayAreaHandler);
goog.events.listen(elements.mainPlayButton,"click",pontiff.cljs.app.handlers.mainVideo.mainPlayButtonHandler);
return goog.events.listen(elements.screenChanger,"click",(function (evt){evt.stopPropagation();
if(cljs.core._EQ_.call(null,elements.videoContainer.className,"contracted"))
{return elements.videoContainer.className = "expanded";
} else
{return elements.videoContainer.className = "contracted";
}
}));
});
pontiff.cljs.app.handlers.mainVideo.closeTempPanels = (function closeTempPanels(){var seq__54011_54015 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels));var chunk__54012_54016 = null;var count__54013_54017 = 0;var i__54014_54018 = 0;while(true){
if((i__54014_54018 < count__54013_54017))
{var v_54019 = cljs.core._nth.call(null,chunk__54012_54016,i__54014_54018);v_54019.style.display = "none";
{
var G__54020 = seq__54011_54015;
var G__54021 = chunk__54012_54016;
var G__54022 = count__54013_54017;
var G__54023 = (i__54014_54018 + 1);
seq__54011_54015 = G__54020;
chunk__54012_54016 = G__54021;
count__54013_54017 = G__54022;
i__54014_54018 = G__54023;
continue;
}
} else
{var temp__4092__auto___54024 = cljs.core.seq.call(null,seq__54011_54015);if(temp__4092__auto___54024)
{var seq__54011_54025__$1 = temp__4092__auto___54024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54011_54025__$1))
{var c__3908__auto___54026 = cljs.core.chunk_first.call(null,seq__54011_54025__$1);{
var G__54027 = cljs.core.chunk_rest.call(null,seq__54011_54025__$1);
var G__54028 = c__3908__auto___54026;
var G__54029 = cljs.core.count.call(null,c__3908__auto___54026);
var G__54030 = 0;
seq__54011_54015 = G__54027;
chunk__54012_54016 = G__54028;
count__54013_54017 = G__54029;
i__54014_54018 = G__54030;
continue;
}
} else
{var v_54031 = cljs.core.first.call(null,seq__54011_54025__$1);v_54031.style.display = "none";
{
var G__54032 = cljs.core.next.call(null,seq__54011_54025__$1);
var G__54033 = null;
var G__54034 = 0;
var G__54035 = 0;
seq__54011_54015 = G__54032;
chunk__54012_54016 = G__54033;
count__54013_54017 = G__54034;
i__54014_54018 = G__54035;
continue;
}
}
} else
{}
}
break;
}
pontiff.cljs.app.handlers.mainVideo.mainControls.selected = false;
return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.List.EMPTY);
});
pontiff.cljs.app.handlers.mainVideo.controlButtonHandler = (function controlButtonHandler(video,duration){var this$ = this;this$.fire = ((function (this$){
return (function (evt){evt.preventDefault();
evt.stopPropagation();
if(cljs.core._EQ_.call(null,evt.type,"mousedown"))
{video.pause();
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
var seq__54052_54068 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices));var chunk__54053_54069 = null;var count__54054_54070 = 0;var i__54055_54071 = 0;while(true){
if((i__54055_54071 < count__54054_54070))
{var v_54072 = cljs.core._nth.call(null,chunk__54053_54069,i__54055_54071);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + cljs.core.first.call(null,v_54072)))) > .5))
{cljs.core.second.call(null,v_54072).style.display = "none";
} else
{cljs.core.second.call(null,v_54072).style.display = "inline";
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v_54072)));
} else
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v_54072))));
}
}
{
var G__54073 = seq__54052_54068;
var G__54074 = chunk__54053_54069;
var G__54075 = count__54054_54070;
var G__54076 = (i__54055_54071 + 1);
seq__54052_54068 = G__54073;
chunk__54053_54069 = G__54074;
count__54054_54070 = G__54075;
i__54055_54071 = G__54076;
continue;
}
} else
{var temp__4092__auto___54077 = cljs.core.seq.call(null,seq__54052_54068);if(temp__4092__auto___54077)
{var seq__54052_54078__$1 = temp__4092__auto___54077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54052_54078__$1))
{var c__3908__auto___54079 = cljs.core.chunk_first.call(null,seq__54052_54078__$1);{
var G__54080 = cljs.core.chunk_rest.call(null,seq__54052_54078__$1);
var G__54081 = c__3908__auto___54079;
var G__54082 = cljs.core.count.call(null,c__3908__auto___54079);
var G__54083 = 0;
seq__54052_54068 = G__54080;
chunk__54053_54069 = G__54081;
count__54054_54070 = G__54082;
i__54055_54071 = G__54083;
continue;
}
} else
{var v_54084 = cljs.core.first.call(null,seq__54052_54078__$1);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + cljs.core.first.call(null,v_54084)))) > .5))
{cljs.core.second.call(null,v_54084).style.display = "none";
} else
{cljs.core.second.call(null,v_54084).style.display = "inline";
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v_54084)));
} else
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v_54084))));
}
}
{
var G__54085 = cljs.core.next.call(null,seq__54052_54078__$1);
var G__54086 = null;
var G__54087 = 0;
var G__54088 = 0;
seq__54052_54068 = G__54085;
chunk__54053_54069 = G__54086;
count__54054_54070 = G__54087;
i__54055_54071 = G__54088;
continue;
}
}
} else
{}
}
break;
}
this$.selected = true;
this$.width = evt.target.parentNode.clientWidth;
return this$.startX = evt.clientX;
} else
{if(cljs.core._EQ_.call(null,evt.type,"mousemove"))
{if(cljs.core.truth_(this$.selected))
{var distance = (evt.clientX - this$.startX);if(((distance + evt.target.offsetLeft) < 0))
{var frameSet = (elements.mainVideo.timeline[0]);if(cljs.core.truth_(frameSet))
{frameSet.call(null);
} else
{elements.mainVideo.state.forEach(((function (frameSet,distance,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.mainVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(frameSet,distance,this$))
);
}
var seq__54056_54089 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices));var chunk__54057_54090 = null;var count__54058_54091 = 0;var i__54059_54092 = 0;while(true){
if((i__54059_54092 < count__54058_54091))
{var v_54093 = cljs.core._nth.call(null,chunk__54057_54090,i__54059_54092);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + cljs.core.first.call(null,v_54093)))) > .5))
{cljs.core.second.call(null,v_54093).style.display = "none";
} else
{cljs.core.second.call(null,v_54093).style.display = "inline";
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v_54093)));
} else
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v_54093))));
}
}
{
var G__54094 = seq__54056_54089;
var G__54095 = chunk__54057_54090;
var G__54096 = count__54058_54091;
var G__54097 = (i__54059_54092 + 1);
seq__54056_54089 = G__54094;
chunk__54057_54090 = G__54095;
count__54058_54091 = G__54096;
i__54059_54092 = G__54097;
continue;
}
} else
{var temp__4092__auto___54098 = cljs.core.seq.call(null,seq__54056_54089);if(temp__4092__auto___54098)
{var seq__54056_54099__$1 = temp__4092__auto___54098;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54056_54099__$1))
{var c__3908__auto___54100 = cljs.core.chunk_first.call(null,seq__54056_54099__$1);{
var G__54101 = cljs.core.chunk_rest.call(null,seq__54056_54099__$1);
var G__54102 = c__3908__auto___54100;
var G__54103 = cljs.core.count.call(null,c__3908__auto___54100);
var G__54104 = 0;
seq__54056_54089 = G__54101;
chunk__54057_54090 = G__54102;
count__54058_54091 = G__54103;
i__54059_54092 = G__54104;
continue;
}
} else
{var v_54105 = cljs.core.first.call(null,seq__54056_54099__$1);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + cljs.core.first.call(null,v_54105)))) > .5))
{cljs.core.second.call(null,v_54105).style.display = "none";
} else
{cljs.core.second.call(null,v_54105).style.display = "inline";
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v_54105)));
} else
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v_54105))));
}
}
{
var G__54106 = cljs.core.next.call(null,seq__54056_54099__$1);
var G__54107 = null;
var G__54108 = 0;
var G__54109 = 0;
seq__54056_54089 = G__54106;
chunk__54057_54090 = G__54107;
count__54058_54091 = G__54108;
i__54059_54092 = G__54109;
continue;
}
}
} else
{}
}
break;
}
evt.target.left = "0%";
video.currentTime = 0;
return this$.startX = evt.clientX;
} else
{if(((distance + evt.target.offsetLeft) > this$.width))
{var frameSet = (elements.mainVideo.timeline[(duration * 30)]);if(cljs.core.truth_(frameSet))
{frameSet.call(null);
} else
{elements.mainVideo.state.forEach(((function (frameSet,distance,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.mainVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(frameSet,distance,this$))
);
}
var seq__54060_54110 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices));var chunk__54061_54111 = null;var count__54062_54112 = 0;var i__54063_54113 = 0;while(true){
if((i__54063_54113 < count__54062_54112))
{var v_54114 = cljs.core._nth.call(null,chunk__54061_54111,i__54063_54113);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + cljs.core.first.call(null,v_54114)))) > .5))
{cljs.core.second.call(null,v_54114).style.display = "none";
} else
{cljs.core.second.call(null,v_54114).style.display = "inline";
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v_54114)));
} else
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core.List.EMPTY,v_54114)));
}
}
{
var G__54115 = seq__54060_54110;
var G__54116 = chunk__54061_54111;
var G__54117 = count__54062_54112;
var G__54118 = (i__54063_54113 + 1);
seq__54060_54110 = G__54115;
chunk__54061_54111 = G__54116;
count__54062_54112 = G__54117;
i__54063_54113 = G__54118;
continue;
}
} else
{var temp__4092__auto___54119 = cljs.core.seq.call(null,seq__54060_54110);if(temp__4092__auto___54119)
{var seq__54060_54120__$1 = temp__4092__auto___54119;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54060_54120__$1))
{var c__3908__auto___54121 = cljs.core.chunk_first.call(null,seq__54060_54120__$1);{
var G__54122 = cljs.core.chunk_rest.call(null,seq__54060_54120__$1);
var G__54123 = c__3908__auto___54121;
var G__54124 = cljs.core.count.call(null,c__3908__auto___54121);
var G__54125 = 0;
seq__54060_54110 = G__54122;
chunk__54061_54111 = G__54123;
count__54062_54112 = G__54124;
i__54063_54113 = G__54125;
continue;
}
} else
{var v_54126 = cljs.core.first.call(null,seq__54060_54120__$1);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + cljs.core.first.call(null,v_54126)))) > .5))
{cljs.core.second.call(null,v_54126).style.display = "none";
} else
{cljs.core.second.call(null,v_54126).style.display = "inline";
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v_54126)));
} else
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core.List.EMPTY,v_54126)));
}
}
{
var G__54127 = cljs.core.next.call(null,seq__54060_54120__$1);
var G__54128 = null;
var G__54129 = 0;
var G__54130 = 0;
seq__54060_54110 = G__54127;
chunk__54061_54111 = G__54128;
count__54062_54112 = G__54129;
i__54063_54113 = G__54130;
continue;
}
}
} else
{}
}
break;
}
evt.target.left = "100%";
video.currentTime = duration;
return this$.startX = evt.clientX;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var leftPos = (((evt.target.offsetLeft + distance) / this$.width) * 100);var time = ((leftPos / 100) * duration);var frameSet = (elements.mainVideo.timeline[Math.floor((time * 30))]);if(cljs.core.truth_(frameSet))
{frameSet.call(null);
} else
{elements.mainVideo.state.forEach(((function (leftPos,time,frameSet,distance,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.mainVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(leftPos,time,frameSet,distance,this$))
);
}
var seq__54064_54131 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices));var chunk__54065_54132 = null;var count__54066_54133 = 0;var i__54067_54134 = 0;while(true){
if((i__54067_54134 < count__54066_54133))
{var v_54135 = cljs.core._nth.call(null,chunk__54065_54132,i__54067_54134);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + cljs.core.first.call(null,v_54135)))) > .5))
{cljs.core.second.call(null,v_54135).style.display = "none";
} else
{cljs.core.second.call(null,v_54135).style.display = "inline";
}
{
var G__54136 = seq__54064_54131;
var G__54137 = chunk__54065_54132;
var G__54138 = count__54066_54133;
var G__54139 = (i__54067_54134 + 1);
seq__54064_54131 = G__54136;
chunk__54065_54132 = G__54137;
count__54066_54133 = G__54138;
i__54067_54134 = G__54139;
continue;
}
} else
{var temp__4092__auto___54140 = cljs.core.seq.call(null,seq__54064_54131);if(temp__4092__auto___54140)
{var seq__54064_54141__$1 = temp__4092__auto___54140;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54064_54141__$1))
{var c__3908__auto___54142 = cljs.core.chunk_first.call(null,seq__54064_54141__$1);{
var G__54143 = cljs.core.chunk_rest.call(null,seq__54064_54141__$1);
var G__54144 = c__3908__auto___54142;
var G__54145 = cljs.core.count.call(null,c__3908__auto___54142);
var G__54146 = 0;
seq__54064_54131 = G__54143;
chunk__54065_54132 = G__54144;
count__54066_54133 = G__54145;
i__54067_54134 = G__54146;
continue;
}
} else
{var v_54147 = cljs.core.first.call(null,seq__54064_54141__$1);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + cljs.core.first.call(null,v_54147)))) > .5))
{cljs.core.second.call(null,v_54147).style.display = "none";
} else
{cljs.core.second.call(null,v_54147).style.display = "inline";
}
{
var G__54148 = cljs.core.next.call(null,seq__54064_54141__$1);
var G__54149 = null;
var G__54150 = 0;
var G__54151 = 0;
seq__54064_54131 = G__54148;
chunk__54065_54132 = G__54149;
count__54066_54133 = G__54150;
i__54067_54134 = G__54151;
continue;
}
}
} else
{}
}
break;
}
evt.target.style.left = [cljs.core.str(leftPos),cljs.core.str("%")].join('');
video.currentTime = time;
return this$.startX = evt.clientX;
} else
{return null;
}
}
}
} else
{return null;
}
} else
{if((cljs.core._EQ_.call(null,evt.type,"mouseup")) || (cljs.core._EQ_.call(null,evt.type,"mouseout")))
{if(cljs.core.truth_(this$.selected))
{this$.selected = false;
} else
{}
if(cljs.core.truth_(video.paused))
{if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core.List.EMPTY,elements.mainPlayButton));
} else
{return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core.List.EMPTY,elements.mainPlayButton)));
}
} else
{return null;
}
} else
{return null;
}
}
}
});})(this$))
;
return this$;
});
pontiff.cljs.app.handlers.mainVideo.processActionList = (function processActionList(actionList){pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
goog.events.listenOnce(cljs.core.first.call(null,cljs.core.last.call(null,actionList)),"seeked",(function (){return cljs.core.first.call(null,cljs.core.last.call(null,actionList)).play();
}));
var seq__54158 = cljs.core.seq.call(null,actionList);var chunk__54159 = null;var count__54160 = 0;var i__54161 = 0;while(true){
if((i__54161 < count__54160))
{var vec__54162 = cljs.core._nth.call(null,chunk__54159,i__54161);var k = cljs.core.nth.call(null,vec__54162,0,null);var v = cljs.core.nth.call(null,vec__54162,1,null);k.pause();
(k.timeline[(2 * v)]).call(null);
k.currentTime = (v / 15);
{
var G__54164 = seq__54158;
var G__54165 = chunk__54159;
var G__54166 = count__54160;
var G__54167 = (i__54161 + 1);
seq__54158 = G__54164;
chunk__54159 = G__54165;
count__54160 = G__54166;
i__54161 = G__54167;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__54158);if(temp__4092__auto__)
{var seq__54158__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54158__$1))
{var c__3908__auto__ = cljs.core.chunk_first.call(null,seq__54158__$1);{
var G__54168 = cljs.core.chunk_rest.call(null,seq__54158__$1);
var G__54169 = c__3908__auto__;
var G__54170 = cljs.core.count.call(null,c__3908__auto__);
var G__54171 = 0;
seq__54158 = G__54168;
chunk__54159 = G__54169;
count__54160 = G__54170;
i__54161 = G__54171;
continue;
}
} else
{var vec__54163 = cljs.core.first.call(null,seq__54158__$1);var k = cljs.core.nth.call(null,vec__54163,0,null);var v = cljs.core.nth.call(null,vec__54163,1,null);k.pause();
(k.timeline[(2 * v)]).call(null);
k.currentTime = (v / 15);
{
var G__54172 = cljs.core.next.call(null,seq__54158__$1);
var G__54173 = null;
var G__54174 = 0;
var G__54175 = 0;
seq__54158 = G__54172;
chunk__54159 = G__54173;
count__54160 = G__54174;
i__54161 = G__54175;
continue;
}
}
} else
{return null;
}
}
break;
}
});
pontiff.cljs.app.handlers.mainVideo.videoTimelineHandler = (function videoTimelineHandler(video,length,bar){var this$ = this;this$.fire = ((function (this$){
return (function (evt){evt.preventDefault();
evt.stopPropagation();
if(cljs.core.truth_(pontiff.cljs.app.handlers.mainVideo.mainControls.selected))
{pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
video.pause();
var xLoc = (evt.clientX - (bar.parentNode.parentNode.parentNode.offsetLeft + bar.parentNode.parentNode.parentNode.parentNode.offsetLeft));var width = evt.target.offsetWidth;var timeSet = ((xLoc / width) * length);var newLoc = [cljs.core.str((100 * (xLoc / width))),cljs.core.str("%")].join('');var frame = Math.floor((30 * timeSet));var frameSet = (video.timeline[frame]);bar.style.left = newLoc;
video.currentTime = timeSet;
if(cljs.core.truth_(frameSet))
{frameSet.call(null);
} else
{elements.mainVideo.state.forEach(((function (xLoc,width,timeSet,newLoc,frame,frameSet,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.mainVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(xLoc,width,timeSet,newLoc,frame,frameSet,this$))
);
}
var seq__54180 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices));var chunk__54181 = null;var count__54182 = 0;var i__54183 = 0;while(true){
if((i__54183 < count__54182))
{var v = cljs.core._nth.call(null,chunk__54181,i__54183);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + cljs.core.first.call(null,v)))) > .5))
{cljs.core.second.call(null,v).style.display = "none";
} else
{cljs.core.second.call(null,v).style.display = "inline";
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v)));
} else
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v))));
}
}
{
var G__54184 = seq__54180;
var G__54185 = chunk__54181;
var G__54186 = count__54182;
var G__54187 = (i__54183 + 1);
seq__54180 = G__54184;
chunk__54181 = G__54185;
count__54182 = G__54186;
i__54183 = G__54187;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__54180);if(temp__4092__auto__)
{var seq__54180__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54180__$1))
{var c__3908__auto__ = cljs.core.chunk_first.call(null,seq__54180__$1);{
var G__54188 = cljs.core.chunk_rest.call(null,seq__54180__$1);
var G__54189 = c__3908__auto__;
var G__54190 = cljs.core.count.call(null,c__3908__auto__);
var G__54191 = 0;
seq__54180 = G__54188;
chunk__54181 = G__54189;
count__54182 = G__54190;
i__54183 = G__54191;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__54180__$1);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + cljs.core.first.call(null,v)))) > .5))
{cljs.core.second.call(null,v).style.display = "none";
} else
{cljs.core.second.call(null,v).style.display = "inline";
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v)));
} else
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,v))));
}
}
{
var G__54192 = cljs.core.next.call(null,seq__54180__$1);
var G__54193 = null;
var G__54194 = 0;
var G__54195 = 0;
seq__54180 = G__54192;
chunk__54181 = G__54193;
count__54182 = G__54194;
i__54183 = G__54195;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{pontiff.cljs.app.handlers.mainVideo.mainControls.selected = true;
pontiff.cljs.app.handlers.mainVideo.videoTrack.style.display = "inline";
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core.List.EMPTY,pontiff.cljs.app.handlers.mainVideo.videoTrack));
} else
{return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core.List.EMPTY,pontiff.cljs.app.handlers.mainVideo.videoTrack)));
}
} else
{return null;
}
}
});})(this$))
;
return this$;
});
pontiff.cljs.app.handlers.mainVideo.mainPlayAreaHandler = (function mainPlayAreaHandler(evt){evt.stopPropagation();
if((parseInt(elements.narratorDiv.style.zIndex) > 10))
{return pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
} else
{if(cljs.core._EQ_.call(null,pontiff.cljs.app.handlers.mainVideo.videoTrack.style.display,"inline"))
{pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
pontiff.cljs.app.handlers.mainVideo.mainControls.selected = false;
return pontiff.cljs.app.handlers.mainVideo.mainVideo.play();
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{pontiff.cljs.app.handlers.mainVideo.mainVideo.pause();
elements.mainPlayButton.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.mainControls.selected = true;
pontiff.cljs.app.handlers.mainVideo.videoTrack.style.display = "inline";
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels)))
{return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,pontiff.cljs.app.handlers.mainVideo.videoTrack),elements.mainPlayButton));
} else
{return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,pontiff.cljs.app.handlers.mainVideo.videoTrack),elements.mainPlayButton)));
}
} else
{return null;
}
}
}
});
pontiff.cljs.app.handlers.mainVideo.mainPlayButtonHandler = (function mainPlayButtonHandler(evt){evt.stopPropagation();
if(!((parseInt(elements.narratorDiv.style.zIndex) > 10)))
{pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
pontiff.cljs.app.handlers.mainVideo.mainControls.selected = false;
return pontiff.cljs.app.handlers.mainVideo.mainVideo.play();
} else
{return null;
}
});
