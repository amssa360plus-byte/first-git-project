const prompt = require('prompt-sync')();
let km_par_h = parseFloat(prompt("entre your speed"));
let m_par_s = km_par_h * 0.27778;
console.log(m_par_s+"m/s")