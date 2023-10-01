class World {

    character = new Character();

    level = level1;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => { // enemy ist immer der aktuelle Gegner/Wenn ich 5 Gegner habe, wird immer das in der geschweiften Klammer jede Sekunde für jeden Gegnerausgeführt .
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                }
            });
        }, 200);       //1x? pro Sekunde prüfen, ob Elemente kolliedieren oder nicht
    }

    draw() { // weil die Welt gezeichnet werden muss
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)//canvas wird gelöscht

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);//hier brauchen wir das this, weil wir von dieser Welt auf den Contaxt drauf zugreifen wollen. 
        //alle Varibalen, die wir aus dieser Klasse verwenden, müssen wir mit -this- öffnen.
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);


        //damit wird draw immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);

        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();                        // aktueller Status von unserem Context speichern
        this.ctx.translate(mo.width, 0);        // Methode ändern wie wir die Bilder einfügen
        this.ctx.scale(-1, 1);                  // Bild umdrehen an der y-Achse - spiegeln
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();                        // alles wieder Rückgängig machen, sodass es nicht mehr gespiegelt ist

    }
}