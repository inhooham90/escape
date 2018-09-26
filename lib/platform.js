const Platform = function (game, x, y) {
    this.game = game;
    this.X = Math.floor(x);
    this.y = y;
};

Platform.prototype.render = function (ctx) {
    ctx.fillStyle = "#738b2a";
    ctx.fillRect(this.X, this.Y, this.game.platformWidth, this.game.platformHeight);
    return this;
}

module.exports = Platform;