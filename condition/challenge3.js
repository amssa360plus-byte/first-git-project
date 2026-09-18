
const prompt = require('prompt-sync')();
let num = prompt("entre number: ");
 let number = num % 2
if(number == 0){
    console.log(num+" pair")
} 
else{
    console.log(num+" impair")
}