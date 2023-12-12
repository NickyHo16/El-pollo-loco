class Cloud extends MovableObject {

    y = 20;
    width = 500;
    height = 300;
    speed = 0.15;

    /** constructor load the images and usefull functions, use super() one time, after that use this.
    * set the position of the clouds in the world
    */
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 3500; 
        this.animate();
    }

    /**this function animate the clouds and his moves in one direction          
     */
    animate() {
        this.moveLeft();
    }
    
    /**this function allows the repeated execution of the position of the clouds, checks with repetition 60     
    * that the function can be executed more often again
    *  change the x axis every seconds so that the clouds move to the left 
    */
    moveLeft() {
        setInterval(() => { 
            this.x -= this.speed; 
        }, 1000 / 60); 
    };

}