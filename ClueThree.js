
function hide(){

var button;
	button = document.getElementById("Next");
	
    button.style.display = "none";
}



function myFunction() {
	var message, x, answer, button;
    message = document.getElementById("message");
	message.innerHTML = "";
	button = document.getElementById("Next");
    x = document.getElementById("clue").value;
	
    try { 
        x = Number(x);
		
        if(x == ""){
		
			$('input[type="text"]').focus(function() {
					$(this).addClass("focus");
			});
			
			button.style.display = "block";
			throw "is empty";
		}  
		
        if(isNaN(x)){
		$('input[type="text"]').focus(function() {
					$(this).removeClass("focus");
			});
			
				
			throw "is not a number";
		} 
        if(x > 10)   throw "is too high";
        if(x < 5)    throw "is too low";
    }
    catch(err) {
        message.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}


	