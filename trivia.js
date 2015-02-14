var stringCheck = function checkString(string1,string2)
{
  return (string1.toLowerCase()==string2.toLowerCase());
}


function checkAnswer(correctAnswer,answerID,messageID,correctResponse,incorrectResponse,countFlag)
{
  var answer, message,response,returnValue;
  answer = document.getElementById(answerID).value;
  message = document.getElementById(messageID);
	message.innerHTML = "";
  var stringCheckPartial = stringCheck.bind(undefined,answer);      // Create a partial function that will take in a string and compare it to the answer variable
  if(correctAnswer.some(stringCheckPartial))                        // Returns true if any string in the array matches the answer var
  {
    response = correctResponse;
    returnValue = 1;
    if(countFlag == 0)
      sessvars.correctCount++;
  }
  else
  {
    response = incorrectResponse;
    returnValue = 0;
    sessvars.incorrectCount++;
  }
  message.innerHTML = response;
  return returnValue;

}

function checkHint(token)
{
  if ((token == "seth" && sessvars.sethCounter >= 5) ||
     (token == "adrian" && sessvars.adrianCounter >= 5) ||
     (token == "bev" && sessvars.bevCounter >= 5) ||
     (token == "chris" && sessvars.chrisCounter >= 5) ||
     (token == "evan" && sessvars.evanCounter >= 5) ||
     (token == "justin" && sessvars.justinCounter>= 5) ||
     (token == "mike" && sessvars.mikeCounter>= 5) ||
     (token == "samantha" && sessvars.samanthaCounter>= 5)) 
		document.getElementById("Hint").style.display="block";
}

function adrianOne()
{
  result=checkAnswer(["jackie chan"],"Question1","message1","Congrats!!!!!","YOU SUCK!!!!!",sessvars.adrian1Flag);
  if (result == 1 && sessvars.adrian1Flag == 0)
  {
    sessvars.adrianCounter++;
    sessvars.adrian1Flag = 1;
  }
  checkHint('adrian');
}

function adrianTwo()
{
  result = checkAnswer(["fabian"],"Question2","message2","Congrats!!!!!","YOU SUCK!!!!!",sessvars.adrian2Flag);
  if (result == 1 && sessvars.adrian2Flag == 0)
  {
    sessvars.adrianCounter++;
    sessvars.adrian2Flag = 1;
  }
  checkHint('adrian');
}

function adrianThree()
{
  result = checkAnswer(["the ferrari","ferrari"],"Question3","message3","Congrats!!!!!","VROOM VROOM BITCH",sessvars.adrian3Flag);
  if (result == 1 && sessvars.adrian3Flag == 0)
  {
    sessvars.adrianCounter++;
    sessvars.adrian3Flag = 1;
  }
  checkHint('adrian');
}

function adrianFour()
{
  result = checkAnswer(["after earth","afterearth"],"Question4","message4","Congrats!!!!!","OPPOSITE OF BEFORE PLUTO (STILL A PLANET)",sessvars.adrian4Flag);
  if (result == 1 && sessvars.adrian4Flag == 0)
  {
    sessvars.adrianCounter++;
    sessvars.adrian4Flag = 1;
  }
  checkHint('adrian');
}

function adrianFive()
{
  result = checkAnswer(["infrastructure engineering"],"Question5","message5","Congrats!!!!!","HAHAHAHAHAHHAHAHA",sessvars.adrian5Flag);
  if (result == 1 && sessvars.adrian5Flag == 0)
  {
    sessvars.adrianCounter++;
    sessvars5Flag = 1;
  }
  checkHint('adrian');
}


function bevOne()
{
  result = checkAnswer(["wales"],"Question1","message1","Congrats!!!!!","YOU GOT IT RIGHT! Nah, I am joking is wrong",sessvars.bev1Flag);

  if (result == 1 && sessvars.bev1Flag == 0)
  {
    sessvars.bevCounter++;
    sessvars.bev1Flag = 1;
  }
  checkHint('bev');
}

function bevTwo()
{
  result = checkAnswer(["super bowl","the super bowl","superbowl","the superbowl"],"Question2","message2","Congrats!!!!!","HOW CAN YOU FORGET! You are Camilla Godfather!!",sessvars.bev2Flag);
  if (result == 1 && sessvars.bev2Flag == 0)
  {
    sessvars.bevCounter++;
    sessvars.bev2Flag = 1;
  }
  checkHint('bev');
}

function bevThree()
{
  result = checkAnswer(["beast"],"Question3","message3","Congrats!!!!!","I am surprised you got this wrong. You should be calling her that. Its that good.",sessvars.bev3Flag);
  if (result == 1 && sessvars.bev3Flag == 0)
  {
    sessvars.bevCounter++;
    sessvars.bev3Flag = 1;
  }
  checkHint('bev');
}

function bevFour()
{
  result = checkAnswer(["three","3"],"Question4","message4","Congrats!!!!!","Hint! You need more than two hands to count them",sessvars.bev4Flag);
  if (result == 1 && sessvars.bev4Flag == 0)
  {
    sessvars.bevCounter++;
    sessvars.bev4Flag = 1;
  }
  checkHint('bev');
}

function bevFive()
{
  result = checkAnswer(["utah"],"Question5","message5","Congrats!!!!!","Hint! Its out of the country",sessvars.bev5Flag);
  if (result == 1 && sessvars.bev5Flag == 0)
  {
    sessvars.bevCounter++;
    sessvars.bev5Flag = 1;
  }
  checkHint('bev');
}

function chrisOne()
{
  result = checkAnswer(["giraffe","a giraffe"],"Question1","message1","Congrats!!!!!","Come on! ITs obvious!",sessvars.chris1Flag);
  if (result == 1 && sessvars.chris1Flag == 0)
  {
    sessvars.chrisCounter++;
    sessvars.chris1Flag = 1;
  }
  checkHint('chris');
}

function chrisTwo()
{
  result = checkAnswer(["walmart"],"Question2","message2","Congrats!!!!!","Only fine man buy steak from there!",sessvars.chris2Flag);
  if (result == 1 && sessvars.chris2Flag == 0)
  {
    sessvars.chrisCounter++;
    sessvars.chris2Flag = 1;
  }
  checkHint('chris');
}

function chrisThree()
{
  result = checkAnswer(["fender san marino","a fender san marino", "fender", "a fender"],"Question3","message3","Congrats!!!!!","Good luck! ",sessvars.chris3Flag);
  if (result == 1 && sessvars.chris3Flag == 0)
  {
    sessvars.chrisCounter++;
    sessvars.chris3Flag = 1;
  }
  checkHint('chris');
}

function chrisFour()
{
  result = checkAnswer(["four","4"],"Question4","message4","Congrats!!!!!","Too bad you didn't attend!",sessvars.chris4Flag);
  if (result == 1 && sessvars.chris4Flag == 0)
  {
    sessvars.chrisCounter++;
    sessvars.chris4Flag = 1;
  }
  checkHint('chris');
}

function chrisFive()
{
  result = checkAnswer(["jennifer lawrence","jlaw","j law",],"Question5","message5","Congrats!!!!!","bau chica wau wau",sessvars.chris5Flag);
  if (result == 1 && sessvars.chris5Flag == 0)
  {
    sessvars.chrisCounter++;
    sessvars.chris5Flag = 1;
  }
  checkHint('chris');
}

function evanOne()
{
  result = checkAnswer(["arabella"],"Question1","message1","Congrats!!!!!!!!!","Come on Matt, what cat name I am thinking?",sessvars.evan1Flag);
  if (result == 1 && sessvars.evan1Flag == 0)
  {
    sessvars.evanCounter++;
    sessvars.evan1Flag = 1;
  }
  checkHint('evan');
}

function evanTwo()
{
  result = checkAnswer(["one","1"],"Question2","message2","Congrats!!!!!","Wait isn't he a bass player?",sessvars.evan2Flag);
  if (result == 1 && sessvars.evan2Flag == 0)
  {
    sessvars.evanCounter++;
    sessvars.evan2Flag = 1;
  }
  checkHint('evan');
}

function evanThree()
{
  result = checkAnswer(["twenty three november","Nov 23","Nov 23rd", "November 23", "November 23rd", "23 Nov", "23 November","twenty-third Nov", "twenty third November","twenty-three november","twenty-three Nov","twenty three nov","11/23","11-23"],"Question3","message3","Congrats!!!!!","If he only was a girl, he wouldn't gotten that ticket",sessvars.evan3Flag);
  if (result == 1 && sessvars.evan3Flag == 0)
  {
    sessvars.evanCounter++;
    sessvars.evan3Flag = 1;
  }
  checkHint('evan');
}

function evanFour()
{
  result = checkAnswer(["803","eight hundred and three","eight hundred three"],"Question4","message4","Congrats!!!!!","You are so close!!!!",sessvars.evan4Flag);
  if (result == 1 && sessvars.evan4Flag == 0)
  {
    sessvars.evanCounter++;
    sessvars.evan4Flag = 1;
  }
  checkHint('evan');
}

function evanFive()
{
  result = checkAnswer(["1000","one thousand","a thousand","thousand","one-thousand"],"Question5","message5","Congrats!!!!!","This is embarrassing",sessvars.evan5Flag);
  if (result == 1 && sessvars.evan5Flag == 0)
  {
    sessvars.evanCounter++;
    sessvars.evan5Flag = 1;
  }
  checkHint('evan');
}

function justinOne()
{
  result = checkAnswer(["restaurant","a restaurant"],"Question1","message1","Congrats!!!!!!!!!","WRONGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGg",sessvars.justin1Flag);
  if (result == 1 && sessvars.justin1Flag == 0)
  {
    sessvars.justinCounter++;
    sessvars.justin1Flag = 1;
  }
  checkHint('justin');
}

function justinTwo()
{
  result = checkAnswer(["three","3"],"Question2","message2","Congrats!!!!!","Oh! The many groupme messages.",sessvars.justin2Flag);
  if (result == 1 && sessvars.justin2Flag == 0)
  {
    sessvars.justinCounter++;
    sessvars.justin2Flag = 1;
  }
  checkHint('justin');
}

function justinThree()
{
  result = checkAnswer(["alabama","state of alabama","the state of alabama"],"Question3","message3","Congrats!!!!!","You know what, I don't know what state Justin love. Wiscosine?",sessvars.justin3Flag);
  if (result == 1 && sessvars.justin3Flag == 0)
  {
    sessvars.justinCounter++;
    sessvars.justin3Flag = 1;
  }
  checkHint('justin');
}

function justinFour()
{
  result = checkAnswer(["the name of the wind","name of the wind"],"Question4","message4","Congrats!!!!!","I think the books is about wizards and dragon. I am like 3% sure. Trust me this is a good hint.",sessvars.justin4Flag);
  if (result == 1 && sessvars.justin4Flag == 0)
  {
    sessvars.justinCounter++;
    sessvars.justin4Flag = 1;
  }
  checkHint('justin');
}

function justinFive()
{
  result = checkAnswer(["max","maxine"],"Question5","message5","Congrats!!!!!","She is a cute dog. Wait he is a cute dog. No. She? He?",sessvars.justin5Flag);
  if (result == 1 && sessvars.justin5Flag == 0)
  {
    sessvars.justinCounter++;
    sessvars.justin5Flag = 1;
  }
  checkHint('justin');
}

function mikeOne()
{
  result = checkAnswer(["carrot cake"],"Question1","message1","Congrats!!!!!!!!!","We should tell Samantha to make bananna cake!",sessvars.mike1Flag);
  if (result == 1 && sessvars.mike1Flag == 0)
  {
    sessvars.mikeCounter++;
    sessvars.mike1Flag = 1;
  }
  checkHint('mike');
}

function mikeTwo()
{
  result = checkAnswer(["woodhollow","wood hollow"],"Question2","message2","Congrats!!!!!","Apparently he actually lived in a apartment complex.",sessvars.mike2Flag);
  if (result == 1 && sessvars.mike2Flag == 0)
  {
    sessvars.mikeCounter++;
    sessvars.mike2Flag = 1;
  }
  checkHint('mike');
}

function mikeThree()
{
  result = checkAnswer(["wendy","wendys","wendy's"],"Question3","message3","Congrats!!!!!","They will get marry one day!",sessvars.mike3Flag);
  if (result == 1 && sessvars.mike3Flag == 0)
  {
    sessvars.mikeCounter++;
    sessvars.mike3Flag = 1;
  }
  checkHint('mike');
}

function mikeFour()
{
  result = checkAnswer(["bloody rabbit","a bloody rabbit","rabbit from monty python and the holy grail", "the rabbit from monty python and the holy grail"],"Question4","message4","Congrats!!!!!","This was hilarious!",sessvars.mike4Flag);
  if (result == 1 && sessvars.mike4Flag == 0)
  {
    sessvars.mikeCounter++;
    sessvars.mike4Flag = 1;
  }
  checkHint('mike');
}

function mikeFive()
{
  result = checkAnswer(["kicker of elves"],"Question5","message5","Congrats!!!!!","Yikes! Another hard question",sessvars.mike5Flag);
  if (result == 1 && sessvars.mike5Flag == 0)
  {
    sessvars.mikeCounter++;
    sessvars.mike5Flag = 1;
  }
  checkHint('mike');
}

function samanthaOne()
{
  result = checkAnswer(["sloth","the sloth","a sloth"],"Question1","message1","Congrats!!!!!!!!!","Yikes! If you got this wrong, you better just give up ",sessvars.samantha1Flag);
  if (result == 1 && sessvars.samantha1Flag == 0)
  {
    sessvars.samanthaCounter++;
    sessvars.samantha1Flag = 1;
  }
  checkHint('samantha');
}

function samanthaTwo()
{
  result = checkAnswer(["cheese carbs hotdog","cheese hotdog carbs","hotdog cheese carbs","hotdog carbs cheese","carbs cheese hotdog","carbs hotdog cheese","cheese, carbs, hotdog","cheese, hotdog, carbs","hotdog, cheese, carbs","hotdog, carbs, cheese","carbs, cheese, hotdog","carbs, hotdog, cheese","cheese carbs hotdogs","cheese hotdogs carbs","hotdogs cheese carbs","hotdogs carbs cheese","carbs cheese hotdogs","carbs hotdogs cheese","cheese, carbs, hotdogs","cheese, hotdogs, carbs","hotdogs, cheese, carbs","hotdogs, carbs, cheese","carbs, cheese, hotdogs","carbs, hotdogs, cheese"],"Question2","message2","Congrats!!!!!","I will admit this one is hard",sessvars.samantha2Flag);
  if (result == 1 && sessvars.samantha2Flag == 0)
  {
    sessvars.samanthaCounter++;
    sessvars.samantha2Flag = 1;
  }
  checkHint('samantha');
}

function samanthaThree()
{
  result = checkAnswer(["link"],"Question3","message3","Congrats!!!!!","Obviously I am the better friend because I know this",sessvars.samantha3Flag);
  if (result == 1 && sessvars.samantha3Flag == 0)
  {
    sessvars.samanthaCounter++;
    sessvars.samantha3Flag = 1;
  }
  checkHint('samantha');
}

function samanthaFour()
{
  result = checkAnswer(["brown"],"Question4","message4","Congrats!!!!!","I remember the day I was crushed when I found out she wasn't a true ginger. ",sessvars.samantha4Flag);
  if (result == 1 && sessvars.samantha4Flag == 0)
  {
    sessvars.samanthaCounter++;
    sessvars.samantha4Flag = 1;
  }
  checkHint('samantha');
}

function samanthaFive()
{
  result = checkAnswer(["one year","1 year", "a year", "year"],"Question5","message5","Congrats!!!!!","This year she got it on time!!!",sessvars.samantha5Flag);
  if (result == 1 && sessvars.samantha5Flag == 0)
  {
    sessvars.samanthaCounter++;
    sessvars.samantha5Flag = 1;
  }
  checkHint('samantha');
}

function sethOne()
{
  result = checkAnswer(["baby ruth", "baby ruth bar"],"Question1","message1","Congrats!!!!!!!!!","It is literraly the best candy bar ever, why you got this wrong?",sessvars.seth1Flag);
  if (result == 1 && sessvars.seth1Flag == 0)
  {
    sessvars.sethCounter++;
    sessvars.seth1Flag = 1;
  }
  checkHint("seth");
}

function sethTwo()
{
  result = checkAnswer(["grapefruit","grapefruit"],"Question2","message2","Congrats!!!!!","Eh! There is better fruit out there. Seth have an okay taste.",sessvars.seth2Flag);
  if (result == 1 && sessvars.seth2Flag == 0)
  {
    sessvars.sethCounter++;
    sessvars.seth2Flag = 1;
  }
  checkHint("seth");
}

function sethThree()
{
  result = checkAnswer(["twenty five","twenty four","twenty six", "twenty-five","twenty-four","twenty-six","25","24","26"],"Question3","message3","Congrats!!!!!","Hint! More than anyone else in this group. or I am lying?",sessvars.seth3Flag);
  if (result == 1 && sessvars.seth3Flag == 0)
  {
    sessvars.sethCounter++;
    sessvars.seth3Flag = 1;
  }
  checkHint("seth");
}

function sethFour()
{
  result = checkAnswer(["40","fourty"],"Question4","message4","Congrats!!!!!","So many good horror movie, so little time. You should take a break and see one",sessvars.seth4Flag);
  if (result == 1 && sessvars.seth4Flag == 0)
  {
    sessvars.sethCounter++;
    sessvars.seth4Flag = 1;
  }
  checkHint("seth");
}

function sethFive()
{
  result = checkAnswer(["333","three hundred thirty three","three hundred thirty-three","three hundred and thirty-three","three hundred and thirty three"],"Question5","message5","Congrats!!!!!","Do you think he ever sleep? I think, he just constantly watching movies. While he works, sleep, exercise, it never stop",sessvars.seth5Flag);
  if (result == 1 && sessvars.seth5Flag == 0)
  {
    sessvars.sethCounter++;
    sessvars.seth5Flag = 1;
  }
  checkHint("seth");
}
var t_r_answer = 0;


	
	message1 = document.getElementById("result");
	message1.innerHTML = "";
	message1.innerHTML ="Correct" + " " + sessvars.correctCount;

	message10 = document.getElementById("result2");
	message10.innerHTML = "";
	message10.innerHTML = "Incorrect" + " " +sessvars.incorrectCount;



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
