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
    let value = Math.floor((Math.random() * like_number) + 1); // Formula matematica
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
        id_post : 1,
        nome: "Phil Mangione",
        prof_picture: "https://picsum.photos/60/60",
        data : "04-12-2022",
        text: cardText(),
        image_post: "https://picsum.photos/480/250",
        like: generateLikeNumber(140),
    },
    // Secondo Object - Autore Secondo Post
    {
        id_post: 2,
        nome: "Sofia Perlari",
        prof_picture: "https://picsum.photos/60/60",
        data: "03-09-2021",
        text: cardText(),
        image_post: "https://picsum.photos/480/250",
        like: generateLikeNumber(140),
    }
];
console.log(userAuthor);









