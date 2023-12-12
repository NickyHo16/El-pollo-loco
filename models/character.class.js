class Character extends MovableObject {    
    y = 80;
    height = 270;
    width = 150;
    speed = 10;

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    IMAGES_LONG_IDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];

    world;

    /**
    * constructor load the images and usefull functions, use super() one time, after that use this.
    */
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);    
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_HURT);

        this.applyGravity();
        this.animate();
    }

    /**this function animate the chacacter and his moves in several directions with sounds
     * it definded also the end of the level for Pepe
     * and the movement of the camera with Pepe in the world
     * sets the time how often the function should be executed  
     */
    animate() {
        setInterval(() => {            
            walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;                
                walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();                
                walking_sound.play();
                this.otherDirection = true;
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {   
                this.jump();                                                            
                jumping_sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        /**this function allows the repeated execution of the different states of Pepe and his sounds, checks with repetition 100 
        * and play his animation for this state
        */
        setInterval(() => {                                 
            if (this.isDead()&& !this.isDeadSoundPlayed) {                
                isdead_sound.play();
                drama_sound.pause();                
                this.playAnimation(this.IMAGES_DEAD);
                loseGameScreen();                                
            } else if (this.isHurt()) {                     
                this.playAnimation(this.IMAGES_HURT);                
                hit_sound.play();
            } else if (this.isAboveGround()) {              
                this.playAnimation(this.IMAGES_JUMPING);     
            } else if                                       
                (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {                                      
                this.playAnimation(this.IMAGES_WALKING);    
            } else if (this.world.keyboard.D) {
                this.playAnimation(this.IMAGES_IDLE);       
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 100);                                            
    }

    /** defined the speed while Pepe is jumping */
    jump() {
        this.speedY = 30;
    }


muteAudio(){
    this.walking_sound.muted=true;    
    this.jumping_soundwalking_sound.muted=true;
    this.hit_soundwalking_sound.muted=true;
    this.isdead_soundwalking_sound.muted=true;
}

unmuteAudio(){
    this.walking_sound.muted=false;    
    this.jumping_soundwalking_sound.muted=false;
    this.hit_soundwalking_sound.muted=false;
    this.isdead_soundwalking_sound.muted=false;
}

}