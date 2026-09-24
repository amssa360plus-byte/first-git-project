

const prompt = require('prompt-sync')();
const eliments = parseFloat(prompt("how many eliments do you want: "))
const list = []
for (let i = 1 ; i <= eliments ; i++){
    let push = parseFloat(prompt("push number"+i+" : "))
    list.push(push)
}
console.log(list) 
const q = prompt("do you want number index yes(1) or not(2): ")
if(q == 1){
    const recherche = parseInt(prompt("what do you want searche: "))
    for(let i = 0 ; i < list.length ; i++){
        if(recherche == list[i]){
            console.log(i)
            break;
        }
else if (q == 2) {
    console.log("bye")
}
    }
}