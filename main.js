/*
Create a blank HTML document with a script tag (Hint: it is best practice to link an
external .js file). This game is going to be played completely from the console, so don’t
worry about putting anything else in there.


*/

/*
b) Your game is going to play against the computer, so begin with a function called
computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this
function in the game to make the computer’s play. Tip: use the console to make sure this
is returning the expected output before moving to the next step!
*/

const selection = ["rock", "paper", "scissor"];
function computerPlay() {
   var index = Math.floor(Math.random() * 3);
   let choice = selection[index];
   return choice;
}
function playerPlay() {
    return prompt("Please input a hand-sign:")
}
/*
 c) Write a function that plays a single round of Rock Paper Scissors. The function should
take two parameters - the playerSelection and computerSelection - and then return a
string that declares the winner of the round like so: "You Lose! Paper beats Rock"
i. Make your function’s playerSelection parameter case-insensitive (so users can
input rock, ROCK, RocK or any other variation). (Here’s a tip on how to do that)

 */

const gameRecord = [];

const wins = ["rock" + "scissor", "scissor" + "paper","paper" + "rock"];

function playRound(player, computer) {
    
    console.log("the player has selected: "+player);
    console.log("the computer has selected: " +computer);
    let result;
    if (player === computer) {
        result = 0;
    }
    for (let i = 0; i < 3; i++) {
        if(player.concat(computer) === wins[i]){
            result = 1;
        } else if(computer.concat(player) === wins[i]) {
            result = 2;
        }
    }
    gameRecord.push(result);
    console.log(result);
    //output.innerHTML = output.innerHTML.concat(result.toString() + ", " );
    return result;
}
/*
d) Important note: you want to return the results of this function call, not console.log()
them. You’re going to use what you return later on, so let’s test this function by using
console.log to see the results
 */
function game() {
    let i;
    for(i = 0; i < 5; i++) {
        //const playerChoice = document.getElementById("player_choice");
        //let computerChoice = document.getElementById("computer");
        const playerSelection = playerPlay().toLowerCase();
        //playerChoice.innerHTML = playerChoice.innerHTML.concat(playerSelection +" | ");
        const computerSelection = computerPlay();
        //computerChoice.innerHTML = computerChoice.innerHTML.concat(computerSelection +" | ");
        let valid = 0;
        for(let x = 0; x < 3; x++) {
            if (playerSelection === selection[x]) {
                valid = 1;
            }
        }
        if (valid) {
            playRound(playerSelection, computerSelection);
        } else {
            gameRecord.push(0);
            console.log("invalid entry!");
            i--;
        }
    }
    console.log(gameRecord);
}

function results() {
    let gamesPlayed, winner;
    gamesPlayed = gameRecord.length;
    console.log("the total rounds played were " + gamesPlayed);

    let playerscore = 0;
    let computerscore = 0;
    for(let i = gamesPlayed - 1; i > 0; i--){
        
        if (gameRecord[i] === 1) {
            playerscore = playerscore +1;
        } else if (gameRecord[i] === 2) {
            computerscore = computerscore+1;
        }
    }
    if (playerscore > computerscore) {
        winner = "player won!"
        return winner;
    } else if (computerscore > playerscore) {
        winner = "Computer won!"
        return winner;
    } else if (computerscore === playerscore){
        winner = "No winners!"
        return winner;
    }
}
function test() {
    const output = document.getElementById("results");
    game();
    let winner = results();
    console.log(winner);
    //output.innerHTML = winner;
}

/*
add win detection and make the game limit to 5 rounds but repeat if the player input is invalid
*/