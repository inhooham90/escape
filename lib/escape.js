import Game from './game.js';
import GameView from './game_view.js';



const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 800;
canvasEl.height = 600;
let game;

if (window.gameOn) {
    let ctx = canvasEl.getContext("2d");
    game = new Game(ctx);
    game.intro = true;
    new GameView(game, ctx).start();
} else {
    let ctx = canvasEl.getContext("2d");
    game = new Game(ctx);
    new GameView(game, ctx).start();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const snd = new Audio("../audio/escape.mp3");
snd.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
}, false);
snd.play();

window.dropsound = new Audio("./audio/drop.mp3");
window.bedsound = new Audio("./audio/bed.mp3");
window.keysound = new Audio("./audio/key.mp3");
window.skullsound = new Audio("./audio/skull.mp3");
window.coinsound = new Audio("./audio/change.mp3");
window.steps = new Audio("./audio/steps.mp3");
window.telling = false;
window.items = false;
window.gameOn = false;
window.gameOver = false;

window.frames = 0;

function keyDownHandler(e) {
    if (e.keyCode === 39 && (!window.telling)) {
        e.preventDefault();
        window.rightPressed = true;
        window.walkingRight = true;
    }
    else if (e.keyCode === 37 && (!window.telling)) {
        e.preventDefault();
        window.leftPressed = true;
        window.walkingLeft = true;
    }
    if (e.keyCode === 38 && (!window.telling)) {
        e.preventDefault();
        window.upPressed = true;
        window.walkingRight = true;
    } else if (e.keyCode === 40 && (!window.telling)) {
        e.preventDefault();
        window.downPressed = true;
        window.walkingLeft = true;
    }
    if (e.keyCode === 77) {
        e.preventDefault();
        if (snd.paused) {
            snd.play();
        } else {
            snd.pause();
        }
    }

    if (e.keyCode === 32 && window.gameOn && !game.over && !window.items) {
        e.preventDefault();
        if (window.telling) {
            window.telling = false;
        } else if (window.telling && game.intro){
            game.intro = false;
            window.telling = false;
        } else if (window.gameEnding) {
            game.over = true;
            window.telling = false;
        } else {
            window.telling = true;
        }
    }

    if (e.keyCode === 73 && window.gameOn) {
        e.preventDefault();
        if (window.items) {
            window.items = false;
        } else {
            window.items = true;
        }
    }

    if (e.keyCode === 13) {
        e.preventDefault();
        if (!window.gameOn) {
            game.intro = true;
            window.telling = true;
            window.gameOn = true;
            snd.play();
        }
    }
}

function keyUpHandler(e) {
    if (e.keyCode === 39) {
        window.rightPressed = false;
        window.walkingRight = false;
    }
    else if (e.keyCode === 37) {
        window.leftPressed = false;
        window.walkingLeft = false;
    }
    if (e.keyCode === 38) {
        window.upPressed = false;
        window.walkingRight = false;
    }
    else if (e.keyCode === 40) {
        window.downPressed = false;
        window.walkingLeft = false;
    }
}
