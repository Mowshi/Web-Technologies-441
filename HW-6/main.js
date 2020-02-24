var imageTags = ["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10",]
var blankImagePath = "imgs/questionBlock.png";
var firstNumber = -1;
var secondNumber = -1;

var player = {"firstname":"","lastname":""}


var actualImages = new Array();

function printBlanks()
  {
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
      document.getElementById(imageTags[i]).src= blankImagePath;
    }
  }

function createRandomImageArray()
{
  var actualImagePath = ["imgs/coin.png", "imgs/flower.png", "imgs/mario.png", "imgs/oneUP.jpg", "imgs/bullet.jpg"];
  var count = [0,0];
  while(actualImages.length < 10)
  {
    var randomNumber = Math.floor(Math.random() * actualImagePath.length)
    if(count[randomNumber] < 5)
    {
      actualImages.push(actualImagePath[randomNumber]);
      count[randomNumber] = count[randomNumber] + 1;
    }
  }
}

function flipImage(number)
{

  firstNumber = number;
  if(firstNumber >= 0)
  {
    secondNumber = number;
    document.getElementById(imageTags[number]).src = actualImages[secondNumber];

  }
  else if(firstNumber < 0)
  {
    firstNumber = number;
    document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
    document.getElementById(imageTags[secondNumber]).src= actualImages[firstNumber];
  }
  if(actualImages[secondNumber] != actualImages[firstNumber] && firstname >= 0 && secondNumber >= 0)
  {
    setTimeout(hideImages, 1000);
  }
  else if(actualImages[secondNumber] == actualImages[firstNumber] && firstname >= 0 && secondNumber >= 0)
    {
      firstNumber = -1;
      secondNumber = -1;
    }


}

function hideImages()
{
  document.getElementById(imageTags[firstNumber]).src = blankImagePath;
  document.getElementById(imageTags[secondNumber]).src = blankImagePath;
  firstNumber = -1;
  secondNumber = -1;

}


function addToPlayer()
{
  var firstname = document.getElementById("txtFirstName").value;
  player.firstname = firstname;
  localStorage.setItem("playerInfo", JSON.stringify(player));
  window.location = "gamePage.html";
}
function playerInfo()
{
  var playerInformation = localStorage.getItem("playerInfo");
  player = JSON.parse(playerInformation);
}
