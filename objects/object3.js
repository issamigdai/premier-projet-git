const prompt = require('prompt-sync')();
let largeur = Number(prompt('enter the width:'));
let longeur = Number(prompt('enter the lenght:'));
const rectangle ={
    length: longeur,
    width: largeur
}
let a = rectangle.length;
let b = rectangle.width;
function calculate(a, b){
        return a * b;
}
let space =  calculate(a, b)
console.log('the space is :', space);