const prompt = require('prompt-sync')();
const math = require("mathjs")
let rayon = prompt("entre rayon: ");
let volume = math.pi * (4/3) * rayon**3;
console.log("le volume: "+volume)