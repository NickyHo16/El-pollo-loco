class ThrowableObject extends MovableObject {

    IMAGES_BOTTLEROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    IMAGES_BOTTLESPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    /** constructor load the images and usefull functions, use super() one time, after that use this.
    * set the dimension of the bottles in the world
    */
    constructor(x, y, endboss) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_BOTTLEROTATION);
        this.loadImages(this.IMAGES_BOTTLESPLASH);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 90;
        this.endboss = endboss; 
        this.throw();               
    }

    /**reduce the y axis for the bottles if they throw */
    throw() {           
        this.speedY = 30;
        this.applyGravity();        
        setInterval(() => {            
            if (this.y >= 280) {                
                this.playAnimation(this.IMAGES_BOTTLESPLASH);                        
           } else if(this.hasHitBoss === true ){
            this.playAnimation(this.IMAGES_BOTTLESPLASH);
           }
             else {
                this.playAnimation(this.IMAGES_BOTTLEROTATION);
                this.x += 10;                 
            }
        }, 25);              
    }

    muteAudio(){
        this.splash_sound.muted=true;                         
    }
    
    unmuteAudio(){
        this.splash_sound.muted=false;                   
    }
}
    
  