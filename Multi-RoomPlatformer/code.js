// "use strict";

const canvas = document.querySelector('#tegnebrett');
const c = canvas.getContext('2d');

console.log(c);

canvas.width = 1024;
canvas.height = 576;

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/backgroundLevel1.png'
});

const player = new Player();

// For å holde rede på om knappene er holdt nede eller ikke
const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

// let bottom = y + 100
// Selve spillmotoren
function animate() {
    window.requestAnimationFrame(animate);
    //console.log('running'); 
    backgroundLevel1.draw();

    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw();
    })

    // For å unngå "kollisjon" mellom knappene a og d
    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 5
    else if (keys.a.pressed) player.velocity.x = -5

    player.draw();
    player.update();
}

animate();

