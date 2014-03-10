// Compiled by ClojureScript .
goog.provide('pontiff.cljs.app.handlers.narratorVideo');
goog.require('cljs.core');
goog.require('pontiff.cljs.util');
goog.require('pontiff.cljs.util');
pontiff.cljs.app.handlers.narratorVideo.init = (function init(){pontiff.cljs.app.handlers.narratorVideo.tocPanels = cljs.core.concat.call(null,pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("ntocPanel",goog.dom.getElement("rtocs"))),pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("ntocPanel",goog.dom.getElement("ltocs"))));
pontiff.cljs.app.handlers.narratorVideo.rTocList = cljs.core.sort_by.call(null,cljs.core.first,cljs.core._GT_,(function (){var iter__3877__auto__ = (function iter__31125(s__31126){return (new cljs.core.LazySeq(null,(function (){var s__31126__$1 = s__31126;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31126__$1);if(temp__4092__auto__)
{var s__31126__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31126__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__31126__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__31128 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__31127 = 0;while(true){
if((i__31127 < size__3876__auto__))
{var v = cljs.core._nth.call(null,c__3875__auto__,i__31127);cljs.core.chunk_append.call(null,b__31128,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v.parentNode),v),(v.getAttribute("frame") | 0)));
{
var G__31143 = (i__31127 + 1);
i__31127 = G__31143;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31128),iter__31125.call(null,cljs.core.chunk_rest.call(null,s__31126__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31128),null);
}
} else
{var v = cljs.core.first.call(null,s__31126__$2);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v.parentNode),v),(v.getAttribute("frame") | 0)),iter__31125.call(null,cljs.core.rest.call(null,s__31126__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3877__auto__.call(null,pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("ntoc",goog.dom.getElement("rtocs"))));
})());
pontiff.cljs.app.handlers.narratorVideo.lTocList = cljs.core.sort_by.call(null,cljs.core.first,cljs.core._GT_,(function (){var iter__3877__auto__ = (function iter__31129(s__31130){return (new cljs.core.LazySeq(null,(function (){var s__31130__$1 = s__31130;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31130__$1);if(temp__4092__auto__)
{var s__31130__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31130__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__31130__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__31132 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__31131 = 0;while(true){
if((i__31131 < size__3876__auto__))
{var v = cljs.core._nth.call(null,c__3875__auto__,i__31131);cljs.core.chunk_append.call(null,b__31132,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v.parentNode),v),(v.getAttribute("frame") | 0)));
{
var G__31144 = (i__31131 + 1);
i__31131 = G__31144;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31132),iter__31129.call(null,cljs.core.chunk_rest.call(null,s__31130__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31132),null);
}
} else
{var v = cljs.core.first.call(null,s__31130__$2);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v.parentNode),v),(v.getAttribute("frame") | 0)),iter__31129.call(null,cljs.core.rest.call(null,s__31130__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3877__auto__.call(null,pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("ntoc",goog.dom.getElement("ltocs"))));
})());
var seq__31133_31145 = cljs.core.seq.call(null,cljs.core.concat.call(null,pontiff.cljs.app.handlers.narratorVideo.lTocList,pontiff.cljs.app.handlers.narratorVideo.rTocList));var chunk__31134_31146 = null;var count__31135_31147 = 0;var i__31136_31148 = 0;while(true){
if((i__31136_31148 < count__31135_31147))
{var vec__31137_31149 = cljs.core._nth.call(null,chunk__31134_31146,i__31136_31148);var x_31150 = cljs.core.nth.call(null,vec__31137_31149,0,null);var y_31151 = cljs.core.nth.call(null,vec__31137_31149,1,null);var z_31152 = cljs.core.nth.call(null,vec__31137_31149,2,null);goog.events.listen(y_31151,"click",pontiff.cljs.app.handlers.narratorVideo.tocNodeHandler);
{
var G__31153 = seq__31133_31145;
var G__31154 = chunk__31134_31146;
var G__31155 = count__31135_31147;
var G__31156 = (i__31136_31148 + 1);
seq__31133_31145 = G__31153;
chunk__31134_31146 = G__31154;
count__31135_31147 = G__31155;
i__31136_31148 = G__31156;
continue;
}
} else
{var temp__4092__auto___31157 = cljs.core.seq.call(null,seq__31133_31145);if(temp__4092__auto___31157)
{var seq__31133_31158__$1 = temp__4092__auto___31157;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31133_31158__$1))
{var c__3908__auto___31159 = cljs.core.chunk_first.call(null,seq__31133_31158__$1);{
var G__31160 = cljs.core.chunk_rest.call(null,seq__31133_31158__$1);
var G__31161 = c__3908__auto___31159;
var G__31162 = cljs.core.count.call(null,c__3908__auto___31159);
var G__31163 = 0;
seq__31133_31145 = G__31160;
chunk__31134_31146 = G__31161;
count__31135_31147 = G__31162;
i__31136_31148 = G__31163;
continue;
}
} else
{var vec__31138_31164 = cljs.core.first.call(null,seq__31133_31158__$1);var x_31165 = cljs.core.nth.call(null,vec__31138_31164,0,null);var y_31166 = cljs.core.nth.call(null,vec__31138_31164,1,null);var z_31167 = cljs.core.nth.call(null,vec__31138_31164,2,null);goog.events.listen(y_31166,"click",pontiff.cljs.app.handlers.narratorVideo.tocNodeHandler);
{
var G__31168 = cljs.core.next.call(null,seq__31133_31158__$1);
var G__31169 = null;
var G__31170 = 0;
var G__31171 = 0;
seq__31133_31145 = G__31168;
chunk__31134_31146 = G__31169;
count__31135_31147 = G__31170;
i__31136_31148 = G__31171;
continue;
}
}
} else
{}
}
break;
}
goog.events.listen(goog.dom.getElement("narratorTOCsL"),"click",(function (){return pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
}));
goog.events.listen(goog.dom.getElement("narratorTOCsR"),"click",(function (){return pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
}));
goog.events.listen(goog.dom.getElement("narratorController"),"click",(function (){return pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
}));
goog.events.listen(elements.narratorVideo,"click",(function (){elements.narratorVideo.pause();
var frame = (30 * elements.narratorVideo.currentTime);var toc = (((45 < ((parseFloat(elements.narratorDiv.style.width) / 2) + parseFloat(elements.narratorDiv.style.left))))?cljs.core.second.call(null,cljs.core.some.call(null,((function (frame){
return (function (p1__31105_SHARP_){if((cljs.core.first.call(null,p1__31105_SHARP_) <= frame))
{return p1__31105_SHARP_;
} else
{return null;
}
});})(frame))
,pontiff.cljs.app.handlers.narratorVideo.lTocList)).parentNode:cljs.core.second.call(null,cljs.core.some.call(null,((function (frame){
return (function (p1__31106_SHARP_){if((cljs.core.first.call(null,p1__31106_SHARP_) <= frame))
{return p1__31106_SHARP_;
} else
{return null;
}
});})(frame))
,pontiff.cljs.app.handlers.narratorVideo.rTocList)).parentNode);elements.narratorController.style.display = "inline";
toc.style.display = "inline";
return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.narratorVideo.tempPanels,cljs.core.list_STAR_.call(null,toc,elements.narratorController,cljs.core.deref.call(null,pontiff.cljs.app.handlers.narratorVideo.tempPanels)));
}));
goog.events.listen(elements.narratorDisableButton,"click",(function (evt){evt.stopPropagation();
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
elements.narratorVideo.className = "quickAnim";
elements.narratorVideo.style.width = "0%";
elements.narratorVideo.style.height = "0%";
elements.narratorVideo.style.margin = "50%";
return elements.mainVideo.play();
}));
return goog.events.listen(elements.narratorPlayButton,"click",(function (evt){evt.stopPropagation();
var seq__31139 = cljs.core.seq.call(null,pontiff.cljs.app.handlers.narratorVideo.tocPanels);var chunk__31140 = null;var count__31141 = 0;var i__31142 = 0;while(true){
if((i__31142 < count__31141))
{var v = cljs.core._nth.call(null,chunk__31140,i__31142);pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
elements.narratorVideo.play();
{
var G__31172 = seq__31139;
var G__31173 = chunk__31140;
var G__31174 = count__31141;
var G__31175 = (i__31142 + 1);
seq__31139 = G__31172;
chunk__31140 = G__31173;
count__31141 = G__31174;
i__31142 = G__31175;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31139);if(temp__4092__auto__)
{var seq__31139__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31139__$1))
{var c__3908__auto__ = cljs.core.chunk_first.call(null,seq__31139__$1);{
var G__31176 = cljs.core.chunk_rest.call(null,seq__31139__$1);
var G__31177 = c__3908__auto__;
var G__31178 = cljs.core.count.call(null,c__3908__auto__);
var G__31179 = 0;
seq__31139 = G__31176;
chunk__31140 = G__31177;
count__31141 = G__31178;
i__31142 = G__31179;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__31139__$1);pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
elements.narratorVideo.play();
{
var G__31180 = cljs.core.next.call(null,seq__31139__$1);
var G__31181 = null;
var G__31182 = 0;
var G__31183 = 0;
seq__31139 = G__31180;
chunk__31140 = G__31181;
count__31141 = G__31182;
i__31142 = G__31183;
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
pontiff.cljs.app.handlers.narratorVideo.tocNodeHandler = (function tocNodeHandler(evt){evt.stopPropagation();
var frame = evt.target.getAttribute("frame");elements.narratorVideo.currentTime = (frame / 30);
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
(elements.narratorVideo.timeline[frame]).call(null);
return elements.narratorVideo.play();
});
pontiff.cljs.app.handlers.narratorVideo.tempPanels = cljs.core.atom.call(null,cljs.core.List.EMPTY);
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels = (function closeTempPanels(){var seq__31188_31192 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.narratorVideo.tempPanels));var chunk__31189_31193 = null;var count__31190_31194 = 0;var i__31191_31195 = 0;while(true){
if((i__31191_31195 < count__31190_31194))
{var v_31196 = cljs.core._nth.call(null,chunk__31189_31193,i__31191_31195);v_31196.style.display = "none";
{
var G__31197 = seq__31188_31192;
var G__31198 = chunk__31189_31193;
var G__31199 = count__31190_31194;
var G__31200 = (i__31191_31195 + 1);
seq__31188_31192 = G__31197;
chunk__31189_31193 = G__31198;
count__31190_31194 = G__31199;
i__31191_31195 = G__31200;
continue;
}
} else
{var temp__4092__auto___31201 = cljs.core.seq.call(null,seq__31188_31192);if(temp__4092__auto___31201)
{var seq__31188_31202__$1 = temp__4092__auto___31201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31188_31202__$1))
{var c__3908__auto___31203 = cljs.core.chunk_first.call(null,seq__31188_31202__$1);{
var G__31204 = cljs.core.chunk_rest.call(null,seq__31188_31202__$1);
var G__31205 = c__3908__auto___31203;
var G__31206 = cljs.core.count.call(null,c__3908__auto___31203);
var G__31207 = 0;
seq__31188_31192 = G__31204;
chunk__31189_31193 = G__31205;
count__31190_31194 = G__31206;
i__31191_31195 = G__31207;
continue;
}
} else
{var v_31208 = cljs.core.first.call(null,seq__31188_31202__$1);v_31208.style.display = "none";
{
var G__31209 = cljs.core.next.call(null,seq__31188_31202__$1);
var G__31210 = null;
var G__31211 = 0;
var G__31212 = 0;
seq__31188_31192 = G__31209;
chunk__31189_31193 = G__31210;
count__31190_31194 = G__31211;
i__31191_31195 = G__31212;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.narratorVideo.tempPanels,cljs.core.List.EMPTY);
});
