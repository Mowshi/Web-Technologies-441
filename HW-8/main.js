$(document).ready(function(){
  $(".boos").hide();
  $("h2").hide();
  $("button").click(function(){
    $("h2").fadeIn();
    for(var i = 0; i < 4; i++)
    {
      moveBoos();
    }

  });

});

function moveBoos()
{
  $(".boos").fadeIn().animate({height: '10px'}, "slow").animate({height:'30px'},"slow");

}

var dogSelector = "#dog";
var allDogs = new Array();
class DogInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{
    var dog = new DogInfo("#dog", "imgs/dog.jpg",);
    allDogs.push(dog);

}
$(document).ready(function(){
    console.log(allDogs[0].toString());
    console.log(allDogs[0].theSelector);
    console.log(allDogs[0].theImagePath);

    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(allDogs[0].theSelector).attr("src", allDogs[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();

        $("#third").toggle();
          // setInterval(moveSquare, 1000);

       // $(allDogs[0].theSelector).fadeOut().fadeIn();

    });

});
