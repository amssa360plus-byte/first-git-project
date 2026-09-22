const prompt = require('prompt-sync')();
let q = parseInt(prompt("How many eliments do you want : "))
let list = []
for(let i = 1 ; i <= q ; i++){
    let push = parseInt(prompt("push number: "))
    list.push(push)

}console.log(list)
