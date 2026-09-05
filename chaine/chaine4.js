const prompt = require('prompt-sync')();

let text1 = prompt('enter the first word: ');
let text2 = prompt('enter the second word: ');

if(text1 === text2){
    console.log('the two words are equal');
}else{
    console.log('the two words are not equal');
}
