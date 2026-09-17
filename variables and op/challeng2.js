const prompt = require('prompt-sync')();
let Celsius = parseFloat(prompt("Celsius: "));
let kalvien = Celsius + 273.15
console.log("transforme en Kelvin "+kalvien)