console.log("Javascript tilkoblet");

function oppdaterKlokke() {
    // Henter ut nåværende tidspunkt
    let naavaerendeTidspunkt = new Date();

    // Henter måned, dag, timer, minutter og sekunder
    let dag = naavaerendeTidspunkt.getDate();
    let maaned = naavaerendeTidspunkt.getMonth() + 1; // Måneder er 0-indeksert
    let aar = naavaerendeTidspunkt.getFullYear();
    let timer = naavaerendeTidspunkt.getHours();
    let minutter = naavaerendeTidspunkt.getMinutes();
    let sekunder = naavaerendeTidspunkt.getSeconds();

    // Legger til ledende nuller for enkeltsifrede timer, minutter og sekunder
    dag = dag < 10 ? '0' + dag : dag;
    maaned = maaned < 10 ? '0' + maaned : maaned;
    timer = timer < 10 ? '0' + timer : timer;
    minutter = minutter < 10 ? '0' + minutter : minutter;
    sekunder = sekunder < 10 ? '0' + sekunder : sekunder;

    // Oppdater tekstfeltet i HTML dokumentet
    document.getElementById("klokke").innerText = `${dag}.${maaned}.${aar} Klokken er: ${timer}:${minutter}:${sekunder}`;
}

function oppdaterNedtelling() {
    // Nåværende tidspunkt
    let naavaerendeTidspunkt = new Date();

    // Julaften
    let julaften = new Date(naavaerendeTidspunkt.getFullYear(), 11, 24);

    // Hvis vi allerede har passert julaften i år, sett julaften til neste år
    if (naavaerendeTidspunkt > julaften) {
        julaften.setFullYear(julaften.getFullYear() + 1);
    }

    // Forskjell i millisekunder
    let forskjell = julaften - naavaerendeTidspunkt;

    // Konverter til dager, timer, minutter og sekunder
    let dager = Math.floor(forskjell / (1000 * 60 * 60 * 24));
    let timer = Math.floor((forskjell % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutter = Math.floor((forskjell % (1000 * 60 * 60)) / (1000 * 60));
    let sekunder = Math.floor((forskjell % (1000 * 60)) / 1000);

    // Oppdater tekstfeltet i HTML dokumentet
    document.getElementById("dagerTilJul").innerText = `Nedtelling til julaften: ${dager} dager, ${timer} timer, ${minutter} minutter og ${sekunder} sekunder`;
}

setInterval(oppdaterNedtelling, 1000);
setInterval(oppdaterKlokke, 1000);

