const prompt = require('prompt-sync')();
let pondération1 = parseFloat(prompt("entre pondération nomber 1: "));
let pondération2 = parseFloat(prompt("entre pondération nomber 2: "));
let pondération3 = parseFloat(prompt("entre pondération nomber 3: "));
let note1 = parseFloat(prompt("entre note dans pondération 1: "))
let note2 = parseFloat(prompt("entre note dans pondération 2: "))
let note3 = parseFloat(prompt("entre note dans pondération 3: "))
let totalpondération = pondération1 + pondération2 + pondération3
let moyenne = note1*pondération1 + note2*pondération2 + note3*pondération3 / totalpondération
console.log("moyenne "+moyenne)



