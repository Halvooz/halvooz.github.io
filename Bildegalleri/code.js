console.log("Javascript tilkoblet!");

document.getElementById("btnNeste").addEventListener("click", nesteBilde);
document.getElementById("btnForrige").addEventListener("click", forrigeBilde);
//document.getElementById("btnNeste").addEventListener("keydown", nesteBilde);

// Lager lyttefunksjon til knappene venstre og høyre piltast
document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") forrigeBilde()
    else if (e.code === "ArrowRight") nesteBilde()
})

let startNummer = 0;
const bilder = [
    "bilder/kaffe.png", 
    "bilder/david.jpg", 
    "bilder/gris.jpg", 
    "bilder/gull.jpg",
    "bilder/mcmanus.jpg",
    "bilder/peng.jpg",
    "bilder/isbjørn.png", 
    "bilder/bergen-oljemaleri.png", 
    "bilder/dancing.gif"];


function nesteBilde() {
    if (startNummer < bilder.length - 1) { 
        startNummer++;
        bildeKilde = bilder[startNummer];
        document.getElementById("bilde").src = bildeKilde;
        console.log(bildeKilde);
    }
    else {
        console.log("Utenfor array.length");
        startNummer = 0;
        document.getElementById("bilde").src = bilder[startNummer];
        alert("Det er ikke flere bilder å bla igjennom, hopper tilbake til start");
    }
}

function forrigeBilde() {
    if (startNummer > 0) {
        startNummer = startNummer - 1;
        bildeKilde = bilder[startNummer];
        document.getElementById("bilde").src = bildeKilde;
        console.log(bildeKilde);
    }
    else {
        console.log(startNummer);
        startNummer = 0;
        document.getElementById("bilde").src = bilder[startNummer]
        alert("Det er ikke flere bilder å bla igjennom");
    }
}