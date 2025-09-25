/* 🏆 Snack 1
Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise 
che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
 */

/* const getPostTitle = id => {
        return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(obj => resolve(obj.title))
        .catch(reject);
    })
}

getPostTitle(1)
.then(title => console.log(title))
.catch(error => console.error(error));

getPostTitle(2)
.then(title => console.log(title))
.catch(error => console.error(error));

getPostTitle(3)
.then(title => console.log(title))
.catch(error => console.error(error)); */

/* 🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda 
chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}. */


/* const getPost = id => {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => {
                return fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(response => response.json())
                    .then(user => {
                        post.user = user; // aggiungo l'autore dentro il post
                        resolve(post);
                    });
            })
            .catch(reject);
    });
}



getPost(2)
    .then(post => console.log(post))
    .catch(error => console.error(error));
 */

//CORREZIONE :

/* function getPost(id){
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => {
                return fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(response => response.json())
                    .then(user => resolve({...post, user}))
                    .catch(reject)
            })
            .catch(reject);
    });
} 



getPost(2)
    .then(post => console.log(post))
    .catch(error => console.error(error)); */

/* 🏆 Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject. */


/* const lanciaDado = () => {
    return new Promise((resolve, reject) =>{
        console.log('Sto lanciando il dado...')
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 6) + 1;
            const incastrato = Math.random()

            if (incastrato < 0.2){
                reject("il dado si è incastrato");
            } else {
                resolve(numero);
            }
        }, 3000)
    })
}

lanciaDado()
     .then(risultato => console.log("hai lanciato:", risultato))
     .catch(error => console.log(error)) */








/* 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!". */

/* const creaLanciaDado = () => {
    let ultimo;
    
    return () => {
        return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 6) + 1;
            const incastrato = Math.random()

            if (incastrato < 0.2){
                reject("il dado si è incastrato");
            } else {
                if (numero === ultimo) {
                    console.log("incredibile!");
                }
                ultimo = numero;
                resolve(numero);
            }
        }, 3000)
    })
    }
}

const lanciaDado = creaLanciaDado();

lanciaDado()
     .then(risultato => console.log("hai lanciato:", risultato))
     .catch(error => console.log(error));


lanciaDado()
     .then(risultato => console.log("hai lanciato:", risultato))
     .catch(error => console.log(error)); */




