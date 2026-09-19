const prompt = require('prompt-sync')();
const n = parseInt(prompt("entre multiplication: "));
let i = 0
while(i < 10){
    i++
    let result = n * i
    i++;
    console.log(i+"*"+n+" ="+ result)
}