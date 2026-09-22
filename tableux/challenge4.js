
let list = [10, 12, 34, 50]
let max = list[0]
for(let i = 0 ; i<= list.length ; i++){
    if(max < list[i]){
        max = list[i]
        
    }
    console.log(list[i]);
    
}
console.log(`le grand nombre est: ${max}`)

