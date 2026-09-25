const couleurs = {
  reset: "\x1b[0m",     // Arrête la couleur, retour à la normale
  rouge: "\x1b[31m",    // Pour les erreurs
  vert: "\x1b[32m",     // Pour les succès
  jaune: "\x1b[33m",    // Pour les avertissements ou les menus
  bleu: "\x1b[34m",     // Pour les informations
  magenta: "\x1b[35m",  // Pour mettre en évidence un résultat
  cyan: "\x1b[36m",     // Pour les titres de section
  gras: "\x1b[1m",      // Rend le texte plus épais (bold)
};
const prompt = require('prompt-sync')();
let candidat =[  {
cin : "AB123456",
nom : "Boushaba",
prenom : "Soufiane",
partiPolitique : "Indépendant",
age: 40,
electeurs: ["JA23347", "JM123456", "JB784556"]
},
{
cin : "JE123456",
nom : "JAWAD",
prenom : "AMSA",
partiPolitique : "VERSTAPEND",
age: 17,
electeurs: ["DS84685", "NH25877", "RD753159"]
},
{
cin : "HH123456",
nom : "Mohmade",
prenom : "bada",
partiPolitique : "PAM",
age: 30,
electeurs: ["NB565551", "BB2355485"]
},
{
cin : "AG543456",
nom : "khalide",
prenom : "waaaz",
partiPolitique : "Nkhla",
age: 32,
electeurs: ["CV563566"]
}
]

for(let i = 0 ; true ; i++){
        console.log("============ Gestion des Élections et Listes Électorales au Maroc ============ ", couleurs.bleu)
        console.log("1 = Ajouter un nouveau candidat")
        console.log("2 = Ajouter plusieurs candidats à la fois")
        console.log("3 =  Afficher la liste des candidats")
        console.log("4 = Voter pour un candidat")
        console.log("5 = Modifier les informations d'un candidat")
        console.log("6 =  Supprimer un candidat")
        console.log("7 = Rechercher des candidats ")
        console.log("8 = Statistiques de l'élection")
        console.log("0 Quitte")
        console.log("==================================================================================", couleurs.bleu)
    const selecte = parseInt(prompt("Choisissez un numero selon la list: "))
    if(selecte === 0){
    console.log("bye bye");
    break;
}
switch (selecte){
    case 1:
        Ajouter_candidat ();
        break;
    case 2:
        Afficher();
        break;
    case 3:
        break;
    case 4:
        vote();
        break;
    case 5:
        modifier();
        break;
    case 6:
        Supprimer();
        break;
    case 7:
        break;
    
}}
function Ajouter_candidat (){
    let eliments = prompt("Combien  candidat en voulez-vous ?")
    for(let i = 1 ; i <= eliments ; i++){

    let cin = prompt("entrée cin: ");
    let name = prompt("entrée name: ");
    let prenom = prompt("entrée prenom: ");
    let partiPolitique = prompt("entrée partiPolitique: ");
    let age = prompt("entrée age: ")
    let newcandidat = {
        cin : cin,
        nom : name,
        prenom : prenom,
        partiPolitique : partiPolitique,
        age : age,
        electeurs: []
        }
            candidat.push(newcandidat)
        for(let i = 0 ; i <candidat.length ; i++ ){
            if(candidat[i].cin == newcandidat.cin){
                console.log("la CIN du candidat", couleurs.rouge)
                break;
    }}}
    
}


function  Afficher(){
    for(let i = 0 ; i < candidat.length - 1 ; i++){
        for(let j = 0 ; j < candidat.length -1  ; j++){
            if (candidat[j].electeurs.length < candidat[j+1].electeurs.length){
                let temp = candidat[j].electeurs
                candidat[j].electeurs = candidat[j+1].electeurs
                candidat[j+1].electeurs = temp
                break;
                
            
        
        }
    }
    
}console.table(candidat)}
function vote(){ //888
    let eliments = prompt("Combien  candidat en voulez-vous ?: ")
    for(let i = 0 ; i < eliments ; i++){
        let CIN = prompt("entre le cin: ")
        let candidatCIN = prompt("entre candidat CIN: ")
        for(let i = 0 ; i < eliments.length ; i++){
            for(let i = 0 ; i < eliments.length ; i++){
                if(candidat[i].cin === candidatCIN){
                    candidat[i].electeurs.push(CIN)
                    break;
                }
                else {
                    console.log("vouz avez deja vote")
                }
                 }

                

            
        }

        
    }
    
}
function modifier(){
let q = prompt("Modifier age(1) ou pariepolitique (2): ");
if(q == 2){
        let cin = prompt("entre cin: ")
    for(let i = 0 ; i < candidat.length ; i++){
        if(cin === candidat[i].cin){
            let Newpolitique = prompt("entre NEWpolitique: ")
            candidat[i].partiPolitique = Newpolitique

        }
        
    }

}
else if (q == 1){
    for(let i = 0 ; i < candidat.length ; i++){
    let cin = prompt("entre cin: ")
        if(cin === candidat[i].cin){
            let Newage = prompt("entre new age: ")
            candidat[i].age = Newage
        }
        
    }
}
}
function Supprimer(){
    let cin = prompt("entre cin : ")
    for(let i = 0 ; i < candidat.length ; i++){
        if(cin === candidat[i].cin){
            let index = candidat[i].cin.length
            console.log("nombre des eliments: "+index)
        }
    }
        
}