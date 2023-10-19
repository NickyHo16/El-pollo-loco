class TrowBottleBar extends DrawableObject {
    BOTTLE_IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',       // 0
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'     //5
    ];

    collectedBottles = 0;
    bottle_sound = new Audio('audio/bottle_clank.mp3');//this.coin_sound.play();

    constructor() {
        super();
        this.loadImages(this.BOTTLE_IMAGES);
        this.x = 40;
        this.y = 15;
        this.width = 190;
        this.height = 50;
        this.setCollectedBottles(0);
    }

    //so kann man Funktion von außerhalb auf aufrufen: mit setPercentage(50) dann würde die Variable auf 50 gesetzt werden
    setCollectedBottles(collectedBottles) { // abgesenen von dieser Variablen müssen wir noch herausfinden, welches dieser Bilder dafür nehmen
        this.collectedBottles = collectedBottles;   // => aus dieser Prozentzahl müssen wir nun eine Zahl zwischne 0... und 5 ermitteln, weil wir 5 Bilder haben. Mit folgender if Abfrage.
        let path = this.BOTTLE_IMAGES[this.resolveImageIndex()];//hier müssen wir sagen welches Bild / der Pfad von null bis 5 wird dort eingefügt.
        this.img = this.imageCache[path];   //Bild holen/laden aus dem Cache und in die Variable img und dadurch wird durch percentage immer das jeweilige Image angezeigt
        this.bottle_sound.play();//Sound an anderer Stelle aufrufen, weil sonst Consolen Fehler kommt 
    }
    resolveImageIndex() {
        if (this.collectedBottles >= 100) {
            return 5;
        } else if (this.collectedBottles >= 80) {
            return 4;
        } else if (this.collectedBottles >= 60) {
            return 3;
        } else if (this.collectedBottles >= 40) {
            return 2;
        } else if (this.collectedBottles >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

}
