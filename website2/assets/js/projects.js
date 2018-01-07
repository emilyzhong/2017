$(document).ready(function() {

	// CONSTANTS
	let footerLinks = {
		"User Experience Design": {
			"Nutrition Label Redesign": "nutrition_label.html",
		},
		"Graphic Design": {
			"Geofilters": "geofilters.html",
			"Logos": "logos.html",
			"Daily Californian": "daily_cal_design.html",
		},
		"Programming": {
			"Where We Cry": "where_we_cry.html",
		},
		// "Fine Art": {

		// }
	};


	// IMAGE RESIZING THINGS

	$('.section-image').each(function() {
		let image = $(this).children("img");
	    let height = image.height();
	    let width = image.width();

	    let aspectRatio = height / width;

	    $(this).css("padding-top", aspectRatio * 100 + "%");
	});


	// FOOTER

	// Hacky column things hahaha
	// 2 categories per column.
	let newColumn = true;
	let divString = '';

	Object.keys(footerLinks).forEach(function(category) {
		if (newColumn) {
			divString += '<div class="column">'
		}

		divString = divString + '<div class="project-category">' + category + '</div>';

		Object.keys(footerLinks[category]).forEach(function(pageTitle) {
			// Include something to ensure that current page isn't included.
			let link = footerLinks[category][pageTitle];
			divString = divString + '<a href="' + link + '">' + pageTitle + '</a>';
		})

		if (!newColumn) {
			divString += '</div>' // Close column div.
			$("#footer-projects").append(divString);
			divString = '';
		}

		newColumn = !newColumn;
	})


	// LIGHTBOX

	$(".section-image").click(function() {
		if (document.getElementById("lightbox")) {
			let image = $(this).children().attr("src")

			let newImage = image.substring(0, 14) + "lightbox-images/" + image.substring(14, image.length) 

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