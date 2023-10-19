class SalsaBottle extends MovableObject {

    y = 330;

    height = 100;
    width = 100;

    IMAGES_SAlSABOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_SAlSABOTTLE);     //super() verwenden wir nur einmal, danach reicht this. ...

        this.x = 300 + Math.random() * 1800;//* 2900; // eine Zahl zwischen 200 und 500
        this.animate();
    }

    animate() {

        setInterval(() => {                     // damit die Funktion wieder mehr als einmal ausgeführt werden kann
            this.playAnimation(this.IMAGES_SAlSABOTTLE);
        }, 500);                               // soll alle 200 ms ausgeführt werden
    }


}
