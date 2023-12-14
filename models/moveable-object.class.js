class MovableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    acceleration = 3.5; 
    energy = 100;
    bosshealth = 100;
    lastHit = 0;
    coins = 0;
    salsabottles = 0;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    otherDirection = false;

    /**reduce the y axix when jumping and sets the height of the y axis when landing
     * checks the state 25 times per second so that pepe lands on the ground again
     */
    applyGravity() {
        setInterval(() => {                                    
            if (this.isAboveGround() || this.speedY > 0) {     
                this.y -= this.speedY;                         
                this.speedY -= this.acceleration;              
            }else{
                this.y = 180;
            }
        }, 1000 / 25);                                        
    };

    /** ThrowableObjects should always fall*/
    isAboveGround() {
        if (this instanceof ThrowableObject) {                
            return true;
        } else {
            return this.y < 160;
        }
    };

    /**check if something has collided with 
     * 
     * @param {string} mo - is moveable object
     * @returns 
     */
   
    isColliding(mo) {
        return (
            this.x + this.offset.left + this.width - this.offset.right >=
            mo.x + mo.offset.left &&
            this.y + this.offset.top + this.height - this.offset.bottom >=
            mo.y + mo.offset.top &&
            this.x + this.offset.left <= mo.x + mo.offset.left + mo.width - mo.offset.right &&
            this.y + this.offset.top <= mo.y + mo.offset.top + mo.height - mo.offset.bottom
        );
    }  

    /**check if something hitted and save the time in a number format, difference in ms
     * 
     * @param {string} damage reduce the energy when is colliding
     */
    hit(damage = 5) {
        this.energy -= damage;
        if (this.energy < 0) {
            this.energy = 0;
            this.y -= this.speedY;                                    
        } else {
            this.lastHit = new Date().getTime();          
        }
    }

    collectingCoins() {  
        this.coins += 20;
    }

    collectingBottles() {  
        this.salsabottles += 20;
    }


    removeThisCoin(coin) {
        const index = this.coins.indexOf(coin);
        if (index !== -1) {
            this.coins.splice(coin, 1);
        }
    }

    /**check if something hurt and save the time in a number format, difference in ms
     *      
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;        
        timepassed = timepassed / 1000;                                    
        return timepassed < 1;                                      
    }

    /**return energy = 0 if something is dead */
    isDead() {                                                       
        return this.energy == 0;                                     
    }

    /**play the pictures one after the other
     * 
     * @param {string} images -image path
     */
    playAnimation(images) {        
        let i = this.currentImage % images.length;                  
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;                                        
    };

    moveRight() {
        this.x += this.speed;
    }

    /**reduce the x axis for moving -5 px */
    moveLeft() {
        this.x -= this.speed;       
    }

    jump() {
        this.speedY = 30;
    }

    stopMovingLeft() {
        this.speed = 0;
    }
}

