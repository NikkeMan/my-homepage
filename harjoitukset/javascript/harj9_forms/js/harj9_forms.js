function formCheck() {
	var email = document.getElementById("inputEmail").value;
	var checkboxChecked = document.getElementById("inputTerms").checked;
	var infoText = document.getElementById("infoText");
	
	console.log("Email: " + email);
	
	if(email == "") {
		infoText.innerHTML = "Syötä ensin sähköpostiosoitteesi.";
		return false;
	}
	else if(checkboxChecked != true) {
		infoText.innerHTML = "Sinun on hyväksyttävä käyttöehdot ennen tilaamista.";
		return false;
	}
	
	else {
		infoText.innerHTML = "";
		alert("Tilaus hyväksytty!");
		return false;
	}
}

function formCheck2() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("emailAddress").value;
	var password = document.getElementById("password").value;
	var passwordRepeat = document.getElementById("passwordRepeat").value;
	var termsCheckbox = document.getElementById("inputTerms2").checked;	
	var infoText = document.getElementById("infoText2");
	
	var minPasswordLength = 8;
	var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var specialChars = "[!?+@#%&]";
	var specialCharFound = false;
	
	console.log("password: " + password);
	console.log("passwordRepeat: " + passwordRepeat);
	
	if(firstName == "" || lastName == "" || email == "" || password == "" || passwordRepeat == "") {
		infoText.innerHTML = "Täytä kaikki pakolliset kentät.";
		return false;
	}
	
	// Length check:
	if(password.length < minPasswordLength) {
		infoText.innerHTML = "Salasanan on oltava vähintään 8 merkkiä pitkä.";
		return false;
	}
	// Spacebar check:
	else if(password.indexOf(" ") != -1) {
		infoText.innerHTML = "Salasana ei saa sisältää välilyöntejä.";
		return false;
	}
	// Uppercase 1st letter check:
	else if(upperCaseChars.indexOf(password.charAt(0)) == -1) {
		infoText.innerHTML = "Salasanan on alettava isolla alkukirjaimella.";
		return false;
	}
	
	//Special character check:
	// for(i = 0; i < specialChars.length; i++) {
		// if(password.indexOf(specialChars.charAt(i)) != -1) {
			// specialCharFound = true;
		// }
	// }
	
	//Special character check with search:
	if(password.search(specialChars) != -1) {
		specialCharFound = true;
	}
	
	if(!specialCharFound) {
		infoText.innerHTML = "Salasanassa on oltava vähintään yksi erikoismerkki (!, ?, +, @, #, % tai &).";
		return false;
	}
	
	//Bad check:
	// if(password.indexOf("!") == -1 || password.indexOf("?") == -1 || password.indexOf("@") == -1 || password.indexOf("$") == -1) {
		// infoText.innerHTML = "Salasanassa on oltava vähintään yksi erikoismerkki (!, ?, @ tai $).";
		// return false;
	// }
	
	// Password repeat check:
	if(password != passwordRepeat) {
		infoText.innerHTML = "Salasanakentät eivät täsmää.";
		return false;
	}
	
	// Terms check:
	else if(!termsCheckbox) {
		infoText.innerHTML = "Hyväksy käyttöehdot.";
		return false;
	}
	
	//Success:
	else {
		infoText.innerHTML = "Great success!";
		infoText.style.color = "green";
		return false;
	}
}