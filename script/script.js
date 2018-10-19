//grab all classes from html
const mole = document.querySelectorAll('.square')
const newPoints = document.querySelectorAll('.points')
const pits = document.querySelectorAll('.dirt') 
let points = 0;
let timerDone = false;

//function that randomly selects a dirt class for a mole to emerge from
function randomPit(pits) {
    //Math.flooor because round was returning higher indecies
    const Onepit = Math.floor(Math.random() * pits.length);
    const pit = pits[Onepit]
    return pit
}
//mole needs to emerge for a random amount of time
function moleWindow() {
    const min = 700,
         max = 1000;
     return Math.round(Math.random() * (max - min + 1) + min); //Generate Random number between 700 - 1000
}
function emerge () {
    const emergeWindow = moleWindow();
    const pit = randomPit(pits);
    pit.classList.add("push");
    setTimeout(() => {     
        !timerDone ? emerge() : null; // make sure you put stop() instead of null
        pit.classList.remove("push");
	}, emergeWindow)
}
//digglit needs to re-submerge

// The amount of time each mole stays visible should be random.

//function that starts the game
function begin() {
    emerge();
    timerDone = false;
    setTimeout(() => {
		timerDone = true;
	}, 10000);

}

//function that stops game

//function that resets the game

//function for clicks on mole to increase score