class CoinBar extends DrawableObject {
    COIN_IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',       
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',     
    ];

    
    collectedCoins = 0;
    

    /** constructor load the images and usefull functions, use super() one time, after that use this.
    * set the position of the coinbar in the world
    */
    constructor() {
        super();
        this.loadImages(this.COIN_IMAGES);
        this.x = 40;
        this.y = 85;
        this.width = 190;
        this.height = 50;
        this.setCollectedCoins(0);
    }
    
    /**that the function can be called from outside, when collecting coins, the number is displayed by a corresponding image in the bar
     * 
     * @param {string} collectedCoins -this is the number of the collected coins
     */
    setCollectedCoins(collectedCoins) { 
        this.collectedCoins = collectedCoins;   
        let path = this.COIN_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];           
    }
    resolveImageIndex() {
        if (this.collectedCoins >= 100) {
            return 5;
        } else if (this.collectedCoins >= 80) {
            return 4;
        } else if (this.collectedCoins >= 60) {
            return 3;
        } else if (this.collectedCoins >= 40) {
            return 2;
        } else if (this.collectedCoins >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

}