const prompt = require('prompt-sync')();
const titre = prompt("entre titre book: ");
const anee = parseInt(prompt("entre anee: "))
const auteur = prompt("entre auteur : ")


function book (titre, anee , auteur){
    const object = { titre:titre,
                    anee:anee,
                     auteur:auteur,}
console.log(object)
}
book(titre, anee, auteur)