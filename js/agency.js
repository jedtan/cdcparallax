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
  console.log("hi");
    var videoElement = document.getElementById("mission-audio-player");
    var textTracks = videoElement.textTracks; // one for each track element
    var textTrack = textTracks[0]; // corresponds to the first track element
    console.log(textTrack);
    for (var j = 0; j < textTrack.cues.length; ++j) {
      var cue = textTrack.cues[j];
      cue.onenter = function(){
        console.log("hi");
        console.log(cue.text);
        $("#mission-captions").html("<p>" + cue.text + "</p>");
      };

      cue.onexit = function(){
        // do something else
      };
    }
    function resize(){
      var width  = $('#model-graphic').width();
      var height  = $('#model-graphic').height();
      var circlewidth = .36 * width;
      $('.more').width(circlewidth);
      $('.more').height(circlewidth);
      $(".more").css("line-height", circlewidth + "px");
      newWidth = width * .29;
      newWidthC = newWidth + 112;
      leftWidth = -width * .02;
      leftWidthC = leftWidth + 112;
      rightWidth = width *.6;
      rightWidthC = rightWidth + 112;
      topHeight = height * .04;
      topHeightC = topHeight - 50;
      newHeight = height * .38;
      newHeightC = newHeight - 50;
      bottomHeight = height * .6;
      bottomHeightC = bottomHeight - 50;
      $("#design").css({"left": newWidth + "px", "top" : topHeight + "px"});
      $("#design-caption").css({"left": newWidthC + "px", "top" : topHeightC + "px"});
      $("#connect-circle").css({"left": newWidth + "px", "top": newHeight + "px"});
      $("#connect-caption").css({"left": newWidthC + "px", "top" : newHeightC + "px"});
      $("#pursue").css({"left": leftWidth + "px", "top" : bottomHeight + "px"});
      $("#pursue-caption").css({"left": leftWidthC + "px", "top" : bottomHeightC + "px"});
      $("#venture").css({"left": rightWidth + "px", "top" : bottomHeight + "px"})
      $("#venture-caption").css({"left": rightWidthC + "px", "top" : bottomHeightC + "px"});
    }
    $(window).resize(function(){
      resize();
    });
    resize();
    $('.more-caption').hide();
    $('.below-popup').hide();
    $('#mission-audio-player').hide();
    $('.audience').hover(function(e){
      console.log(e);
      $('.below-popup').css( 'position', 'absolute' );
        $('.below-popup').css( 'top', e.pageY-20);
        $('.below-popup').css( 'left', e.pageX-70);
       $('.below-popup').show();
      },function(){
      $('.below-popup').hide();
    });
    $('#design').mouseenter(function() {
        $('#design-caption').show();
    })
    .mouseleave(function() {
        $('#design-caption').hide();
    });
    $('#connect-circle').mouseenter(function() {
        $('#connect-caption').show();
    })
    .mouseleave(function() {
        $('#connect-caption').hide();
    });
    $('#venture').mouseenter(function() {
        $('#venture-caption').show();
    })
    .mouseleave(function() {
        $('#venture-caption').hide();
    });
    $('#pursue').mouseenter(function() {
        $('#pursue-caption').show();
    })
    .mouseleave(function() {
        $('#pursue-caption').hide();
    });

    $('#mission-audio').click(function(){
      $('#mission-audio-player').show();
      var audio = document.getElementById("mission-audio-player"); 
      audio.play();
      $('#mission-audio').hide();
      player.pauseVideo();
    });
    $('#mission-read').click(function(){
        window.location.href = "https://beam.stanford.edu/sites/default/files/parallax_vision_audio_short_-_10_8_15_5.02_pm.pdf"
    });
    $('.read-more').click(function(){
        window.location.href="https://beam.stanford.edu/about-us";
    });
    $('.launchpage-blue-button').click(function(){
        window.location.href="https://stanforduniversity.qualtrics.com/SE/?SID=SV_50A9JYkHiTxoqTX";
    });
    $('.video-overlay-left-button').click(function(){
        $('#video-overlay').toggle();
        player.seekTo(0);
        player.playVideo();
        var audio = document.getElementById("mission-audio-player"); 
        audio.pause();
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