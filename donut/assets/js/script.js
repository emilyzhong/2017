$(document).ready(function() {
	const WINDOW_HEIGHT = $(window).height();
	const DOCUMENT_HEIGHT = $(document).height();
	const NUM_SECTIONS = Math.floor(DOCUMENT_HEIGHT / WINDOW_HEIGHT) - 1;
	const TOTAL_OFFSET = 1300;

	const SECTIONS = [
		{
			title: "Hi, I'm Emily",
			imageSrc: "assets/img/me.jpg",
			description: "I'm a sophomore at UC Berkeley studying computer science and cognitive science, fascinated by how technology affects people and creates experiences."
		},
		{
			title: "Second Page",
			imageSrc: "assets/img/donut.jpg",
			description: "This is a donut ahahaha"
		},
		{}
	]

	let currPosition = $(window).scrollTop();
	let currIndex = Math.floor(currPosition / WINDOW_HEIGHT);

	let sectionInfo = SECTIONS[currIndex];

	$("#title").text(sectionInfo.title);
	$("#description").text(sectionInfo.description);
	$("#donut-image").attr("src", sectionInfo.imageSrc);

	let canChange = false;
	let prevIndex = currIndex;
	$(window).scroll(function() {
		currPosition = $(window).scrollTop();
		let percentageOfStroke = 1 - currPosition / WINDOW_HEIGHT;
		let newOffset = TOTAL_OFFSET * percentageOfStroke;
		$("#circle").attr("stroke-dashoffset", newOffset + "px");
		let modInfo = mod(newOffset, TOTAL_OFFSET);

		if (modInfo <= 50 && canChange) {
			prevIndex = currIndex;
			currIndex = Math.min(currIndex + 1, NUM_SECTIONS - 1);

			if (prevIndex != currIndex) {
				changeText(currIndex, canChange) 
			}
			canChange = false;
		
		} else if (modInfo >= TOTAL_OFFSET - 50 && canChange) {
			prevIndex = currIndex;
			currIndex = Math.max(0, currIndex - 1);

			if (prevIndex != currIndex) {
				changeText(currIndex, canChange) 
			}
			canChange = false;
		} 

		if (modInfo > 50 && modInfo < TOTAL_OFFSET - 50) {
			canChange = true;
		}
	})

	function changeText(i, active=true) {
		if (active) {
			$("#text").removeClass("move-up")
			sectionInfo = SECTIONS[currIndex];
			$("#text *").fadeOut(400, function() {
				$("#title").text(sectionInfo.title);
				$("#description").text(sectionInfo.description);
				$("#text").addClass("move-up");
			}).fadeIn(400);

			$("#donut-image").fadeOut('fast', function() {
				$("#donut-image").attr("src", sectionInfo.imageSrc);
			}).fadeIn('fast');
		}
	}


	function mod(n, m) {
	  return ((n % m) + m) % m;
	}

});