const prompt = require('prompt-sync')();
let letters = prompt("entre letter: ").toLowerCase();
switch(letters){
    case "a":
    case "o":
    case "i":
    case "o":
    case "u":
    case "y":
        console.log(letters+" voyelle")
        break ;
    default:
        console.log(letters+" not voyelle")
}