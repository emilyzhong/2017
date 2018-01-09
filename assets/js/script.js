$(document).ready(function() {
	setTimeout(function() {
		$(".name").fadeIn("slow");
	}, 200);

	setTimeout(function() {
		$("#intro").fadeIn(900);
	}, 900);

	$("#nav > a").each(function(i, elem) {
		setTimeout(function() {
			$(elem).css("opacity", 1);
		}, 1500 + 300 * i);
	});

	// DECLARED
	let task = {"Google": {
					"img": "google.jpg",
					"url": "https://google.com",
					"descrip": "In summer 2017, I interned at Google's Irvine campus as part of their EP program, where I worked on the front end of an internal data visualization tool, using JavaScript, d3, AngularJs, and CSS"
				},
				"Daily Cal": {
					"img": "dailycal.jpg", 
					"url": "http://projects.dailycal.org",
					"descrip": "As a project developer at the Daily Californian, I use data and code to create interactive visual stories about UC Berkeley and the surrounding city"
				},
				"Cal Hacks": {
					"img": "calhacks.jpg", 
					"url": "http://calhacks.io",
					"descrip": "As diversity director at Cal Hacks, I work on redefining what it means to be a hacker. In 2017, I launched CubStart, a mentorship program that guides beginner hackers through their first hackathon" 
				},
				"Web Design DeCal": {
					"img": "wdd.jpg",
					"url": "http://wdd.io",
					"descrip": "I'm a head instructor of the Web Design DeCal, a course that teaches front end web design at UC Berkeley. We focus on teaching HTML, CSS, jQuery, and UI/UX principles to students of all majors"
				},
				"Innovative Design": {
					"img": "innod.jpg",
					"url": "http://innovativedesign.club",
					"descrip": "I'm a graphic designer at Innovative design, a student-run creative agency at UC Berkeley, where I do various design work for off-campus clients using my favorite Adobe Creative Cloud tools!"
				}
	}

	// ACTIVITIES
	const start = task["Google"];

	/** Shortens length of string to given character length and adds ellipses **/
	let shorten = function(str, char) {
		return str.substring(0, char - 3) + '... '
	} 

	/** Creates DOM structure for mobile responsiveness **/
	let calculateActivities = function() {
		if ($(window).width() > 900) {
			$("#mobile-activities").hide();
			$("#together").show();
			if (!$("#tasks").text()) { // populate with tasks.
				Object.keys(task).forEach(function(tsk) {
					let t = task[tsk]
					$("#tasks").append('<a href="' + t.url + '" target="_blank">' + tsk + '</a>');
				})
			}
		} else {
			$("#together").hide();
			$("#mobile-activities").show()
			if (!$("#mobile-activities").text()) {
				Object.keys(task).forEach(function(tsk) {
					let t = task[tsk]
					let descrip = shorten(t.descrip, 85);	
					$("#mobile-activities").append('<div class="activity-card"><a href="' + t.url + '" class="card-title">' + tsk + '</a><div class="card-description short">' + descrip + '</div><a class="read-more">read more</a></div>');
				})
			}
		}
	}

	calculateActivities();

	$(window).resize(function() {
		calculateActivities();
	})

	$(".read-more").click(function() {
		let $parent = $(this).prev()
		let title = $parent.prev('.card-title').text()
		let fullText = task[title].descrip
		if ($parent.hasClass("short")) {
			$parent.removeClass("short");
			$parent.text(fullText);
			$(this).text("hide");
		} else {
			$parent.addClass("short");
			$parent.text(shorten(fullText, 85));
			$(this).text("read more");
		}
	})


	$("#background-img img").attr("src", "assets/img/" + start.img);
	$("#description p").text(start.descrip);
	$("#description").show()

	// Hovering
	$("#tasks > a").hover(function() {
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
	let oldText;
	$(".coming-soon").hover(function() {
		oldText = $(this).text();
		$(this).text(oldText + " (Coming Soon!)");
	}, function() {
		$(this).text(oldText);
	})

	// Waypoints
	$("#activities").waypoint(function() {
		$("#together").css("opacity", 1);
		$("#mobile-activities").css("opacity", 1)
		$("#tasks > a").each(function(index, elem) {
			setTimeout(function() {
				$(elem).css("opacity", 1);
			}, 100 + 250 * index);
		})
		setTimeout(function() {
			$("#description > p").css("opacity", 1);
		}, 1400);
	})

	$("#portfolio").waypoint(function() {
		$(".card-1").css("opacity", 1);
		$(".card-1 li").each(function(index, elem) {
			setTimeout(function() {
				$(elem).css("opacity", 1);
			}, 300 * (index % 3))
		});
		setTimeout(function() {
			$(".card-2").css("opacity", 1);
			$(".card-2 li").each(function(index, elem) {
				setTimeout(function() {
					$(elem).css("opacity", 1);
				}, 300 * (index % 3))
			});
		}, 700)
	})

	$("#for-waypoints").waypoint(function() {
		$("#background-fill").css("height", "100%");
		setTimeout(function() {
			$("#contact .name, #contact a, #contact p").css("opacity", 1);
		}, 1200)
	})

	// Scrolllll

	 // This is a functions that scrolls to #{blah}link
	let goToByScroll = function(id) {
	    // Remove "link" from the ID
	    id = id.replace("-link", "");

	    // Scroll
	    $('html,body').animate({
	        scrollTop: $("#"+id).offset().top + 20},
	        'slow');
	}

	$("#nav > a").click(function(e) { 
	      // Prevent a page reload when a link is pressed
	    e.preventDefault(); 
	      // Call the scroll function
	    goToByScroll(this.id);           
	});
});