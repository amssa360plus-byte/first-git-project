const prompt = require('prompt-sync')();
let num1 = parseFloat(prompt("entre number 1: "));
let op = prompt("entre operator(+/*/-): ");
let num2 = parseFloat(prompt("entre number2: "));
if (op === "+"){
    resulte = num1 + num2
    console.log("result is"+resulte)
}
else if(op === "-"){
    resulte = num1 - num2 
    console.log("result is "+resulte)
}
else if(op === "*"){
    resulte = num1 * num2
    console.log("result is "+resulte)
}
else {
    console.log("math error")
}
