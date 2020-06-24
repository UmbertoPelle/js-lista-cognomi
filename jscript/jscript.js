//chiedete all'utente un cognome e aggiungetelo alla lista
var posizione = 0;
var cognomi = ["pellegrino", "maradei", "cane", "gatto"];
var cognomeUtente = (prompt("Inserisci il tuo cognome :"));
cognomi.push(cognomeUtente);
console.log(cognomi);

//poi ordinate
cognomi=cognomi.sort();
console.log(cognomi);

//l'esercizio chiede l'indice del nuovo elemento inserito
for (var i = 0; i < cognomi.length; i++) {
  if (cognomi[i] == cognomeUtente) {
    posizione = i
  }
}
console.log(posizione);
