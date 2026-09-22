const prompt = require('prompt-sync')();
let n = prompt("entre nombre les eliments: ");
let list = []
for(let i = 1 ; i <= n ; i++){
    let push = parseInt(prompt("what do you want push: "));
    list.push(push)
 
}console.log("original list "+list)
let inverse = []
for(let i=list.length-1; i>=0 ; i--){
    inverse.push(list[i]) 
    

}console.log(inverse)
  