const Key = function () {
    this.image = new Image();
    this.image.src = "./images/key.png";
    this.found = false;
    this.displayw = 90;
    this.displayh = 90;
    this.content = ["It's a key.", "It fits the trap door perfectly."],
    this.read = false;
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
    this.image.src = "./images/letter3.png";
    this.content = 
        [
        "Dear Diary,", 
        "When I first saw Tom, I fell in love with him.",
        "It's destined. Tom and me TOGETHER. Although",
        "Tom doesn't know who I am, we will meet soon.",
        "He is not ready for me yet. I really hope he ",
        "likes me.. unlike the other guys.",
        "HOW DARE THEY TO REJECT ME! Doesn't matter.. ",
        "They are all dead and buried under me HAHA",
        "Tom better like me.. or he'll be joining them!"
    ]
    this.found = false;
    this.displayh = 85;
    this.displayw = 85;
    this.read = false;
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
        [
            "Dear Diary,",
            "Our eyes met. And he didn't look away from me.",
            "My love. I guess that means he's ready to take ",
            "the vow. I can already imagine us, Tom and I,",
            "standing at the podium. HAHA I cannot continue",
            "for my heart flutters too vigorously!",
            "It's time for us to meet Tom. I will be under",
            "your bed tonight for a special surprise!",
            "Surprise event for our first encounter!"
        ]

    this.found = false;
    this.displayh = 85;
    this.displayw = 85;
    this.read = false;
}

Letter2.prototype = {
    draw: function (ctx) {
        if (!this.found) {
            ctx.drawImage(this.image, 660, 320, 40, 40);
        }
    }
}

const Letter3 = function () {
    this.image = new Image();
    this.image.src = "./images/letter1.png";
    this.content =
        [
            "HOW DARE HE",
            " ",
            "IF I CAN'T HAVE TOM",
            " ",
            "NOBODY CAN",
            " ",
            "I'LL KEEP TOM FOREVER MINE",
            " ",
            "FIRST I'LL KILL HIM SO HE CAN'T REFUSE!"
        ]
    this.present = false;
    this.found = false;
    this.displayh = 85;
    this.displayw = 85;
    this.read = false;
}

Letter3.prototype = {
    discover: function () {
        this.present = true;
    },

    draw: function (ctx) {
        if (this.present && !this.found) {
            ctx.drawImage(this.image, 230, 375, 40, 40);
        }
    }
}

module.exports = { Key, Letter1, Letter2, Letter3 };