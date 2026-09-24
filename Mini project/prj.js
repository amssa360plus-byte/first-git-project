const prompt = require('prompt-sync')();
const books = [
  { id: 0, title: "L'Étranger", author: "Albert Camus", year: 1942, genre: "Fiction", pages: 159, disponible: true },
  { id: 1, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", pages: 328, disponible: false },
  { id: 2, title: "Les Misérables", author: "Victor Hugo", year: 1862, genre: "Historical Fiction", pages: 1462, disponible: true },
  { id: 3, title: "Dune", author: "Frank Herbert", year: 1965, genre: "Science Fiction", pages: 412, isRead: false },
  { id: 4, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", year: 1943, genre: "Children's Literature", pages: 96, disponible: true }
];
for(let i = 0 ; i < books.length ; i++){
    let Newbook = []
    console,log("          ================================================")
    console.log("         *1. Ajouter un livre au stock     ")
    console.log("         *2. Afficher tous les livres disponibles     ")
    console.log("         *3. Rechercher un livre par son titre   ")
    console.log("         *4. Mettre à jour la quantité d'un livre.   ")
    console.log("         *5. Supprimer un livre du stock     ")
    console.log("         *6. Afficher le nombre total de livres en stock    ")
    console.log("         *7. exit         ")
    const selecte = parseFloat(prompt("selecte dans la list: "))
    if(selecte === 2){
        for(let book of books ){
            if(book.disponible === true){
                console.log("livres disponibles : "+book.title)
        }
    }
}
    else if(selecte === 1){
         let eliments = parseInt(prompt("Combien de livres voulez-vous ?: "));
            for(let i = 0 ; i < eliments ; i++ ){
               let id = prompt("entre books id: ")
               let title = prompt("entre les livres de noms: ");
               let author = prompt("livre d'auteur: ");
               let date = prompt("entre la date de livre: ");
               let genre = prompt("entre genre : ");
               let page = prompt ("entre page: ");
               let newbook = {
            id : id ,    
            title : title,
            author : author,
            date : date,
            genre : genre,
            page : page,
            disponible : true
        }
        books.push(newbook)

    }

    
}console.log(Newbook)
 if(selecte === 7){
    console.log("bye bye")
    break;
}
else if(selecte === 3){
    let recherche = prompt("entre titre do livre ")
    for(let livre of books){
        if(recherche === livre.title){
            console.log(livre.title+" à la bibliothèque")
        }
    }
}
else if(selecte === 4){
    console.log("veux-tu modifier titre (1)")
    console.log("veux-tu modifier author (2)")
    console.log("veux-tu modifier date (3)")
    console.log("veux-tu modifier genre (4)")
    console.log("veux-tu modifier page (5)")
    console.log("veux-tu modifier disponible(6)")
    let edits = prompt("selecte : ")
    if(edits == 1){
        for (let i = 0 ; i < books.length ; i++){
        let id1 = parseInt(prompt("entre id dou vous voulez modifier: "))
        if(books[i].id === id1){
            let name1 = prompt("entre un nouveau nom: ")
            books[i].title = name1
            console.log(books)
            break;
            
            
        }
        }
    if(selecte === 2){
        for(let i = 0 ; i < books.length ; i++){
            let id1 = prompt("entre id dou vous voulez modifier")
            for(let i = 0 ; i < books.length ; i++){
                let auteur1 = prompt("entre auteur : ")
                if( books[i].id == id1){
                    books[i].author = auteur1
                }
            }

        }

    }
   

        
    }
}
}
