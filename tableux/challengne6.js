

const prompt = require('prompt-sync')();
let q = parseInt(prompt("How many eliments do you want : "))
let M = parseInt(prompt("entre number Multiplicatin : "))
let list = []
for(let i = 1 ; i <= q ; i++){
    let push = parseInt(prompt("push number: "))
    let Multiplicatin = push * M
    list.push(Multiplicatin)
    console.log(list)
}

    
        
    