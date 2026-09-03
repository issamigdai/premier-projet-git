const prompt = require('prompt-sync')();

let num = Number(prompt('enter a number: '));
let Factorial = 1;
 for(i=1 ; i <=num ; i++){
   Factorial *= i
 }
 console.log(`${num}! = ${Factorial}`);