var diceOne= Math.floor((Math.random()*6))+1;
var diceScr1= "images/dice"+diceOne+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", diceScr1);

var diceTwo= Math.floor((Math.random()*6))+1;
var diceScr2= "images/dice"+diceTwo+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", diceScr2);

var heading=document.querySelector("h1");
if (diceOne>diceTwo){
    heading.textContent="✌ Player 1 Wins ✌";
}
else if(diceTwo>diceOne){
    heading.textContent="✌ Player 2 Wins ✌";
}
else{
    heading.textContent="Match Draw 🎈";
}

function refreshPage(){
    window.location.reload();
} 

document.querySelector("a").addEventListener("click", sound );

function sound(){
    var roll=new Audio('dice_roll.mp3');
    roll.play();
    // localStorage.clear();
    roll.onended= refreshPage;
    }