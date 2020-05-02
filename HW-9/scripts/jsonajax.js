 $(document).ready(function () {
            $("button").click(function () {
                $("#bikeInformation").load("data/bike.json", function(responseText){
                    var bike = JSON.parse(responseText);
                    $("#bikeInformation").html("title: " + bike.manufacturer
                + "<br>year:" + bike.year + "<br>First Name:" + bike.crew.firstName + "<br>Last Name:"
                + bike.crew.lastName + "<br>Sizes Available:<br>" +
                bike.studio[0] + "<br>" + bike.studio[1] + "<br>" + bike.studio[2] + "<br>" + bike.studio[3]);
                });
            });
        });

       /* function fadeText()
        {
            $("#bikeInformation").fadeOut("slow").fadeIn("slow");
        }
        */
