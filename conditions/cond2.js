const prompt = require('prompt-sync')();

let vol = prompt('enter a charachter ');
switch(vol){
    case "a":
    case "e":
    case "u":
    case "i":
    case "o":       
    case "y":
        console.log(`this letter ${vol} is a vowel`);
        break;
        default:
            console.log(`this number ${vol} is not a vowel `) 
}