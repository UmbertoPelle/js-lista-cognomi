document.getElementById("btnRegistrati").addEventListener("click", function () {
  //chiedete all'utente un cognome e aggiungetelo alla lista
  var posizione = 0;
  var cognomi = ["pellegrino", "maradei", "cane", "gatto"];
  var cognomeUtente = document.getElementById("cognomeUtente").value;

  while (cognomeUtente === "") {
    cognomeUtente = prompt("Attenzione, valore non valido riprovare:");
    cognomeUtente != "";
  }
  cognomi.push(cognomeUtente);

  //poi ordinate
  cognomi=cognomi.sort();

  //l'esercizio chiede l'indice del nuovo elemento inserito
  for (var i = 0; i < cognomi.length; i++) {
    if (cognomi[i] == cognomeUtente) {
      posizione = i
    }
  }
  document.getElementById("risPosizione").innerHTML="Benvenuto, sei stato inserito in posizione " + ++posizione;
});
