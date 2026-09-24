const prompt = require('prompt-sync')();
const n = parseInt(prompt("entre how many eliments do you want: "))
let list = []
for(let m = 0 ; m <= n ; m++){
    let push = parseInt(prompt("push number "))
    list.push(push)

}
console.log("original list: "+list)

for(let i=0 ; i<= list.length ; i++){
    for(let j = 0 ; j <= list.length - 1 -i ; j++){
        if(list[j]> list[j+1]){
            let temp = list[j]
            list[j] = list[j+1]
            list[j+1] = temp
        }
        
    }console.log(list)

}