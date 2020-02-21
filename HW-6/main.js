var imageTags = ["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10",]
var blankImagePath = "imgs/questionBlock.png";

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
  document.getElementById(imageTags[number]).src= actualImages[number];
}

function addToPlayer()
{
  var firstname = document.getElementById("txtFirstName").value;
}
function playerInfo()
{

}
