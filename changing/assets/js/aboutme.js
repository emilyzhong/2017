$(document).ready(function() {
	
	if ( $(window).width() > 991) {
		$("#left").click(function() {
			backtohome()
		})

		// showing work section
		$("#right").click(function() {
			backtohome();
		})
	} else {
		$("#left").click(function() {
			backtohome();
		})
	}

	$(".aboutsection").click(function(event) {
		event.stopPropagation();
	})


	function backtohome() {
		$("#content").animate({opacity: 0.8}, 300);
		$(".aboutsection").fadeOut();
		$(".work").fadeOut();
		$(".title").fadeIn();
		$("#right").animate({width: '50%'}, 300);
		$("#left").animate({width: '50%'}, 300);
		$("#left").fadeIn()
		$("#right").fadeIn()
		$("#rightcolor").animate({width: 0}, 300);
		$("#leftcolor").animate({width: 0}, 300);
		$(".name").fadeIn();
		$(".name").css("color", "#323232");
		$(".title").css("color", "#323232");
		$(".mobilenav").fadeOut();
		window.location.href='index.html';
	}

});