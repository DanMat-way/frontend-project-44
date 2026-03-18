import readlineSync from 'readline-sync';

export default function runBrainProgression() {
  console.log('Welcome to the Brain Progression!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the next number in the progression?');

  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const start = Math.floor(Math.random() * 50);
    const step = Math.floor(Math.random() * 10) + 1; // шаг
    const index = Math.floor(Math.random() * 10); // текущий индекс
    const correctAnswer = start + (index + 1) * step; // следующий элемент

    // Формируем последовательность с пропущенным элементом
    const sequence = [];
    for (let j = 0; j <= index; j++) {
      sequence.push(start + j * step);
    }

    // заменяем последний элемент на вопрос (пропущенный)
    sequence[sequence.length - 1] = '..';

    const answer = readlineSync.question(`Question: ${sequence.join(' ')}\nYour answer: `);

    if (answer.trim() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer.trim()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

