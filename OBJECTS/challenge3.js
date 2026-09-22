const prompt = require('prompt-sync')();
let largeur = parseInt(prompt("entre your largeur: "))
let longueur = parseInt(prompt("entre your longeur: "))
const object = {

}
object.largeur=largeur
object.longueur=longueur
let agument = object.largeur * object.longueur 
console.log("agument "+agument)