const prompt = require('prompt-sync')();
let Celsius = prompt("entre celsius please: ");
if(Celsius < 0){
    console.log("Solid");
}
else if(Celsius <= 100){
    console.log("Liquide");
}else if(Celsius > 100){
    console.log("Gaz")
}