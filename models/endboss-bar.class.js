class EndbossBar extends DrawableObject {
    ENDBOSS_IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/statusbar_endboss100.png',        
        'img/7_statusbars/2_statusbar_endboss/statusbar_endboss75.png',         
        'img/7_statusbars/2_statusbar_endboss/statusbar_endboss50.png',          
        'img/7_statusbars/2_statusbar_endboss/statusbar_endboss25.png',                  
        'img/7_statusbars/2_statusbar_endboss/statusbar_endboss0.png',              

    ];

    percentage = 100;

    /** constructor load the images and usefull functions, use super() one time, after that use this.
    * set the position of the endbossbar in the world
    */
    constructor() {
        super();
        this.loadImages(this.ENDBOSS_IMAGES);
        this.x = 500;
        this.y = 15;
        this.width = 190;
        this.height = 50;
        this.setBosshealth(100);
    }

     /**that the function can be called from outside, when boss ist hitted or dead, the percentage is displayed by a corresponding image in the bar
     * 
     * @param {string} bosshealth - set the health in percentage
     */
    setBosshealth(bosshealth) {                                  
        this.percentage = bosshealth;                            
        let path = this.ENDBOSS_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];                        
    }
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 0;
        } else if (this.percentage >= 75) {
            return 1;
        } else if (this.percentage >= 50) {
            return 2;
        } else if (this.percentage >= 25) {
            return 3;
        } else {
            return 4;
        }
    }


}


