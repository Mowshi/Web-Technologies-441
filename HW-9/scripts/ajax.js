 $(document).ready(function () {
            $("button").click(function () {
                $("#bikeInformation").load("data/bikeInfo.txt", fadeText);
            });
        });

        (function($){
        $.fn.bluey = function () {
            this.css("background-color", "blue");
            this.css("color", "white");
            this.css("font-size", 24);
            return this;
       };
    }(jQuery));
