class DrawableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;

    //loeadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // same as: this.img=document.getElementById('image') <img id="image"> mit dem einzigen Unterschied, dass wir dieses Bild nicht im HTML angelegt und angezeigt haben, sondern dass wir dieses Bild nur in unserem JavaScript haben und fügen es später in unserem Canvas ein. 
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // hier wir dann das gespiegelte Bild eingefügt
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png','img/image1.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}