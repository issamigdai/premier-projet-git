const prompt = require('prompt-sync')();

function product(a , b){
    return a * b ;
}

let a = Number(prompt('enter the first number: '));
let b = Number(prompt('enter the second number: '));

let result = product(a , b);
console.log(result);