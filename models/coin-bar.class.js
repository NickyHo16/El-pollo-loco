class CoinBar extends DrawableObject {
    COIN_IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',       // 0
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',     //5
    ];

    //percentage = 100;
    collectedCoins = 0;
    coin_sound = new Audio('audio/coinSound.mp3');

    constructor() {
        super();
        this.loadImages(this.COIN_IMAGES);
        this.x = 40;
        this.y = 85;
        this.width = 190;
        this.height = 50;
        this.setCollectedCoins(0);
    }

    //so kann man Funktion von außerhalb auf aufrufen: mit setPercentage(50) dann würde die Variable auf 50 gesetzt werden
    setCollectedCoins(collectedCoins) { // abgesenen von dieser Variablen müssen wir noch herausfinden, welches dieser Bilder dafür nehmen
        this.collectedCoins = collectedCoins;   // => aus dieser Prozentzahl müssen wir nun eine Zahl zwischne 0... und 5 ermitteln, weil wir 5 Bilder haben. Mit folgender if Abfrage.
        let path = this.COIN_IMAGES[this.resolveImageIndex()];//hier müssen wir sagen welches Bild / der Pfad von null bis 5 wird dort eingefügt.
        this.img = this.imageCache[path];   //Bild holen/laden aus dem Cache und in die Variable img und dadurch wird durch percentage immer das jeweilige Image angezeigt
        //  this.coin_sound.play();//Sound an anderer Stelle aufrufen, weil sonst Consolen Fehler kommt 
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