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

    world;
    walking_sound = new Audio('audio/running.mp3');



    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);     //wir laden die Bilder am Anfang // super() verwenden wir nur einmal, danach reicht this. ...
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.walking_sound.play();
                this.otherDirection = true;
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {//!=ist nicht über dem Boden, nur dann springen wir
                this.jump();                                      // diese Funktion ohne das:&& !this.isAboveGround() und pepe kann fliegen ... 
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {                                 // damit die Funktion wieder mehr als einmal ausgeführt werden kann
            if (this.isAboveGround()) {                     //Wenn er sich in der Luft befindet,
                this.playAnimation(this.IMAGES_JUMPING);    // zeigen wir diese Animation an 
            } else {                                        // und wenn nicht, zeigen wir die nachfolgenden Bilder an:
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {  //logisches oder || entweder links true oder rechts true
                    //this.x += this.speed;                    
                    this.playAnimation(this.IMAGES_WALKING);//walk animation
                }
            }
        }, 50);                               // soll alle 100 ms ausgeführt werden
    }

    jump() {
        this.speedY = 30;
    }


}