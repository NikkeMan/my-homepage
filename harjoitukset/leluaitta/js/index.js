function changeActiveLink() {
	var activeElements = document.getElementsByClassName("active");
	activeElements[0].classList.remove("active");
	event.srcElement.classList.add("active");
}