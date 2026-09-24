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
electeurs: []
},
{
cin : "JE123456",
nom : "JAWAD",
prenom : "AMSA",
partiPolitique : "VERSTAPEND",
age: 17,
electeurs: []
},
{
cin : "HH123456",
nom : "Mohmade",
prenom : "bada",
partiPolitique : "PAM",
age: 30,
electeurs: []
},
{
cin : "AG543456",
nom : "khalide",
prenom : "waaaz",
partiPolitique : "Nkhla",
age: 32,
electeurs: []
}
]
for(let i = 0 ; i < candidat.length ; i++){
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
switch (selecte){
    case 1:
        Ajouter_candidat ();
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break;
    case 6:
        break;
    case 7:
        break;
    case 0:
        break;
}}
function Ajouter_candidat (){
    let cin = prompt("entrée cin: ");
    let name = prompt("entrée name: ");
    let prenom = prompt("entrée prenom: ");
    let partiPolitique = prompt("entrée partiPolitique: ");
    let age = prompt("entrée age: ")
    let newcandidat = {
        cin : cin,
        name : name,
        prenom : prenom,
        partiPolitique : partiPolitique,
        age : age,
        electeurs: []
    }
    candidat.push(newcandidat)
}
