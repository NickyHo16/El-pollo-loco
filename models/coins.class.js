class Coins extends MovableObject {

    y = 100;
    height = 100;
    width = 100;

    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    /** constructor load the images and usefull functions, use super() one time, after that use this.
    * set the position of the coins in the world
    */
    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COINS);           
        this.x = 250 + Math.random() * 1800;
        this.y = Math.random() * 150;        
        this.animate();
    }

    /**this function animate the coins and his moves in one direction          
     */
    animate() {
        setInterval(() => {                     
            this.playAnimation(this.IMAGES_COINS);
        }, 200);                               
    }


}