const prompt = require('prompt-sync')();
let kilometersperhour = Number(prompt('enter speed in KM/h '));
let meterspersecond = kilometersperhour * 0.27778;
console.log(`M/h: ${meterspersecond}`);