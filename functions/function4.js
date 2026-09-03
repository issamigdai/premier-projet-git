const prompt =  require('prompt-sync')();

function inferior(a , b){
    if(a<b){
        return a;
    }else if(a>b){
        return b;
    }
}

let a = Number(prompt('enter a number: '));
let b = Number(prompt('enter b number: '));

let result = inferior(a , b);
console.log(result);
