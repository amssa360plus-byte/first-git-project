const prompt = require('prompt-sync')();
const math = require("mathjs");
let x1 = parseFloat(prompt("entre point x1: "));
let y1 = parseFloat(prompt("entre point y1: "));
let z1 = parseFloat(prompt("entre point z1: "));
let x2 = parseFloat(prompt("entre point x2: "));
let y2 = parseFloat(prompt("entre point y2: "));
let z2 = parseFloat(prompt("entre point z2: "));
let distance = math.sqrt((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2);
console.log(distance)
