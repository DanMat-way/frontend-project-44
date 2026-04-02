#!/usr/bin/env node


import readlineSync from "readline-sync";

function calc() {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let correctAnswer;
  switch (operator) {
    case "+":
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case "-":
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case "*":
      correctAnswer = randomNumber1 * randomNumber2;
      break;
  }
    
const answer = readlineSync.question(`Question: ${randomNumber1} ${operator} ${randomNumber2}\n answer: `,
);
const answerNumber = Number(answer);
const roundedAnswer = Math.round(answerNumber);

if (roundedAnswer === correctAnswer) {
console.log(`Correct!`);
return true;
} else {
console.log(`Wrong answer. The correct answer was ${correctAnswer}.`);
return false;
}
}

export default function runBrainCalc() {
console.log("Welcome to the Brain Calc!");
const name = readlineSync.question ("May I have your name?");
console.log(`Hello, ${name}!`);

const rounds = 3;
for (let i = 0; i < rounds; i++) {
if (!calc()) {
console.log(`Let's try again, ${name}!`);
return;
}
}
 console.log(`Congratualations, ${name}!`);
}






