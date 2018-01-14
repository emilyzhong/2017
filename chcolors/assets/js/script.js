$(document).ready(function() {

	var color1 = "#97d0ed";
	var color2 = "#3d9bc2";
	var color3 = "#80c6dd";
	var color4 = "#c4e8f1";

	var fills = {} // key = hex code, value = list of elements
	var strokes = {}

	var allElements = document.getElementsByTagName("svg")[0]
									.getElementsByTagName("*");

	var hexMappings = {
		"#97d0ed": 1,
		"#92cfe7": 1,
		"#98cfec": 1,
		"#3d9bc2": 2,
		"#80c6dd": 3,
		"#3c9bc2": 2,
		"#3b9bc2": 2,
		"#3f9bc1": 2,
		"#c4e8f1": 4
	}

	$("#generate").click(function() {
		if($("#color1").val()) {
			color1 = "#" + $("#color1").val();
		}

		if($("#color2").val()) {
			color2 = "#" + $("#color2").val();
		}

		if($("#color3").val()) {
			color3 = "#" + $("#color3").val();
		}

		if($("#color4").val()) {
			color4 = "#" + $("#color4").val();
		}

		changeColors();
	})

	$("#reset").click(function() {
		resetColors();
	});

	var changeColors = function() {

		Object.keys(fills).forEach(function(hex) {
			if (hexMappings[hex]) {
				let newColor = eval("color" + hexMappings[hex]);
				let fillElements = fills[hex];
				if (fillElements) {
					fillElements.forEach(function(element) {
						element.setAttribute("fill", newColor)
					});
				}

				let strokeElements = strokes[hex];
				if (strokeElements) {
					strokeElements.forEach(function(element) {
						element.setAttribute("stroke", newColor)
					});
				}
			}
		})
	}	

	var setUp = function() {
		for (var i = 0; i < allElements.length; i++) {
		    var element = allElements[i];

		    let fill = element.getAttribute("fill");
		    let stroke = element.getAttribute("stroke")

		    if (fills[fill]) {
		    	fills[fill].push(element)
		    } else {
		    	fills[fill] = [element];
		    }


		    if (strokes[stroke]) {
		    	strokes[stroke].push(element);
		    } else {
		    	strokes[stroke] = [element];
		    }

		    $(element).addClass(fill);
		    $(element).addClass(stroke);
		}
	}

	var resetColors = function() {
		Object.keys(fills).forEach(function(hex) {
			fills[hex].forEach(function(element) {
				element.setAttribute("fill", hex)
			})
		})

		Object.keys(strokes).forEach(function(hex) {
			strokes[hex].forEach(function(element) {
				element.setAttribute("stroke", hex)
			})
		})
	}

	setUp();	
});