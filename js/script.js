// chiedo all'utente il nome e lo salvo in una variabile
const userName = prompt("Inserisci il tuo nome:")

//chiedo all'utente il cognome e lo salvo in una variabile
const userSurname = prompt("Inserisci il tuo cognome:");

//chiedo all'utente il colore preferito e lo salvo in una variabile
const userColor = prompt("Inserisci il tuo colore preferito:");

// salvo un numero in una variabile
const number = 22

// prendo l'elemento html che voglio modificare e lo salvo in una variabile
const password = document.getElementById("password");

// unisco i prompt e li inserisco nell'html all'id="password"
password.innerHTML = userName + userSurname + userColor + number;