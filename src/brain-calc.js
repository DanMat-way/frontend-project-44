#!/usr/bin/env node

import readlineSync from "readline-sync";
import { greetUser, askName, getRandomNumber } from './utils.js';


export default function runBrainCalc() {
  greetUser();
  const name = askName();
  console.log(`Hello, ${name}!`);

  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, operators.length - 1)];

    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        correctAnswer = randomNumber1 * randomNumber2;
        break;
    }

    const answer = readlineSync.question(`Question: ${randomNumber1} ${operator} ${randomNumber2}\nYour answer: `);
    const answerNumber = Number(answer);
    const roundedAnswer = Math.round(answerNumber);

    if (roundedAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`Wrong answer. The correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}






