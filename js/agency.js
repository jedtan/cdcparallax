/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-container', {
          height: '390',
          width: '640',
          videoId: '-Nmgm3PwZFk',
          playerVars: { 'modestbranding': 1, 'showinfo': 0, 'controls':0, 'start': 24},
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

 // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 1);
          done = true;
        }
      }
      function stopVideo() {
        player.pauseVideo();
      }
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        /*$('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        */
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
   // target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function(){
    $('#read-more').click(function(){
        window.location.href="https://beam.stanford.edu/about-us-1";
    });
    $('.video-overlay-left-button').click(function(){
        $('#video-overlay').toggle();
        player.seekTo(0);
        player.playVideo();
        /*$('#video-overlay').toggle();
        $("video").get(0).setAttribute("controls","controls");
        if($("video").get(0).paused){
            $("video").get(0).play();
        }
        else {
            $("video").get(0).pause();
        } */
    });
});