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
		{
			title: "THIRD Page",
			imageSrc: "assets/img/donut2.jpg",
			description: "This is a donut2 ahahaha"
		}
	]

	let currIndex = null;

	changeContent();
	$(window).scroll(function() {
		changeContent();
	})


	function changeContent() {
		currPosition = $(window).scrollTop();
		let percentageOfStroke = 1 - currPosition / WINDOW_HEIGHT;
		let newOffset = TOTAL_OFFSET * percentageOfStroke;
		$("#circle").attr("stroke-dashoffset", newOffset + "px");

		prevIndex = currIndex;
		currIndex = Math.min(Math.max(-1 * Math.floor(percentageOfStroke), 0), NUM_SECTIONS - 1);
		console.log(currIndex)

		if (prevIndex != currIndex) {
			$("#text").removeClass("move-up")
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