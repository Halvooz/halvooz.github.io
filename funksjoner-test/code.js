// Parameterløs funksjon
function siHei() {
    console.log("Hei!");
}

// Kaller på funksjonen 2 ganger
siHei();
siHei();

// Funksjon som tar inn 1 parameter: navn
function siHeiTil(navn) {
    console.log("Hei, " + navn);
}

siHeiTil("Øyvind");

function leggSammen(tall1, tall2) {
    return tall1 + tall2;
}

console.log(leggSammen(3,6)); // returnerer 9

let summen = leggSammen(8,2);
console.log(summen);

document.getElementById("knapp").addEventListener("click", siHei);
document.getElementById("knapp2").addEventListener("click", siHeiTil);
