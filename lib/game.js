import Tom from './tom.js';
import Door from './door.js';
import Paint from './painting.js';
import Objects from './objects.js';

export default class Game {
    constructor() {
        this.background = new Image();
        this.background.src = './images/background.png';
        this.filterImg = new Image();
        this.filterImg.src = './images/filter.png';
        this.tom = null;
        this.X = 30;
        this.Y = 400;
        this.door = new Door();
        this.paint = new Paint();
        this.writing = new Objects.Writing();
        this.shadow = new Objects.Shadow();
    
    }

    addTom() {
        this.tom = new Tom();
        return this.tom;
    }

    draw(ctx) {
        if (window.rightPressed && this.X < 630) {
            this.X += 3;
        } else if (window.leftPressed && this.X > -30) {
            this.X -= 3;
        }
        if (window.upPressed && this.Y > 250) {
            this.Y -= 3;
        } else if (window.downPressed && this.Y < 450) {
            this.Y += 3;
        }

        if ((this.X > 450 && this.X < 600)&& this.Y < 330) {
            this.paint.dropPaint();
        }

        if ((this.X > 500 && this.X < 600) && (this.Y > 350 && this.Y < 430)) {
            console.log("Door is locked");
        }

        ctx.clearRect(0, 0, 800, 600);
        ctx.fillRect(0, 0, 800, 600);
        ctx.drawImage(this.background, 0, 0, 800, 600);
        this.door.draw(ctx);
        this.paint.draw(ctx);
        this.writing.draw(ctx);
        this.tom.draw({ctx: ctx, x: this.X, y: this.Y});
        if (this.X > 275) {
            this.shadow.draw(ctx);
        } else 
        this.shadow
        ctx.drawImage(this.filterImg, this.X - 700, this.Y - 710, 1600, 1600)
        this.allObjects().forEach((object) => {
        object.draw(ctx);
        });
    }

    add(object) {
        if (object instanceof paint) {
            this.paintings.push(object);
        }
    }

    moveObjects(delta) {
        this.allObjects().forEach((object) => {
            object.move(delta);
        });
    }

    allObjects() {
        return [].concat([]);
    }

    step(delta) {
        this.moveObjects(delta);
    }


    // splash() {
    //     var img = new Image();

    //     img.onload = function () {
    //         ctx.drawImage(img, 1, 1);
    //     };
            
    //     img.src = "./images/right.png";
    // }
}