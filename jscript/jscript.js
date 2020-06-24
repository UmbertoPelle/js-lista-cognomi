//chiedete all'utente un cognome e aggiungetelo alla lista
var cognomi = ["pellegrino", "maradei", "cane", "gatto"];
var cognomeUtente = (prompt("Inserisci il tuo cognome :"));
cognomi.push(cognomeUtente);
console.log(cognomi);

//poi ordinate
cognomi=cognomi.sort();
console.log(cognomi);

//l'esercizio chiede l'indice del nuovo elemento inserito
