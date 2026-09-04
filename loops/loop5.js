const prompt = require('prompt-sync')(); 

let base = Number(prompt('enter the base number: '));
let exposant = Number(prompt('enter the exposant number: '));

let result = 1;
for(let i= 1 ; i <= exposant ; i++){
    result *=base;
}
console.log(`the result is: ${result}`);