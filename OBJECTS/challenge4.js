const prompt = require('prompt-sync')();
let x = parseInt(prompt("entre le propriete Y: "));
let y = parseInt(prompt("entrre le propriete X: "));
let propriete = {

}
propriete.x=x
propriete.y=y
console.log("le propriete x"+x+"and propriete y"+y)
let yedit
let xedit
const q = parseInt(prompt("do you want edit(1) yes or no(2): "))
if (q === 1){  
    delete propriete.y,
    delete propriete.x,
    yedit = prompt("entre le propriete Y edit: ")
    xedit = prompt("entre le propriete x edit: ")
    propriete.xedit=xedit
    propriete.yedit=yedit
    console.log("le propriete x: "+propriete.xedit);
    console.log("le propriete y: "+propriete.yedit);
  }
else{
    console.log("bye")
}