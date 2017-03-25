$(document).ready(function() {
	// 991 px for tablets, phones: no hover effect
	$(function() {
  		$('#container').smoothState();
	});

	if ( $(window).width() > 991) {
		$("#left").hover(function() {
			$("#leftcolor").removeClass('unhover').addClass('hover');
		}, function() {
			$("#leftcolor").removeClass('hover').addClass('unhover');
		});

		$("#right").hover(function() {
			$("#rightcolor").removeClass('unhover').addClass('hover');
		}, function() {
			$("#rightcolor").removeClass('hover').addClass('unhover');
		});
	}
})