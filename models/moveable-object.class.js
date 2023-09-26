class MovableObject {
    x = 120;
    y = 280;
    img;

    height = 150;
    width = 100;

    //loeadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // same as: this.img=document.getElementById('image') <img id="image"> mit dem einzigen Unterschied, dass wir dieses Bild nicht im HTML angelegt und angezeigt haben, sondern dass wir dieses Bild nur in unserem JavaScript haben und fügen es später in unserem Canvas ein. 
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
    }
}