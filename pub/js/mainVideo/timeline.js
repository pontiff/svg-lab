elements.mainVideo.timeline = [];

elements.mainVideo.timeline[0] = function(){
var state = [1];
for ( var i = 0; i < state.length; i++) {
if ( state[i] != elements.mainVideo.state[i])elements.mainVideo.stateMap[i][state[i]]();}
elements.mainVideo.state = state;
null;
}

