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
    this.present = true;
}

Shadow.prototype = {
    gone: function () {
        this.present = false;
        window.steps.play();
    },

    draw: function (ctx) {
        if (this.present) {
            ctx.drawImage(this.image, 200, 275, 50, 175);
        }
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

const Table = function () {
    this.image = new Image();
    this.image.src = "./images/beforetable.png";
    this.surprised = false;
}

Table.prototype = {
    surprise: function () {
        this.surprised = true;
        window.coinsound.play();
        window.skullsound.play();
    },
    draw: function (ctx) {
        if (this.surprised) {
            this.image.src = "./images/aftertable.png";
        }
        ctx.drawImage(this.image, 570, 250, 250, 250);
    }
}

const Title = function () {
    this.image = new Image();
    this.image.src = "./images/title.png";
    this.phrase = [
                "Tom wakes up without memory",
                "of where he is or who he is.",
                "He realizes he is kidnapped.",
                "Can you help Tom collect",
                "3 pieces of diary pieces",
                "and escape the dreaded cabin?",
            ]
}

Title.prototype = {
    draw: function (ctx) {
        if (!window.gameEnding) {
            ctx.drawImage(this.image, 30, 0, 800, 600);
            ctx.font = '14px "Press Start 2P"';
            this.phrase.forEach((line, idx) => {
                let y = (idx + 1) * 30 + 325;
                ctx.fillText(line, 390, y);
            })
        }
    }
}

const Ending = function () {
    this.image = new Image();
    this.image.src = "./images/ending.png";
    this.phrase = [
        "You successfully escape",
        "with recovered memory.",
        "Soon after, you hear her",
        "devilish scream..",
        "Hopefully you will never",
        "encounter her again..",
        "Thanks for playing"
    ]
}

Ending.prototype = {
    draw: function (ctx) {
        ctx.drawImage(this.image, 30, 0, 800, 600);
        ctx.font = '14px "Press Start 2P"';
        this.phrase.forEach((line, idx) => {
            let y = (idx + 1) * 30 + 325;
            ctx.fillText(line, 108, y);
        })
    }
}


module.exports = { Writing, Shadow, Bed, Table, Title, Ending };
