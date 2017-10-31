$(document).ready(function() {
	// DECLARED
	let task = {"Google": {
					"img": "google.jpg",
					"descrip": "In summer 2017, I interned at Google's Irvine campus as part of their EP program, where I worked on the front end of an internal data visualization tool, using JavaScript, d3, AngularJs, and CSS"
				},
				"Daily Cal": {
					"img": "dailycal.jpg", 
					"descrip": "As a project developer at the Daily Californian, I use data and code to create interactive visual stories about UC Berkeley and the surrounding city"
				},
				"Cal Hacks": {
					"img": "calhacks.jpg", 
					"descrip": "As diversity director at Cal Hacks, I work on redefining what it means to be a hacker. In 2017, I launched CubStart, a mentorship program that guides beginner hackers through their first hackathon" 
				},
				"Web Design DeCal": {
					"img": "wdd.jpg",
					"descrip": "I'm a head instructor of the Web Design DeCal, a course that teaches front end web design at UC Berkeley. We focus on teaching HTML, CSS, jQuery, and UI/UX principles to students of all majors"
				},
				"Innovative Design": {
					"img": "innod.jpg",
					"descrip": "I'm a graphic designer at Innovative design, a student-run creative agency at UC Berkeley, where I do various design work for off-campus clients using my favorite Adobe Creative Cloud tools!"
				}
	}

	// ACTIVITIES
	const start = task["Google"];

	$("#background-img img").attr("src", "assets/img/" + start.img);
	$("#description p").text(start.descrip);
	$("#description").show()


	// Hovering
	$("#tasks>a").hover(function() {
		let selectedTask = task[this.textContent];

		let image = $("#background-img img");
		let description = $("#description p");
		let newSrc = "assets/img/" + selectedTask.img

		description.text(selectedTask.descrip);
		$("#description").show()

		if (image.attr("src") != newSrc) {
			image.attr("src", newSrc)
			let newImage = image.clone();
			newImage.appendTo("#background-img")
			newImage.attr("src", newSrc);

			image.remove();
		}
	}, function() {})  

	// PORTFOLIO

	// Waypoints
	$("#activities").waypoint(function() {
		$("#together").css("opacity", 1);
	})

	$("#portfolio").waypoint(function() {
		$(".card-1").css("opacity", 1);
		setTimeout(function() {
			$(".card-2").css("opacity", 1);
		}, 500)
	})

	// Hovering
	// $(".card").hover(function() {
	// 	$(this).find(".card-title, .card-descrip").fadeTo(200, 1);
	// 	$(this).find("img").fadeTo(200, 0.3);
	// 	$(this).fadeTo(200, 1);
	// }, function() {
	// 	$(this).find(".card-title, .card-descrip").fadeTo(200, 0);
	// 	$(this).find("img").fadeTo(200, 1);
	// 	$(this).fadeTo(200, 0.5);
	// })
});