class Endboss extends MovableObject {
    height = 400;
    width = 300;
    y = 60;
    speed = 5;

    IMAGES_WALKING = [ //alert pics
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
    ];

    IMAGES_BOSSRUN = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    IMAGES_BOSSATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];
    IMAGES_BOSSHURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];
    IMAGES_BOSSDEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    hadFirstContact = false;


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);     //super() verwenden wir nur einmal, danach reicht this. ...
        this.loadImages(this.IMAGES_BOSSRUN);
        this.loadImages(this.IMAGES_BOSSATTACK);
        this.loadImages(this.IMAGES_BOSSHURT);
        this.loadImages(this.IMAGES_BOSSDEAD);
        this.x = 2500;
        this.animate();
    }

    /**
     * Junus Boss Animate function
     */

    //animate() {
    //    let i = 0;                                          //variable hinzugefügt, damit das Bild von Anfang abgespielt werden kann
    //   setInterval(() => {                                 // damit die Funktion wieder mehr als einmal ausgeführt werden kann
    //       if (i < 10) {                                   //hinzugefügt weil die Bilder bis zu 10 mal ausgeführt werden bevor die andere Animation startet /BOSSRUN
    //          this.playAnimation(this.IMAGES_WALKING);     //alert pics
    //      } else {
    //          this.playAnimation(this.IMAGES_BOSSRUN);
    //          this.moveLeft();
    //      }
    //       i++;                                                  //hinzugefügt dass immer um ein Bild erhöht wird
    //      if (world.character.x > 2100 && !this.hadFirstContact) { //hinzugefügt, dass die Bilder starten sobald der sich der character bei x>2100 pixeln befindet
    //          i = 0;                                            //hinzugefügt, ist das der Fall dann setzt sich i wieder auf 0
    //           this.hadFirstContact = true;                      //hinzugefügt, die Variable hadFirstContact wird auf True gesetzt, damit die Animation nicht wieder von vorne beginnt sobald wir wieder in die andere Richtung laufen

    //       }                                                 //Die Animation wir so nur 1x ausgeführt
    //   }, 200);                               // soll alle 200 ms ausgeführt werden

    //  }


    /**
     * real function Boss Animate start
     */

    //animate() {
    //    let i = 0;
    // Hier gehen wir davon aus, dass die x-Position des Endbosses in this.x gespeichert ist.

    // setInterval(() => {
    //   if (i < 10) {
    //      if (world.character.x + 400 > this.x) { //(world.character.x > 2100 && world.character.x + 500 > this.x && Math.abs(world.character.x - bossX) < radius) {
    //          i = 0;
    //          this.hadFirstContact = true;
    //        this.playAnimation(this.IMAGES_BOSSATTACK);
    //      this.moveLeft();
    //    if (this.x <= 650) {
    //          this.playAnimation(this.IMAGES_BOSSATTACK);
    //          this.stopMovingLeft();
    //       }
    //   } else if (this.isHurt()) {                     //wenn wir verletzt sind, spielen wir diese Animati9on zwischen den geschweiften Klammern ab
    //       this.playAnimation(this.IMAGES_BOSSHURT);
    //    } else if (this.isBossDead()) {                     //wenn wir verletzt sind, spielen wir diese Animati9on zwischen den geschweiften Klammern ab
    //       this.playAnimation(this.IMAGES_BOSSDEAD);
    //   } else {
    //       this.playAnimation(this.IMAGES_WALKING);
    //    }

    //     }

    // }, 200);

    //  }

    /**
     * real function Boss Animate end
     */




    //}








    //animate() {
    // let i = 0;

    //setInterval(() => {
    // if (i < 10) {
    // if (world.character.x > 2100 && !this.hadFirstContact) {
    //    i = 0;
    //      this.hadFirstContact = true;

    //    }
    //      this.playAnimation(this.IMAGES_WALKING);
    //    } else {
    //          this.playAnimation(this.IMAGES_BOSSRUN);
    //            this.moveLeft();
    //          }
    //
    //        i++;
    //      }, 200);
    //  }

    /**
     * 
     */

    //animate() {
    //   let i = 0;

    //  setInterval(() => {
    //      if (i < 10) {
    //          if (world.character.x > 2100 && !this.hadFirstContact) {
    //              i = 0;
    //              this.hadFirstContact = true;

    //          }
    //         this.playAnimation(this.IMAGES_WALKING);
    //      } else {
    //          this.playAnimation(this.IMAGES_BOSSRUN);
    //          this.moveLeft();
    //      }

    //       i++;
    //   }, 200);
    //  }

    /**
     * 
     */

    animate() {
        let bossDead = false; // Initial ist der Boss nicht tot


        setInterval(() => {
            if (this.isBossDead() && !bossDead) {
                console.log('Boss is dead');
                this.playAnimation(this.IMAGES_BOSSDEAD);
                bossDead = true; // Setzen Sie die Variable auf true, um anzuzeigen, dass der Boss tot ist
                return; // Beenden Sie die Funktion// Setzen Sie einen Timer, um sicherzustellen, dass die "Boss is dead" Animation vollständig abgespielt wird
            }
            if (bossDead) {
                // Wenn der Boss tot ist, kehren Sie einfach zurück, ohne andere Animationen zu starten
                return;
            }

            else if (this.isHurt()) {  // Wenn der Endboss verletzt ist, fahre mit der Hurt-Animation fort
                console.log('Boss is hurt');
                this.playAnimation(this.IMAGES_BOSSHURT);
            } else if (world.character.x + 500 > this.x) { // Wenn der Endboss in der Nähe des Characters ist, spiele die Attack-Animation ab
                console.log('Boss is attacking');
                this.playAnimation(this.IMAGES_BOSSATTACK);
                this.moveLeft();
            } else {
                console.log('Boss is walking');
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);

    }

}