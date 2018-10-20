"use strict";
//Fully functional on IE11
//grab all classes from html
var diglett = document.querySelectorAll(".diglett");
var newPoints = document.querySelector(".points");
var pits = document.querySelectorAll(".dirt");
var points = 0;
var timerDone = false;
var pausedGame = false;

//function that randomly selects a dirt class for a diglett to emerge from
function pickPit(pits) {
  //Math.flooor because round was returning higher indices
  var Onepit = Math.floor(Math.random() * pits.length);
  var pit = pits[Onepit];
  return pit;
}

//diglett needs to emerge for a random amount of time
function pickTime() {
  var min = 300,
      max = 1000;
  return Math.round(Math.random() * (max - min + 1) + min);
}

// use the randomly generated time and pit to emerge a diglett
function emerge() {
  var emergeWindow = pickTime();
  var pit = pickPit(pits);
  pit.classList.add("push");
  setTimeout(function () {
    //if true keep going if not STOP
    if (!timerDone && !pausedGame) emerge();
    //after time return diglett to its dirt pit
    pit.classList.remove("push");
  }, emergeWindow);
}

//add points for clicking diglett
function getPoints() {
   points += 10;
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
  setTimeout(function () {
    //when game is stopped timer from previous game shouldn't infere
    if (!pausedGame) timerDone = true;
  }, 10000);
}

//function that resets the game and points after you play a full round
function reset() {
  timerDone = false;
  newPoints.textContent = 0;
}