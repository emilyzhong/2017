$(document).ready(function(){
	var pause = 0
	var degrees = 0;
	var opacity = 1;
	$(".text.two, .text.three, .text.four").css({
		'display': 'none'
	});

	$(window).on('wheel', function() {
		console.log(degrees);
		if (degrees % 90 == 0) {
			console.log("pause");
			pause += 1;
		}

		if (pause == 35) {
			pause = 0;
			opacity = 1;
		}

		if (degrees == 90 - 3) {
			$(".text.one").css({'display': 'none'});
			$(".text.two").fadeIn();
		}

		if (degrees == 180 - 3) {
			$(".text.two").css({'display': 'none'});
			$(".text.three").fadeIn();
		}

		if (degrees == 270 - 3) {
			$(".text.three").css({'display': 'none'});
			$(".text.four").fadeIn();
		}

		if (degrees == 357) {
			$(".text.four").css({'display': 'none'});
			$(".text.one").fadeIn();
		}

		if (pause == 0) {
			degrees += 1.5;
			degrees = degrees % 360
			opacity -= 1/50
			$("#right").css({
	        'transform': 'rotate(' + (degrees) + 'deg)'
			});

			if (degrees < 90) {
				$(".text.one").css({
					'opacity': opacity
				})
			} else if (degrees < 180) {
				$(".text.two").css({
					'opacity': opacity
				})
			} else if (degrees < 270) {
				$(".text.three").css({
					'opacity': opacity
				})
			} else {
				$(".text.four").css({
					'opacity': opacity
				})
			}
		}
	});
});