const prompt = require('prompt-sync')();

let numb = Number(prompt('enter a number '));
if (numb%2 === 0){
    console.log(`this number ${numb} is even `)
}else{
    console.log(`this number ${numb} is odd `)
}