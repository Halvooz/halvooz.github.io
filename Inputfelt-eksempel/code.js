let html_brukernavn = document.getElementById("brukernavn");
let html_passord = document.getElementById("passord");
let html_farge = document.getElementById("farge");

let knappSend = document.getElementById("knappSend");

knappSend.addEventListener("click", sendInn);

function sendInn() {
    console.log("Brukernavn:", html_brukernavn.value);
    console.log("Passord:", html_passord.value);
    console.log("Farge:", html_farge.value);
    document.body.style.backgroundColor = html_farge.value;
    document.getElementById("utskrift").innerText = ("Oppsummering:"); 
}

