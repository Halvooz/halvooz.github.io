// Oppretter en liste over valgene spilleren kan ta
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
        document.getElementById("utskrift").innerText = "Maskinen valgte også stein, uavgjort!"
    }
    if (maskinValg == "papir") {
        antallTap++;
        document.getElementById("utskrift").innerText = "Maskinen valgte papir, du tapte!"
    }
    if (maskinValg == "saks") {
        utskriftTekst = "Maskinen valgte saks, du vant!"
        antallSeire++;
        document.getElementById("utskrift").innerText = "Maskinen valgte saks, du vant!"
    }
}

function velgPapir() {
    console.log("Du har valgt papir");
    let maskinValg = randomValg();
    console.log("Maskinen har valgt:" + maskinValg);
    if (maskinValg == "stein") {
        utskriftTekst = "Maskinen valgte stein, du vant!";
        antallSeire++;
    }
    if (maskinValg == "papir") {
        utskriftTekst = "Maskinen valgte også papir, uavgjort!";
        antallUavgjort++;
    }
    if (maskinValg == "saks") {
        utskriftTekst = "Maskinen valgte saks, du tapte!"
        antallTap++;
    }
}

function velgSaks() {
    console.log("Du har valgt saks");
    let maskinValg = randomValg();
    console.log("Maskinen har valgt:" + maskinValg);
    if (maskinValg == "stein") {
        utskriftTekst = "Maskinen valgte stein, du tapte!";
        antallTap++;
    }
    if (maskinValg == "papir") {
        utskriftTekst = "Maskinen valgte papir, du vant!";
        antallSeire++;
    }
    if (maskinValg == "saks") {
        utskriftTekst = "Maskinen valgte også saks, uavgjort!"
        antallUavgjort++;
    }
}

function randomValg() {
    return valg[Math.floor(Math.random() * valg.length)];
}
