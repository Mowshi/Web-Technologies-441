function getCh1Choice()
{
  var myChoice = document.getElementById("choice").value;
  var myQuestion = document.getElementById("question");
  if(myChoice === "Denny's")
  {
    document.getElementById("choice").style.display="none";
    document.getElementById("goBotton").style.display="none";

    document.getElementById("choice2").style.display="block";
    document.getElementById("goBotton2").style.display="block";

    document.getElementById("testboy")style.display="block";
  }
  else if(myChoice === "Ihop")
  {
    myQuestion.innerHTML = "After sitting down in a booth with the least amount of crumbs on it, you place your order and receive your oder of lukewarm food.<br>Suddenly, a squad of cyborgs drop down from the celing and suround you. You panic and look for a way out of the situation, but upon closer examination of the cyborgs,<br>you notice they are lactose intolerance. You look down at your plate and remeber the glass of milk you ordered. Do you fight them off with the milk or run for the exit?";
  }
  else
  {
    myQuestion.innerHTML = "That wasn't an option....";
  }
}


function getCh1Choice2()
{
  var myChoice = document.getElementById("choice").value;
  var myQuestion = document.getElementById("question");
  if(myChoice2 === "")
  {

  }
}
