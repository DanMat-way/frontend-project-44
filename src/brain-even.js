import readlineSync from "readline-sync";

function isEven(num) {
  return num % 2 === 0;
}

export default function runBrainEven() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  const rounds = 3; // Количество вопросов
  for (let i = 0; i < rounds; i++) {
    const question = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(
      `Question: ${question}\nYour answer (yes/no): `,
    );
    const correctAnswer = isEven(question) ? "yes" : "no";

    if (
      (answer.toLowerCase() === "yes" && isEven(question)) ||
      (answer.toLowerCase() === "no" && !isEven(question))
    ) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
