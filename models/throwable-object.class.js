class ThrowableObject extends MovableObject {



    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 90;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {                                    //hier müssen wir regelmäßig die Y Achse verringern
            this.x += 10;
        }, 25);              //Funktion soll alle 50ms ausgeführt werden
    }

}