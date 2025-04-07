let nummer = 0;


document.getElementById("btnVisBeskjed").addEventListener("click", fnVisBeskjed);
document.getElementById("btnNyttNummer").addEventListener("click", fnNyttNummer);


function fnVisBeskjed() {
let messageInputDiv = document.createElement("div");
messageInputDiv.id = "messageInputDiv";
messageInputDiv.innerHTML = `
    <label for="messageInput">Skriv inn en beskjed:</label>
    <input type="text" id="messageInput" />
    <button id="submitMessageBtn">OK</button>
`;
document.body.appendChild(messageInputDiv);

document.getElementById("submitMessageBtn").addEventListener("click", function () {
    let messageInput = document.getElementById("messageInput");
    let message = messageInput.value;
    document.body.removeChild(messageInputDiv);

    if (message) {
        let messageDiv = document.createElement("div");
        messageDiv.id = "messageDiv";
        messageDiv.innerHTML = `
            <p>${message}</p>
            <button id="removeMessageBtn">Fjern beskjed</button>
        `;
        document.body.appendChild(messageDiv);

        document.getElementById("removeMessageBtn").addEventListener("click", function () {
            document.body.removeChild(messageDiv);
        });
    }
});
if (message) {
    let messageDiv = document.createElement("div");
    messageDiv.id = "messageDiv";
    messageDiv.innerHTML = `
        <p>${message}</p>
        <button id="removeMessageBtn">Fjern beskjed</button>
    `;
    document.body.appendChild(messageDiv);

    document.getElementById("removeMessageBtn").addEventListener("click", function () {
        document.body.removeChild(messageDiv);
    });
}
}

function fnNyttNummer() {
    nummer++;
    localStorage.setItem('nummer', nummer); // Store the updated number in localStorage
    let clickableDiv = document.createElement("div");
    clickableDiv.id = "nummerLages";
    clickableDiv.innerHTML = `Nummer: ${nummer}`;
    clickableDiv.style.cursor = "pointer";

    clickableDiv.addEventListener("click", function () {
        alert(`Du klikket på nummer: ${nummer}`);
    });

    document.body.appendChild(clickableDiv);
    window.location.href = "/QueueSystem/overview.html";
}

// function fnVisNummer(nummer) {

//     // var data = localStorage.getItem('nummer');
//     document.getElementById("divBestillingsNummer").innerHTML = nummer;
// }


