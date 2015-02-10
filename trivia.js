function myFunction() {
	var message1,message2,message3,message4, message5, x1, x2, x3, x4, x5, sum;
    message1 = document.getElementById("message1");
	message1.innerHTML = "";
	
	message2 = document.getElementById("message2");
	message2.innerHTML = "";
	
	message3 = document.getElementById("message3");
	message3.innerHTML = "";
	
	message4 = document.getElementById("message4");
	message4.innerHTML = "";
	
	message5 = document.getElementById("message5");
	message5.innerHTML = "";
	
	x1 = document.getElementById("Question1").value;
	x2 = document.getElementById("Question2").value;
	x3 = document.getElementById("Question3").value;
	x4 = document.getElementById("Question4").value;
	x5 = document.getElementById("Question5").value;
	
	sum = 0;
	
	if(x1 == 'jackie chan'){
	
		message1.innerHTML ="Congrats!!!!";
		sum = sum +1;
	}
	
	if(x2 == 'fabian'){
	
		message2.innerHTML ="Congrats 2!!!!";
		sum = sum +1;
	}
	
	if(x3 == 'the ferrari'){
	
		message3.innerHTML ="Congrats 3!!!!";
		sum = sum +1;
	}
	
	if(x4 == 'after earth'){
	
		message4.innerHTML ="Congrats 4!!!!";
		sum = sum +1;
	}
	
	if(x5 == 'infrastructure engineering'){
	
		message5.innerHTML ="Congrats 5!!!!";
		sum = sum +1;
	}
	
	if(sum == 5){
		message5.innerHTML ="Congrats 5!!!!";
		var element = document.getElementById("QuestionOne");
        element.style.display = "none";
		var element2 = document.getElementById("QuestionTwo");
        element2.style.display = "none";
		var element3 = document.getElementById("QuestionThree");
        element3.style.display = "none";
		var element4 = document.getElementById("QuestionFour");
        element4.style.display = "none";
		var element5 = document.getElementById("QuestionFive");
        element5.style.display = "none";
		var element5 = document.getElementById("Hint");
        element5.style.display = "block";
	
	}
	
}