//grab all classes from html
const diglett = document.querySelectorAll(".diglett");
const newPoints = document.querySelector(".points");
const pits = document.querySelectorAll(".dirt");
let points = 0;
let timerDone = false;
let pausedGame = false;

//function that randomly selects a dirt class for a diglett to emerge from
function pickPit(pits) {
  //Math.flooor because round was returning higher indices
  const Onepit = Math.floor(Math.random() * pits.length);
  const pit = pits[Onepit];
  return pit;
}

//diglett needs to emerge for a random amount of time
function pickTime() {
  const min = 300,
    max = 1000;
  return Math.round(Math.random() * (max - min + 1) + min);
}

// use the randomly generated time and pit to emerge a diglett
function emerge() {
  const emergeWindow = pickTime();
  const pit = pickPit(pits);
  pit.classList.add("push");
  setTimeout(() => {
    //if true keep going if not STOP
    if (!timerDone && !pausedGame) emerge();
    //after time return diglett to its dirt pit
    pit.classList.remove("push");
  }, emergeWindow);
}

//add listener for diglett
diglett.forEach(diglett => diglett.addEventListener("click", getPoints));

//add points for clicking diglett
function getPoints(click) {
  if (click.isTrusted) points += 10;
  newPoints.textContent = points;
}
//function that starts the game - can start after stop, not after a full round
function begin() {
  points = 0;
  pausedGame = false;
  emerge();
  startTimer();
}

//function that stops game
function stop() {
  pausedGame = true;
}

// function to begin timer
function startTimer() {
  setTimeout(() => {
    //when game is stopped timer from previous game shouldn't infere
    if (!pausedGame) timerDone = true;
  }, 10000);
}

//function that resets the game and points after you play a full round
function reset() {
  newPoints.textContent = 0;
  timerDone = false;
}
