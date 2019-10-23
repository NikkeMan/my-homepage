//$(function() { // alternative
$(document).ready(function() {
	//myDiv stuff:
	
	$("#myText").mouseenter(function() {
		$("#myText").text("mouse enter!");
	});
	
	$("#myText").mouseleave(function() {
		$("#myText").text("mouse leave...");
	});
	
	$("#myBtn").click(function() {
		$("#myText").css("color", "green");
	});
	
	$("#btnHide").click(function() {
		$("#myText").hide(1000);
	});
	
	$("#btnShow").click(function() {
		$("#myText").show(1000);
	});
	
	$("#btnBoth").click(function() {
		$("#myText").toggle();
	});
	
	$("#btnAddImg").click(function() {
		$("#myImg").attr("src", "img/tirppa.jpg");
	});
	
	$("#btnRmvImg").click(function() {
		$("#myImg").attr("src", "");
	});
	
	//myDiv2 stuff:
	
	$("li").on({
		mouseenter: function(){
			$(this).css("background-color", "rgb(230, 230, 230)");
		},
		mouseleave: function(){
			$(this).css("background-color", "lightgray");
		},
		click: function(){
			displayPrice(this);
		}
	});
});

function displayPrice(clickedItem) {
	if($("#parkingList").find("#liPrice").length == 0){
		addNewListItem(clickedItem);
	}
	else {
		//remove previous list item and add new:
		$("#liPrice").animate({
			height: 'toggle'
		},
			function() {
				$("#liPrice").remove();
				addNewListItem(clickedItem);
			}
		);
	}
}

function addNewListItem(clickedItem) {
	var afterText = "<li id='liPrice' style='display:none;'>Pysäköintimaksu: ";
	
	switch(clickedItem.innerHTML) {
		case "1 tunti":
			afterText += "2€ !";
			break;
		case "3 tuntia":
			afterText += "5€ !";
			break;
		case "10 tuntia":
			afterText += "15€ !";
			break;
		case "1 vuorokausi":
			afterText += "50€ !";
			break;
		case "1 viikko":
			afterText += "100€ !";
			break;
		default:
			afterText += "ei määritelty!";
	}
	
	afterText += "</li>";
	$(clickedItem).after(afterText);
	$("#liPrice").animate({
			height: 'toggle'
	});
}