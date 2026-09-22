const prompt = require('prompt-sync')();
const question = parseInt(prompt("entre how many eliments do you want: "))
const list = [];
let result
for(let i = 0; i<= question ; i++){
    const push = parseInt(prompt("push: "))
    list.push(push)
    result= i + 1    

}console.log(result)