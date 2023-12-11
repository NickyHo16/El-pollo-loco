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

   // splash_sound = new Audio('audio/bottle_splash.mp3');


    constructor(x, y, endboss) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_BOTTLEROTATION);
        this.loadImages(this.IMAGES_BOTTLESPLASH);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 90;
        this.endboss = endboss; // Hier wird der endboss übergeben
        this.throw();
               
    }

    throw() {
       // if (this.characterHasBottles()) { // Überprüfen, ob der Charakter noch Flaschen hat   
      // if (world.trowBottleBar.collectedBottles > 0) {    
        this.speedY = 30;
        this.applyGravity();
        
        setInterval(() => {                                    //hier müssen wir regelmäßig die Y Achse verringern
            //this.splash_sound.pause();
            
            if (this.y >= 280) {                
                this.playAnimation(this.IMAGES_BOTTLESPLASH);
                //this.splash_sound.play();// sound hört nicht auf zu spielen
                          
           } else if(this.hasHitBoss === true ){
            this.playAnimation(this.IMAGES_BOTTLESPLASH);
           }
             else {
                this.playAnimation(this.IMAGES_BOTTLEROTATION);
                this.x += 10;                 
            }
        }, 25);              //Funktion soll alle 50ms ausgeführt werden
    }

    muteAudio(){
        this.splash_sound.muted=true;                         
    }
    
    unmuteAudio(){
        this.splash_sound.muted=false;                   
    }
}
    
    //characterHasBottles() {
      //  return this.trowBottleBar.collectedBottles > 0; // Überprüfen, ob der Charakter noch Flaschen hat
    //}
//}


//JUNUS wurfanimation BOTTLE
//throw() {
 //   this.speedY = 30;
 //   this.applyGravity();
 //   setInterval(() => {                                    //hier müssen wir regelmäßig die Y Achse verringer     
 //           this.playAnimation(this.IMAGES_BOTTLEROTATION);
 //           this.x += 10;    
 //   }, 25);              //Funktion soll alle 50ms ausgeführt werden
//}
