class MovableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    bosshealth = 100;
    lastHit = 0;
    coins = 0;
    salsabottles = 0;

    otherDirection = false;

    applyGravity() {
        setInterval(() => {                                    //hier müssen wir regelmäßig die Y Achse verringern
            if (this.isAboveGround() || this.speedY > 0) {     //hier testen wir ob das y kleiner als 160 pixel ist, weil der Fußboden auf 160 Pixel ist
                this.y -= this.speedY;                         //auf das y die speed abziehen
                this.speedY -= this.acceleration;              //negative Geschwindigkeit weil es nach unten schiesst/ von speedY die Beschleunigung abziehen
            }
        }, 1000 / 50);                                         //Funktion soll 25 Mal pro s ausgeführt werden//war 25
    };

    isAboveGround() {
        if (this instanceof ThrowableObject) {                 // ThrowableObjects should always fall
            return true;
        } else {
            return this.y < 160;
        }
    };

    //charcter.isColliding(chicken)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&                     // Verwenden von mo.x + mo.width statt mo.x allein
            this.y < mo.y + mo.height;                      // Verwenden von mo.y + mo.height statt mo.y allein
    }

    hit(damage = 5) {
        this.energy -= damage;
        if (this.energy < 0) {
            this.energy = 0;
            this.y -= this.speedY;                         //neu hinzugefügt damit Pepe runterfällt                      

        } else {
            this.lastHit = new Date().getTime();          //so werden Zeiten in Zahlenformen gespeichert //Difference in ms
        }
    }

    collectingCoins() {  //N1
        this.coins += 20;
    }

    collectingBottles() {  //N5
        this.salsabottles += 20;
    }


    removeThisCoin(coin) {//N3
        const index = this.coins.indexOf(coin);
        if (index !== -1) {
            this.coins.splice(coin, 1);
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;        // wieviel Zeit ist vergangen = aktueller Zeitpunkt - dem Zeitpunkt wo wir das letzte mal getroffen wurden
        timepassed = timepassed / 1000;                              //wenn wir Sekunden wollen//Difference in s         
        return timepassed < 1;                                       //wir wurden innerhalb der letzten 1 Sekunden getroffen//dann returned die Funktion den Wert true
    }

    isDead() {                                                       //diese Funktion soll true returnen wenn er tot ist, und anderenfalls false
        return this.energy == 0;                                     //wenn die Energy 0 ist, dann kommt aus dieser Funktion der Wert 0 raus.
    }

    playAnimation(images) {
        //walk animation
        let i = this.currentImage % images.length;                  // ist das Gleiche wie = let i= 0 % 6; null geteilt duch sechs = 0, Rest 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;                                        // um das gesetzte image immer um eins zu erhöhen
    };

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;       // die x-Achse soll sich um -5 pixel verringern aber nicht nur einmal sondern: ...
    }

    jump() {
        this.speedY = 30;
    }

    stopMovingLeft() {
        this.speed = 0;
    }
}





// Bessere Formel zur Kollisionsberechnung (Genauer)
//isColliding(obj) {
//   return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
//       (this.Y + this.offsetY + this.height) >= obj.Y &&
//       (this.Y + this.offsetY) <= (obj.Y + obj.height) //&&
//   obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
//}





/**
 * diese Funktion benötige ich nicht, weil wir haben die isDead Funktion, die vererbt wird
 * isBossDead() {                                                   //diese Funktion soll true returnen wenn er tot ist, und anderenfalls false
        return world.endbossBar.bosshealth == 0;                     //wenn die bosshealth 0 ist, dann kommt aus dieser Funktion der Wert 0 raus.
    }

 */