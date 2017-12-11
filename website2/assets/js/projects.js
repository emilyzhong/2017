$(document).ready(function() {
	$(".section-image").click(function() {
		if (document.getElementById("lightbox")) {
			let image = $(this).children().attr("src")

			let newImage = image.substring(0, image.length - 4) + "_vertical.png"

			$("#lightbox-image img").attr("src", newImage)
			$("#lightbox").show();
			$("html, body, #pseudobody").css("overflow", "hidden");
		}
	})

	$("#overlay, #lightbox-image").click(function() {
		$("#lightbox").hide()
		$("html, body, #pseudobody").css("overflow", "scroll");
	})

	$("#lightbox-image img").click(function(e) {
		e.stopPropagation();
	})
})