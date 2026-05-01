

import readlineSync from 'readline-sync';

const runGame = (rules, gameFunction) => { 
  console.log('Welcome to the Brain Games!'); 
  const name = readlineSync.question('May I have your name? '); 
  console.log(`Hello, ${name}!`);
   console.log(rules);
  



const rounds = 3; 


for (let i = 0; i < rounds; i++) { 
  const [question, correctAnswer] = gameFunction(); 
  console.log(`Question: ${question}`); 
  const answer = readlineSync.question('Your answer'); 
  if (answer.trim() === correctAnswer) {
    console.log("Correct!"); 

  } else { console.log( `'${answer.trim()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`, ); 
  console.log(`Let's try again, ${name}!`);
   return; }
}

  console.log(`Congratulations, ${name}!`);
}
export default runGame;