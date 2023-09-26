class Chicken extends MovableObject {

    y = 340;

    height = 90;
    width = 90;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);     //super() verwenden wir nur einmal, danach reicht this. ...

        this.x = 200 + Math.random() * 500; // eine Zahl zwischen 200 und 500

        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {                     // damit die Funktion wieder mehr als einmal ausgeführt werden kann
            let i = this.currentImage % this.IMAGES_WALKING.length; // ist das Gleiche wie = let i= 0 % 6; null geteilt duch sechs = 0, Rest 0
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;                // um das gesetzte image immer um eins zu erhöhen
        }, 200);                               // soll alle 200 ms ausgeführt werden
    }


}