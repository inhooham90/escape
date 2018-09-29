const Key = function () {
    this.image = new Image();
    this.image.src = "./images/key.png";
    this.found = false;
    this.displayw = 90;
    this.displayh = 90;
}

Key.prototype = {
    draw: function (ctx) {
        if (!this.found) {
            ctx.drawImage(this.image, 490, 370, 60, 60);
        }
    }
}

const Letter1 = function () {
    this.image = new Image();
    this.image.src = "./images/letter1.png";
    this.content = 
        ("Dear Tom, When I first saw you, I just had to make you mine. Your brown hair.. I dream about them every night.I bet you dream about me, too. Because if you aren't.. It would make me angry and you shouldnt make your future spouse angry. Right, my dear Tom?")
    this.found = false;
    this.displayh = 85;
    this.displayw = 85;
}

Letter1.prototype = {
    draw: function (ctx) {
        if (!this.found) {
        ctx.drawImage(this.image, 90, 440, 40, 40);
        }
    }
}

const Letter2 = function () {
    this.image = new Image();
    this.image.src = "./images/letter2.png";
    this.content =
        ("Dear Tom, When I first saw you, I just had to make you mine. Your brown hair.. I dream about them every night.I bet you dream about me, too. Because if you aren't.. It would make me angry and you shouldnt make your future spouse angry. Right, my dear Tom?")
    this.found = false;
}

Letter2.prototype = {
    draw: function (ctx) {
        ctx.drawImage(this.image, this.x, this.y, 40, 40);
    }
}

module.exports = { Key, Letter1 };