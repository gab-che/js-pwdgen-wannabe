// --------------- altra prova -----------------

// salvo i prompt
const jsName = prompt("Inserisci il tuo nome");
const jsSurname = prompt("Inserisci il tuo cognome:");
const jsColor = prompt("Inserisci il tuo colore preferito:");
const jsNumber = 22;

//prendo dall'html l'elemento che voglio modificare
const jsPass = document.getElementById("password");

// unisco
jsPass.innerHTML = `La tua password segretissima è: <strong>${jsName}</strong><span style="color: red">${jsSurname}</span><em>${jsColor}</em>${jsNumber}`;