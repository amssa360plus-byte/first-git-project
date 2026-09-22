
let list = [10, 12, 34, 50]
let min = list[0]
for(let i = 0 ; i<= list.length ; i++){
    if(min > list[i]){
        min = list[i]
        
    }
}
console.log(`le petite est: ${min}`)
 