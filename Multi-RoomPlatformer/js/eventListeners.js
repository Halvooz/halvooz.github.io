window.addEventListener('keydown', (event) => {
    // console.log(event)
    switch (event.key) {
        case 'w':
            if (player.velocity.y === 0) {
                player.velocity.y = -20;
            }
            break
        case 'a':
            // venstre
            keys.a.pressed = true
        break
        case 'd':
            // høyre
            keys.d.pressed = true
        break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            // venstre
            keys.a.pressed = false
        break
        case 'd':
            // høyre
            keys.d.pressed = false
        break
    }
})