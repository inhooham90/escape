class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.tom = this.game.addTom(); // do next
    }
    
    start() {
        // this.bindKeyHandlers();
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    }

    // bindKeyHandlers() {
    //     const tom = this.tom;
    //     Object.keys(GameView.MOVES).forEach((k) => {
    //         const move = GameView.MOVES[k];
    //         key(k, () => { tom.move()})
    //     })
    //     key("space", () => { tom.jump(); });
    // }

    animate(time) {
        const timeDelta = time - this.lastTime;

        this.game.step(timeDelta);
        this.game.draw(this.ctx);
        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    }


}

GameView.MOVES = {
    a: [-1, 0],
    d: [1, 0],
};

module.exports = GameView