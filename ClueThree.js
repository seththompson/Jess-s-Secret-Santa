
function myFunction() {

    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("clue").value;


	if(x == 10){
		$('input[type="text"]').focus(function() {
		$(this).addClass("focus");
		});
	}else{
		$('input[type="text"]').blur(function() {
		$(this).removeClass("focus");
		});
	}
		
}