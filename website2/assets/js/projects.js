$(document).ready(function() {
	$(".section-image, #image").click(function() {
		let image = $(this).children().attr("src");

		// TODO: make better resizing lightbox-portrait and lightbox-landscape.
		if ($(this).children().hasClass("landscape")) {
			$("#lightbox-image").children().removeClass("lightbox-portrait");
			$("#lightbox-image").children().addClass("lightbox-landscape");
		} else {
			$("#lightbox-image").children().addClass("lightbox-portrait");
			$("#lightbox-image").children().removeClass("lightbox-landscape");
		}

		$("#lightbox-image img").attr("src", image)
		$("#lightbox").show();
		$("body").css("overflow", "hidden");
	})

	$("#overlay").click(function() {
		$("#lightbox").hide()
		$("body").css("overflow", "scroll");
	})
})