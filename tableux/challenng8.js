
const prompt = require('prompt-sync')();
let q = parseInt(prompt("how many eliments: "))
let list = []
for(let i = 1 ; i <= q ; i++){
    let push = parseInt(prompt("what do you want push : "))
    list.push(push)
    
}console.log("original list "+list)
let q2 = prompt("remove(1) or copie(2): ")
if (q2 = 2){
    let n1 = parseInt(prompt("entre number star index: "))
    let n2 = parseInt(prompt("entre number finshe index: "))
    let result = list.slice(n1, n2)
    console.log(result)    
}
else{
    let n1 = parseInt(prompt("entre number star index: "))
    let n2 = parseInt(prompt("entre number finshe index: "))
    let result = list.splice(n1, n2)
    console.log(result)    
}

// const prompt = require('prompt-sync')();
// let q = prompt("how many eliments do you want:  ")
// let list = [];
// for(let i =1 ; i<= q;i++  ){
//     let push = parseInt(prompt("push number: "))
//     list.push(push)
// }console.log("original list "+list)
// let copie = []
// for(let j = 0 ; j<list.length ;j++ ){
//     copie.push(list)
// }console.log("copie list "+list)