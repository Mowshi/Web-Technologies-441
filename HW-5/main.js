var images = ["card1","card1","card1","card1","card1","card1","card1","card1","card1","card1",]
var cardBack = "imgs/questionBlock.png";
var actualImages = new Array();

function printBacks()
  {
    createRandomImageArray();
    for(var i = 0; i < images.length; i++)
    {
      document.getElementById(images[i]).src= blankImagePath;
    }
  }

function createRandomImageArray()
{
  var actualImagePath = ["imgs/coin.png", "imgs/flower.png", "imgs/mario.png", "imgs/oneUP.jpg", "imgs/bullet.jpg"];
  var count = [0,0];
  while(actualImages.length < 10)
  {
    var randomNumber = Math.floor(Math.random()) * actualImagePath.length)
    if(count[randomNumber] < 5)
    {
      actualImages.push(actualImagePath[randomNumber]);
      count[randomNumber] = count[randomNumber] +1;
    }
  }
}

function flipCard(number)
{
  document.getElementById(images[number]).src= actualImages[number];
}
