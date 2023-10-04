let canvas;
let world;
let keyboard = new Keyboard();




function init() {

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    //ctx = canvas.getContext('2d');

    console.log('My character is', world.character); // oder world['character']

}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;            //Taste nach rechts wurde gedrückt
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;            //Taste nach links wurde gedrückt
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;            //Taste nach oben wurde gedrückt
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;            //Taste nach unten wurde gedrückt
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;            //Taste Space/Leerzeichen wurde gedrückt
    }
    if (e.keyCode == 68) {
        keyboard.D = true;            //Taste Space/Leerzeichen wurde gedrückt
    }
    console.log(e);
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;            //Taste nach rechts wurde losgelassen
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;            //Taste nach links wurde losgelassen
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;            //Taste nach oben wurde losgelassen
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;            //Taste nach unten wurde losgelassen
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;            //Taste Space/Leerzeichen wurde losgelassen
    }
    if (e.keyCode == 68) {
        keyboard.D = false;            //Taste Space/Leerzeichen wurde losgelassen
    }
    console.log(e);
});