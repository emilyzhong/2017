$(document).ready(function() {
	/** TODO: Currently, all images are expected to be a 2:3 ratio using padding-top. 
	Create code that:

	1) Detects the height/width aspect ratio of the image.
	2) Sets padding-top value for the given image to that ratio.

	TODO: Currently, each time I create a new page, I need to change the
	footer of each existing projects page.
	Create code that autofills the footer section so I don't have to do it, 
	taking from an array or something.

	See experimental.
	**/

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
			"Where we cry": "where_we_cry.html",
		},
		"Fine Art": {

		}
	};

	// Hack column things hahaha
	// 2 categories per column.
	// Test when there's internet.
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

	// End experimental.

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