var container = document.getElementById("container");
var container2 = document.getElementById("container2");
var htmlText;

var headers = ["Etunimi", "Sukunimi", "Puhelinnumero"]; 
var person1 = ["Aku", "Ankka", "012 345 6789"];
var person2 = ["Mikki", "Hiiri", "010 101 1010"];
var person3 = ["Hessu", "Hopo", "999 999 9999"];

var firstNames = ["Aku", "Mikki", "Hessu"];
var lastNames = ["Ankka", "Hiiri", "Hopo"]; 
var phoneNumbers = ["012 345 6789", "010 101 1010", "999 999 9999"];

var data = [
	["Etunimi", "Sukunimi", "Puhelinnumero"],
	["Aku", "Ankka", "012 345 6789"],
	["Mikki", "Hiiri", "010 101 1010"],
	["Hessu", "Hopo", "999 999 9999"]
];

var person1Obj = {firstName: "Aku", lastName:"Ankka", phoneNumber:"012 345 6789"};
var person2Obj = {firstName: "Mikki", lastName:"Hiiri", phoneNumber:"010 101 1010"};
var person3Obj = {firstName: "Hessu", lastName:"Hopo", phoneNumber:"999 999 9999"};



createTable();
createTableAlt();


//Using headers, person1, person2, person3:
function createTable() {
	//Create table:
	htmlText = "<table><tr>";
	
	for (var i = 0; i < headers.length; i++) {
		htmlText += "<th>" + headers[i] + "</th>";
	}
	htmlText += "</tr>";
	
	for (var i = 0; i < headers.length; i++) {
		if((i%2) == 0){
			htmlText += "<tr class='light'>";
		}
		else {
			htmlText += "<tr class='dark'>";
		}
		
		for (var j = 0; j < headers.length; j++) {
			switch(i) {
				case 0:	
					htmlText += "<td>" + person1[j] + "</td>";
					break;
				case 1:	
					htmlText += "<td>" + person2[j] + "</td>";
					break;
				case 2:	
					htmlText += "<td>" + person3[j] + "</td>";
					break;
			}
		}
		htmlText += "</tr>";
	}

	
	//Close table:
	htmlText += "</table>";

	console.log("htmlText: " + htmlText);
	//Insert htmlText to container:
	container.innerHTML = htmlText;
}

//Using headers, firstNames, lastNames, phoneNumbers;
function createTableAlt() {
	//Create table:
	htmlText = "<table>";

	//Headers:
	htmlText += "<tr>";
	for (var i = 0; i < headers.length; i++) {
		htmlText += "<th>" + headers[i] + "</th>";
	}
	htmlText += "</tr>";

	//People:
	for (var i = 0; i < headers.length; i++) {
		if((i%2) == 0){
			htmlText += "<tr class='light'>";
		}
		else {
			htmlText += "<tr class='dark'>";
		}
		
		htmlText += "<td>" + firstNames[i] + "</td>";
		htmlText += "<td>" + lastNames[i] + "</td>";
		htmlText += "<td>" + phoneNumbers[i] + "</td>";
		htmlText += "</tr>";
	}

	//Close table:
	htmlText += "</table>";

	console.log("htmlText: " + htmlText);
	//Insert htmlText to container:
	container2.innerHTML = htmlText;
}


// //All in one for-loop:
// for (var i = 0; i < headers.length; i++) {
	// row1.innerHTML += "<th>" + headers[i] + "</th>";
	// row2.innerHTML += "<td class='light'>" + person1[i] + "</td>";
	// row3.innerHTML += "<td class='dark'>" + person2[i] + "</td>";
	// row4.innerHTML += "<td class='light'>" + person3[i] + "</td>";
// }

//All rows in separate for-loops:
// for (var i = 0; i < headers.length; i++) {
	// row1.innerHTML += "<th class='header'>" + headers[i] + "</th>";
// }
// for (var i = 0; i < person1.length; i++) {
	// row2.innerHTML += "<td class='light'>" + person1[i] + "</td>";
// }
// for (var i = 0; i < person2.length; i++) {
	// row3.innerHTML += "<td class='dark'>" + person2[i] + "</td>";
// }
// for (var i = 0; i < person3.length; i++) {
	// row4.innerHTML += "<td class='light'>" + person3[i] + "</td>";
// }

// for(var i = 0, j = 0; i < data.length; i++) {
	// container.innerHTML += "<table>";
	// container.innerHTML += "<tr>";
	// container.innerHTML += "</tr>";
	// container.innerHTML += "<tr>";
	// container.innerHTML += "</tr>";
	// container.innerHTML += "<tr>";
	// container.innerHTML += "</tr>";
	// container.innerHTML += "<tr>";
	// container.innerHTML += "</tr>";
	// container.innerHTML += "</table>";
// }
