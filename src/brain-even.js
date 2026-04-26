import readlineSync from "readline-sync";
import { greetUser, askName, getRandomNumber } from './utils.js';

function isEven(num) {
  return num % 2 === 0;
}

export default function runBrainEven() {
  greetUser();
  const name = askName();
  console.log(`Hello, ${name}!`);

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const randomNumber = getRandomNumber(1, 100);
    const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer (yes/no): `);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answer.trim().toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer.trim()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}