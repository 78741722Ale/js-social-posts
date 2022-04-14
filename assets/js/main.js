/* 
Creiamo il nostro array di oggetti che rappresentano ciascun post. 
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:

- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*/

// Creiamo il nostro array di oggetti del post

/**
 * Funzione per il numero di like random
 * @param {number} like_number il numero da moltiplicare nel math random
 * @returns il valore della funzione (value)
 */
function generateLikeNumber(like_number) {
    let value = Math.floor((Math.random() * like_number)); // Formula matematica
    return value; // Ritorno del valore
}

/**
 * Funzione utile per il testo lungo in lorem ipsum
 * @returns {string} testo lorem ipsum 
 */
function cardText() {
    // Stringa di testo lunga
    let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aspernatur corrupti corporis reprehenderit. Aliquid illum impedit a, amet deleniti voluptas?"
    // Valore di ritorno
    return text
}

const userAuthor = [
    // Primo Object - Autore primo post
    {
        id_post: 1,
        nome: "Phil Mangione",
        prof_picture: "https://picsum.photos/60/60",
        data: "04-12-2022",
        text: cardText(),
        image_post: "https://picsum.photos/480/250",
        like: generateLikeNumber(150),
    },
    // Secondo Object - Autore Secondo Post
    {
        id_post: 2,
        nome: "Sofia Perlari",
        prof_picture: "https://picsum.photos/60/60",
        data: "03-09-2021",
        text: cardText(),
        image_post: "https://picsum.photos/480/250",
        like: generateLikeNumber(150),
    }
];
console.log(userAuthor);

// Elemento che va a richiamare la row
const ElementOfPost = document.querySelector(".posts")
console.log(ElementOfPost);

/* 
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
*/

// Ciclo For Each
// Qua gli appendo tutto

userAuthor.forEach((element) => {
    ElementOfPost.insertAdjacentHTML('beforeend',
    `
    <div class="container">  
        <!-- Immagine del profilo -->
        <div class="row mt-5 gy-2 bg-light d-flex flex-wrap justify-content-center align-items-center">
            <div class="col-2 d-flex justify-content-center align-items-center">
                <img src="${element.prof_picture}" alt="Immagine del profilo utente">
            </div>
            <!-- username e Data -->
            <div class="col-10 ps-0 d-flex flex-column justify-content-between">
                <h5 class="mb-0">${element.nome}</h5>
                <span>${element.data}</span>
            </div>
            <!-- Testo Descrittivo -->
            <div class="col-12 p-2">${element.text}</div>
            <!-- Immagine messa nel profilo con lorem Picsum -->
            <div class="col-12 d-flex justify-content-center">
                <img src="${element.image_post}" alt="">
            </div>
            <!-- Tasti mi piace -->
            <div class="col-6 p-3 d-flex justify-content-center align-items-center">
                <button class="like bg-light border-0"><i class="fa-solid fa-thumbs-up"></i> Mi Piace</button>
            </div>
            <!-- Piace a: -->
            <div class="col-6 p-3 d-flex justify-content-center align-items-center">
                <span id="${element.id_post}" class="people">Piace a ${element.like} persone</span>
            </div>
        </div>
    </div>`)
    // console.log(`${element.id_post}`);
    // console.log(`${element.nome}`);
    // console.log(`${element.prof_picture}`);
    // console.log(`${element.data}`);
    // console.log(`${element.text}`);
    // console.log(`${element.image_post}`);
    // console.log(`${element.like}`);

// Milestone 3

/* 
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes 
relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/

// Creata la classe da far comparire all'addEventListener


// Seleziono il bottone
    const likeButton = document.querySelector(".like")
    console.log(likeButton);

// Avvio l'evento
likeButton.addEventListener("click", function() {
    // Aggiunta di stile al click
    likeButton.style.color = "blue";
    // Aggiunta al numero
    let PlusLikeBotton = element.like + 1;
    // Verificato, lo riesco a sommare!
    console.log(PlusLikeBotton);
    // Devo solo appenderlooo ma non riescooo   
    document.getElementById(`${element.id_post}`).innerHTML = `Piace a ${PlusLikeBotton} persone`;
})
});

// FUNZIONA SOLO SUL PRIMOO


























