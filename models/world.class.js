class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    trowBottleBar = new TrowBottleBar();
    coinBar = new CoinBar();
    endbossBar = new EndbossBar();
    throwableObjects = [];
    coins = this.level.coins;
    salsabottles = this.level.salsabottles;
    enemies = this.level.enemies;

    hasHitBoss = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkCollisionCoins();
            this.checkCollisionBottles();
            this.checkCollisionsBottlesToEndboss()
        }, 200);       //1x? pro Sekunde prüfen, ob Elemente kolliedieren oder nicht
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.trowBottleBar.collectedBottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.trowBottleBar.collectedBottles -= 20;
            this.character.salsabottles -= 20;
            this.trowBottleBar.setCollectedBottles(this.trowBottleBar.collectedBottles);

        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround()) {
                    this.character.jump();
                    enemy.isDead();
                    console.log('chicken is dead');
                    enemy.playAnimation(enemy.IMAGES_DEAD);
                    setTimeout(() => {

                        if (!this.enemies.endboss) {
                            this.level.enemies.splice(index, 1);
                            console.log('chicken is far far away');
                        }
                    }, 150);
                } else {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
                console.log('chicken is dead');
            }
        });
    }




    checkCollisionCoins() { //N2
        this.level.coins.forEach((coins, index) => { // enemy ist immer der aktuelle Gegner/Wenn ich 5 Gegner habe, wird immer das in der geschweiften Klammer jede Sekunde für jeden Gegnerausgeführt .
            if (this.character.isColliding(coins)) {
                this.character.collectingCoins();
                console.log("Kollision erkannt, lösche Münze an Index " + index);
                this.coins.splice(index, 1);
                this.coinBar.setCollectedCoins(this.character.coins);
            }
        });
    }

    checkCollisionBottles() { //N4
        this.level.salsabottles.forEach((salsabottle, index) => { // enemy ist immer der aktuelle Gegner/Wenn ich 5 Gegner habe, wird immer das in der geschweiften Klammer jede Sekunde für jeden Gegnerausgeführt .
            if (this.character.isColliding(salsabottle)) {
                this.character.collectingBottles();
                console.log("Kollision erkannt, lösche Bottle an Index " + index);
                this.salsabottles.splice(index, 1);
                this.trowBottleBar.setCollectedBottles(this.character.salsabottles);
            }
        });
    }

    checkCollisionsBottlesToEndboss() {
        this.enemies.forEach((enemy) => {                             // enemy ist immer der aktuelle Gegner/Wenn ich 5 Gegner habe, wird immer das in der geschweiften Klammer jede Sekunde für jeden Gegnerausgeführt .
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(enemy) && !bottle.hasHitBoss) {// Wenn eine Kollision zwischen der Flasche und dem Endboss auftritt:
                    if (enemy instanceof Endboss) {
                        enemy.hit(25);
                        this.endbossBar.setBosshealth(enemy.energy);
                        bottle.hasHitBoss = true;
                    } else {
                        enemy.energy = 0;
                    }
                }
            });
        });
    }

    draw() { // weil die Welt gezeichnet werden muss
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)//canvas wird gelöscht

        this.ctx.translate(this.camera_x, 0);
        // this.addObjectsToMap(this.level.salsabottles);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.salsabottles);
        this.ctx.translate(-this.camera_x, 0);//Back
        //----Space for fixed objects----
        this.addToMap(this.statusBar);
        this.addToMap(this.trowBottleBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.endbossBar);

        this.ctx.translate(this.camera_x, 0);//forward

        this.addToMap(this.character);//hier brauchen wir das this, weil wir von dieser Welt auf den Contaxt drauf zugreifen wollen. 
        //alle Varibalen, die wir aus dieser Klasse verwenden, müssen wir mit -this- öffnen.
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

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
        this.ctx.restore();                     // alles wieder Rückgängig machen, sodass es nicht mehr gespiegelt ist

    }
}