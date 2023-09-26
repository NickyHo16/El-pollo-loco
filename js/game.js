let canvas;
let world;
let keyboard = new Keyboard();




function init() {

    canvas = document.getElementById('canvas');
    world = new World(canvas);
    //ctx = canvas.getContext('2d');

    console.log('My character is', world.character); // oder world['character']

}

window.addEventListener("keydown", (e) => {
    if (e.keycode == 39) {
        keyboard.RIGHT = true;            //Taste nach rechts wurde gedrückt
    }
    if (e.keycode == 37) {
        keyboard.LEFT = true;            //Taste nach links wurde gedrückt
    }

    if (e.keycode == 38) {
        keyboard.UP = true;            //Taste nach oben wurde gedrückt
    }
    if (e.keycode == 40) {
        keyboard.DOWN = true;            //Taste nach unten wurde gedrückt
    }
    if (e.keycode == 32) {
        keyboard.SPACE = true;            //Taste Space/Leerzeichen wurde gedrückt
    }
    console.log(e);
});

window.addEventListener("keyup", (e) => {
    if (e.keycode == 39) {
        keyboard.RIGHT = false;            //Taste nach rechts wurde gedrückt
    }
    if (e.keycode == 37) {
        keyboard.LEFT = false;            //Taste nach links wurde gedrückt
    }

    if (e.keycode == 38) {
        keyboard.UP = false;            //Taste nach oben wurde gedrückt
    }
    if (e.keycode == 40) {
        keyboard.DOWN = false;            //Taste nach unten wurde gedrückt
    }
    if (e.keycode == 32) {
        keyboard.SPACE = false;            //Taste Space/Leerzeichen wurde gedrückt
    }
    console.log(e);
});