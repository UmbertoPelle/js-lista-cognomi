var cognomi = ["pellegrino", "maradei", "cane", "gatto"];

document.getElementById("btnRegistrati").addEventListener("click", function () {
  document.getElementById("listaCog").innerHTML = ""
  document.getElementById("risPosizione").innerHTML ="";

  //chiedete all'utente un cognome e aggiungetelo alla lista
  var posizione = 0;
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
    document.getElementById("listaCog").innerHTML += "<li>" + cognomi[i] + "</li>"
  }

  document.getElementById("ris").className ="show"
  document.getElementById("risPosizione").innerHTML = ++posizione;
});
