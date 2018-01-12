$(document).ready(function() {
	
	var color1 = "#97d0ed";
	var color2 = "#3d9bc2";
	var color3 = "#80c6dd";
	var color4 = "#3c9bc2";
	var color5 = "#c4e8f1";

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

		if($("#color5").val()) {
			color5 = "#" + $("#color5").val();
		}

		changeColors();
	})

	var changeColors = function() {
		var allElements = document.getElementsByTagName("svg")[0]
									.getElementsByTagName("*");
		for(var i = 0; i < allElements.length; i++) {
		    var element = allElements[i];

		    let fill = element.getAttribute("fill");
		    let stroke = element.getAttribute("stroke")

		    // more similar colors sorry
		    if (fill === "#97d0ed" || fill === "#92cfe7" || fill === "#98cfec") {
		        element.setAttribute("fill", color1);
		    } else if (stroke === "#97d0ed" || stroke === "#92cfe7" || stroke === "#98cfec") {
		    	element.setAttribute("stroke", color1);
		    } 

		    if (fill === "#3d9bc2" ) {
		        element.setAttribute("fill", color2);
		    } else if (stroke === "#3d9bc2") {
		    	element.setAttribute("stroke", color2);
		    } 

		    if (fill === "#80c6dd") {
		        element.setAttribute("fill", color3);
		    } else if (stroke === "#80c6dd") {
		    	element.setAttribute("stroke", color3);
		    }

		    // very similar colors all got thrown in here im so sorry
		    if (fill === "#3c9bc2" || fill === "#3b9bc2" || fill === "#3f9bc1") {
		        element.setAttribute("fill", color4);
		    } else if (stroke === "#3c9bc2" || stroke === "#3b9bc2" || stroke === "#3f9bc1") {
		    	element.setAttribute("stroke", color4);
		    }

		    if (fill === "#c4e8f1") {
		        element.setAttribute("fill", color5);
		    } else if (stroke === "#c4e8f1") {
		    	element.setAttribute("stroke", color5);
		    }     
		     
		}
	}

});