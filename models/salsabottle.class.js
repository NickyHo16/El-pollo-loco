class SalsaBottle extends MovableObject {

    y = 330;
    height = 100;
    width = 100;

    offSet = {
        top: 10, 
        bottom: 40, 
        left: 0, 
        right: 0
    }

    IMAGES_SAlSABOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    /** constructor load the images and usefull functions, use super() one time, after that use this.
    * set the position of the bottles in the world
    */
    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_SAlSABOTTLE);  
        this.x = 300 + Math.random() * 1800;
        this.animate();
    }

    /**this function animate the bottles and his moves in one direction          
     */
    animate() {
        setInterval(() => {                     
            this.playAnimation(this.IMAGES_SAlSABOTTLE);
        }, 500);                               
    }


}
