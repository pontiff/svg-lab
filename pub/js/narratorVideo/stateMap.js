elements.narratorVideo.state = [0, 0];
elements.narratorVideo.stateMap = [
[
function() {
},
function() {
 if (!elements.narratorVideo.paused)
{
  elements.mainVideo.pause();
  elements.narratorVideo.className="slowAnim";
  goog.events.listenOnce(elements.narratorVideo, "transitionend",
        function() {  elements.narratorVideo.play(); });
  elements.narratorVideo.className = "slowAnim";
  elements.narratorDiv.style.left = "35%";
  elements.narratorDiv.style.top = "22%";
  elements.narratorDiv.style.width = "32%";
  elements.narratorDiv.style.height = "57%";
  elements.narratorVideo.style.width = "100%";
  elements.narratorVideo.style.height = "100%";
  elements.narratorVideo.style.margin = "0%";
}
else 
{ elements.narratorVideo.className = "quickAnim";
   elements.narratorDiv.style.left = "35%";
   elements.narratorDiv.style.top = "22%";
   elements.narratorDiv.style.width = "32%";
   elements.narratorDiv.style.height = "57%";
   elements.narratorVideo.style.width = "100%";
   elements.narratorVideo.style.height = "100%";
   elements.narratorVideo.style.margin = "0%";
}}
],
[
function() {
if (!elements.narratorVideo.paused)
{
elements.narratorVideo.pause();
elements.narratorVideo.className = "slowAnim";
goog.events.listenOnce(elements.narratorVideo, "transitionend",
      function() { elements.mainVideo.play(); });
elements.narratorVideo.style.width = "0%"; 
elements.narratorVideo.style.height = "0%";
elements.narratorVideo.style.margin = "50%";
}},
function() {
if ( !elements.narratorVideo.paused) 
{
  elements.narratorVideo.pause();
  elements.narratorVideo.className = "slowAnim";
  goog.events.listenOnce(elements.narratorVideo, "transitionend",
      function() {
                       elements.narratorDiv.style.left = "3%";
                       elements.narratorDiv.style.top = "5%";
                       elements.narratorDiv.style.width = "19.5%";
                       elements.narratorDiv.style.height = "35%";
                       goog.events.listenOnce(elements.narratorVideo, "transitionend",
                           function() { elements.narratorVideo.play(); });
                       elements.narratorVideo.style.width = "100%";
                       elements.narratorVideo.style.height = "100%";
                       elements.narratorVideo.style.margin = "0%"; 
      });
  elements.narratorVideo.style.width = "0%"; 
  elements.narratorVideo.style.height = "0%";
  elements.narratorVideo.style.margin = "50%";
} 
else 
{
  elements.narratorDiv.style.display="none";
  elements.narratorVideo.className = "quickAnim";
  elements.narratorVideo.style.width = "100%";
  elements.narratorVideo.style.height = "100%";
  elements.narratorVideo.style.margin = "0%"; 
  elements.narratorDiv.style.left = "3%";
  elements.narratorDiv.style.top = "5%";
  elements.narratorDiv.style.width = "19.5%";
  elements.narratorDiv.style.height = "35%";
  elements.narratorDiv.style.display="inline";
 }}
],
];