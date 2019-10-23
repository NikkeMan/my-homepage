var currentFloor = 1, selectedFloor = 1, floorDifference;
var elevatorIsRunning = false;
var infoTextTimer, elevatorTimer;

var floors = document.getElementById("floorDisplay").getElementsByTagName("li");

function changeFloor(val) {
	if(!elevatorIsRunning) {
		selectedFloor = parseInt(val);
		document.getElementById("infoText").innerHTML =  "Valitsit kerroksen: " + selectedFloor;
		infoTextTimeout();
	}
}

function startElevator() {
	//Check if already at same floor:
	if (currentFloor == selectedFloor) {
		clearTimeout(infoTextTimer);
		document.getElementById("infoText").innerHTML =  "Olet jo samassa kerroksessa!";
		infoTextTimeout();
	}
	//Check if elevator is already running:
	else if (elevatorIsRunning) {
		//Elevator already running:
		clearTimeout(infoTextTimer);
		document.getElementById("infoText").innerHTML =  "Hissi on jo käynnissä!";
		infoTextTimeout();
	}
	else {
		//Start elevator:
		document.getElementById("container").style.backgroundColor = "yellow";
		document.getElementById("container").style.animationName = "elevator-moving";
		document.getElementById("startButton").disabled = true;
		document.getElementById("startButton").className = "button-disabled";
		setRadioButtons(true);
		clearTimeout(infoTextTimer);
		document.getElementById("infoText").innerHTML =  "Siirrytään kerrokseen " + selectedFloor + "...";
		elevatorIsRunning = true;
		floorDifference = Math.abs(currentFloor - selectedFloor);
		
		switch (selectedFloor) {
			case 1:
				goToFloor(1);
				break;
			case 2:
				goToFloor(2);
				break;
			case 3:
				goToFloor(3);
				break;
			case 4:
				goToFloor(4);
				break;
			case 5:
				goToFloor(5);
				break;
			case 6:
				goToFloor(6);
				break;
			case 7:
				goToFloor(7);
				break;
			case 8:
				goToFloor(8);
		}
	}
}

//Timeout function for elevator:
function goToFloor(floorNumber) {
	elevatorTimer = setInterval(function() {
		moveElevator();
	}, 1000);
}

function moveElevator() {
	floors[currentFloor - 1].className = "";
	
	if(currentFloor < selectedFloor) {
		//elevator is moving up:
		currentFloor++;
		floors[currentFloor - 1].className = "active";
	}
	else if (currentFloor > selectedFloor) {
		//elevator is moving down:
		currentFloor--;
		floors[currentFloor - 1].className = "active";
	}
	
	document.getElementById("currentFloor").innerHTML = currentFloor;
	
	if(currentFloor == selectedFloor) {
		elevatorArrived();
	}
}

//What happens when the elevator arrives to the selected floor:
function elevatorArrived() {
	clearTimeout(elevatorTimer);
	clearTimeout(infoTextTimer);
	setRadioButtons(false);
	document.getElementById("currentFloor").innerHTML = selectedFloor;
	document.getElementById("container").style.backgroundColor = "green";
	document.getElementById("container").style.animationName = "";
	document.getElementById("startButton").disabled = false;
	document.getElementById("startButton").className = "";
	document.getElementById("infoText").innerHTML =  "Hissi on perillä!";
	infoTextTimeout();
	currentFloor = selectedFloor;
	elevatorIsRunning = false;
}

//Reset values to original values:
function resetElevator() {
	clearTimeout(infoTextTimer);
	clearTimeout(elevatorTimer);
	setRadioButtons(false);
	document.getElementById("currentFloor").innerHTML = "1";
	document.getElementById("container").style.backgroundColor = "lightgray";
	document.getElementById("container").style.animationName = "";
	document.getElementById("startButton").disabled = false;
	document.getElementById("startButton").className = "";
	document.getElementById("infoText").innerHTML =  "Hissi resetoitu!";
	infoTextTimeout();
	floors[currentFloor - 1].className = "";
	floors[0].className = "active";
	currentFloor = 1;
	selectedFloor = 1;
	elevatorIsRunning = false;
}

//Timeout function for infoText:
function infoTextTimeout() {
	clearTimeout(infoTextTimer);
	infoTextTimer = setTimeout(function() {
			clearInfoText();
		}, 3000);
}

//Clears infoText:
function clearInfoText() {
	document.getElementById("infoText").innerHTML =  "";
	if(!elevatorIsRunning) {
		document.getElementById("container").style.backgroundColor = "lightgray";
	}
}

//Changes the disabled attribute and removes the checked attribute:
function setRadioButtons(val) {
	var radio = document.getElementsByName("elevator");
	for(i = 0 ; i < radio.length; i++) {
		radio[i].disabled = val;
		radio[i].checked = false;
	}
}