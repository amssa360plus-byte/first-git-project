const prompt = require("prompt-sync")();
const list = []
const n = prompt("how many eliments do you want: ");
let i = 1
let Multiplication = parseInt(prompt("entre nombre Multiblication: "))
let result
let M = []


while(i <= n){
    i++
    let push = parseInt(prompt("push number: "))
    list.push(push)
    result = push * Multiplication
    console.log("resulte: "+result)
    
}
