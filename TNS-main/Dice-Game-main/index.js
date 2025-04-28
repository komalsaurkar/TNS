var dice1 = 0;
var dice2 = 0;
var dice3 = 0;
var dice4 = 0;

var result;

function startState() {

    dice1 = 0;
    dice2 = 0;
    dice3 = 0;
    dice4 = 0;

}



function diceRoll(player) {


    if (player === 1) {
        dice1 = Math.floor(Math.random() * 6) + 1;
        var rand_img1 = "dice" + dice1 + ".png";
        document.querySelector(".img1").src = "images/" + rand_img1;

    }
    else if (player === 2) {
        dice2 = Math.floor(Math.random() * 6) + 1;
        var rand_img2 = "dice" + dice2 + ".png";
        document.querySelector(".img2").src = "images/" + rand_img2;

    }
    else if (player === 3) {
        dice3 = Math.floor(Math.random() * 6) + 1;
        var rand_img3 = "dice" + dice3 + ".png";
        document.querySelector(".img3").src = "images/" + rand_img3;

    }
    else if (player === 4) {
        dice4 = Math.floor(Math.random() * 6) + 1;
        var rand_img4 = "dice" + dice4 + ".png";
        document.querySelector(".img4").src = "images/" + rand_img4;

    }

    if (dice1 !== 0 && dice2 !== 0 && dice3 !==0 && dice4 !==0) {

        if (dice1 > dice2 && dice1 > dice3 && dice1 > dice4 ) {
            result = "Player 1 wins!";


        } else if (dice2 > dice1 && dice2 > dice3 && dice2 > dice4) {
            result = "Player 2 wins!";


        } else if(dice3 > dice1 && dice3 > dice2 && dice3 > dice4){
            result = "Player 3 wins!";

        } else {
            result = "Player 4 wins!";
        }

        document.querySelector("h1").textContent = result;
        startState();

    }
    else {
        result = "Next Player...";
        document.querySelector("h1").textContent = result;

    }




}


document.querySelectorAll('.btn')[0].onclick = function () { diceRoll(1) };


document.querySelectorAll('.btn')[1].onclick = function () { diceRoll(2) };

document.querySelectorAll('.btn')[2].onclick = function () { diceRoll(3) };

document.querySelectorAll('.btn')[3].onclick = function () { diceRoll(4) };







