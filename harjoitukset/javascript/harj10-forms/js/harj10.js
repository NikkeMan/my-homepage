var info = document.getElementById("info");
var input = document.getElementById("textInput");
var submitBtn = document.getElementById("submitBtn");
var tArea = document.getElementById("textArea");
var bannedChars = "<>?";
var rExp = new RegExp("[" + bannedChars + "]", "g");

console.log(rExp);

function submitBtnFunction() {
	if (input.value == "") {
		submitBtn.setAttribute("disabled", true);
		submitBtn.setAttribute("class", "disabled");
	}
	else {
		submitBtn.removeAttribute("disabled");
		submitBtn.setAttribute("class", "enabled");
	}
}

function inputCheck() {
	tArea.value = input.value;
	
	var searchResult = input.value.match(rExp);
	console.log(searchResult);
	
	if(searchResult != null) {
		info.innerHTML = "Tekstistä löytyi kiellettyjä merkkejä! :(";
		
		info.innerHTML += "<br>Kielletyt merkit: " + searchResult;

		//Calculate banned chars?:
		// for(i = 0; i < bannedChars.length; i++) {
			// for(bannedChars[i] in searchResult) {
				
			// }
		// }
		
		// info.innerHTML += searchResult.filter
		
		info.style.color = "red";
		return false;
	}
	else {
		info.innerHTML = "Kaikki OK :)";
		info.style.color = "green";
		return false;
	}
}

