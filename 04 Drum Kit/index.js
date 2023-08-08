var noOfButton=document.querySelectorAll(".drum").length;

for(i=0;i<noOfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonClicked = this.innerHTML;
       sound(buttonClicked);
       animate(buttonClicked);
    });
}

document.addEventListener("keydown",function(event){
    sound(event.key);
    animate(event.key);
})

function animate(buttonClicked){
    var keyclass="."+buttonClicked;
    document.querySelector(keyclass).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(keyclass).classList.remove("pressed");
    } , 100);
}

function sound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1=new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case "k":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "l":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        default:
            console.log(key); 
    }
}