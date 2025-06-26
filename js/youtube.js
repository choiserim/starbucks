// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  // 'player'는 <div id="player"></div>
  new YT.Player('player', {
    videoId: 'CMmFG-GXNZ0',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'CMmFG-GXNZ0',
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      }
    }
  });
}