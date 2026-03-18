#!/usr/bin/env node

import readlineSync from "readline-sync";

function calcExpression() {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operators = ["+", "-", "*"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let correctAnswer;
  switch (operator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
  }

  const answer = readlineSync.question(
    `Question: ${num1} ${operator} ${num2}\nYour answer: `,
  );
  if (parseInt(answer, 10) === correctAnswer) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`Wrong answer. The correct answer was ${correctAnswer}.`);
    return false;
  }
}

export default function runBrainCalc() {
  console.log("Welcome to the Brain Calc!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    if (!calcExpression()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
