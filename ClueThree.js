function checkAnswer(correctAnswer,answerID,messageID,correctResponse,incorrectResponse,buttonID,question)
{
  var answer, message,response;
  answer = document.getElementById(answerID).value;
  message = document.getElementById(messageID);
  button = document.getElementById(buttonID);
	message.innerHTML = "";
	
  if(answer == correctAnswer)
  {
    response = correctResponse;
	button.style.display = "block";
  }
  else
  {
	$('question').addClass('flash');
    response = incorrectResponse;
	
  }
  message.innerHTML = response;

}

function MathQuestionOne()
{
  checkAnswer("1 -2 -1","Answer_1","message_1","Congratulation you passed Algebra!!!!!","Whoa.... You are an engineer. I am not trusting anything you design","Button_1","QuestionOne");
}

function MathQuestionTwo()
{
  checkAnswer("155","Answer_2","message_2","Congratulation you passed Geometry!!!!!","Well I bet a high school sophomore can do this","Button_2");
}

function MathQuestionThree()
{
  checkAnswer("2","Answer_3","message_3","Congratulation you passed Calculus!!!!!","YOU CANT HANDLE THE TRUTH","Button_3");
}

function MathQuestionFour()
{
  checkAnswer("e","Answer_4","message_4","Congratulation you passed Calculus III!!!!!"," Your life is like a box of chocolates. Old, stale, bland chocolate.","Button_4");
}

function MathQuestionFive()
{
  checkAnswer("2sin(t)","Answer_5","message_5","Congratulation you passed Differential Equation!!!!!"," work work work work work ","Button_5");
}