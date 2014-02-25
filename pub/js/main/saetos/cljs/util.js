goog.provide('saetos.cljs.util');
goog.require('cljs.core');
saetos.cljs.util.nodelist__GT_coll = (function nodelist__GT_coll(nl){
var iter__2724__auto__ = (function iter__6167(s__6168){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6168__$1 = s__6168;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6168__$1);
if(temp__4092__auto__)
{var s__6168__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6168__$2))
{var c__2722__auto__ = cljs.core.chunk_first.call(null,s__6168__$2);
var size__2723__auto__ = cljs.core.count.call(null,c__2722__auto__);
var b__6170 = cljs.core.chunk_buffer.call(null,size__2723__auto__);
if((function (){var i__6169 = 0;
while(true){
if((i__6169 < size__2723__auto__))
{var x = cljs.core._nth.call(null,c__2722__auto__,i__6169);
cljs.core.chunk_append.call(null,b__6170,(nl[x]));
{
var G__6171 = (i__6169 + 1);
i__6169 = G__6171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6170),iter__6167.call(null,cljs.core.chunk_rest.call(null,s__6168__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6170),null);
}
} else
{var x = cljs.core.first.call(null,s__6168__$2);
return cljs.core.cons.call(null,(nl[x]),iter__6167.call(null,cljs.core.rest.call(null,s__6168__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__2724__auto__.call(null,cljs.core.range.call(null,0,nl.length));
});
