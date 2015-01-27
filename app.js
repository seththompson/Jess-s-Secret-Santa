var main = function() {
	
	$(document).keypress(function(event) {     /* Push the body and the nav over by 285px over */
		
		if(event.which === 115) {
	
			$('.menu').animate({
			top: "0px"
			}, 200);

			$('body').animate({
			top: "55px"
			}, 200);
		};
	});
	
	  
	$(document).keypress(function(event) {  /* Then push them back */
		if(event.which === 099) {
			$('.menu').animate({
			  top: "-55px"
			}, 200);

			$('body').animate({
			  top: "0px"
			}, 200);
		};
	});
	
	$(document).keypress(function(event) {  /* Then push them back */
		if(event.which === 104) {
			alert("Press 's' to Start & 'c' to Close");
		};
	});


};

$(document).ready(main);