//Guess the number!!
const prompt = require('prompt-sync')();

let guessNumber, randNumber, tries = 0;
tries = Number.parseInt(tries);
randNumber = Math.floor(Math.random() * 100);
guessNumber = Number.parseInt(prompt("Guess a number between 1 - 100: "));

do {
    tries += 1;
    if (guessNumber < randNumber) {
        console.log("\nYou guessed lower. REMAINING TRIES LEFT: " + (5-tries) + "\n");
    }
    else if(guessNumber > randNumber) {
        console.log("\nYou guessed higher. REMAINING TRIES LEFT: " + (5-tries) + "\n");
    }
    guessNumber = Number.parseInt(prompt("Guess again: "));

}while((tries < 4) && (guessNumber != randNumber));

if(guessNumber == randNumber) {
    console.log("Congratulations!! Your guess is right");
}
else {
    console.log("Game Over!! \nThe correct number was " + randNumber);
}
