const Writing = function () {
    this.image = new Image();
    this.image.src = "./images/writing.png";
    this.wall = false;
}

Writing.prototype = {
    write: function () {
        this.wall = true;
    },
    draw: function (ctx) {
        if (this.wall) {
            ctx.drawImage(this.image, 180, 250, 180, 150);
        }
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

const Bed = function () {
    this.image = new Image();
    this.image.src = "./images/bed.png";
    this.sy = 0;
    this.opened = false;
}

Bed.prototype = {
    open: function() {
        this.sy = 1200;
        this.opened = true;
    },
    draw: function (ctx) {
        ctx.drawImage(this.image, 0, this.sy, 1200, 1200, -65, 300, 350, 350);
    }
}

module.exports = { Writing, Shadow, Bed };