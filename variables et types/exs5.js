const prompt =  require('prompt-sync')();
let temperature = Number(prompt('enter the teperature in C°'));
if (temperature < 0){
    console.log('the state of water is solid');
}else if(temperature >= 0 && temperature <= 100 ){
    console.log('the state of water is lequid');
}else 
    console.log('the state of water is gas');