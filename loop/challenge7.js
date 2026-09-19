const prompt = require('prompt-sync')();
let n = parseInt(prompt("entre Nombre: "));
let b = n % 10
let a = (n -b)/10
let c = (b*10 )+ a    
console.log(c)

