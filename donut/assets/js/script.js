$(document).ready(function() {
	const SECTIONS = [
		{
			title: "Hi, I'm Emily",
			imageSrc: "assets/img/me.jpg",
			description: "I'm a computer science and cognitive science student at UC Berkeley, fascinated by how technology affects people and creates experiences.\n Here are some things I've done."
		},
		{
			title: "Google",
			imageSrc: "assets/img/google.jpg",
			description: "As an Engineering Practicum intern at Google, I worked on the front end of internal data visualization features, using JavaScript, d3, AngularJs, and CSS."
		},
		{
			title: "Re-plate Marketplace",
			imageSrc: "assets/img/replate.jpg",
			description: "I worked in a team of five to develop a React Native and Rails application for Re-plate, a nonprofit that connects businesses with surplus food and those in need."
		},
		{
			title: "Derailed",
			imageSrc: "assets/img/derailed.png",
			description: "Derailed is a Rails education portal that allows users and administrations to manage assignment submission and grading, classroom resources, and attendance."
		},
		{
			title: "Where We Cry",
			imageSrc: "assets/img/where-we-cry.jpg",
			description: "For The Daily Californian's 2017 Mental Health special issue, I created a map that visualizes over 600 submissions of where and why people cry on campus."
		},
		{
			title: "Cal Hacks: this is IT",
			imageSrc: "assets/img/this-is-it.jpg",
			description: "A website about this is IT, a three part speaker-workshop series on diverse perspectives in entrepreneurship and technology. Animations created with CSS and SVGs"
		},
		{
			title: "Nutrition Label Redesign",
			imageSrc: "assets/img/nutrition.jpeg",
			description: "I redesigned the nutrition label, representing the information visually to increase comprehensiveness of what nutrients were beneficial or detrimental."
		},
		{
			title: "Web Design DeCal",
			imageSrc: "assets/img/wdd.jpg",
			description: "As the head instructor of the Web Design DeCal, I've taught over 250 beginners how to design and code static websites."
		},
		{
			title: "Blueprint",
			imageSrc: "assets/img/bp.png",
			description: "Every semester, I develop for nonprofits through Blueprint, a student organization that focuses on technology for social good."
		},
		{
			title: "Cal Hacks",
			imageSrc: "assets/img/ch.png",
			description: "I help organize the largest collegiate hackathon, Cal Hacks, with an emphasis on diversity initiatives to break entry barriers to hackathon culture."
		},
		// {
		// 	title: "Data Journalism @ The Daily Cal",
		// 	imageSrc: "assets/img/ch.png",
		// 	description: "I help organize the largest collegiate hackathon, Cal Hacks, with an emphasis on diversity initiatives to break entry barriers to hackathon culture."
		// },
		// {
		// 	title: "Innovative Design",
		// 	imageSrc: "assets/img/ch.png",
		// 	description: "I help organize the largest collegiate hackathon, Cal Hacks, with an emphasis on diversity initiatives to break entry barriers to hackathon culture."
		// },
	]

	const WINDOW_HEIGHT = $(window).height();
	const DOCUMENT_HEIGHT = $(document).height();
	const NUM_SECTIONS = SECTIONS.length;
	const TOTAL_OFFSET = 1300;
	const delay = 300;
	const navItems = $(".nav-item");

	let lastClick = 0;
	let changeContentEnabled = true;
	let currentOffset = 0;
	let currIndex = null;

	$("body").css("height", (NUM_SECTIONS + 1) * 100 + "vh");
	changeContent();
	$(window).scroll(function() {
		if (changeContentEnabled) {
			changeContent();
		}
	})

	$(".nav-item").click(function() {
		changeContentEnabled = false;
		let navIndex = navItems.index(this);

		$("#circle").css("stroke-dashoffset", 0);
		$("#circle").animate({"stroke-dashoffset": -1300 + "px"}, 1000);

		if (mod(navIndex, 2) == 1) {
			// automatically calls changeContent
			$(window).scrollTop((navIndex + 1) * WINDOW_HEIGHT);
		} else {
			// automatically calls changeContent
			$(window).scrollTop((navIndex) * WINDOW_HEIGHT + 1);
		}

		changeContentEnabled = true;
	})

	$(".nav-item").hover(function() {
		let navIndex = navItems.index(this);
		$(this).prepend("<div class='nav-item-label'>" + SECTIONS[navIndex].title + "</div>");
	}, function() {
		$(this).find("div").remove();
	})

	function changeContent(i=null) {
		currPosition = $(window).scrollTop();
		let percentageOfStroke = 1 - currPosition / WINDOW_HEIGHT;
		console.log(percentageOfStroke);
		currentOffset = TOTAL_OFFSET * percentageOfStroke;
		$("#circle").css("stroke-dashoffset", currentOffset + "px");

		prevIndex = currIndex;
		
		if (i != null) {
			currIndex = i;
		} else {
			currIndex = Math.min(Math.max(-1 * Math.floor(percentageOfStroke), 0), NUM_SECTIONS - 1);
		}

		if (prevIndex != currIndex) {
			// $(".nav-item:eq(" + prevIndex + ")").removeClass("selected-nav").find("div").remove();
			// $(".nav-item:eq(" + currIndex + ")").addClass("selected-nav").prepend("<div class='nav-item-label'>" + SECTIONS[currIndex].title + "</div>");
			$(".nav-item:eq(" + prevIndex + ")").removeClass("selected-nav");
			$(".nav-item:eq(" + currIndex + ")").addClass("selected-nav");

			if (lastClick >= (Date.now() - delay)) {
			    return;
			}

			lastClick = Date.now();

			$("#text").removeClass("move-up");
			sectionInfo = SECTIONS[currIndex];
			$("#text *").stop().fadeOut(400, function() {
				$("#title").text(sectionInfo.title);
				$("#description").text(sectionInfo.description);
				$("#text").addClass("move-up");
			}).fadeIn(400);

			$("#donut-image").stop().fadeOut('fast', function() {
				$("#donut-image").attr("src", sectionInfo.imageSrc);
			}).fadeIn('fast');
		}
	}


	function mod(n, m) {
	  return ((n % m) + m) % m;
	}

});