 let bike = {
                "title" : "After Dark in Central Park",
                "year" : "1900",
                "crew" : {
                    "firstName" : "",
                    "lastName" : ""
                },
                "studio" : [
                    "AMB Picture Catalogue",
                    "",
                    "",
                    ""
                ]
            }

        $(function () {
            $("button").click(function () {
                showBikeInfo();
            });

        });

        function showBikeInfo()
            {
                $("#bikeInformation").html("title: " + bike.title
                + "<br>year:" + bike.year + "<br>First Name:" + bike.crew.firstName + "<br>Last Name:"
                + bike.crew.lastName + "<br>studio:<br>" +
                bike.studio[0] + "<br>" + bike.studio[1] + "<br>" + bike.studio[2] + "<br>" + bike.studio[3]);
            }
