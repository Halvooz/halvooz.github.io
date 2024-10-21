// Pleier å ha denne setningen i begynnelsen av mine javascript filer for å sjekke om Javaskript er riktig tilkoblet til nettsiden.
console.log("Javaskript tilkoblet!");

// Popup for brukeren, "en alarm"
//alert("Heisann!");

// Spør etter navnet til den besøkende
let navn = prompt("Hva heter du?");

// Skriver ut verdien til variabelen navn i konsollen (altså hva brukeren har skrevet inn i prompt feltet)
console.log("Du skrev inn:", navn);

// Henter "utskrift" elementet fra HTML siden og endrer teksten
document.getElementById("utskrift").innerText = "Hei, " + navn + "!";

//Spør brukeren om hva som er hobby og skriver det ut i "utskrift_hobby"
let hobby = prompt("Hva er din hobby?");
document.getElementById("utskrift_hobby").innerText = "Hobby: " + hobby;

//Spør brukeren om fødselsår og regn deretter ut hvor gammel hen er.
let fodselsaar = prompt("Hvilket år er du født? (4 siffer)");
let alder = new Date().getFullYear() - fodselsaar;
document.getElementById("utskrift_alder").innerText = "Alder:" + alder;




