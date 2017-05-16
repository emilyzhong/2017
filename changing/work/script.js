$(document).ready(function(){
	var pause = 50;
	var degrees = 0;
	var opacity = 1;
	$(".text.two, .text.three, .text.four").css({
		'display': 'none'
	});

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
});