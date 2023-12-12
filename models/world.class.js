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

    /** constructor load the world and usefull functions, use super() one time, after that use this.
    * set the canvas in the world
    */
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

    /**check if elements are colliding */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkCollisionCoins();
            this.checkCollisionBottles();
            this.checkCollisionsBottlesToEndboss()
        }, 100);       
    }

    /**this function checks if the character has bottles to throw */
    checkThrowObjects() {
        if (this.keyboard.D && this.trowBottleBar.collectedBottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.trowBottleBar.collectedBottles -= 20;
            this.character.salsabottles -= 20;
            this.trowBottleBar.setCollectedBottles(this.trowBottleBar.collectedBottles);
        }
    }

    /**this function checks if the character is colliding with an enemy */
    checkCollisions() {
        this.level.enemies.forEach((enemy, index) => {
            if (!enemy.isDead() && this.character.isColliding(enemy)) {
                if (this.character.isAboveGround()) {
                    this.character.jump();
                    enemy.isDead();
                    enemy.energy = 0;                       
                    setTimeout(() => {
                        if (!(enemy instanceof Endboss)) {                            
                            let index = this.level.enemies.indexOf(enemy);
                            this.level.enemies.splice(index, 1);                            
                        }
                    }, 250);
                } else {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            }
        });
    }

    /**this function checks if the character is colliding with an coin, collect an splice this coin from world */
    checkCollisionCoins() { 
        this.level.coins.forEach((coins, index) => { 
            if (this.character.isColliding(coins)) {
                this.character.collectingCoins();                
                this.coins.splice(index, 1);
                this.coinBar.setCollectedCoins(this.character.coins);               
                coin_sound.play();
            }
        });
    }

    /**this function checks if the character is colliding with a botlle, collect an splice from world */
    checkCollisionBottles() { 
        this.level.salsabottles.forEach((salsabottle, index) => { 
            if (this.character.isColliding(salsabottle)) {
                this.character.collectingBottles();                
                this.salsabottles.splice(index, 1);
                this.trowBottleBar.setCollectedBottles(this.character.salsabottles);                
                bottle_sound.play();
            }
        });
    }

    /**this function checks if the bottle is colliding with the endboss, reduce the energy of the endboss */
    checkCollisionsBottlesToEndboss() {
        this.enemies.forEach((enemy) => {                            
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(enemy) && !bottle.hasHitBoss) {
                    if (enemy instanceof Endboss) {
                        enemy.hit(25);
                        this.endbossBar.setBosshealth(enemy.energy);
                        bottle.hasHitBoss = true;
                        bottle.x = bottle.x + 50;
                    } else {
                        enemy.energy = 0;
                    }
                }
            });
        });
    }

    /**this function draw the world */
    draw() { 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);        
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

        this.addToMap(this.character);         
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        
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

    /**this function mirrors the images when they go left */
    flipImage(mo) {
        this.ctx.save();                         
        this.ctx.translate(mo.width, 0);        
        this.ctx.scale(-1, 1);                  
        mo.x = mo.x * -1;
    }

    /**this function mirrors the images back in original position when they go right-undoes the mirroring */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();                     

    }

    muteAudio(){
        this.coin_sound.muted=true;    
        this.bottle_sound.muted=true;               
    }
    
    unmuteAudio(){
        this.coin_sound.muted=false;    
        this.bottle_sound.muted=false;        
    }
}