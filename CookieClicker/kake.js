//const audio = new Audio("klikk.wav");
const audio2 = new Audio("munch.wav");

// Legger til lyttefunksjoner på bilde og knapp (knapp for å restarte)
document.getElementById("kakeBilde").addEventListener("click", startSpill);
document.getElementById("knapp").addEventListener("mouseover", playAudio);
document.getElementById("knapp").addEventListener("click", restart);
//document.getElementById("startKnapp").addEventListener("click", startSpill);

// Lagrer en variabel som tar vare på poengsummen
let numberOfClicks = 0;
// Lagrer en variabel som holder styr på om kakebildet er stort eller lite
let stor = true;

let tidIgjen = 10;
let tidsTimer = setInterval(tidtaking, 1000);

function playAudio() {
    audio2.play();
}

function tidtaking() {
    if (tidIgjen <= 0) {
        clearInterval(tidsTimer);
        document.getElementById("infoskjerm").innerText = "Gratulerer! Du er ferdig og fikk: " + numberOfClicks + " poeng.";
    }
}

function startSpill() {
    const timer = setTimeout(tidtaking, 3000);
}

// Koden som kjører når man klikker på kakebildet
function klikk() {
    
    // console.log("Du har klikket 1 gang!");
    // console.log(typeof(numberOfClicks));
    // audio.pause();
    // audio.currentTime() = 0;
    // audio.play();
    numberOfClicks = numberOfClicks + 1; // Legger til 1 for hver gang vi klikker
    document.getElementById("poeng").innerText = numberOfClicks;
    
    // Bytter kilden til kakebildet avhengig av hvor mange klikk vi har gjort
    switch(numberOfClicks) {
        case 1:
            document.getElementById("kakeBilde").src = "cake_1bite.png";
            audio2.play();
            break;
        case 2:
            document.getElementById("kakeBilde").src = "cake_2bite.png";
            audio2.play();
            break;
        case 3:
            document.getElementById("kakeBilde").src = "cake_3bite.png";
            audio2.play();
            break;
        case 4:
            document.getElementById("kakeBilde").src = "cake_4bite.png";
            audio2.play();
            break;
        case 5:
            document.getElementById("kakeBilde").src = "cake_5bite.png";
            audio2.play();
            break;                   
        case 6:
            document.getElementById("kakeBilde").src = "cake_6bite.png";
            audio2.play();
            break;
        case 7:
            document.getElementById("kakeBilde").src = "cake_7bite.png";
            audio2.play();
            break;
        case 8:
            document.getElementById("kakeBilde").src = "cake_8bite.png";
            audio2.play();
            break;
        case 9:
            document.getElementById("kakeBilde").src = "cake_9bite.png";
            audio2.play();
            break;
        case 10:
            document.getElementById("kakeBilde").src = "cake_10bite.png";
            audio2.play();
            break;
      }

    // Hvis bildet er stort skalér ned, hvis bildet ikke er stort skalér opp
    if (stor) {
        document.getElementById("kakeBilde").style.transform = "scale(0.8)";
        stor = false;
    } else {
        document.getElementById("kakeBilde").style.transform = "scale(1.0)";
        stor = true;
    }

    // //Hvis du har klikket mer enn 10 ganger
    // if (numberOfClicks > 10) {
    //     document.getElementById("poeng").innerText = "Hurra!!! Du har klikket mer enn 10 ganger! Du har vunnet spillet og spist opp kaken!";
    // }
}

// Koden som kjører når man klikker på Start på nytt knappen
function restart() {
    // Spør brukeren/spilleren om han virkelig vil restarte
    // Åpner en ja/nei boks for brukeren
    const response = confirm("Du har klikket ganske mye... Er du sikker på at du vil starte på nytt??");
    //console.log(response); 

    if (response) {
        //console.log("Ok");
        numberOfClicks = 0;
        document.getElementById("poeng").innerText = numberOfClicks;
        
        document.getElementById("kakeBilde").src = "kake.png"

    } else {
        // Hvis trykker avbryt. Gjør ingenting...
        //console.log("Cancel");
    }
}

function startSpill() {
    const timer = setTimeout(stopp, 3000);
}

function stopp() {
    
    document.getElementById("poeng").innerText = "Gratulerer! Du klarte å klikke: ", numberOfClicks, " ganger.";
    
}