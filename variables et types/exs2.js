const prompt = require('prompt-sync')();
let tempcelsuis=Number(prompt('enter the tempeter in celcius'));
let tempkalvin = tempcelsuis + 273.15;
console.log(tempkalvin);