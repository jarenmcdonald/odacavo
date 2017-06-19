(function(){
	"use strict";

	var content = document.getElementById("menuContent");
	var button = document.getElementById("hamburgerNav");

button.onclick = function(event) {
e.preventDefault()
	if(content.className == "open"){
		content.className = "";
	} else {
		content.className = "open";
	}

});
