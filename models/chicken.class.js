class Chicken extends MovableObject {

    y = 340;
    height = 90;
    width = 90;

    offSet = {
        top: 10,
        right: 0,
        bottom: 0,
        left: 0
    }

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];
    

    /** constructor load the images and usefull functions, use super() one time, after that use this.
    * set the position of the chickens in the world
    */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);     
        this.loadImages(this.IMAGES_DEAD);
        this.x = 200 + Math.random() * 2900; 

        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    /**this function animate the chicken and his moves in one direction
     * change the x axis every seconds so that the chickens run to the left   
     * sets the time how often the function should be executed  
     */
    animate() {
        setInterval(() => {       
            this.moveLeft();
        }, 1000 / 60);              


    /**this function allows the repeated execution of the different states of the chicken, checks with repetition 200 
    * and play his animation for this state
    * that the function can be executed more often again
    */
        setInterval(() => {                        
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.speed = 0;                                  
            }
            if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);                
            }
        }, 200);                               
    }


}