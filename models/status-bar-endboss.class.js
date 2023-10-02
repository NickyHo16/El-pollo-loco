class EndbossBar extends DrawableObject {
    ENDBOSS_IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/blue.png',       // 0       

    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.ENDBOSS_IMAGES);
        this.x = 2600;
        this.y = 15;
        this.width = 190;
        this.height = 50;
        this.setPercentage(100);
    }

    //so kann man Funktion von außerhalb auf aufrufen: mit setPercentage(50) dann würde die Variable auf 50 gesetzt werden
    setPercentage(percentage) { // abgesenen von dieser Variablen müssen wir noch herausfinden, welches dieser Bilder dafür nehmen
        this.percentage = percentage;   // => aus dieser Prozentzahl müssen wir nun eine Zahl zwischne 0... und 5 ermitteln, weil wir 5 Bilder haben. Mit folgender if Abfrage.
        let path = this.ENDBOSS_IMAGES[this.resolveImageIndex()];//hier müssen wir sagen welches Bild / der Pfad von null bis 5 wird dort eingefügt.
        this.img = this.imageCache[path];   //Bild holen/laden aus dem Cache und in die Variable img und dadurch wird durch percentage immer das jeweilige Image angezeigt
    }
    resolveImageIndex() {

        return 0;
    }


}


