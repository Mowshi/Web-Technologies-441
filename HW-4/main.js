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

    myQuestion.innerHTML = "boombaclap";
  }
  else if(myChoice === "Ihop")
  {
    myQuestion.innerHTML = "boomb";
  }
  else
  {
    myQuestion.innerHTML = "boombasssslap";
  }
}
