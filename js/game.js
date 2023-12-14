let canvas;
let world;
let keyboard = new Keyboard();

let intervalIds=[];

winner_sound = new Audio('audio/winnerSound.mp3');
lose_sound = new Audio('audio/loseGame.mp3');

walking_sound = new Audio('audio/running_ice.mp3');
jumping_sound = new Audio('audio/hu.mp3');
hit_sound = new Audio('audio/ohwah.mp3');
isdead_sound = new Audio('audio/deadScreamPepe.mp3');

deadBoss_sound = new Audio('audio/deadChicken.mp3'); 
hurtBoss_sound = new Audio('audio/kikeriki.mp3');
drama_sound = new Audio('audio/drama.mp3');
splash_sound = new Audio('audio/bottle_splash.mp3');
deadChicken_sound = new Audio('audio/deadChicken.mp3');

coin_sound = new Audio('audio/coinSound.mp3');
bottle_sound = new Audio('audio/bottle_clank.mp3');

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);        
    mobilbControllBtn();    
}

/**
 * this function open the startsreen in the game if open it
 */
function displayStartScreen() {
    document.getElementById('startscreen').classList.add('startscreen');    
}

/**
 * this function open the losegamesreen in the game if you lose
 */
function loseGameScreen() {
    clearAllIntervals();
    document.getElementById('lostGame').classList.remove('dNone');
    document.getElementById('controlBTNmobile').classList.add('dNone');
    document.getElementById('controlMuteBTNmobile').classList.add('dNone');
    this.walking_sound.pause();
    this.lose_sound.play();
}

/**
 * this function open the winnersreen in the game if you win
 */
function winnerScreen() {
    clearAllIntervals();
    document.getElementById('winner').classList.remove('dNone');
    document.getElementById('controlBTNmobile').classList.add('dNone');
    document.getElementById('controlMuteBTNmobile').classList.add('dNone');
    this.winner_sound.play();
}

/**
 * this function load a new game after you win or lose
 */
function reloadGame(){
    location.reload();
}

/**
 * this function open the game pannel to play new game
 */
function playNewGame(){
    initLevel();
    init();
    document.getElementById('startscreen').classList.add('dNone');    
    document.getElementById('lostGame').classList.add('dNone');
    document.getElementById('winner').classList.add('dNone');
    document.getElementById('controlBTNmobile').classList.remove('dNone');
    document.getElementById('controlMuteBTNmobile').classList.remove('dNone');    
}

/**
 * this function defined the keys are pressed or not the game
 */
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;            
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;           
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;            
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;            
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;           
    }
    if (e.keyCode == 68) {
        keyboard.D = true;            
    }    
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;            
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;            
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;            
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;            
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;           
    }
    if (e.keyCode == 68) {
        keyboard.D = false;            
    }    
});

/**
 * this function defined the control buttons for playing the game mobil
 */
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

/**
 * following functions toggle the fullcreen in the game
 */
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
    
/**
 * this function open the description to show the history of Pepe and the game
 */
function openHistoryScreen() {
    let elementQuestionmark = document.getElementById('historyScreen');
    let elementSettings = document.getElementById('settingsBox');
    elementQuestionmark.classList.remove('dNone');
    elementSettings.style.display = 'none';
};

/**
 * this function close the description to show the history of Pepe and the game
 */
function closeHistoryScreen() {
    let elementQuestionmark = document.getElementById('historyScreen');
    let elementSettings = document.getElementById('settingsBox');
    let elementHistory = document.getElementById('historyPepe');
    elementQuestionmark.classList.add('dNone');
    elementSettings.style.display = 'flex';
    elementHistory.style.display = 'flex';
};

/**
 * this function open the description for how to play the game
 */
function openHowToPlay() {
    let elementQuestionmark = document.getElementById('historyScreen');
    let elementHistory = document.getElementById('historyPepe');
    elementQuestionmark.classList.remove('dNone');
    elementHistory.style.display = 'none';

}

/**
 * this function close the description for how to play the game 
 */
function closeHowToPlay() {
    let elementQuestionmark = document.getElementById('historyScreen');
    let elementHistory = document.getElementById('historyPepe');
    elementQuestionmark.classList.add('dNone');
    elementHistory.style.display = 'flex';
}

/**
 * this function clear all intervals and stop the game
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }

function muteAudio(){
    this.winner_sound.muted=true;    
    this.lose_sound.muted=true;   
}

function unmuteAudio(){
    this.winner_sound.muted=false;    
    this.lose_sound.muted=false;    
}

/**
 * this function mute all audios and toggle icon
 */
function muteAllAudios(){
    this.winner_sound.volume=0;    
    this.lose_sound.volume=0;    
    this.walking_sound.volume=0;   
    this.jumping_sound.volume=0;  
    this.hit_sound.volume=0;
    this.isdead_sound.volume=0;
    this.deadBoss_sound.volume=0;  
    this.hurtBoss_sound.volume=0;
    this.drama_sound.volume=0;
    this.coin_sound.volume=0;
    this.bottle_sound.volume=0;    
    
    document.getElementById('muteBTNSound').classList.add('dNone');
    document.getElementById('unmuteBTNSound').classList.remove('dNone');    
    document.getElementById('muteBTNSoundMobile').classList.add('dNone');
    document.getElementById('unmuteBTNSoundMobile').classList.remove('dNone'); 
  }
  
/**
 * this function unmute all audios and toggle icon
 */
function unmuteAllAudios(){
    this.winner_sound.volume=1;    
    this.lose_sound.volume=1;    
    this.walking_sound.volume=1;   
    this.jumping_sound.volume=1;  
    this.hit_sound.volume=1;
    this.isdead_sound.volume=1;
    this.deadBoss_sound.volume=1;  
    this.hurtBoss_sound.volume=1;
    this.drama_sound.volume=1;
    this.coin_sound.volume=1;
    this.bottle_sound.volume=1;    
    
    document.getElementById('unmuteBTNSound').classList.add('dNone');
    document.getElementById('muteBTNSound').classList.remove('dNone');
    document.getElementById('unmuteBTNSoundMobile').classList.add('dNone');
    document.getElementById('muteBTNSoundMobile').classList.remove('dNone');
  }