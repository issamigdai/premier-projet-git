const prompt = require('prompt-sync')();
let numb = Number(prompt('enter a number: '));

let count = 0;
while(numb > 0){
    numb = Math.floor(numb / 10);
    count++;
}
console.log('the number of digites is: ' + count);