$(document).ready(function() {
	setPersonalInfo();
});

function setPersonalInfo() {
	$(".personal-info").html(
	"<span id='myName'>Niko Leppänoro</span><br>" + 
	"<span id='myAddress'>Hartaantie 11 as 4</span><br>" +
	"<span id='myAddress2'>90500 Oulu</span><br>" + 
	"<span id='myEmail'>nikoleppanoro(at)outlook.com / s9leni02(at)students.osao.fi</span><br>" + 
	"<span id='myPhone'>+358 400845960</span><br>");
}