var numbers = [], operators = [], index = 0;

function numberPress(numberPressed) {
	document.getElementById("inputHistory").value += numberPressed;
	
	if(numbers[index] == undefined) {
		numbers[index] = numberPressed;
	}
	else numbers[index] += numberPressed;
}

function clearInputs() {
	if(event.target.id == "input1" || event.target.id == "input2")	{
		document.getElementById("inputHistory").value = "";
	}
	else if(event.target.id == "clearBtn") {
		document.getElementById("input1").value = "";
		document.getElementById("input2").value = "";
		document.getElementById("inputHistory").value = "";
		document.getElementById("result").value = "";
	}
}

function plusButton() {
	if(document.getElementById("input1").value != "" && document.getElementById("input2").value != "") {
		var num1 = document.getElementById("input1").value;
		var num2 = document.getElementById("input2").value;
		var num3 = parseFloat(num1) + parseFloat(num2);
		document.getElementById("result").innerHTML = num3;
	}
	else {
		document.getElementById("inputHistory").value += "+";
		operators[index] = "+";
		index++;
	}
}

function minusButton() {
	if(document.getElementById("input1").value != "" && document.getElementById("input2").value != "") {
		var num1 = document.getElementById("input1").value;
		var num2 = document.getElementById("input2").value;
		var num3 = parseFloat(num1) - parseFloat(num2);
		document.getElementById("result").innerHTML = num3;
	}
	else {
		document.getElementById("inputHistory").value += "-";
		operators[index] = "-";
		index++;
	}
}

function multiplyButton() {
	if(document.getElementById("input1").value != "" && document.getElementById("input2").value != "") {
		var num1 = document.getElementById("input1").value;
		var num2 = document.getElementById("input2").value;
		var num3 = parseFloat(num1) * parseFloat(num2);
		document.getElementById("result").innerHTML = num3;
	}
	else {
		document.getElementById("inputHistory").value += "*";
		operators[index] = "*";
		index++;
	}
}

function divideButton() {
	if(document.getElementById("input1").value != "" && document.getElementById("input2").value != "") {
		var num1 = document.getElementById("input1").value;
		var num2 = document.getElementById("input2").value;
		var num3 = parseFloat(num1) / parseFloat(num2);
		document.getElementById("result").innerHTML = num3;
	}
	else {
		document.getElementById("inputHistory").value += "/";
		operators[index] = "/";
		index++;
	}
}

function doTheMath() {
	var inputHistory = document.getElementById("inputHistory").value;
	console.log("inputHistory: " + inputHistory);
	
	if(inputHistory != "") {
		var result = eval(inputHistory);
		
		document.getElementById("inputHistory").value = "";
		document.getElementById("result").innerHTML = result;
		
		numbers = [];
		operators = [];
		index = 0;
	}
}