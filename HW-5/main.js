var imagesTags = ["card1","card2","card3","card4","card5","card6","card7","card8","card9","card10",]
var blankImagePath = "imgs/questionBlock.png";
var actualImages = new Array();

function printBlanks()
  {
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
      document.getElementById(imagesTags[i]).src= blankImagePath;
    }
  }

function createRandomImageArray()
{
  var actualImagePath = ["imgs/coin.png", "imgs/flower.png", "imgs/mario.png", "imgs/oneUP.jpg", "imgs/bullet.jpg"];
  var count = [0,0];
  while(actualImages.length < 10)
  {
    var randomNumber = Math.floor(Math.random() * actualImagePath.length)
    if(count[randomNumber] < 10)
    {
      actualImages.push(actualImagePath[randomNumber]);
      count[randomNumber] = count[randomNumber] + 1;
    }
  }
}

function flip(number)
{
  document.getElementById(images[number]).src= actualImages[number];
}
