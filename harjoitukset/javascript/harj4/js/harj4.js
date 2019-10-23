var num1, num2;
var diceAreRolling = false;
var maxRolls = 10, currentRoll = 0;
var myVar;

function throwDice() {
	document.getElementById("winText").innerHTML = "";
	document.getElementById("winText").style.animationName = "";
	document.getElementById("diceImg1").style.animationName =  "roll";
	document.getElementById("diceImg2").style.animationName =  "roll";
	
	if(!diceAreRolling) {
		diceAreRolling = true;
		myVar = setInterval(function() {
			myFunction();
		}, 100);
	}
}

function myFunction() {
	console.log("RollCount: " + (currentRoll + 1));
	
	//Generate random numbers:
	num1 = Math.floor((Math.random() * 6) + 1);
	num2 = Math.floor((Math.random() * 6) + 1);
	
	//Display numbers:
	document.getElementById("num1Val").innerHTML = num1;
	document.getElementById("num2Val").innerHTML = num2;
	
	//Set images based on numbers:
	document.getElementById("diceImg1").src = setImage(num1);
	document.getElementById("diceImg2").src = setImage(num2);
	
	//Alternative way to set images:
	// document.getElementById("diceImg1").src = setImageAlt(num1);
	// document.getElementById("diceImg2").src = setImageAlt(num2);
	
	
	//Check if we are at the last roll:
	if(diceAreRolling) {
		//Increase roll count:
		currentRoll++;
		
		if(currentRoll == maxRolls) {
			clearInterval(myVar);
			
			//Reset values:
			diceAreRolling = false;
			currentRoll = 0;	
			document.getElementById("diceImg1").style.animationName =  "";
			document.getElementById("diceImg2").style.animationName =  "";
			
			//Check if we got a pair:
			if(num1 == num2) {
				document.getElementById("winText").innerHTML = "Onneksi olkoon, sait parin!";
				document.getElementById("container").style.animationName = "victory";
			}
		}
	}
}

//Set image based on generated value:
function setImage(diceValue) {
	switch(diceValue) {
		case 1:	
			return "img/dice-one.png";
		case 2:	
			return "img/dice-two.png";
		case 3:	
			return "img/dice-three.png";
		case 4:	
			return "img/dice-four.png";
		case 5:	
			return "img/dice-five.png";
		case 6:	
			return "img/dice-six.png";
		default:
			alert("Something went wrong...");
	}
}

function setImageAlt(diceValue) {
	if(diceValue == 1) {
		return "img/dice-one.png";
	}
	else if (diceValue == 2) {
		return "img/dice-two.png";
	}
	else if (diceValue == 3) {
		return "img/dice-three.png";
	}
	else if (diceValue == 4) {
		return "img/dice-four.png";
	}
	else if (diceValue == 5) {
		return "img/dice-five.png";
	}
	else if (diceValue == 6) {
		return "img/dice-six.png";
	}
}