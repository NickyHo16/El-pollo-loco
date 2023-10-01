class StatusBar extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',       // 0
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',     //5
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 40;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    //so kann man Funktion von außerhalb auf aufrufen: mit setPercentage(50) dann würde die Variable auf 50 gesetzt werden
    setPercentage(percentage) { // abgesenen von dieser Variablen müssen wir noch herausfinden, welches dieser Bilder dafür nehmen
        this.percentage = percentage;   // => aus dieser Prozentzahl müssen wir nun eine Zahl zwischne 0... und 5 ermitteln, weil wir 5 Bilder haben. Mit folgender if Abfrage.
        let path = this.IMAGES[this.resolveImageIndex()];//hier müssen wir sagen welches Bild / der Pfad von null bis 5 wird dort eingefügt.
        this.img = this.imageCache[path];   //Bild holen/laden aus dem Cache und in die Variable img und dadurch wird durch percentage immer das jeweilige Image angezeigt
    }
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

}