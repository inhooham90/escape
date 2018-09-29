import Game from './game.js';
import GameView from './game_view.js';


// document.addEventListener("DOMContentLoaded", () => {
const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 800;
canvasEl.height = 600;

const ctx = canvasEl.getContext("2d");
const game = new Game(ctx);
new GameView(game, ctx).start();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const snd = new Audio("./escape.mp3");
snd.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
}, false);
snd.play();

window.dropsound = new Audio("./drop.mp3");
window.bedsound = new Audio("./bed.mp3");
window.telling = false;

window.frames = 0;

function keyDownHandler(e) {
    if (e.keyCode === 39 && !window.telling) {
        window.rightPressed = true;
        window.walkingRight = true;
    }
    else if (e.keyCode === 37 && !window.telling) {
        window.leftPressed = true;
        window.walkingLeft = true;
    }
    if (e.keyCode === 38 && !window.telling) {
        window.upPressed = true;
        window.walkingRight = true;
    } else if (e.keyCode === 40 && !window.telling) {
        window.downPressed = true;
        window.walkingLeft = true;
    }  
    if (e.keyCode === 77) {
        if (snd.paused) {
            snd.play();
        } else {
            snd.pause();
        }
    }

    if (e.keyCode === 32) {
        if (window.telling) {
            window.telling = false;
        } else {
            window.telling = true;
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

// })

// window.addEventListener("keydown", checkKeyPressed)

// let gameCanvas = document.getElementById("game-canvas");
// gameCanvas.width = 800;
// gameCanvas.height = 600;
// let ctx = gameCanvas.getContext("2d");


// const escape = new Game();
// escape.render(ctx)