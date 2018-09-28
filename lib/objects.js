const Writing = function () {
    this.image = new Image();
    this.image.src = "./images/writing.png";
}

Writing.prototype = {
    draw: function (ctx) {
        ctx.drawImage(this.image, 180, 250, 120, 100);
    }
}

const Shadow = function () {
    this.image = new Image();
    this.image.src = "./images/shadow.png";
}

Shadow.prototype = {
    draw: function (ctx) {
        ctx.drawImage(this.image, 200, 275, 50, 175);
    }
}

module.exports = { Writing, Shadow };