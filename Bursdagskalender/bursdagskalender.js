document.getElementById('bursdagsForm').addEventListener('submit', leggTilBursdag);

const bursdager = [];  // Liste for å lagre bursdager

function leggTilBursdag(e) {
    e.preventDefault();
    
    // Hent verdier fra skjemaet
    const navn = document.getElementById('navn').value;
    const bursdag = document.getElementById('bursdag').value;

    if(navn && bursdag) {
        const bursdagsdato = new Date(bursdag);

        // Beregn alder
        const alder = beregnAlder(bursdagsdato);

        // Legg til bursdagen i listen som et objekt
        bursdager.push({
            navn: navn,
            bursdag: bursdagsdato,
            alder: alder,
            måned: bursdagsdato.getMonth() // 0 = Januar, 1 = Februar, osv.
        });

        // Sorter og vis bursdager
        sorterOgVisBursdager();
        
        // Tøm skjemaet etter innsending
        document.getElementById('bursdagsForm').reset();
    }
}

// Funksjon for å beregne alder
function beregnAlder(fødselsdato) {
    const nå = new Date();
    let alder = nå.getFullYear() - fødselsdato.getFullYear();
    const fødselsmåned = fødselsdato.getMonth();
    const fødselsdag = fødselsdato.getDate();

    // Juster hvis personen ikke har hatt bursdag enda i år
    if (nå.getMonth() < fødselsmåned || (nå.getMonth() === fødselsmåned && nå.getDate() < fødselsdag)) {
        alder--;
    }

    return alder;
}

// Funksjon for å sortere bursdager etter måned
function sorterOgVisBursdager() {
    const liste = document.getElementById('bursdagsListe');
    liste.innerHTML = '';  // Tøm listen før ny visning

    // Sorter bursdager etter måned
    bursdager.sort((a, b) => a.bursdag - b.bursdag);

    // Kategoriser bursdager etter måned
    const måneder = [
        'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
    ];

    // Lag en oversikt for hver måned
    måneder.forEach((måned, index) => {
        const bursdagerIMåned = bursdager.filter(person => person.måned === index);

        if (bursdagerIMåned.length > 0) {
            // Lag en overskrift for hver måned med bursdager
            const månedHeader = document.createElement('h3');
            månedHeader.textContent = måned;
            liste.appendChild(månedHeader);

            // Vis personene under hver måned
            bursdagerIMåned.forEach(person => {
                const li = document.createElement('li');
                li.textContent = `${person.navn} (${person.alder} år): ${person.bursdag.toLocaleDateString('no-NO')}`;
                liste.appendChild(li);
            });
        }
    });
}
