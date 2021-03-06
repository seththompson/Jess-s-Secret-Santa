
//Load player api asynchronously.
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: '-d8HBXsBlCM',
      playerVars: { 'autoplay': 1, 'rel': 0, 'showinfo': 0, 'egm': 0, 'showsearch': 0, },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}
function onPlayerStateChange(event) {
    //When the video has ended
    if (event.data == YT.PlayerState.ENDED) {
        //Get rid of the player
        var element = document.getElementById("player");
        element.style.display = "none";
    }
}