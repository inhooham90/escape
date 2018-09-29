import Tom from './tom.js';
import Door from './level1/door.js';
import Paint from './level1/painting.js';
import Objects from './objects.js';
import Inventory from './inventrory.js';
import Items from './level1/items.js';
import Teller from './teller.js';

export default class Game {
    constructor(ctx) {
        this.teller = new Teller();
        this.background = new Image();
        this.background.src = './images/background.png';
        this.filterImg = new Image();
        this.filterImg.src = './images/filter.png';
        this.tom = null;
        this.X = 30;
        this.Y = 400;
        this.objects = {
            door: new Door(),
            paint: new Paint(),
            writing: new Objects.Writing(),
            shadow: new Objects.Shadow(),
            bed: new Objects.Bed(),
            inventory: new Inventory(),
            key: new Items.Key(),
            letter1: new Items.Letter1(),
        }
        // this.door = new Door();
        // this.paint = new Paint();
        // this.writing = new Objects.Writing();
        // this.shadow = new Objects.Shadow();
        // this.bed = new Objects.Bed();
        // this.inventory = new Inventory();
        // this.key = new Items.Key();
        // this.letter1 = new Items.Letter1();
    }

    addTom() {
        this.tom = new Tom();
        return this.tom;
    }

    play(ctx) {
        if ((window.rightPressed && this.X < 630) && !this.tom.blockedr) {
            this.X += 3;
            if (this.objects.inventory.items.length > 0) {
                this.teller.phrase = ["Nothing much here.."];
            }
        } else if ((window.leftPressed && this.X > -50) && !this.tom.blockedl) {
            this.X -= 3;
            if (this.objects.inventory.items.length > 0) {
                this.teller.phrase = ["Nothing much here.."];
            }
        }
        if ((window.upPressed && this.Y > 250) && !this.tom.blockedu) {
            this.Y -= 3;
            if (this.objects.inventory.items.length > 0) {
                this.teller.phrase = ["Nothing much here.."];
            }
        } else if ((window.downPressed && this.Y < 450) && !this.tom.blockedd) {
            this.Y += 3;
            if (this.objects.inventory.items.length > 0) {
                this.teller.phrase = ["Nothing much here.."];
            }
        }

        if ((this.X > 450 && this.X < 600)&& this.Y < 330) {
            this.objects.paint.dropPaint();
        }

        ctx.clearRect(0, 0, 800, 600);
        ctx.fillRect(0, 0, 800, 600);
        ctx.drawImage(this.background, 0, 0, 800, 600);
        this.objects.door.draw(ctx);
        this.objects.paint.draw(ctx);
        if (this.objects.paint.dropped) {
            this.objects.key.draw(ctx);
            this.objects.writing.write();
        }
        this.objects.writing.draw(ctx);
        this.tom.checkCollision({ x: this.X, y: this.Y })
        if (this.X < 150 && this.Y < 320) {
            this.tom.draw({ ctx, x: this.X, y: this.Y });
            if (this.objects.bed.opened) {
                this.objects.letter1.draw(ctx);
            }
            this.objects.bed.draw(ctx);
        } else {
            this.objects.bed.draw(ctx);
            if (this.objects.bed.opened) {
                this.objects.letter1.draw(ctx);
            }
            this.tom.draw({ctx: ctx, x: this.X, y: this.Y});
        }
        if (this.X > 275) {
            this.objects.shadow.draw(ctx);
        }

        ctx.drawImage(this.filterImg, this.X - 700, this.Y - 710, 1600, 1600)
        this.objects.inventory.draw(ctx);

        if (window.telling) {
            let interactables = this.objects;
            let pos = {x: this.X, y: this.Y};
            this.teller.talk({ ctx, pos, interactables });
        }
    }

    moveObjects(delta) {
        this.allObjects().forEach((object) => {
            object.move(delta);
        });
    }

    add(object) {
        if (object instanceof paint) {
            this.paintings.push(object);
        }
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