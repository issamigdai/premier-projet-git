const prompt = require('prompt-sync')();

let a = Number(prompt('enter number a: '));
let b = Number(prompt('enter number b: '));
let c = Number(prompt('enter number c: '));

let Delta = (b**2) - 4 * a * c;
let x1 = (- b - Math.sqrt(`${Delta}`)) / (2 * a);
let x2 = (- b + Math.sqrt(`${Delta}`)) / (2 * a);

if(Delta === 0){
    console.log('this Second Degree Equation doesnt have a solution ');
}else if(Delta > 0){
    console.log(`the two selutions are ${x1} and ${x2} `);
}