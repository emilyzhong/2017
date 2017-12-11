$(document).ready(function() {
	$(".section-image").click(function() {
		if (document.getElementById("lightbox")) {
			let image = $(this).children().attr("src")

			let newImage = image.substring(0, image.length - 4) + "_vertical.png"

			$("#lightbox-image img").attr("src", newImage)
			$("#lightbox").show();
			$("body").css("overflow", "hidden");
		}
	})

	$("#overlay, #lightbox-image").click(function() {
		$("#lightbox").hide()
		$("body").css("overflow", "scroll");
	})

	$("#lightbox-image img").click(function(e) {
		e.stopPropagation();
	})
})