const prompt = require('prompt-sync')();
let num1 = prompt("ente number 1: ");
let num2 = prompt("entre number 2: ");
let somme = num1 + num2 
if(num1 === num2){
    let triple = somme*3
    console.log("la somme: "+somme+" et le triple: "+triple)
}
else{
    console.log("la somme is "+somme)
}