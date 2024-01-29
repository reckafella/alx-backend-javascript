const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

readline.on('line', (name) => {
  console.log(`Your name is: ${name}`);
});

readline.on('close', () => {
  console.log('This important software is now closing');
});
