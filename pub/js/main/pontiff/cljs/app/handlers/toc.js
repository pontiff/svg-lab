// Compiled by ClojureScript .
goog.provide('pontiff.cljs.app.handlers.toc');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('pontiff.cljs.util');
goog.require('pontiff.cljs.util');
pontiff.cljs.app.handlers.toc.init = (function init(){var seq__31722 = cljs.core.seq.call(null,pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("toc")));var chunk__31723 = null;var count__31724 = 0;var i__31725 = 0;while(true){
if((i__31725 < count__31724))
{var v = cljs.core._nth.call(null,chunk__31723,i__31725);var actions_31742 = cljs.core.partition.call(null,2,clojure.string.split.call(null,goog.string.collapseWhitespace(v.getAttribute("index")),/ /));var actionList_31743 = (function (){var iter__3877__auto__ = ((function (seq__31722,chunk__31723,count__31724,i__31725,actions_31742,v){
return (function iter__31726(s__31727){return (new cljs.core.LazySeq(null,((function (seq__31722,chunk__31723,count__31724,i__31725,actions_31742,v){
return (function (){var s__31727__$1 = s__31727;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31727__$1);if(temp__4092__auto__)
{var s__31727__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31727__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__31727__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__31729 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__31728 = 0;while(true){
if((i__31728 < size__3876__auto__))
{var vec__31732 = cljs.core._nth.call(null,c__3875__auto__,i__31728);var k = cljs.core.nth.call(null,vec__31732,0,null);var v__$1 = cljs.core.nth.call(null,vec__31732,1,null);cljs.core.chunk_append.call(null,b__31729,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)));
{
var G__31744 = (i__31728 + 1);
i__31728 = G__31744;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31729),iter__31726.call(null,cljs.core.chunk_rest.call(null,s__31727__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31729),null);
}
} else
{var vec__31733 = cljs.core.first.call(null,s__31727__$2);var k = cljs.core.nth.call(null,vec__31733,0,null);var v__$1 = cljs.core.nth.call(null,vec__31733,1,null);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)),iter__31726.call(null,cljs.core.rest.call(null,s__31727__$2)));
}
} else
{return null;
}
break;
}
});})(seq__31722,chunk__31723,count__31724,i__31725,actions_31742,v))
,null,null));
});})(seq__31722,chunk__31723,count__31724,i__31725,actions_31742,v))
;return iter__3877__auto__.call(null,actions_31742);
})();goog.events.listen(v,"click",((function (seq__31722,chunk__31723,count__31724,i__31725,actions_31742,actionList_31743,v){
return (function (){return pontiff.cljs.app.handlers.toc.processActionList.call(null,actionList_31743);
});})(seq__31722,chunk__31723,count__31724,i__31725,actions_31742,actionList_31743,v))
);
{
var G__31745 = seq__31722;
var G__31746 = chunk__31723;
var G__31747 = count__31724;
var G__31748 = (i__31725 + 1);
seq__31722 = G__31745;
chunk__31723 = G__31746;
count__31724 = G__31747;
i__31725 = G__31748;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31722);if(temp__4092__auto__)
{var seq__31722__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31722__$1))
{var c__3908__auto__ = cljs.core.chunk_first.call(null,seq__31722__$1);{
var G__31749 = cljs.core.chunk_rest.call(null,seq__31722__$1);
var G__31750 = c__3908__auto__;
var G__31751 = cljs.core.count.call(null,c__3908__auto__);
var G__31752 = 0;
seq__31722 = G__31749;
chunk__31723 = G__31750;
count__31724 = G__31751;
i__31725 = G__31752;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__31722__$1);var actions_31753 = cljs.core.partition.call(null,2,clojure.string.split.call(null,goog.string.collapseWhitespace(v.getAttribute("index")),/ /));var actionList_31754 = (function (){var iter__3877__auto__ = ((function (seq__31722,chunk__31723,count__31724,i__31725,actions_31753,v,seq__31722__$1,temp__4092__auto__){
return (function iter__31734(s__31735){return (new cljs.core.LazySeq(null,((function (seq__31722,chunk__31723,count__31724,i__31725,actions_31753,v,seq__31722__$1,temp__4092__auto__){
return (function (){var s__31735__$1 = s__31735;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__31735__$1);if(temp__4092__auto____$1)
{var s__31735__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31735__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__31735__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__31737 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__31736 = 0;while(true){
if((i__31736 < size__3876__auto__))
{var vec__31740 = cljs.core._nth.call(null,c__3875__auto__,i__31736);var k = cljs.core.nth.call(null,vec__31740,0,null);var v__$1 = cljs.core.nth.call(null,vec__31740,1,null);cljs.core.chunk_append.call(null,b__31737,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)));
{
var G__31755 = (i__31736 + 1);
i__31736 = G__31755;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31737),iter__31734.call(null,cljs.core.chunk_rest.call(null,s__31735__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31737),null);
}
} else
{var vec__31741 = cljs.core.first.call(null,s__31735__$2);var k = cljs.core.nth.call(null,vec__31741,0,null);var v__$1 = cljs.core.nth.call(null,vec__31741,1,null);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)),iter__31734.call(null,cljs.core.rest.call(null,s__31735__$2)));
}
} else
{return null;
}
break;
}
});})(seq__31722,chunk__31723,count__31724,i__31725,actions_31753,v,seq__31722__$1,temp__4092__auto__))
,null,null));
});})(seq__31722,chunk__31723,count__31724,i__31725,actions_31753,v,seq__31722__$1,temp__4092__auto__))
;return iter__3877__auto__.call(null,actions_31753);
})();goog.events.listen(v,"click",((function (seq__31722,chunk__31723,count__31724,i__31725,actions_31753,actionList_31754,v,seq__31722__$1,temp__4092__auto__){
return (function (){return pontiff.cljs.app.handlers.toc.processActionList.call(null,actionList_31754);
});})(seq__31722,chunk__31723,count__31724,i__31725,actions_31753,actionList_31754,v,seq__31722__$1,temp__4092__auto__))
);
{
var G__31756 = cljs.core.next.call(null,seq__31722__$1);
var G__31757 = null;
var G__31758 = 0;
var G__31759 = 0;
seq__31722 = G__31756;
chunk__31723 = G__31757;
count__31724 = G__31758;
i__31725 = G__31759;
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
pontiff.cljs.app.handlers.toc.processActionList = (function processActionList(actionList){pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
elements.mainPlayButton.style.display = "none";
goog.events.listenOnce(cljs.core.first.call(null,cljs.core.last.call(null,actionList)),"seeked",(function (){return cljs.core.first.call(null,cljs.core.last.call(null,actionList)).play();
}));
var seq__31766 = cljs.core.seq.call(null,actionList);var chunk__31767 = null;var count__31768 = 0;var i__31769 = 0;while(true){
if((i__31769 < count__31768))
{var vec__31770 = cljs.core._nth.call(null,chunk__31767,i__31769);var k = cljs.core.nth.call(null,vec__31770,0,null);var v = cljs.core.nth.call(null,vec__31770,1,null);k.pause();
(k.timeline[(2 * v)]).call(null);
k.currentTime = (v / 15);
{
var G__31772 = seq__31766;
var G__31773 = chunk__31767;
var G__31774 = count__31768;
var G__31775 = (i__31769 + 1);
seq__31766 = G__31772;
chunk__31767 = G__31773;
count__31768 = G__31774;
i__31769 = G__31775;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31766);if(temp__4092__auto__)
{var seq__31766__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31766__$1))
{var c__3908__auto__ = cljs.core.chunk_first.call(null,seq__31766__$1);{
var G__31776 = cljs.core.chunk_rest.call(null,seq__31766__$1);
var G__31777 = c__3908__auto__;
var G__31778 = cljs.core.count.call(null,c__3908__auto__);
var G__31779 = 0;
seq__31766 = G__31776;
chunk__31767 = G__31777;
count__31768 = G__31778;
i__31769 = G__31779;
continue;
}
} else
{var vec__31771 = cljs.core.first.call(null,seq__31766__$1);var k = cljs.core.nth.call(null,vec__31771,0,null);var v = cljs.core.nth.call(null,vec__31771,1,null);k.pause();
(k.timeline[(2 * v)]).call(null);
k.currentTime = (v / 15);
{
var G__31780 = cljs.core.next.call(null,seq__31766__$1);
var G__31781 = null;
var G__31782 = 0;
var G__31783 = 0;
seq__31766 = G__31780;
chunk__31767 = G__31781;
count__31768 = G__31782;
i__31769 = G__31783;
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
