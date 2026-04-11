import readlineSync from "readline-sync";

function gcd(a, b) {
  // Алгоритм Евклида
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export default function runBrainGcd() {
  console.log("Welcome to the Brain Gcd!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("Find the greatest common divisor of given numbers.");

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;

    const answer = readlineSync.question(
      `Question: ${randomNumber1} ${randomNumner2}\nYour answer: `,
    );
    const correctAnswer = gcd(number1, number2).toString();

    if (answer.trim() === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answer.trim()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
