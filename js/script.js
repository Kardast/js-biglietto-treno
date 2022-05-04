// l'utenten inserisce due numeri e gli diciamo qual è maggiore

// chiedere all'utente il primo numero
// const primoNumero = parseInt(prompt("inserisci il primo numero"));
// console.log(primoNumero);

// // chiedere all'utente il secondo numero
// const secondoNumero = parseInt(prompt("inserisci secondo numero"));
// console.log(secondoNumero);

// // confrontare i numeri

// // se primo numero maggiore lo dico
// if (primoNumero > secondoNumero){
//     console.log("il primo numero è maggiore");

// // se secondo numero maggiore lo dico
// } else if (primoNumero < secondoNumero){
//     console.log("il secondo numero è maggiore");

// // altrimenti dico che sono uguali
// }  else {
//     console.log("i numeri sono uguali");
// }


// // l'utente inserisce due parole e diciamo qual è più lunga

// // chiedere prima parola
// const primaParola = prompt("inserisci prima parola");
// console.log(primaParola);

// // chiedere seconda parola
// const secondaParola = prompt("inserisci seconda parola");
// console.log(secondaParola);

// confrontare parole

// se prima parola più lunga lo dico

// se seconda parola più lunga lo dico

// altrimenti dico che sono uguali


// utilizzo di .length per contare i caratteri di una parola




// vogliamo sapere quanti minuti mancano alla fine dell'ora in corso

// quanti minuti ci sono in un'ora
// const minutiInOra = 60;

// // mi creo l'oggetto date
// const now = new Date ();

// console.log(now);

// // mi estrapolo i minuti
// const myMinutes = now.getMinutes();
// console.log(myMinutes);

// // calcolo quanto manca alla fine dell'ora
// const minutiMancanti = minutiInOra - myMinutes;
// console.log(minutiMancanti);

// // output relativo
// document.getElementById("mio_id").innerHTML = "Alla fine dell'ora mancano: " + minutiMancanti + " minuti.";


// // math il * x indica che prenderà quel numero ma non gli estremi per cui si fa + 1
// let myRandomNum = Math.floor(Math.random() * 10) + 1;
// console.log(myRandomNum);


// // gioco pari o dispari
// let risultato;

// // il giocatore ha puntato o su pari o su dispari
// const scelta = prompt("scegli 'pari' o 'dispari'");
// console.log("scelta",scelta);

// due puntate una del giocatore e l'altra del pc numeriche
    // puntata giocatore
    // const sceltaNumero = parseInt(prompt("scegli un numero da 1 a 5"));
    // console.log("sceltaNumero",sceltaNumero);

    // // puntata del pc
    // const numeroPc = Math.floor(Math.random() * 5) + 1;
    // console.log("numeroPc",numeroPc);

// somma delle puntate
// const sommaPuntate = sceltaNumero + numeroPc;

// verificare se la somma è pari o dispari
    // il segno % si chiama operatore modulo
// if (sommaPuntate % 2 === 0){
//     risultato = "pari";
// } else {
//     risultato = "dispari";
// }

// dire chi ha vinto (chi ha indovintato pari o dispari)
// if (scelta === risultato) {
//     console.log("Hai vinto!");
// } else {
//     console.log("Hai perso!");
// } 

// math
// let myRandomNum = Math.floor(Math.random() * 10) + 1;
// console.log(myRandomNum);


// Creare una macchina che ti vende biglietti per treno e ti dice quanto spendi
// quanti kilometri percorrerai?
const distanceKm = parseInt(prompt("Ci dica quanti kilometri percorrerà"));
console.log(distanceKm);

// che età hai?
const userAge = parseInt(prompt("Qual è la sua età?"));
console.log(userAge);

// Il prezzo è 0,21cent al kilometro
const price = distanceKm * 0.21;
console.log(price);

// Se utente è minorenne (-18 anni) ha diritto a uno sconto del 20% 
const young = price * 0.20;
console.log("young è: " + young);

// Se utente over 65 anni ha diritto a sconto del 40%
const old = price * 0.40;
console.log("old è: " + old);

// Conteggio sconti o non
if (userAge < 18) {
    console.log("Il costo è " + (price - young));
} else if (userAge > 65) {
    console.log("Il costo è " + (price - old));
} else {
    console.log("Il costo è " + price);
}

// Far dire alla macchina quanto spende l'utente