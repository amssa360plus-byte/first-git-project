// const prompt = require('prompt-sync')();
// const nombre = parseInt(prompt("entre nombre : "));
// const fin = parseInt(prompt("entre nombre de fin: "))
// let resulte1 
// let resulte2
// for(let i = 1 ; i <= fin ; i++){
//     resulte1 = nombre / i 
//     resulte2 = nombre / nombre
//     if(resulte1 === nombre && resulte2 === 1){
//         console.log(i)
//     }


// }
// const tab = [1, 6, 8, 3, 7];
// let recherche = 6
// for(let i = 0 ; i < tab.length ; i ++ ){
//     if(tab[i] == recherche){
//         console.log(i)
//         break;
//     }

// }
const tab = [1, 6, 8, 3, 7];
for(let i =0 ; i < tab.length ; i++){
    for(let j = 0 ; j < tab.length -1 - i; j++){
        if(tab[j]>tab[j+1]){   
        let temp = tab[j]
        tab[j] = tab[j+1]
        tab [j+1] = temp
    }}
}console.log(tab)