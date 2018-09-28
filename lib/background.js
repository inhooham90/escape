export default class Background {
    constructor(char) {
        this.image = new Image();
        this.image.src = "./images/wall.png";
        this.width = 100;
        this.height = 100;
        this.X = 0;
        this.Y = 0;
        this.opened = false;
    }

    draw(ctx) {
        if (this.X > 800) {
            this.Y += 100;
        }

        if (this.Y >= 300) {
            this.image.src = "./images/floor.png";
        }        
        
        for (let i = 0; i < 48; i++) {
            ctx.drawImage(this.image, this.X, this.Y, this.width, this.height);
            this.X += 100
        }
    }
}

