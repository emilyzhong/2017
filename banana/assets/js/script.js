$(document).ready(function() {
	var peeled = false;
	var clicked = 0;

	function changecolor() {
		if (clicked % 5 == 0 && clicked % 2 == 0) {
			$("body").css("background-color", "rgb(153, 204, 255)");
			$("#text").css("color", "#66ff99");
		} else if (clicked % 5 == 0 && clicked % 2 == 1) {
			$("body").css("background-color", "rgb(255, 204, 153)")
			$("#text").css("color", "#ff66ff");
		};
		if (clicked >= 10 && (clicked % 7 == 0 || clicked % 8 == 1)) {
			$("#text").toggle();
		}
	};

	$(".picture").click(function() {
		clicked += 1;
		$("#peeled").toggle();
		$("#unpeeled").toggle();
		changecolor();
		// if (peeled) {
		// 	$("#shadow").css("bottom", "30px");
		// 	peeled = false;
		// } else {
		// 	$("#shadow").css("bottom", "45px");
		// 	peeled = true;
		// }
		// if (peeled) {
		// 	$("#peeled").fadeOut();
		// 	$("#unpeeled").fadeIn();
		// 	peeled = false;
		// 	clicked += 1;
		// 	changecolor();
		// } else {
		// 	$("#unpeeled").fadeOut();
		// 	$("#peeled").fadeIn();
		// 	peeled = true;
		// 	clicked += 1;
		// 	changecolor();
		// }
	});
  });