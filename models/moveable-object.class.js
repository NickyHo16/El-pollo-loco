class MovableObject {
    x = 120;
    y = 280;
    img;

    height = 150;
    width = 100;
    speed = 0.15;

    imageCache = {};
    currentImage = 0;

    //loeadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // same as: this.img=document.getElementById('image') <img id="image"> mit dem einzigen Unterschied, dass wir dieses Bild nicht im HTML angelegt und angezeigt haben, sondern dass wir dieses Bild nur in unserem JavaScript haben und fügen es später in unserem Canvas ein. 
        this.img.src = path;
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


    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => { //diese Funktion beschreibt, wie oft etwas ausgeführt werden soll
            this.x -= this.speed; // die x-Achse soll sich um -5 pixel verringern aber nicht nur einmal sondern:
        }, 1000 / 60); // jede Sekunde verändert sich die x-Achse // alles in der geschweiften Klammer wird alle 1000 millisekunden ausgeführt

    }
}