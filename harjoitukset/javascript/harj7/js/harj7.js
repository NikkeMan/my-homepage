var p1 = document.getElementById("para1");
var p2 = document.getElementById("para2");
var p3 = document.getElementById("para3");
var p4 = document.getElementById("para4");
var p5 = document.getElementById("para5");
var i;

//Harj 1:
i = 20;
while (i >= 10) {
	p1.innerHTML += i + " ";
	i--;
}

//Harj 2:
i = 20;
while (i > 10) {
	p2.innerHTML += i + "<br>";
	i--;
}

//Harj 3:
i = 1;
while (i <= 20) {
	p3.innerHTML += i + " ";
	
	if((i%5) == 0) {
		p3.innerHTML += "<br>";
	}
	i++;
}

//Harj 4:
i = 1;
while (i <= 10) {
	p4.innerHTML += i + " * 4 = " + (i * 4) + "<br>";
	i++;
}

//Harj 5:
j = 1;
while(j <= 5) {
	i = 1;
	while (i <= 10) {
		p5.innerHTML += i + " * " + j +" = " + (i * j) + "<br>";
		i++;
	}
	p5.innerHTML += "<br>";
	j++;
}