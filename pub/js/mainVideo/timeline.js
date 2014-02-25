elements.mainVideo.timeline = [];

elements.mainVideo.timeline[0] = function(){
if (elements.mainVideo.state != 1)
{
elements.mainVideo.takeDowns[elements.mainVideo.state]();
elements.mainVideo.setups[1]();
}
if (!elements.mainVideo.paused)
{
     elements.mainVideo.pause();
     elements.narratorVideo.style.display = "inline";
     elements.narratorDiv.style.display = "inline";
     elements.narratorVideo.className = "expanded";
     elements.narratorVideo.play();
}
elements.mainVideo.state = 1;
}

