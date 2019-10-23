window.addEventListener("load", myInit, true); 

function myInit(){
	getCurrentDate();
	getCurrentTime();
	calculateAge();
}

//Calculates my age and displays it in an element with id myAge:
function calculateAge() {
	var bd = new Date("05/23/1992");
    var difference = Date.now() - bd.getTime();
    var ageDate = new Date(difference);
	document.getElementById("myAge").innerHTML = Math.abs(ageDate.getUTCFullYear() - 1970) + "v. ";
}

// Gets the current date and displays it in an element with id currentDate:
function getCurrentDate() {
	var date = new Date();
	var day, month, year;
	var weekdays = ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];
	
	
	if(date.getDate() < 10) {
		day = "0" + date.getDate();
	}
	else day = date.getDate();
	
	if(date.getMonth() < 9) {
		month = "0" + (date.getMonth() + 1);
	}
	else month = (date.getMonth() + 1);
	
	document.getElementById("currentDate").innerHTML = weekdays[date.getDay()] + " " + day + "." + month + "." + date.getUTCFullYear();
}

// Gets the current time and displays it in an element with id currentTime:
function getCurrentTime() {
	var date = new Date();
	var hours, minutes, seconds;
	
	if(date.getHours() < 10) {
		hours = "0" + date.getHours();
	}
	else hours = date.getHours();
	
	if(date.getMinutes() < 10) {
		minutes = "0" + date.getMinutes();
	}
	else minutes = date.getMinutes();
	
	if(date.getSeconds() < 10) {
		seconds = "0" + date.getSeconds();
	}
	else seconds = date.getSeconds();
	
	document.getElementById("currentTime").innerHTML = hours + ":" + minutes + ":" + seconds;
	setTimeout(getCurrentTime, 1000); // function call is repeated every second
}