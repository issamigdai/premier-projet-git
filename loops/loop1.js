const prompt = require('prompt-sync')();
let num = Number(prompt('please enter a random number: '));

for(i = 1 ; i <= 10 ; i++){
    let result = (num * i)
    console.log(`${num} + ${i} = ${result} `);
}