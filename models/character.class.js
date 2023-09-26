class Character extends MovableObject {
    y = 160;
    height = 270;
    width = 150;

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    world;



    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');

        this.loadImages(this.IMAGES_WALKING);     //super() verwenden wir nur einmal, danach reicht this. ...

        this.animate();
    }

    animate() {
        setInterval(() => {                     // damit die Funktion wieder mehr als einmal ausgeführt werden kann
            //  if (this.world.keyboard.RIGHT) {
            let i = this.currentImage % this.IMAGES_WALKING.length; // ist das Gleiche wie = let i= 0 % 6; null geteilt duch sechs = 0, Rest 0
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;                // um das gesetzte image immer um eins zu erhöhen
            // }
        }, 100);                               // soll alle 100 ms ausgeführt werden
    }

    jump() {

    }


}