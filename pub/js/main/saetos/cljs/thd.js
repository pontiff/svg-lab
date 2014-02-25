goog.provide('saetos.cljs.threads');
goog.require('cljs.core');
saetos.cljs.threads.Thread = (function Thread(){
var this$ = this;
this$.thread = (new Worker(URL.createObjectURL((new Blob([[cljs.core.str("onmessage = "),cljs.core.str((function (message){
return eval("(".concat(message.data.exec.toString(),")();"));
})),cljs.core.str(";")].join('')],{"type":"text/javascript"})))));
this$.exec = (function (code){
return this$.thread.postMessage({"exec":[cljs.core.str(code)].join('')});
});
this$.setCallback = (function (clbk){
return this$.thread.onmessage = clbk;
});
this$.kill = (function (){
return this$.thread.terminate();
});
return this$;
});
