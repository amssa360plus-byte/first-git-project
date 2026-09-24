const prompt = require('prompt-sync')();
const eliments = parseInt(prompt("how mnany eliments do you want: "))
let list = []
let list2 = []
for(let i = 1 ; i <= eliments ; i++ ){
    let push = parseInt(prompt("push number: "))
    list.push(push)
    list2.push(push)
}

console.log(list)

const q = prompt(" decroissent(1) ou croissent(2): ");
if(q == 1){
    for(let i = 0 ; i < list2.length - 1 ; i++){
        for(let j = 0 ; j < list2.length - 1 - i ; j++){
            if(list2[j+1] > list2[j]){
                let temp = list2[j]
                list2[j] = list2[j+1]
                list2[j+1]=temp
            }
        }
    }
    console.log(list2)
}
else if (q == 2){
    for(let i = 0 ; i < list2.length - 1 ; i++){
        for(let j = 0 ; j < list2.length - 1 - i ; j++){
            if(list2[j+1] < list2[j]){
                let temp = list2[j]
                list2[j] = list2[j+1]
                list2[j+1] = temp
            }
        }
    }
    console.log(list2)
}

