class Chicken extends MovableObject {

    y = 340;

    height = 90;
    width = 90;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);     //super() verwenden wir nur einmal, danach reicht this. ...
        this.loadImages(this.IMAGES_DEAD);
        this.x = 200 + Math.random() * 2900; // eine Zahl zwischen 200 und 500

        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {         //diese Funktion beschreibt, wie oft etwas ausgeführt werden soll
            this.moveLeft();
        }, 1000 / 60);              // ...jede Sekunde verändert sich die x-Achse // alles in der geschweiften Klammer wird alle 1000 millisekunden ausgeführt



        setInterval(() => {                     // damit die Funktion wieder mehr als einmal ausgeführt werden kann
            this.playAnimation(this.IMAGES_WALKING);
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.speed = 0;
            }

        }, 200);                               // soll alle 200 ms ausgeführt werden
    }


}