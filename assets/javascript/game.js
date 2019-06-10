var targetNumber;
var numberOptions = [];
var imageGenerator;
var arrayGenerator;
var picArray = ["assets/images/penguin.jpeg", "assets/images/bane.jpg", "assets/images/ivy.jpg", "assets/images/szasz.jpg"];
var counter = 0;
var wins = 0;
var lose = 0;

gameReset();
function gameReset(){
    counter = 0;
    numberOptions =[];
    $("#userNumber").empty();
    $("#pictures").empty();

    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    console.log(targetNumber);
    $("#number-to-guess").text(targetNumber);
    
    while(numberOptions.length < 4 ){
        arrayGenerator = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        if(numberOptions.indexOf(arrayGenerator) < 0)
        numberOptions.push(arrayGenerator);
        console.log(numberOptions);
    }

    for(i = 0; i < numberOptions.length; i++){
        imageGenerator = $("<img>");
        
        imageGenerator.addClass("image");

        imageGenerator.attr("src", picArray[i]);

        imageGenerator.attr("data-value", numberOptions[i]);

        $("#pictures").append(imageGenerator);

    };
};


$(".image").on("click", function() {
    var imageValue = ($(this).attr("data-value"));

    imageValue = parseInt(imageValue);

    counter += imageValue;
    console.log(counter);

    $("#userNumber").text(counter);
    if(counter === targetNumber){
        wins++;
        $("#wins").text(wins);
        gameReset();
    }

    else if(counter > targetNumber){
        lose++;
        $("#losses").text(lose);
        gameReset();
    }
});