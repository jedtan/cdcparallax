$( document ).ready(function() {

	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
	
	/*$("#bgvid").prop('muted', true);

	$("#mute-video").click( function (){
	    if( $("#bgvid").prop('muted') )
	    {
	        $("#bgvid").prop('muted', false);
	    }

	    else {
	    $("#bgvid").prop('muted', true);
	    }

	});  

	$("#play-pause").click( function (){
		if($("#bgvid").get(0).paused){
			$("#bgvid").get(0).play();
		}
	    else {
	    	$("#bgvid").get(0).pause();
	    }

	});  */
});

