var main = function() {
	
	$(document).keypress(function(event) {     /* Push the body and the nav over by 285px over */
		
		if(event.which === 115) {
	
			$('.menu').animate({
			top: "-16px"
			}, 200);

			$('body').animate({
			top: "0px"
			}, 200);
		};

    if(event.which === 099) {
			$('.menu').animate({
			  top: "-200px"
			}, 200);

			$('body').animate({
			  top: "0px"
			}, 200);
		};
	});
}


function myFunction() {
    var inpObj= document.getElementById("id1");
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
} 

$(document).ready(main);
