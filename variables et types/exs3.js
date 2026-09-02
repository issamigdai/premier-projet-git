const prompt = require('prompt-sync')();
let distanceKM = Number(prompt('enter distance in KM '));
let Yards = distanceKM * 1093.61;
console.log(`Yards: ${Yards}`);