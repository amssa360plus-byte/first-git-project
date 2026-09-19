const prompt = require('prompt-sync')();
let n = parseFloat(prompt("entre exposant: "));
let r = parseFloat(prompt("entre base: "));
let i = 0
while(i < n){
    i++
    let result = r**i
    console.log(result)
}