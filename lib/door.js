export default class Door {
    constructor(char) {
        this.image = new Image();
        this.image.src = "./images/door.png";
        this.width = 165;
        this.height = 60;
        this.X = 550;
        this.Y = 450;
        this.opened = false;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.X, this.Y, this.width, this.height);
    }
}

