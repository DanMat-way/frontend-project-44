import readlineSync from 'readline-sync';

// Функция для проверки, простое число или нет
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export default function runBrainPrime() {
  console.log('Welcome to the Brain Prime!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const questionNumber = Math.floor(Math.random() * 100) + 1;
    const answer = readlineSync.question(`Question: ${questionNumber}\nYour answer: `);
    const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';

    if (answer.trim().toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer.trim()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // выйти из игры
    }
  }
  console.log(`Congratulations, ${name}!`);
}