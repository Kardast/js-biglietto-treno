// Creare una macchina che ti vende biglietti per treno e ti dice quanto spendi
// quanti kilometri percorrerai?
const distanceKm = parseInt(prompt("Ci dica quanti kilometri percorrerà"));
console.log(distanceKm);

// che età hai?
const userAge = parseInt(prompt("Qual è la sua età?"));
console.log(userAge);

// Il prezzo è 0,21cent al kilometro
const priceKm = distanceKm * 0.21;
console.log(priceKm);

// Se utente è minorenne (-18 anni) ha diritto a uno sconto del 20% 
const young = priceKm * 0.20;
console.log("young è: " + young);

// Se utente over 65 anni ha diritto a sconto del 40%
const old = priceKm * 0.40;
console.log("old è: " + old);

let finalPrice = priceKm;
console.log(finalPrice);

// Conteggio sconti o non
if (userAge < 18) {
    finalPrice = priceKm - young;
    console.log("Il costo è " + (priceKm - young));

} else if (userAge > 65) {
    finalPrice = priceKm - old;
    console.log("Il costo è " + (priceKm - old));
}

finalPrice = finalPrice.toFixed(2);

// Far dire alla macchina quanto spende l'utente
document.getElementById("mio_id").innerHTML = "Il costo del suo biglietto è " + finalPrice + "€";