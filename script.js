let nome = prompt("Inserisci il tuo Nome");

let cognome = prompt("Inserisci il tuo Cognome");

let colore = prompt("Inserisci il tuo Colore");

let numero = 21;
let somma = nome + cognome + colore + numero;

document.getElementById("psw").innerHTML = `la tua pasword è ${somma}`;
console.log(`la tua pasword è ${somma}`)