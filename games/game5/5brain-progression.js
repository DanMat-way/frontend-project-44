import readlineSync from "readline-sync";

export default function runBrainProgression() {
  console.log("Welcome to the Brain Progression!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What is the next number in the progression?");

const rounds = 3;

for (let i = 0; i < rounds; i++) {
const minLength = 5;
const maxLength = 10;
const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

const progression = [];
 const start = Math.floor(Math.random() * 100);
 const step =  Math.floor(Math.random() * 10) + 1; 

 const missingIndex = Math.floor(Math.random() * (length - 2)) + 1;
 const correctAnswer = start + missingIndex * step;

for (let i = 0; i < length; i++) {
progression.push(start + i * step);
}

progression[missingIndex] = ".."; 

const answer = readlineSync.question(
`Question: ${progression.join(" ")}\nYour answer: `
 );

if (answer.trim() === correctAnswer.toString()) {
console.log("Correct!");
} else {
console.log(`'${answer.trim()}' is wrong answer; (The correct answer was '${correctAnswer}'.`)
console.log(`Let's try again, ${name}!`);
return;
}
}
console.log(`Congratulations, ${name}!`);
}
