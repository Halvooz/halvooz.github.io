console.log("Javascript e her!")

function createSnowflakes() {
    for (let i = 1; i <= 402; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snow');
        snowflake.style.width = '10px';
        snowflake.style.height = '10px';
        snowflake.style.background = 'white';
        snowflake.style.opacity = Math.random().toFixed(4);
        snowflake.style.transform = `translate(${Math.random() * 100}vw, -10px) scale(${Math.random().toFixed(4)})`;
        snowflake.style.animation = `fall-${i} ${Math.random() * 30 + 10}s ${-Math.random() * 30}s linear infinite`;

        const keyframes = `
            @keyframes fall-${i} {
                ${Math.random() * 100}% {
                    transform: translate(${Math.random() * 100}vw, ${Math.random() * 100}vh) scale(${Math.random().toFixed(4)});
                }
                to {
                    transform: translate(${Math.random() * 100}vw, 100vh) scale(${Math.random().toFixed(4)});
                }
            }
        `;
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        document.body.appendChild(snowflake);
    }
}

function startSnowfall(){
    createSnowflakes();
}

startSnowfall();

// setInterval(createSnowflakes, 1000); // Adjust the interval as needed
