const prompt = require('prompt-sync')();

let num = Number(prompt('enter a number: '))
if(num <= 0){
    console.log('Invalid input. Please enter a positive integer.')
}else{
    for(let i=1 ; i < num ; i++){
    let even = (2 * i );

    console.log(`the first odd numbers of ${num} :${even} `);
    }
}