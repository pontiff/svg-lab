// Compiled by ClojureScript .
goog.provide('pontiff.cljs.util');
goog.require('cljs.core');
pontiff.cljs.util.nodelist__GT_coll = (function nodelist__GT_coll(nl){var iter__3879__auto__ = (function iter__12036(s__12037){return (new cljs.core.LazySeq(null,(function (){var s__12037__$1 = s__12037;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12037__$1);if(temp__4092__auto__)
{var s__12037__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12037__$2))
{var c__3877__auto__ = cljs.core.chunk_first.call(null,s__12037__$2);var size__3878__auto__ = cljs.core.count.call(null,c__3877__auto__);var b__12039 = cljs.core.chunk_buffer.call(null,size__3878__auto__);if((function (){var i__12038 = 0;while(true){
if((i__12038 < size__3878__auto__))
{var x = cljs.core._nth.call(null,c__3877__auto__,i__12038);cljs.core.chunk_append.call(null,b__12039,(nl[x]));
{
var G__12040 = (i__12038 + 1);
i__12038 = G__12040;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12039),iter__12036.call(null,cljs.core.chunk_rest.call(null,s__12037__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12039),null);
}
} else
{var x = cljs.core.first.call(null,s__12037__$2);return cljs.core.cons.call(null,(nl[x]),iter__12036.call(null,cljs.core.rest.call(null,s__12037__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3879__auto__.call(null,cljs.core.range.call(null,0,nl.length));
});
