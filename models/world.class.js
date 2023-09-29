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
    }

    setWorld() {
        this.character.world = this;
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
            this.ctx.save();                        // aktueller Status von unserem Context speichern
            this.ctx.translate(mo.width, 0);        // Methode ändern wie wir die Bilder einfügen
            this.ctx.scale(-1, 1);                  // Bild umdrehen an der y-Achse - spiegeln
            mo.x = mo.x * -1;

        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height); // hier wir dann das gespiegelte Bild eingefügt
        // Red rectangle
        this.ctx.beginPath();
        this.ctx.lineWidth = '5';
        this.ctx.strokeStyle = 'red';
        this.ctx.rect(mo.x, mo.y, mo.x + mo.width, mo.y + mo.height);
        this.ctx.stroke();


        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();                        // alles wieder Rückgängig machen, sodass es nicht mehr gespiegelt ist
        }
    }
}