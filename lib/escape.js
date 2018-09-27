import Game from './game.js';
import GameView from './game_view.js';


// document.addEventListener("DOMContentLoaded", () => {
const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 800;
canvasEl.height = 600;

const ctx = canvasEl.getContext("2d");
const game = new Game();
new GameView(game, ctx).start();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        window.rightPressed = true;
    }
    else if (e.keyCode == 37) {
        window.leftPressed = true;
    }
    if (e.keyCode == 38) {
        window.upPressed = true;
    }
    else if (e.keyCode == 40) {
        window.downPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        window.rightPressed = false;
    }
    else if (e.keyCode == 37) {
        window.leftPressed = false;
    }
    if (e.keyCode == 38) {
        window.upPressed = false;
    }
    else if (e.keyCode == 40) {
        window.downPressed = false;
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