export default class Paint {
    constructor(obj) {
        this.image = new Image();
        this.image.src = "./images/paint1.png";
        this.width = 100;
        this.height = 120;
        this.X = 480;
        this.Y = 200;
        this.falling = false;
        this.dropped = false;
    }

    dropPaint() {
        this.falling = true;
    }

    draw(ctx) {
        if (this.falling && this.Y < 340) {
                this.Y += 10;
            window.dropsound.play();
        }

        if (this.Y === 340) {
            this.falling = false;
            this.dropped = true;
            this.image.src = './images/paint2.png';
            this.width = 130;
            this.height = 45;
            this.X = 450;
            this.Y += 45;
            window.dropsound.pause();
        }
        ctx.drawImage(this.image, this.X, this.Y, this.width, this.height);
    }
}

