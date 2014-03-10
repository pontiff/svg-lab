// Compiled by ClojureScript .
goog.provide('pontiff.cljs.threads');
goog.require('cljs.core');
pontiff.cljs.threads.Thread = (function Thread(){var this$ = this;this$.thread = (new Worker(URL.createObjectURL((new Blob([[cljs.core.str("onmessage = "),cljs.core.str(((function (this$){
return (function (message){return eval("(".concat(message.data.exec.toString(),")();"));
});})(this$))
),cljs.core.str(";")].join('')],(function (){var obj12029 = {"type":"text/javascript"};return obj12029;
})())))));
this$.exec = ((function (this$){
return (function (code){return this$.thread.postMessage((function (){var obj12031 = {"exec":[cljs.core.str(code)].join('')};return obj12031;
})());
});})(this$))
;
this$.setCallback = ((function (this$){
return (function (clbk){return this$.thread.onmessage = clbk;
});})(this$))
;
this$.kill = ((function (this$){
return (function (){return this$.thread.terminate();
});})(this$))
;
return this$;
});
