$(document).ready(function(){

	// TURN THE THING
	var pause = 50;
	var degrees = 0;
	var opacity = 1;
	$(".text.two, .text.three, .text.four").css({
		'display': 'none'
	});

	var repeat = true;

	function bobbleBack() {
		console.log("HA");
		$({deg: 3}).animate({deg: 0}, {
	        duration: 1000,
	        step: function(now) {
	            // in the step-callback (that is fired each step of the animation),
	            // you can use the `now` paramter which contains the current
	            // animation-position (`0` up to `angle`)
	            $("#right").css({
	                transform: 'rotate(' + (degrees + now) % 360 + 'deg)'
	            });
	        },
	        complete: function() { if(repeat) {bobble();}}
		});
	}

	function bobble() {
		console.log("AH");
		repeat = true;
		$({deg: 0}).animate({deg: 3}, {
	        duration: 1000,
	        step: function(now) {
	            // in the step-callback (that is fired each step of the animation),
	            // you can use the `now` paramter which contains the current
	            // animation-position (`0` up to `angle`)
	            $("#right").css({
	                transform: 'rotate(' + (degrees + now) % 360  + 'deg)'
	            });
	        },
	        complete: function() { bobbleBack();}
	    });
	}

	$("#titlething").hover(function() {
		repeat = true;
		bobble();
	}, function() {
		repeat = false;
	});

	// setTimeout(function() {bobble()}, 3000);
	
	$(window).on('wheel', function() {
		if (degrees > 357) {
			$(".text.two, .text.three, .text.four").css({
			'display': 'none',
			'opacity': 1
			});
		}

		if (degrees % 90 == 0) {
			pause += 1;
			opacity = 1;
		}

		if (pause > 35) {
			pause = 0;
			opacity = 1;
		}

		if (degrees == 88.5) {
			$(".text.one").css({'display': 'none'});
			$(".text.two").fadeIn();
			}

		if (degrees == 178.5) {
			$(".text.two").css({'display': 'none'});
			$(".text.three").fadeIn();
		}

		if (degrees == 268.5) {
			$(".text.three").css({'display': 'none'});
			$(".text.four").fadeIn();
		}

		if (degrees > 350) {
			$(".text.four").css({'display': 'none'});
			$(".text.one").css({'display': 'block'});
			$(".text.one").css({'opacity': (degrees - 350) / 10});;
		}

		if (pause == 0) {
			degrees += 1.5;
			degrees = degrees % 360
			opacity -= 1/50
			$("#right").css({
	        'transform': 'rotate(' + (degrees) + 'deg)'
			});

			// opacity decreasing here!
			if (degrees < 90 && degrees > 0) {
				$(".text.one").css({
					'opacity': opacity
				})
			} else if (degrees < 180 && degrees > 90) {
				$(".text.two").css({
					'opacity': opacity
				})
			} else if (degrees < 270 && degrees > 180) {
				$(".text.three").css({
					'opacity': opacity
				})
			} else if (degrees < 360 && degrees > 270) {
				$(".text.four").css({
					'opacity': opacity
				})
			}
		}
	});

	// GO BACK: CLICK ON NAME
	$(".name").click(function() {
		window.location.href="../design.html"
	})
});