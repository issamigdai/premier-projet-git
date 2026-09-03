const prompt = require('prompt-sync')();
let base = Number(prompt('enter the base number: '));
let exponent = Number(prompt('enter the exponent number: '));

let result = 1

for(i=1 ; i <= exponent  ; i++){
    result *= base
}
console.log(result)