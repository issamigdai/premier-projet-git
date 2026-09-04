const prompt = require('prompt-sync')();

let numb = Number(prompt('enter the numbers you wanna reverse: '));
let reverse = 0;
while(numb > 0){
    let mod = numb%10
    reverse *= numb + mod;
    Math.floor(mod / 10);
}
console.log(`the revese is ${reverse}`)