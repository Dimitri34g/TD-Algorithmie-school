import * as readlineSync from 'readline-sync';

const userName = readlineSync.question('What is your name? ');
console.log(`Hello, ${userName}!`);
