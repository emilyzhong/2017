$(document).ready(function() {
	$(".section-image").click(function() {
		let image = $(this).children().attr("src")

		let newImage = image.substring(0, image.length - 4) + "_vertical.png"

		$("#lightbox-image img").attr("src", newImage)
		$("#lightbox").show();
		$("body").css("overflow", "hidden");
	})

	$("#overlay").click(function() {
		$("#lightbox").hide()
		$("body").css("overflow", "scroll");
	})
})