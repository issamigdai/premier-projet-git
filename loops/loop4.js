const prompt = require('prompt-sync')();

let num = Number(prompt('enter a number: '))
if(num <= 0){
    console.log('Invalid input. Please enter a positive integer.')
}else{
    for( let i=0 ; i < num; i++){
    let odd = (2 * i + 1);

    console.log(`the first odd numbers of ${num} :${odd} `);
    }
}

