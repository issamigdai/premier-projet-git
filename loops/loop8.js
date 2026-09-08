const prompt = require('prompt-sync')();

let num = Number(prompt('enter how much fibonacci sequence do you want: '));

let x = 0
let y = 1

for(i = 0 ; i < num ; i++){
    console.log(x);
    let resu = x + y;
    y=x;
    x=resu;
}