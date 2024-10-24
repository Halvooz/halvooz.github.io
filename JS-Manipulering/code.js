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

// Vi spør om favorittfarge, og endrer body sin background-color
let farge = prompt("Favorittfarge?");
document.body.style.backgroundColor = farge;
let farge2 = prompt("Favorittfarge nr.2 ?");

// Bruker 2 farger til å endre linear-gradient bakgrunn
let huh = document.body.style.background = `linear-gradient(in oklab, ${farge}, ${farge2})`;

/* 
Her kommer en liten liste over forskjellige linear-gradient varianter:
linear-gradient(45deg, blue, red)

A gradient going from the bottom right to the top left corner,
   starting blue and finishing red
linear-gradient(to left top, blue, red)

Interpolation in rectangular color space
linear-gradient(in oklab, blue, red)

Interpolation in polar color space
linear-gradient(in hsl, blue, red)

Interpolation in polar color space
  with longer hue interpolation method 
linear-gradient(in hsl longer hue, blue, red)

Color stop: A gradient going from the bottom to top,
   starting blue, turning green at 40% of its length,
   and finishing red 
linear-gradient(0deg, blue, green 40%, red)

Color hint: A gradient going from the left to right,
   starting red, getting to the midpoint color
   10% of the way across the length of the gradient,
   taking the rest of the 90% of the length to change to blue 
linear-gradient(.25turn, red, 10%, blue)

Multi-position color stop: A gradient tilted 45 degrees,
   with a red bottom-left half and a blue top-right half,
   with a hard line where the gradient changes from red to blue 
linear-gradient(45deg, red 0 50%, blue 50% 100%)
*/



// En annen måte å hente elementer på HTML siden
let farge3 = prompt("Favorittfarge igjen?");
// document.body.style.backgroundColor = farge3;
document.querySelector("body").style.backgroundColor = farge3;
console.log(huh)

// Spør om hvilken farge bruker vil ha på teksten og endrer tekstfargen til det brukeren vil ha
let tekstFarge = prompt("Hvilken farge vil du ha på teksten?");
document.querySelector("body").style.color = tekstFarge;

