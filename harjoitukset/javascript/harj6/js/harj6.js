var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");
var para3 = document.getElementById("para3");
var para4 = document.getElementById("para4");
var para4_2 = document.getElementById("para4_2");
var para5 = document.getElementById("para5");
var para6 = document.getElementById("para6");
var para7 = document.getElementById("para7");
var para7_2 = document.getElementById("para7_2");

//harj 1:
for(i = 1; i < 8 ; i++) {
	para1.innerHTML += i + " ";
}

//harj 2:
for(i = 1; i < 8 ; i++) {
	para2.innerHTML += i + "<br>";
}

//harj 3:
for(i = 7; i > 2 ; i--) {
	para3.innerHTML += i + "<br>";
}

//harj 4:
for(i = 1; i < 13 ; i++) {
	para4.innerHTML += i + " ";
	if(i == 4 || i== 8) {
		para4.innerHTML += "<br>";
	}	
}

//harj 4-2:
for(j = 0; j < 3; j++) {
	for (i = 1; i < 5 ; i++) {
		para4_2.innerHTML += (i + j * 4) + " ";
	}
	para4_2.innerHTML += "<br>";
}

//harj 5:
for(j = 0; j < 2; j++) {
	for (i = 1; i <= 5 ; i++) {
		para5.innerHTML += ((i + j * 5) * 2) + " ";
	}
	para5.innerHTML += "<br>";
}

//harj 6:
for(i = 1; i <= 10 ; i++) {
	para6.innerHTML += i + " * " + "5 = " + (i * 5) + "<br>";
}

//harj 7:
for(i = 1, j = 2; i < 50; i += 2, j += 2) {
	para7.innerHTML += "<span class='bold'>" + i + " " + "</span>";
	para7.innerHTML += "<span class='red'>" + j + " " + "</span>";
	
	if((j%10) == 0) {
		para7.innerHTML += "<br>";
	}
}

//harj 7-2:
for(k = 0; k < 5; k++) {
	for (i = 1, j = 2; i < 10; i += 2, j += 2) {
		para7_2.innerHTML += "<span class='bold'>" + (i + (k * 10)) + " " + "</span>";
		para7_2.innerHTML += "<span class='red'>" + (j + (k * 10)) + " " + "</span>";
	}
	para7_2.innerHTML += "<br>";	
}