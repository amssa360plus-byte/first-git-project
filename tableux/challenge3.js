const prompt = require('prompt-sync')();
let q = parseInt(prompt("How many eliments do you want : "))
let list = []
let i = 1
let somme = 0
while(i <= q){
    let number = parseInt(prompt("push"))
    list.push(number)
     somme += number 
    console.log(somme)
    i++
    console.log(list)
} 