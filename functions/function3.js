const prompt = require('prompt-sync')();

function superior(a , b){
    if(a < b){
        return b;
    }else if(a > b){
        return a;
    }
}
let a = Number(prompt('enter a number: '));
let b = Number(prompt('enter b number: '));

let result = superior(a , b);
console.log(result);