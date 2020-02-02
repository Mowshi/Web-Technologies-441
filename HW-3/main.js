function myFunction()
{
  //chapter 1 start choose dennys
  var str = document.getElementById("ch1").innerHTML;
  var res = str.replace("Chapter 1", "Chapter 2");
  document.getElementById("ch1").innerHTML = res;

  var str = document.getElementById("ch1").innerHTML;
  var res = str.replace("You find yourself walking down the sidewalk in a small city at 6:24am and see two diners across the road from each other, a Denny's and an Ihop. Suddenly your stomach growls and you decide to get breakfest at on of these", "After sittind down at the least messy booth in the diner and ordering your food, ninjas spring out of every corner of the restaurant, surounding you. However, you reconize the clan and know that they are vegan ninjas. looking");
  document.getElementById("ch1").innerHTML = res;

  var str = document.getElementById("ch1").innerHTML;
  var res = str.replace("Suddenly your stomach growls and you decide to get breakfest at one of these fine establishments. But which one do you chose?", "down at your plate, you see sausage and scrambled eggs and start coming up with a plan. Do you fight them off with your breakfest or make a break for the exit?");
  document.getElementById("ch1").innerHTML = res;

  //buttons
  var str = document.getElementById("denbutton").innerHTML;
  var res = str.replace("Denny's", "Fight the ninjas!");
  document.getElementById("denbutton").innerHTML = res;

  var str = document.getElementById("ihopbutton").innerHTML;
  var res = str.replace("Ihop", "Break for it!");
  document.getElementById("ihopbutton").innerHTML = res;




  //chapter 1 start choose ihop
  var str = document.getElementById("ch1").innerHTML;
  var res = str.replace("Chapter 1", "Chapter 2");
  document.getElementById("ch1").innerHTML = res;

  var str = document.getElementById("ch1").innerHTML;
  var res = str.replace("You find yourself walking down the sidewalk in a small city at 6:24am and see two diners across the road from each other, a Denny's and an Ihop. Suddenly your stomach growls and you decide to get breakfest at on of these", "After sitting down in a booth with the least amount of crumbs on it, you place your order and receive your oder of lukewarm food. Suddenly, a squad of cyborgs drop down from the celing and suround you. You panic and look for");
  document.getElementById("ch1").innerHTML = res;

  var str = document.getElementById("ch1").innerHTML;
  var res = str.replace("Suddenly your stomach growls and you decide to get breakfest at one of these fine establishments. But which one do you chose?", "a way out of the situation, but upon closer examination of the cyborgs, you notice they are lactose intolerance. You look down at your plate and remeber the glass of milk you ordered. Do you fight them off with the milk or run for the exit?");
  document.getElementById("ch1").innerHTML = res;

  //buttons
  var str = document.getElementById("ihopbutton").innerHTML;
  var res = str.replace("Denny's", "Throw milk!");
  document.getElementById("ihopbutton").innerHTML = res;

  var str = document.getElementById("ihopbutton").innerHTML;
  var res = str.replace("Denny's", "Throw milk!");
  document.getElementById("ihopbutton").innerHTML = res;





}
