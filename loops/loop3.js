const prompt = require('prompt-sync')();
let num = Number(prompt('enter a number: '));
let a = 0
for(i=0 ; i <= num ; i++){
    a += i
    
}
console.log(`${num} = ${a}`);