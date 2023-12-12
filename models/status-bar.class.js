class StatusBar extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',       
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',     
    ];

    percentage = 100;

    /** constructor load the images and usefull functions, use super() one time, after that use this.
    * set the position of the statusbar Pepe in the world
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 40;
        this.y = 50;
        this.width = 190;
        this.height = 50;
        this.setPercentage(100);
    }

    /**that the function can be called from outside, when boss ist hitted or dead, the percentage is displayed by a corresponding image in the bar
     * 
     * @param {string} percentage -set the health in the bar for Pepe
     */
    setPercentage(percentage) { 
        this.percentage = percentage;   
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];   
    }
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

}