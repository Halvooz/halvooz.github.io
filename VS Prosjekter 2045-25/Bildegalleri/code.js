console.log("Javascript tilkoblet");

document.getElementById("btnBakover").addEventListener("click", bakover);
document.getElementById("btnFremover").addEventListener("click", fremover);
document.getElementById("btnHjem").addEventListener("click", hjem);

//Lyttefunksjon til piltastene venstre og høyre
document.body.addEventListener("keydown", bakover);
document.body.addEventListener("keydown", fremover);

function bakover(event) {
    //console.log("bakoverknapp klikket");
    event.preventDefault();
    if (event.keyCode === 37)
    {
        console.log("bakoverpil trykket")
    }
}

function fremover(event) {
    //console.log("fremoverknapp klikket");
    event.preventDefault();
    if (event.keyCode === 39)
    {
        console.log("fremoverpil trykket")
    }
}

function hjem() {
    console.log("hjemknapp klikket");
}

let bildegalleri = [];

