class Cloud extends MovableObject {

    y = 20;
    width = 500;
    height = 300;
    speed = 0.15;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 3500; // eine Zahl zwischen 200 und 500 //das ist für die Anordnung der Chicken
        this.animate();

    }

    //
    animate() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => { //diese Funktion beschreibt, wie oft etwas ausgeführt werden soll
            this.x -= this.speed; // die x-Achse soll sich um -5 pixel verringern aber nicht nur einmal sondern:
        }, 1000 / 60); // jede Sekunde verändert sich die x-Achse // alles in der geschweiften Klammer wird alle 1000 millisekunden ausgeführt
    };

}