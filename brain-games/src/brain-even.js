import readlineSync from "readline-sync";

function isEven (num)  {
   return num % 2 === 0;
}

export default function runBrainEven() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  const rounds = 3; 
  for (let i = 0; i < rounds; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const answer = readlineSync.question(
      `Question: ${randomNumber}\nYour answer (yes/no): `,
    );
    const correctAnswer = isEven(randomNumber) % 2 === 0 ? "yes" : "no";

    if (answer.trim().toLowerCase() === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${answer.trim()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}


