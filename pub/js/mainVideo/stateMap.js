elements.mainVideo.state = [0];
elements.mainVideo.stateMap = [
[
function() {
elements.narratorVideo.pause();
elements.narratorVideo.className = "quickAnim";
elements.narratorVideo.style.width = "0%";
elements.narratorVideo.style.height = "0%";
elements.narratorVideo.style.margin = "50%";
elements.narratorDiv.style.zIndex = 10;
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels();},
function() {
if (!elements.mainVideo.paused) 
{
  elements.mainVideo.pause(); 
  elements.narratorVideo.currentTime=0;
  elements.narratorDiv.style.zIndex = 30;
  elements.narratorVideo.play();
}
else
{
elements.narratorVideo.currentTime=0;
elements.narratorVideo.state = [0,0];
elements.narratorVideo.timeline[0]();
elements.mainPlayButton.style.display = "none";
elements.narratorVideo.dispatchEvent(new Event('click'));
}}
],
];