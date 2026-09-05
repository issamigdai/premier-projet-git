const prompt = require('prompt-sync')();

let text1 = prompt('enter the first word: ');
let text2 = prompt('enter the second word: ');

function merge(text1 , text2){
    return text1+text2;
}
let result = merge(text1 , text2);
console.log(result);