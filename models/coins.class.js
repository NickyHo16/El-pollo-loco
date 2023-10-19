class Coins extends MovableObject {

    y = 100;

    height = 100;
    width = 100;

    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];



    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COINS);     //super() verwenden wir nur einmal, danach reicht this. ...
        // this.x = 40;
        //this.y = 85;
        this.x = 250 + Math.random() * 1800;//* 2900; // eine Zahl zwischen 200 und 500
        this.y = Math.random() * 150;

        // this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {

        setInterval(() => {                     // damit die Funktion wieder mehr als einmal ausgeführt werden kann
            this.playAnimation(this.IMAGES_COINS);
        }, 200);                               // soll alle 200 ms ausgeführt werden
    }


}