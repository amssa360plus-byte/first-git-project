const prompt = require('prompt-sync')();
let q = parseInt(prompt("How many eliments do you want : "))
let list = []
let i = 1
while(i <= q){
    
    let listpush = prompt("push: ")
    list.push(listpush)
    i++;

}console.log(list)