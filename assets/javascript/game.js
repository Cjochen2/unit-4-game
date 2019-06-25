// Global Variables
var targetNumber;
var numberOptions = [];
var imageGenerator;
var arrayGenerator;
var picArray = ["assets/images/penguin.jpeg", "assets/images/bane.jpg", "assets/images/ivy.jpg", "assets/images/szasz.jpg"];
var counter = 0;
var clicks = 0;
var wins = 0;
var lose = 0;

gameReset();
function gameReset(){
    counter = 0;
    clicks = 0;
    numberOptions =[];
    $("#userNumber").empty();
    $("#pictures").empty();

    // Generates the random target number
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    console.log(targetNumber);
    $("#number-to-guess").text(targetNumber);
    
    // Generates the random numbers for each of the pictures
    while(numberOptions.length < 4 ){
        arrayGenerator = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        if(numberOptions.indexOf(arrayGenerator) < 0){
        numberOptions.push(arrayGenerator);
        }
        console.log(numberOptions);
    }

    // Adds images into an empty div and assigns values to them
    for(i = 0; i < numberOptions.length; i++){
        imageGenerator = $("<img>");
        
        imageGenerator.addClass("image");

        imageGenerator.attr("src", picArray[i]);

        imageGenerator.attr("data-value", numberOptions[i]);

        $("#pictures").append(imageGenerator);

    };

    // The click function that allows you to play the game and check for win conditions being met.
    $(".image").on("click", function() {
        clicks++;
        $("#click-counter").text(clicks);
        var imageValue = ($(this).attr("data-value"));
    
        imageValue = parseInt(imageValue);
    
        counter += imageValue;
        console.log(counter);
    
        $("#userNumber").text(counter);
        if(counter === targetNumber){
            wins++;
            $("#win-lose").text("You Won!")
            $("#wins").text(wins);
            gameReset();
        }
    
        else if(counter > targetNumber){
            lose++;
            $("#win-lose").text("You Lost!")
            $("#losses").text(lose);
            gameReset();
        }
    });
};


