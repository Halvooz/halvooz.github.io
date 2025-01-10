console.log("Javascript funker!");

let boks = document.getElementById("boks");

// boks.style.backgroundColor = red;

const randomDelay = (Math.floor(Math.random() * 6) + 5) * 1000; // Random delay between 5 and 10 seconds

console.log(randomDelay);

setInterval(runMe,randomDelay)

function runMe() {
    boks.style.backgroundColor = "#FF0000";
}