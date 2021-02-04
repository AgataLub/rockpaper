window.addEventListener("load", setupGame);

let choice;
let computer;
let playerPoint = 0;
let computerPoint = 0;

function setupGame() {

console.log("setupGame");

document.querySelector(".rock").addEventListener("click", playerChoice);
document.querySelector(".paper").addEventListener("click", playerChoice);
document.querySelector(".scissors").addEventListener("click", playerChoice);

}

function playerChoice() {
document.querySelector("#player1").classList.remove(choice);
choice = this.className;
console.log("playersChoice = " + choice);
computersChoice();

}

function computersChoice() {

    document.querySelector("#player2").classList.remove(computer);
let number = Math.floor(Math.random()*3);

if (number === 0) {
    computer = "rock";
} else if (number === 1) {
    computer = "scissors";
} else {
    computer = "paper";
}


console.log("computersChoice = " + computer + number);
showAnimation();

}

function showAnimation() {
console.log("showAnimation");

document.querySelector("#player2").classList.add("shake");
document.querySelector("#player1").classList.add("shake");

document.querySelector(".shake").addEventListener("animationend", compareChoice);

}

function compareChoice() {
//compare choices. add points. show animation who won fight.
console.log("compareChoice");

document.querySelector("#player1").classList.replace("shake", choice);
document.querySelector("#player2").classList.replace("shake", computer);

if (choice === computer) {
    console.log("tie");
} else if (choice === "rock" && computer === "paper" 
|| choice === "scissors" && computer === "rock" 
|| choice === "paper" && computer === "scissors") {
    console.log("player lost");
    computerPoint++;
    document.querySelector(".me").textContent = playerPoint;
    document.querySelector(".comp").textContent = computerPoint;
} else {
    console.log("computer lost");
    playerPoint++;
    document.querySelector(".me").textContent = playerPoint;
    document.querySelector(".comp").textContent = computerPoint;
}

checkPoints();

}

function checkPoints() {
// check if there is 2 points for person. if yes, print who won
console.log("player points = " + playerPoint + " computer points = " + computerPoint);

if (playerPoint === 3) {
youWin();
} else if (computerPoint === 3) {
    youLoose();
} else {
    console.log("we play up to 3 points! choose again")
}

}

function youWin() {
    console.log("You won! <3");
    document.querySelector("#win").classList.remove("hidden");
    gameOver();
}

function youLoose() {
    console.log("You lost! :c");
    document.querySelector("#lose").classList.remove("hidden");
    gameOver();
}

function gameOver() {
    console.log("Game over. Play again?");
    document.querySelector(".restart").classList.remove("hidden");
    document.querySelector(".restart").addEventListener("click", restartGame);
}

function restartGame() {
    console.log("restart game");
    document.querySelector(".restart").removeEventListener("click", restartGame);
    document.querySelector(".restart").classList.add("hidden");

    document.querySelector("#player2").classList.remove(computer);
    document.querySelector("#player1").classList.remove(choice);
    choice = null;
    computer = null;
    playerPoint = 0;
    computerPoint = 0;
    document.querySelector(".me").textContent = playerPoint;
    document.querySelector(".comp").textContent = computerPoint;

    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");

    document.querySelector(".rock").removeEventListener("click", playerChoice);
    document.querySelector(".paper").removeEventListener("click", playerChoice);
    document.querySelector(".scissors").removeEventListener("click", playerChoice);

    setupGame();
}