function pizzaTime() {
	var info = document.getElementById("infoText");
	var sizes = document.getElementsByName("size");
	var doughs = document.getElementsByName("dough");
	var fillings = document.getElementsByName("filling");
	var text = "";
	var sizeSelected = false, doughSelected = false, fillingSelected = false;

	for(i = 0; i < sizes.length; i++) {
		if(sizes[i].checked) {
			sizeSelected = true;
			text = "Valittu koko: " + sizes[i].value + "<br>";
			break;
		}
	}
	//If no size was selected:
	if(!sizeSelected) {
		info.innerHTML = "Valitse koko.";
		return false;
	}
	
	
	for(i = 0; i < doughs.length; i++) {
		if(doughs[i].checked) {
			doughSelected = true;
			text += "Valittu pohja: " + doughs[i].value + "<br>";
			break;
		}
	}
	
	if(!doughSelected) {
		info.innerHTML = "Valitse pohja.";
		return false;
	}
	
	text += "Valitut täytteet: ";
	for(i = 0; i < fillings.length; i++) {
		if(fillings[i].checked) {
			fillingSelected = true;
			text += fillings[i].value + ", ";
		}
	}
	text += "<br>";
	
	
	if(!fillingSelected) {
		info.innerHTML = "Valitse vähintään yksi täyte.";
		return false;
	}
	else {
		//Success
		info.innerHTML = text;
		return false;
	}
	

}