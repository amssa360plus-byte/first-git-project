const prompt = require('prompt-sync')();
const math = require('mathjs')
console.log("le regle f(x) b**2 -4ac ");
let a = prompt("entre number a: ");
let b = prompt("entre number b: ");
let c = prompt("entre number c: ");
let equation = b**2 -4*a*c;
if(equation = 0){
    let x0 = -b/2*a
    console.log("L'équation a une solution unique: x0 = "+x0)
}
else if(equation > 0){
    let x1 = -b - math.sqrt(equation) / 2*a
    let x2 = -b + math.sqrt(equation) / 2*a
    console.log("L'équation a deux solutions distinctes : x1 = "+x1+ "x2 = "+x2)
}
else{
    console.log("L'équation n'a aucune solution réelle ")
}
