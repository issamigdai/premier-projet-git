const prompt = require('prompt-sync')();
let number1 = Number(prompt('enter the first number'));
let number2 = Number(prompt('enter the second number'));
let number3 = Number(prompt('enter the third number'));

let averageweightednumber = (number1*2 + number2*3 + number3*5) / (2 + 3 + 5);
console.log(`${averageweightednumber}`);