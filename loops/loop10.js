const prompt = require('prompt-sync')();

let num = Number(prompt('enter a number: '));
let sum = 0;
for(i = 0 ; i<=num ; i++){
       sum += i;
}
console.log(sum);
