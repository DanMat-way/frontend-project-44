import readlineSync from 'readline-sync';
import runGame from '...src/game.js';

console.log("welcome to Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hellom ${name}!`);

runGame();

console.log(`Goodbye, ${name}!`);