const prompt = require('prompt-sync')();

function Sum(a , b){
    return a + b;
}

let a = Number(prompt('enter the first number: '));
let b = Number(prompt('enter the second number: '));

let results = Sum(a , b);
console.log(`the sum is ${results}`);