const prompt = require('prompt-sync')();
let n = prompt("entre nombre: ");
let factoriell = 1
let i = 1
while(i<= n){
    i ++;
    let nombre = factoriell * i
    
} 
console.log(`${n}! = ${factoriell}`);

