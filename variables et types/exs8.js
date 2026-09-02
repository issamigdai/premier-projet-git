const prompt = require('prompt-sync')();
let a = Number(prompt('enter the first number '));
let b = Number(prompt('enter the second number '));
let c = Number(prompt('enter the third number '));

let Moyennegéométrique = (a * b * c , 1/3);
console.log(`your numbers Moyenne géométrique is ${Moyennegéométrique}`);