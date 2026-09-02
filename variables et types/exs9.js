const prompt = require('prompt-sync')();
let x1 = Number(prompt('give the point x1 '));
let x2 = Number(prompt('give the point x2 '));
let y1 = Number(prompt('give the point y1 '));
let y2 = Number(prompt('give the point y2 '));
let z1 = Number(prompt('give the point z1 '));
let z2 = Number(prompt('give the point z2 '));

Distance = Math.sqrt((x2 - x1) ^ (2) + (y2 - y1) ^ (2) + (z2 - z1) ^ (2)) ;
console.log('the distance is ' + Distance);