const { i } = require('mathjs');

const prompt = require('prompt-sync')();
let n = parseInt(prompt("entre nombre: "));
let somme = 0
for(let i = 1 ; i < n ; i++){
    somme += i;
} 
console.log(somme)