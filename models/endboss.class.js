class Endboss extends MovableObject {
    height = 400;
    width = 300;
    y = 60;
    speed = 25;

    offSet = {
        top: 20,
        right: 40,
        bottom: 15,
        left: 100
    }

    IMAGES_WALKING = [ 
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

    world;
    hadFirstContact = false;

    
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);                       
        this.loadImages(this.IMAGES_BOSSRUN);
        this.loadImages(this.IMAGES_BOSSATTACK);
        this.loadImages(this.IMAGES_BOSSHURT);
        this.loadImages(this.IMAGES_BOSSDEAD);
        this.x = 2500;
        this.animate();
    }



    animate() {

        setInterval(() => {
            if (this.isDead()) {                
                this.playAnimation(this.IMAGES_BOSSDEAD);                
                deadBoss_sound.play();                
                drama_sound.pause();
                winnerScreen();                
            }
            else if (this.isHurt()) {                   
                this.playAnimation(this.IMAGES_BOSSHURT);                
                hurtBoss_sound.play();
            } else if (world?.character.x + 500 > this.x) {               
                this.playAnimation(this.IMAGES_BOSSATTACK);
                this.moveLeft();                
                drama_sound.play();
            } else {                
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);

    }

    muteAudio(){
        this.deadBoss_sound.muted=true;    
        this.hurtBoss_sound.muted=true;  
        this.drama_sound.muted=true;        
    }
    
    unmuteAudio(){
        this.deadBoss_sound.muted=false;    
        this.hurtBoss_sound.muted=false;  
        this.drama_sound.muted=false;       
    }

}

