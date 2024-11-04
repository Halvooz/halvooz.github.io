// Oppretter en liste over valgene man kan ta
const valg = ["stein", "saks", "papir"];

// Holde styr på poengsum
let antallSeire = 0;
let antallUavgjort = 0;
let antallTap = 0;

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
    if (maskinValg == "stein") {
        antallUavgjort++;
        document.getElementById("uavgjort").innerText = "Antall uavgjort: " + antallUavgjort;
        document.getElementById("utskrift").innerText = "Maskinen valgte også stein, uavgjort!"
    }
    if (maskinValg == "papir") {
        antallTap++;
        document.getElementById("tap").innerText = "Antall tap: " + antallTap;
        document.getElementById("utskrift").innerText = "Maskinen valgte papir, du tapte!"
    }
    if (maskinValg == "saks") {
        antallSeire++;
        document.getElementById("seire").innerText = "Antall seire: " + antallSeire;
        document.getElementById("utskrift").innerText = "Maskinen valgte saks, du vant!"
    }
}

function velgPapir() {
    console.log("Du har valgt papir");
    let maskinValg = randomValg();
    console.log("Maskinen har valgt:" + maskinValg);
    if (maskinValg == "stein") {
        antallSeire++;
        document.getElementById("seire").innerText = "Antall seire: " + antallSeire;
        document.getElementById("utskrift").innerText = "Maskinen valgte stein, du vant!"
    }
    if (maskinValg == "papir") {
        antallUavgjort++;
        document.getElementById("uavgjort").innerText = "Antall uavgjort: " + antallUavgjort;
        document.getElementById("utskrift").innerText = "Maskinen valgte papir, uavgjort!"
    }
    if (maskinValg == "saks") {
        antallTap++;
        document.getElementById("tap").innerText = "Antall tap: " + antallTap;
        document.getElementById("utskrift").innerText = "Maskinen valgte saks, du tapte!"
    }
}

function velgSaks() {
    console.log("Du har valgt saks");
    let maskinValg = randomValg();
    console.log("Maskinen har valgt:" + maskinValg);
    if (maskinValg == "stein") {
        antallTap++;
        document.getElementById("tap").innerText = "Antall tap: " + antallTap;
        document.getElementById("utskrift").innerText = "Maskinen valgte stein, du tapte!"
    }
    if (maskinValg == "papir") {
        antallSeire++;
        document.getElementById("seire").innerText = "Antall seire: " + antallSeire;
        document.getElementById("utskrift").innerText = "Maskinen valgte papir, du vant!"
    }
    if (maskinValg == "saks") {
        antallUavgjort++;
        document.getElementById("uavgjort").innerText = "Antall uavgjort: " + antallUavgjort;
        document.getElementById("utskrift").innerText = "Maskinen valgte stein, uavgjort!"
    }
}

function randomValg() {
    return valg[Math.floor(Math.random() * valg.length)];
}
