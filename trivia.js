function checkAnswer(correctAnswer,answerID,messageID,correctResponse,incorrectResponse)
{
  var answer, message,response;
  answer = document.getElementById(answerID).value;
  message = document.getElementById(messageID);
	message.innerHTML = "";
  if(answer == correctAnswer)
  {
    response = correctResponse;
    sessvars.correctCount++;
  }
  else
  {
    response = incorrectResponse;
    sessvars.incorrectCount++;
  }
  message.innerHTML = response;

}

function adrianOne()
{
  checkAnswer("jackie chan","Question1","message1","Congrats!!!!!","YOU SUCK!!!!!");
}

function adrianTwo()
{
  checkAnswer("fabian","Question2","message2","Congrats!!!!!","YOU SUCK!!!!!");
}

function adrianThree()
{
  checkAnswer("the ferrari","Question3","message3","Congrats!!!!!","DON'T FORGET THE ARTICLE YOU DWEEB");
}

function adrianFour()
{
  checkAnswer("after earth","Question4","message4","Congrats!!!!!","OPPOSITE OF BEFORE PLUTO (STILL A PLANET)");
}

function adrianFive()
{
  checkAnswer("infrastructure engineering","Question5","message5","Congrats!!!!!","HAHAHAHAHAHHAHAHA");
}


function bevOne()
{
  checkAnswer("wales","Question1","message1","Congrats!!!!!","YOU GOT IT RIGHT! Nah, I am joking is wrong");
}

function bevTwo()
{
  checkAnswer("super bowl","Question2","message2","Congrats!!!!!","HOW CAN YOU FORGET! You are Camilla Godfather!!");
}

function bevThree()
{
  checkAnswer("beast","Question3","message3","Congrats!!!!!","I am surprised you got this wrong. You should be calling her that. Its that good.");
}

function bevFour()
{
  checkAnswer("three","Question4","message4","Congrats!!!!!","Hint! You need more than two hands to count them");
}

function bevFive()
{
  checkAnswer("utah","Question5","message5","Congrats!!!!!","Hint! Its out of the country");
}

function chrisOne()
{
  checkAnswer("giraffe","Question1","message1","Congrats!!!!!","Come on! ITs obvious!");
}

function chrisTwo()
{
  checkAnswer("walmart","Question2","message2","Congrats!!!!!","Only fine man buy steak from there!");
}

function chrisThree()
{
  checkAnswer("fender san marino","Question3","message3","Congrats!!!!!","Good luck! ");
}

function chrisFour()
{
  checkAnswer("four","Question4","message4","Congrats!!!!!","Too bad you didn't attend!");
}

function chrisFive()
{
  checkAnswer("jennifer lawrence","Question5","message5","Congrats!!!!!","bau chica wau wau");
}

function evanOne()
{
  checkAnswer("arabella","Question1","message1","Congrats!!!!!!!!!","Come on Matt, what cat name I am thinking?");
}

function evanTwo()
{
  checkAnswer("one","Question2","message2","Congrats!!!!!","Wait isn't he a bass player?");
}

function evanThree()
{
  checkAnswer("twenty three november","Question3","message3","Congrats!!!!!","If he only was a girl, he wouldn't gotten that ticket");
}

function evanFour()
{
  checkAnswer("803","Question4","message4","Congrats!!!!!","You are so close!!!!");
}

function evanFive()
{
  checkAnswer("1000","Question5","message5","Congrats!!!!!","This is embarrassing");
}

function justinOne()
{
  checkAnswer("restaurant","Question1","message1","Congrats!!!!!!!!!","WRONGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGg");
}

function justinTwo()
{
  checkAnswer("three","Question2","message2","Congrats!!!!!","Oh! The many groupme messages.");
}

function justinThree()
{
  checkAnswer("alabama","Question3","message3","Congrats!!!!!","You know what, I don't know what state Justin love. Wiscosine?");
}

function justinFour()
{
  checkAnswer("u","Question4","message4","Congrats!!!!!","I think the books is about wizards and dragon. I am like 3% sure. Trust me this is a good hint.");
}

function justinFive()
{
  checkAnswer("u","Question5","message5","Congrats!!!!!","She is a cute dog. Wait he is a cute dog. No. She? He?");
}

function mikeOne()
{
  checkAnswer("carrot cake","Question1","message1","Congrats!!!!!!!!!","We should tell Samantha to make bananna cake!");
}

function mikeTwo()
{
  checkAnswer("woodhollow","Question2","message2","Congrats!!!!!","Apparently he actually lived in a apartment complex.");
}

function mikeThree()
{
  checkAnswer("wendy","Question3","message3","Congrats!!!!!","They will get marry one day!");
}

function mikeFour()
{
  checkAnswer("bloody rabbit","Question4","message4","Congrats!!!!!","This was hilarious!");
}

function mikeFive()
{
  checkAnswer("kicker of elves","Question5","message5","Congrats!!!!!","Yikes! Another hard question");
}

function samanthaOne()
{
  checkAnswer("sloth","Question1","message1","Congrats!!!!!!!!!","Yikes! If you got this wrong, you better just give up ");
}

function samanthaTwo()
{
  checkAnswer("cheese carbs hotdog","Question2","message2","Congrats!!!!!","I will admit this one is hard");
}

function samanthaThree()
{
  checkAnswer("link","Question3","message3","Congrats!!!!!","Obviously I am the better friend because I know this");
}

function samanthaFour()
{
  checkAnswer("brown","Question4","message4","Congrats!!!!!","I remember the day I was crushed when I found out she wasn't a true ginger. ");
}

function samanthaFive()
{
  checkAnswer("one year","Question5","message5","Congrats!!!!!","This year she got it on time!!!");
}

function sethOne()
{
  checkAnswer("baby ruth","Question1","message1","Congrats!!!!!!!!!","It is literraly the best candy bar ever, why you got this wrong?");
}

function sethTwo()
{
  checkAnswer("grapefruit","Question2","message2","Congrats!!!!!","Eh! There is better fruit out there. Seth have an okay taste.");
}

function sethThree()
{
  checkAnswer("twenty five","Question3","message3","Congrats!!!!!","Hint! More than anyone else in this group. or I am lying?");
}

function sethFour()
{
  checkAnswer("40","Question4","message4","Congrats!!!!!","So many good horror movie, so little time. You should take a break and see one");
}

function sethFive()
{
  checkAnswer("333","Question5","message5","Congrats!!!!!","Do you think he ever sleep? I think, he just constantly watching movies. While he works, sleep, exercise, it never stop");
}
var t_r_answer = 0;

function displayResult(){
	
	message1 = document.getElementById("result");
	message1.innerHTML = "";
	message1.innerHTML = sessvars.correctCount;

	message10 = document.getElementById("result2");
	message10.innerHTML = "";
	message10.innerHTML = sessvars.incorrectCount;

}

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
	
		
		sum = sum +1;
		t_r_answer = t_r_answer + 1;
		message1.innerHTML ="Congrats!!!!" + t_r_answer;
		
			
    }else{
	
		message1.innerHTML ="Yup that is wrong";
	}
	
	
	
	if(x2 == 'fabian'){
	
		message2.innerHTML ="Congrats 2!!!!";
		sum = sum +1;
		
	}else{
	
		message2.innerHTML ="Whoa! You don't care about Adrian's family";
	}
	
	if(x3 == 'the ferrari'){
	
		message3.innerHTML ="Congrats 3!!!!";
		sum = sum +1;
		
	}else{
	
		message3.innerHTML ="Hurray!!! This damn car is gone. Oh! You go this answer wrong ";
	}
	
	if(x4 == 'after earth'){
	
		message4.innerHTML ="Congrats 4!!!!";
		sum = sum +1;
	}else{
	
		message4.innerHTML ="Hint Hint Hint It was realllllyyyy bad";
	}
	
	if(x5 == 'infrastructure engineering'){
	
		message5.innerHTML ="Congrats 5!!!!";
		sum = sum +1;
		
	}else{
	
		message5.innerHTML ="This is realllyyyy hard to spell ";
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





function myFunction2() {
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
	
	if(x1 == 'sloth'){
	
		sum = sum +1;
		t_r_answer = t_r_answer + 1;
		message1.innerHTML ="Congrats!!!!" + t_r_answer;
		
	}else{
	
		message1.innerHTML ="Yikes! If you got this wrong, you better just give up ";
	
	}
	
	if(x2 == 'carbs cheese hotdog'){
	
		message2.innerHTML ="Congrats 2!!!!";
		sum = sum +1;
	}else if(x2 == 'cheese carbs hotdog'){
	
		message2.innerHTML ="Congrats 2!!!!";
		sum = sum +1;
	
	}else{
	
		message2.innerHTML ="I will admit this one is hard";
	}
	
	if(x3 == 'link'){
	
		message3.innerHTML ="Congrats 3!!!!";
		sum = sum +1;
	}else{
		
		message3.innerHTML ="Obviously I am the better friend because I know this";
	
	}
	
	if(x4 == 'brown'){
	
		message4.innerHTML ="Congrats 4!!!!";
		sum = sum +1;
		
	}else{
	
		message4.innerHTML ="I remember the day I was crushed when I found out she wasn't a true ginger. ";
	}
	
	if(x5 == 'one year'){
	
		message5.innerHTML ="Congrats 5!!!!";
		sum = sum +1;
	}else{
		message5.innerHTML ="This year she got it on time!!!";
	
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





function myFunction3() {

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
	
	
	sum = 0;
	
	if(x1 == 'wales'){
	
		message1.innerHTML ="Congrats!!!!";
		sum = sum +1;
	}else(
		message1.innerHTML ="YOU GOT IT RIGHT! Nah, I am joking is wrong"
	)
	x2 = document.getElementById("Question2").value;
	x3 = document.getElementById("Question3").value;
	x4 = document.getElementById("Question4").value;
	x5 = document.getElementById("Question5").value;
	if(x2 == 'super bowl'){
	
		message2.innerHTML ="Congrats 2!!!!";
		sum = sum +1;
	}else{
	
		message2.innerHTML ="HOW CAN YOU FORGET! You are Camilla Godfather!!";
	}
	
	if(x3 == 'beast'){
	
		message3.innerHTML ="Congrats 3!!!!";
		sum = sum +1;
	}else{
	
		message3.innerHTML ="I am surprised you got this wrong. You should be calling her that. Its that good.";
	
	}
	
	if(x4 == 'three'){
	
		message4.innerHTML ="Congrats 4!!!!";
		sum = sum +1;
	}else{
	
		message4.innerHTML ="Hint! You need more than two hands to count them";
	
	
	}
	
	if(x5 == 'utah'){
	
		message5.innerHTML ="Congrats 5!!!!";
		sum = sum +1;
	}else{
	
		message5.innerHTML ="Hint! Its out of the country";
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

function myFunction4() {
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
	
	if(x1 == 'baby ruth'){
	
		message1.innerHTML ="Congrats!!!!";
		sum = sum +1;
	}else{
		
		message1.innerHTML ="It is literraly the best candy bar ever, why you got this wrong?";
	
	}
	
	if(x2 == 'grapefruit'){
	
		message2.innerHTML ="Congrats 2!!!!";
		sum = sum +1;
		
	}else{
		message2.innerHTML ="Eh! There is better fruit out there. Seth have an okay taste.";
	}
	
	if(x3 == 'twenty five'){
	
		message3.innerHTML ="Congrats 3!!!!";
		sum = sum +1;
		
	}else if(x3 == 'twenty six'){
	
		message3.innerHTML ="Congrats 3!!!!";
		sum = sum +1;
	
	}else{
		
		message3.innerHTML ="Hint! More than anyone else in this group. or I am lying?";
	
	}
	
	if(x4 == '40'){
	
		message4.innerHTML ="Congrats 4!!!!";
		sum = sum +1;
		
	}else if(x4 =='31'){
	
		message4.innerHTML ="If it was that obvious it wouldn't be here, Matt";
	
	}else{
	
		message4.innerHTML ="So many good horror movie, so little time. You should take a break and see one";
	}
	
	if(x5 == '333'){
	
		message5.innerHTML ="Congrats 5!!!!";
		sum = sum +1;
		
	}else if(x5 < '100'){
		
		message5.innerHTML ="Matt you are so cold, you should go get a jacket";
	
	}else if(x5 < '200'){
		
		message5.innerHTML ="Should I give you a hint? Nah I will let you struggle";
	
	}else if(x5 < '300'){
		
		message5.innerHTML ="You are so close!!!!!! or are you?";
	
	}else{
		message5.innerHTML ="Do you think he ever sleep? I think, he just constantly watching movies. While he works, sleep, exercise, it never stop";
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

function myFunction5() {
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
	
	if(x1 == 'restaruant'){
	
		message1.innerHTML ="Congrats!!!!";
		sum = sum +1;
		
	}else{
	
		message1.innerHTML ="WRONGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGg";
	
	}
	
	if(x2 == 'three'){
	
		message2.innerHTML ="Congrats 2!!!!";
		sum = sum +1;
		
	}else{
	
		message2.innerHTML ="Oh! The many groupme messages.";
	}
	
	if(x3 == 'alabama'){
	
		message3.innerHTML ="Congrats 3!!!!";
		sum = sum +1;
		
	}else{
	
		message3.innerHTML ="You know what, I don't know what state Justin love. Wiscosine?";
	}
	
	if(x4 == 'u'){
	
		message4.innerHTML ="Congrats 4!!!!";
		sum = sum +1;
		
	}else{
		message4.innerHTML ="I think the books is about wizards and dragon. I am like 3% sure. Trust me this is a good hint.";
	}
	
	if(x5 == 'u'){
	
		message5.innerHTML ="Congrats 5!!!!";
		sum = sum +1;
		
	}else{
		message5.innerHTML ="She is a cute dog. Wait he is a cute dog. No. She? He?";
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


function myFunction6() {
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
	
	if(x1 == 'giraffe'){
	
		message1.innerHTML ="Congrats!!!!";
		sum = sum +1;
		
	}else{
	
		message1.innerHTML ="Come on! ITs obvious!";
	}
	
	if(x2 == 'walmart'){
	
		message2.innerHTML ="Congrats 2!!!!";
		sum = sum +1;
	}else{
	
		message2.innerHTML ="Only fine man buy steak from there!";
	}
	
	if(x3 == 'fender san marino'){
	
		message3.innerHTML ="Congrats 3!!!!";
		sum = sum +1;
		
	}else{
		message3.innerHTML ="Good luck! ";
	}
	
	if(x4 == 'four'){
	
		message4.innerHTML ="Congrats 4!!!!";
		sum = sum +1;
		
	}else{
		message4.innerHTML ="Too bad you didn't attend!";
	}
	
	if(x5 == 'jennifer lawrence'){
	
		message5.innerHTML ="Congrats 5!!!!";
		sum = sum +1;
		
	}else{
	
		message5.innerHTML ="bau chica wau wau";
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

function myFunction7() {
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
	
	if(x1 == 'carrot cake'){
	
		message1.innerHTML ="Congrats!!!!";
		sum = sum +1;

	}else{
	
		message1.innerHTML ="We should tell Samantha to make bananna cake!";
	}
	
	if(x2 == 'woodhollwow'){
	
		message2.innerHTML ="Congrats 2!!!!";
		sum = sum +1;
	}else{
		
		message2.innerHTML ="Apparently he actually lived in a apartment complex.";
	}
	
	if(x3 == 'wendy'){
	
		message3.innerHTML ="Congrats 3!!!!";
		sum = sum +1;
		
	}else{
	
		message3.innerHTML ="The will get marry one day!";
		
	}
	
	if(x4 == 'bloody rabbit'){
	
		message4.innerHTML ="Congrats 4!!!!";
		sum = sum +1;
		
	}else{
	
		message4.innerHTML ="This was hilarious!";
	
	}
	
	if(x5 == 'kicker of elves'){
	
		message5.innerHTML ="Congrats 5!!!!";
		sum = sum +1;
		
	}else{
	
		message5.innerHTML ="Yikes! Another hard question";
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


function myFunction8() {
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
	
	if(x1 == 'arabella'){
	
		message1.innerHTML ="Congrats!!!!";
		sum = sum +1;
		
	}else{
		
		message1.innerHTML ="Come on Matt, what cat name I am thinking?";
	
	}
	
	if(x2 == 'one'){
	
		message2.innerHTML ="Congrats 2!!!!";
		sum = sum +1;
	}else{
		
		message2.innerHTML ="Wait isn't he a bass player?";
	
	}
	
	if(x3 == 'twenty three november'){
	
		message3.innerHTML ="Congrats 3!!!!";
		sum = sum +1;
		
	}else{
	
		message3.innerHTML ="If he only was a girl, he wouldn't gotten that ticket";
		
	}
	
	if(x4 == '803'){
	
		message4.innerHTML ="Congrats 4!!!!";
		sum = sum +1;
		
	}else{
	
		message4.innerHTML ="You are so close!!!!";
		
	}
	
	if(x5 == '1000'){
	
		message5.innerHTML ="Congrats 5!!!!";
		sum = sum +1;
		
	}else if (x5 < '500'){
	
		message5.innerHTML ="This is embarrassing";
	
	}else {
	
		message5.innerHTML ="Hint Time! Nah I don't feel like it";
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
