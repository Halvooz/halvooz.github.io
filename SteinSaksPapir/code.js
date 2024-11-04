// Oppretter en liste over valgene spilleren kan ta
const valg = ["stein", "saks", "papir"];

// //Spør spilleren hvor mange runder som skal spilles
// let antallRunder = prompt("HVOR MANGE RUNDER VIL DU SPILLE!??!?!")

// // Gidder ikke for mange runder så setter en begrensning på at brukeren ikke får mer enn 5 runder.
// if (antallRunder > 5) {
//     alert("Yo! Kul an ned! Altfor mange runder... Setter den til 5!")
//     antallRunder = 5;
//     document.getElementById("uskrift").innerText = "Vi spiller " + antallRunder + " runder";
// } else {
//     document.getElementById("utskrift").innerText = "Vi spiller " + antallRunder + " runder";
// }

// Oppretter variabler for stein saks papir bildene
let img_stein = document.getElementById("steinBilde");
let img_saks = document.getElementById("saksBilde");
let img_papir = document.getElementById("papirBilde");

// Legger til lyttefunksjon på bildene
img_stein.addEventListener("click", velgStein);
img_saks.addEventListener("click", velgSaks);
img_papir.addEventListener("click", velgPapir);


// Hva som skal skje når man klikker på Stein bildet
function velgStein() {
    console.log("Du har valgt Stein");
    let maskinValg = randomValg();
    console.log("Maskinen har valgt:" + maskinValg);
}

function randomValg() {
    return valg[Math.floor(Math.random() * valg.length)];
}