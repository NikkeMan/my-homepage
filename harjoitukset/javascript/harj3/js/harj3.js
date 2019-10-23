function changeTemp() {
	var temperature;
	if(event.target.id == "myInput") {		
		temperature = parseFloat(document.getElementById("myInput").value);
		if(temperature > document.getElementById("myInput").max) {
			temperature = document.getElementById("myInput").max;
			document.getElementById("myInput").value = temperature;
		}
		else if(temperature < document.getElementById("myInput").min) {
			temperature = document.getElementById("myInput").min;
			document.getElementById("myInput").value = temperature;
		}
		document.getElementById("myRange").value = temperature;
	}
	
	else if (event.target.id == "myRange") {
		temperature = parseFloat(document.getElementById("myRange").value);
		document.getElementById("myInput").value = temperature;
	}
	
	//Change background color and text;
	if(temperature >= 0) {
		var color_r = 255;
		var color_g = 255 - (temperature * 2.55); 
		var color_b = 255 - (temperature * 2.55);
		document.getElementById("liquid").style.backgroundColor = "rgb(" + color_r + ", " + color_g + ", " + color_b + ")";
		document.getElementById("temp").innerHTML = "+" + temperature + " C&deg;";
	}
	else {
		var color_r = 255 - (-temperature * 2.55);
		var color_g = 255 - (-temperature * 2.55); 
		var color_b = 255;
		document.getElementById("liquid").style.backgroundColor = "rgb(" + color_r + ", " + color_g + ", " + color_b + ")";
		document.getElementById("temp").innerHTML = temperature + " C&deg;";
	}
	
	//set liquid height:
	console.log(parseFloat(temperature));
	document.getElementById("liquid").style.height = 150 + parseFloat(temperature) + "px";
}