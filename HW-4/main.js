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

    myQuestion.innerHTML = "After sittind down at the least messy booth in the diner and ordering your food,<br>ninjas spring out of every corner of the restaurant, surounding you. However, you reconize the clan and know that they are vegan ninjas. looking<br>down at your plate, you see sausage and scrambled eggs and start coming up with a plan. Do you fight them off with your breakfest or make a break for the exit?";
  }
  else if(myChoice === "Ihop")
  {
    myQuestion.innerHTML = "After sitting down in a booth with the least amount of crumbs on it, you place your order and receive your oder of lukewarm food.<br>Suddenly, a squad of cyborgs drop down from the celing and suround you. You panic and look for a way out of the situation, but upon closer examination of the cyborgs,<br>you notice they are lactose intolerance. You look down at your plate and remeber the glass of milk you ordered. Do you fight them off with the milk or run for the exit?";
  }
  else
  {
    myQuestion.innerHTML = "That wasn't an option...";
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
