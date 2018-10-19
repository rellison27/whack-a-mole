//grab all classes from html
var mole = document.querySelectorAll(".square")
var points = document.querySelectorAll(".points")
var pits = document.querySelectorAll(".dirt") 
let pointInc = 0;
let timerDone = false;

//function that randomly selects a dirt class for a mole
function randomMole (pits) {
    const Onemole = Math.round(Math.random() * pits.length);
    return pits[Onemole]
}
//mole needs to emerge for a random amount of time
function moleWindow() {
    var min = 1,
      max = 10;
    var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 1 - 10
  }
function emerge () {
    const emergeWindow = moleWindow();
    const moley = randomMole(pits)
    moley.classList.add("push");
}
// The amount of time each mole stays visible should be random.

//function that starts the game

//function that stops game

//function that pauses the game

//function for clicks on mole to increase score