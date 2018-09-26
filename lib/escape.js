import Game from './game.js';
import GameView from './game_view.js';


document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 800;
    canvasEl.height = 600;

    const ctx = canvasEl.getContext("2d");
    const game = new Game();
    new GameView(game, ctx).start();
})




// window.addEventListener("keydown", checkKeyPressed)

// let gameCanvas = document.getElementById("game-canvas");
// gameCanvas.width = 800;
// gameCanvas.height = 600;
// let ctx = gameCanvas.getContext("2d");


// const escape = new Game();
// escape.render(ctx)