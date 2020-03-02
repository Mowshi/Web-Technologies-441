var imageTags = ["image1","image2","image3","image4","image5",]
var blankImagePath = "imgs/cover.jpg";
var actualImages = new Array();
var title = null;

class ViewFinder
{
  constructor(title)
  {
    this.title = title;
  }

  toString()
  {
    return "Title:" + this.title;
    return "image:" + this.image;
    return "Author" + this.author;
  }

  get theTitle()
  {
    return this.title;
    return this.image;
    return this.author;
  }

}


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
  var actualImagePath = ["imgs/AlwaysEvolving.jpg", "imgs/Boss302", "imgs/BTTF.jpg", "imgs/f40.jpg", "imgs/LBW288GTO.jpg"];
  var count = [0,0];
  while(actualImages.length < 5)
  {
    var randomNumber = Math.floor(Math.random() * actualImagePath.length)
    if(count[randomNumber] < 5)
    {
      actualImages.push(actualImagePath[randomNumber]);
      count[randomNumber] = count[randomNumber] + 1;
    }
  }
}




function initializeArray()
{
  var myViewFinder = new ViewFinder("imgs/");
  var myViewFinder1 = new ViewFinder("subaru");
  actualImages.push(myViewFinder);
  actualImages.push(myViewFinder1);
}


function accessInfo()
{
  //random object from array grab number from 0 and 4
  //console.log(myViewFinder.toString());
  //console.log(myViewFinder.theTitle);
  document.getElementById("title").innerHTML = actualImages[1].toString();
}
