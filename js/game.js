let canvas;
let world;
let keyboard = new Keyboard();

let intervalIds=[];

winner_sound = new Audio('audio/winnerSound.mp3');
lose_sound = new Audio('audio/loseGame.mp3');

function init() {

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    //ctx = canvas.getContext('2d');

    console.log('My character is', world.character); // oder world['character']
    mobilbControllBtn();
    //toggleFullscreen();

}

function displayStartScreen() {
    document.getElementById('startscreen').classList.add('startscreen');
    
}

function loseGameScreen() {
    clearAllIntervals();
    document.getElementById('lostGame').classList.remove('dNone');
    document.getElementById('controlBTNmobile').classList.add('dNone');
    this.lose_sound.play();
}

function winnerScreen() {
    clearAllIntervals();
    document.getElementById('winner').classList.remove('dNone');
    document.getElementById('controlBTNmobile').classList.add('dNone');
    this.winner_sound.play();
}

function reloadGame(){
    location.reload();
}

function playNewGame(){
    initLevel();
    init();
    document.getElementById('startscreen').classList.add('dNone');    
    document.getElementById('lostGame').classList.add('dNone');
    document.getElementById('winner').classList.add('dNone');
    document.getElementById('controlBTNmobile').classList.remove('dNone');
}


window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;            //Taste nach rechts wurde gedrückt
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;            //Taste nach links wurde gedrückt
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;            //Taste nach oben wurde gedrückt
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;            //Taste nach unten wurde gedrückt
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;            //Taste Space/Leerzeichen wurde gedrückt
    }
    if (e.keyCode == 68) {
        keyboard.D = true;            //Taste Space/Leerzeichen wurde gedrückt
    }
    console.log(e);
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;            //Taste nach rechts wurde losgelassen
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;            //Taste nach links wurde losgelassen
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;            //Taste nach oben wurde losgelassen
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;            //Taste nach unten wurde losgelassen
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;            //Taste Space/Leerzeichen wurde losgelassen
    }
    if (e.keyCode == 68) {
        keyboard.D = false;            //Taste Space/Leerzeichen wurde losgelassen
    }
    console.log(e);
});

function mobilbControllBtn() {
    document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById("btnLeft").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById("btnRight").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById("btnRight").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById("btnJump").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });
    document.getElementById("btnJump").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById("btnThrow").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.D = true;
    });
    document.getElementById("btnThrow").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
}

function toggleFullscreen() {
     let fullscreenIcon = document.getElementById('fullscreen');
    
     if (!isFullscreen()) {
       enterFullscreen(fullscreenIcon);
     } else {
       exitFullscreen();
     }
    }
    
    function isFullscreen() {
     return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
     );
    }
    
    function enterFullscreen(element) {
     if (element.requestFullscreen) {
       element.requestFullscreen();
     } else if (element.msRequestFullscreen) { // for IE11 (remove June 15, 2022)
       element.msRequestFullscreen();
     } else if (element.webkitRequestFullscreen) { // iOS Safari
       element.webkitRequestFullscreen();
     }
    }
    
    function exitFullscreen() {
     if (document.exitFullscreen) {
       document.exitFullscreen();
     } else if (document.webkitExitFullscreen) {
       document.webkitExitFullscreen();
     }
    }
    

function openHistoryScreen() {
    let elementQuestionmark = document.getElementById('historyScreen');
    let elementSettings = document.getElementById('settingsBox');
    elementQuestionmark.classList.remove('dNone');
    elementSettings.style.display = 'none';
};

function closeHistoryScreen() {
    let elementQuestionmark = document.getElementById('historyScreen');
    let elementSettings = document.getElementById('settingsBox');
    let elementHistory = document.getElementById('historyPepe');
    elementQuestionmark.classList.add('dNone');
    elementSettings.style.display = 'flex';
    elementHistory.style.display = 'flex';
};

function openHowToPlay() {
    let elementQuestionmark = document.getElementById('historyScreen');
    let elementHistory = document.getElementById('historyPepe');
    elementQuestionmark.classList.remove('dNone');
    elementHistory.style.display = 'none';

}

function closeHowToPlay() {
    let elementQuestionmark = document.getElementById('historyScreen');
    let elementHistory = document.getElementById('historyPepe');
    elementQuestionmark.classList.add('dNone');
    elementHistory.style.display = 'flex';
}





/* Alternative (quick and dirty), um alle Intervalle zu beenden. */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }