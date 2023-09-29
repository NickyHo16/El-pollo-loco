class MovableObject {
    x = 120;
    y = 280;
    img;

    height = 150;
    width = 100;
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;

    imageCache = {};
    currentImage = 0;
    otherDirection = false;

    applyGravity() {
        setInterval(() => {                                    //hier müssen wir regelmäßig die Y Achse verringern
            if (this.isAboveGround() || this.speedY > 0) {     //hier testen wir ob das y kleiner als 160 pixel ist, weil der Fußboden auf 160 Pixel ist
                this.y -= this.speedY;                         //auf das y die speed abziehen
                this.speedY -= this.acceleration;              //negative Geschwindigkeit weil es nach unten schiesst/ von speedY die Beschleunigung abziehen
            }
        }, 1000 / 25);              //Funktion soll 25 Mal pro s ausgeführt werden
    };

    //loeadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // same as: this.img=document.getElementById('image') <img id="image"> mit dem einzigen Unterschied, dass wir dieses Bild nicht im HTML angelegt und angezeigt haben, sondern dass wir dieses Bild nur in unserem JavaScript haben und fügen es später in unserem Canvas ein. 
        this.img.src = path;
    }

    isAboveGround() {
        return this.y < 160
    };

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

    playAnimation(images) {
        //walk animation
        let i = this.currentImage % this.IMAGES_WALKING.length; // ist das Gleiche wie = let i= 0 % 6; null geteilt duch sechs = 0, Rest 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;                // um das gesetzte image immer um eins zu erhöhen
    };


    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;       // die x-Achse soll sich um -5 pixel verringern aber nicht nur einmal sondern: ...
    }

    jump() {
        this.speedY = 30;
    }
}