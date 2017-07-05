(function(){
	"use strict";

	document.querySelector( "#navToggle" ).addEventListener( "click", function() {
  		this.classList.toggle( "active" );
	});

	var content = document.getElementById("menuContent");
	var button = document.getElementById("navToggle");

	button.onclick = function(e) {
	e.preventDefault()
		if(content.className == "open"){
			content.className = "";
		} else {
			content.className = "open";
		}

	};

})();
