const prompt = require('prompt-sync')();
const name = prompt('whats your name ?');
const age = prompt('how old are you ?');
const gender = prompt('whats your gender ?');
const email = prompt('whats your email ?');
console.log(`name: ${name} age: ${age} gender: ${gender} email: ${email}`);