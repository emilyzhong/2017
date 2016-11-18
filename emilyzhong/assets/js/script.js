$(document).ready(function() {

	var homepage = true
	
	// hover effects on home page
	$("#left").hover(function() {
		if (homepage) {
			$("#left .name").css("color", "white");
			$("#left .title").css("color", "white");
			$("#leftcolor").animate({width: '100%'}, 300);
		}
	}, function() {
		if (homepage) {
			$("#leftcolor").animate({width: 0}, 300);
			$("#left .name").css("color", "#323232");
			$("#left .title").css("color", "#323232");
		}
	});

	$("#right").hover(function() {
		if (homepage) {
			$("#right .name").css("color", "white");
			$("#right .title").css("color", "white");
			$("#rightcolor").animate({width: '100%'}, 300);
		}
	}, function() {
		if (homepage) {
			$("#rightcolor").animate({width: 0}, 300);
			$("#right .name").css("color", "#323232");
			$("#right .title").css("color", "#323232");
		}
	});

	// CLICK EFFECTS ON HOME PAGE:
	//showing about section
	$("#left").click(function() {
		if (homepage) {
			$("#content").animate({opacity: 1}, 300);
			$("#left").animate({width: '70%'}, 300);
			$("#left .name").css("color", "white");
			$("#left .aboutsection").css("color", "white");
			$("#leftcolor").animate({width: '100%'}, 300);
			$("#right").animate({width: '30%'}, 300);
			$(".title").fadeOut();
			$(".aboutsection").fadeIn();
			homepage = false
		} else {
			backtohome()
		}
	})

	// showing work section
	$("#right").click(function() {
		if (homepage) {
			$(".work").fadeIn();
			$("#content").animate({opacity: 1}, 300);
			$("#left").animate({width: '30%'}, 300);
			$("#right .name").css("color", "white");
			$("#rightcolor").animate({width: '100%'}, 300);
			$("#right").animate({width: '70%'}, 300);
			$(".title").fadeOut(); 
			homepage = false
		} else {
			backtohome()
		}
	})

	$('.aboutsection').click(function(event){
    	event.stopPropagation();
 	});

	$('.picturecontainer').click(function(event){
    	event.stopPropagation();
 	});

 	$('.textcontainer').click(function(event){
    	event.stopPropagation();
 	});

	function backtohome() {
		$("#content").animate({opacity: 0.8}, 300);
		$(".aboutsection").fadeOut();
		$(".work").fadeOut();
		$(".title").fadeIn();
		$("#right").animate({width: '50%'}, 300);
		$("#left").animate({width: '50%'}, 300);
		$("#rightcolor").animate({width: 0}, 300);
		$("#leftcolor").animate({width: 0}, 300);
		$(".name").css("color", "#323232");
		$(".title").css("color", "#323232");
		homepage = true	
	}

	// WORK SECTION
	$("#art").click(function() {
		$("#art").css("color", "white");
		$("#design").css("color", "#323232");
		$("#cs").css("color", "#323232");
		$(".design").fadeOut();
		$(".cs").fadeOut();
		$(".art").fadeIn();
	});

	$("#design").click(function() {
		$("#design").css("color", "white");
		$("#art").css("color", "#323232");
		$("#cs").css("color", "#323232");

		$(".art").fadeOut();
		$(".cs").fadeOut();
		$(".design").fadeIn();
	});

	$("#cs").click(function() {
		$("#cs").css("color", "white");
		$("#design").css("color", "#323232");
		$("#art").css("color", "#323232");

		$(".art").fadeOut();
		$(".design").fadeOut();
		$(".cs").fadeIn();
	});

	$("#navbar").click(function(event){
		event.stopPropagation();
	});

	var notexpanded = true

	$(".overlay").hover(function() {
		$(this).animate({opacity: 0}, 300);
		var num = $(this).attr('class').split(' ')[1]
		$("." + num).fadeIn()
	}, function() {
		if (notexpanded) {
			$(".textgroup").css("display", "none");
			$(this).animate({opacity: 1}, 300);
			var num = $(this).attr('class').split(' ')[1]
		}
	});

	$(".picturetile").click(function() {
		var num = $(this).children(':nth-child(1)').attr('class').split(' ')[1]
		console.log(num);
		var image = $(this).children(':nth-child(2)').attr('src')
		$("." + num).fadeIn();
		$("#expandoverlay").fadeIn();
		$("#expandedimage").append('<img id="expanded" src="' + image + '">');
		var img = document.getElementById('expanded')
		if (img.height < img.width) {
			$(img).width(700);
		} else {
			$(img).height(550);
		}
		
		notexpanded = false
	});

	$("#expandoverlay").click(function() {
		$("#expandedimage").empty();
		$("#expandoverlay").fadeOut();
		$(".textgroup").fadeOut();
		$(".overlay").animate({opacity: 1}, 300);
		event.stopPropagation();
		notexpanded = true
	})

	$('#expandedimage').click(function(event){
    	event.stopPropagation();
 	});


});