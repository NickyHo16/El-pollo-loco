class DrawableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;

    offset={
        top:130,
        right: 145,
        bottom: 0,
        left: 85
    }
    
    /**this function load all images in the canvas */
    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }

    /**this function draw all images in the world */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
        } catch (e) {
            console.warn('Error loading image', e);
            console.log('Could not load image', this.img.src)
        }
    }

    /** this function draw a frame arround the character and enemies, you can use also red as color-strokestyle
     * 
     * @param {string} ctx - ctx is context - the world -canvas rendering context
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall || this instanceof Endboss || this instanceof Coins || this instanceof SalsaBottle) {             
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x+this.offset.left, this.y+this.offset.top, this.width-this.offset.right-this.offset.left, this.height-this.offset.bottom-this.offset.top);
            ctx.stroke();
        }
    }

    /**preload images and store them in image cache
     * 
     * @param {Array} arr - ['img/image1.png','img/image1.png', ...] - array of images path
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}