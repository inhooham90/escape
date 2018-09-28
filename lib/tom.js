export default class Tom {
    constructor(pos) {
        this.image = new Image();
        this.image.src = "./images/right.png"
        this.width = 200;
        this.height = 200;
        this.sx = 0;
        this.sy = 0;
        this.sh = 1200;
        this.sw = 1200;
    }

    draw(obj) {
        if (window.rightPressed) {
            this.image.src = "./images/right.png"
        } else if (window.leftPressed) {
            this.image.src = "./images/left.png"
        }

        if (window.upPressed && !window.rightPressed) {
            window.frames += 150;
        } else if (window.downPressed && !window.leftPressed) {
            window.frames += 150;
        } else if (window.upPressed && window.rightPressed) {
            window.frames += 150;
        } else if (window.downPressed && window.leftPressed) {
            window.frames += 150;
        } else if (!window.upPressed && window.rightPressed) {
            window.frames += 150;
        } else if (!window.downPressed && window.leftPressed) {
            window.frames += 150;
        }
        
        switch (window.frames) {
            case 0:
                this.sy = 0;
                break;
            case 1200:
                this.sy = 1200;
                break;
            case 2400:
                this.sy = 2400;
                break;
            case 3600:
                this.sy = 3600;
                break;
            case 4800:
                this.sy = 4800;
                break;
            case 6000:
                this.sy = 6000;
                break;
            case 7200:
                this.sy = 0;
                window.frames = 0;
                break;
            default:
                break;
        }

        if (window.frames > 7200) {
            this.sy = 0;
            window.frames = 0;
        }
        if ((this.X > 450 && this.X < 600) && (this.Y > 330 && this.Y < 400)) {
            console.log("working");
        }

    obj.ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, obj.x, obj.y, this.width, this.height);
    }
}

