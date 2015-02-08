
function myFunction() {

    var message, x, answer, button;
    message = document.getElementById("message");
	button = document.getElementById("Next");
    message.innerHTML = "";
    x = document.getElementById("clue").value;

    try { 
        x = Number(x);
        if(x == ""){
		
		
			$('input[type="text"]').focus(function() {
					$(this).addClass("focus");
			});
			
			button.style.display = "none";
			
			
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


	