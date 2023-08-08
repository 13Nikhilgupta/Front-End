var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;

$("body").on("keypress", function(){
    if (!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    $('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColor);
    sound(randomChosenColor);
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }
    else{
        sound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 100);

        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    } , 100);
}

$(".btn").on("click", function(){
    var userChosenColor=$(this).attr("id");
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
    sound(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

function sound(btnid){
    var audio=new Audio("sounds/"+btnid+".mp3");
    audio.play();
}