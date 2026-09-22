const prompt = require('prompt-sync')();
const text = prompt("entre chaines charactere: ");
const text2 = prompt("entre chaines charactere number2: ")
if(text.length === text2.length) {
    console.log("egals")
}
else{
    console.log("deffirents")
}