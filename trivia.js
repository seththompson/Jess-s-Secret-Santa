
			

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
  result = checkAnswer(["super bowl","the super bowl"],"Question2","message2","Congrats!!!!!","HOW CAN YOU FORGET! You are Camilla Godfather!!",sessvars.bev2Flag);
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
  result = checkAnswer(["u"],"Question4","message4","Congrats!!!!!","I think the books is about wizards and dragon. I am like 3% sure. Trust me this is a good hint.",sessvars.justin4Flag);
  if (result == 1 && sessvars.justin4Flag == 0)
  {
    sessvars.justinCounter++;
    sessvars.justin4Flag = 1;
  }
  checkHint('justin');
}

function justinFive()
{
  result = checkAnswer(["u"],"Question5","message5","Congrats!!!!!","She is a cute dog. Wait he is a cute dog. No. She? He?",sessvars.justin5Flag);
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
	message1.innerHTML ="Correct:" + " " + sessvars.correctCount;

	message10 = document.getElementById("result2");
	message10.innerHTML = "";
	message10.innerHTML = "Incorrect:" + " " +sessvars.incorrectCount;
	
	message20 = document.getElementById("friend");
	message20.innerHTML = "";
	format = document.getElementById("friend");
	
	message20 = document.getElementById("friend");
	message20.innerHTML = "";
	
	format = document.getElementById("friend");
	hint = document.getElementById("ClueTwo");
	
	if(sessvars.correctCount == 40){
	
		hint.style.display = "block";
	
	}
	if(sessvars.incorrectCount < 5){
	
		$(format).addClass("goodfriend");
		message20.innerHTML = "STUPENDOUS FRIEND";
		
	}else if (sessvars.incorrectCount < 15){
	
		$(format).addClass("goodfriend");
		message20.innerHTML = "GREAT FRIEND";
	
		
	}else if (sessvars.incorrectCount < 20){

		$(format).addClass("goodfriend")
		message20.innerHTML = "GOOD HEARTED FRIEND";
		
	}else if (sessvars.incorrectCount < 30){

		$(format).addClass("goodfriend")
		message20.innerHTML = "GOOD FRIEND";
		
	}else if (sessvars.incorrectCount < 40){

		$(format).addClass("goodfriend")
		message20.innerHTML = "FRIEND";
		
	}else if (sessvars.incorrectCount < 50){

		$(format).addClass("okayfriend")
		message20.innerHTML = "Eh FRIEND";

	}else if (sessvars.incorrectCount < 60){

		$(format).addClass("okayfriend")
		message20.innerHTML = "NEUTRAL FRIEND";
	}else if (sessvars.incorrectCount < 70){
	
		$(format).addClass("okayfriend")
		message20.innerHTML = "ACQUAINTANCE? Friend? I AM NOT SURE ANYMORE";
	}else if (sessvars.incorrectCount < 80){

		$(format).addClass("badfriend")
		message20.innerHTML = "SOMEONE ONE I THOUGHT I KNEW";
	}else if (sessvars.incorrectCount < 90){

		$(format).addClass("badfriend")
		message20.innerHTML = "ALIEN MATT";
	}else if (sessvars.incorrectCount < 100){

		$(format).addClass("badfriend")
		message20.innerHTML = "WORSE FRIEND EVER";
	}else if (sessvars.incorrectCount < 150){

		$(format).addClass("badfriend")
		message20.innerHTML = "I THOUGHT YOU KNEW US";
	}else if (sessvars.incorrectCount > 150){

		$(format).addClass("badfriend")
		message20.innerHTML = "LEAVE THE HOUSE!;"
	}