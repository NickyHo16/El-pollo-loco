class BackgroundObject extends MovableObject {

    width = 720;//breite des Canvas
    height = 400;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; //480-400=80

    }

}