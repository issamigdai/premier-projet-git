const prompt = require('prompt-sync')();
let val1 = Number(prompt('enter the first number: '));
let val2 = Number(prompt('enter the second number: '));

let sum = (val1 + val2)* 3 ;
 if(val1 === val2){
    console.log(`${sum}`)
 }else{
    console.log(`the numbers is ${val1 + val2}`);
 } 