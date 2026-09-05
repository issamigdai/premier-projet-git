const prompt = require('prompt-sync')();
let char = prompt('enter a word:  ');
let i = 0
while(char[i] !== undefined){
    i++;
}
console.log('the number of charachters of the word is: ', i);