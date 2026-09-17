const prompt = require('prompt-sync')();
let point1 = prompt("entre point 1: ");
let point2 = prompt("entre point 2: ");
let point3 = prompt("entre point 3: ");
let moyenne_géométrique = (point1 * point2 * point3)^(1/3)
console.log("Moyenne géométrique: "+moyenne_géométrique)