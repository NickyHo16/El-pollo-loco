class TrowBottleBar extends DrawableObject {
    BOTTLE_IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',       
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'     
    ];

    collectedBottles = 0;    

    /** constructor load the images and usefull functions, use super() one time, after that use this.
    * set the dimension and position of the bottlebar in the world
    */
    constructor() {
        super();
        this.loadImages(this.BOTTLE_IMAGES);
        this.x = 40;
        this.y = 15;
        this.width = 190;
        this.height = 50;
        this.setCollectedBottles(0);
    }

    /**that the function can be called from outside, when boss ist hitted or dead, the percentage is displayed by a corresponding image in the bar
     * 
     * @param {string} collectedBottles -set the collected bottles in a number in the bar
     */
    setCollectedBottles(collectedBottles) { 
        this.collectedBottles = collectedBottles;   
        let path = this.BOTTLE_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];            
    }

    resolveImageIndex() {
        if (this.collectedBottles >= 100) {
            return 5;
        } else if (this.collectedBottles >= 80) {
            return 4;
        } else if (this.collectedBottles >= 60) {
            return 3;
        } else if (this.collectedBottles >= 40) {
            return 2;
        } else if (this.collectedBottles >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

}
