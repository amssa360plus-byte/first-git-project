const prompt = require('prompt-sync')();
let n = parseInt(prompt("entre nombre: "))
let i = 0
while(i < n){
    i ++ 
    if(i % 2 === 0){
        console.log(i)
    }
}