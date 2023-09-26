class Cloud extends MovableObject {

    y = 20;
    width = 500;
    height = 300;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500; // eine Zahl zwischen 200 und 500
        //+ Math.random() * 400;

    }

    //

}