import Tom from './tom.js';
import Door from './level1/door.js';
import Paint from './level1/painting.js';
import Objects from './objects.js';
import Inventory from './inventory.js';
import Items from './level1/items.js';
import Teller from './teller.js';
import Iscreen from './iscreen.js';

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
        this.iscreen = new Iscreen();
        this.objects = {
            door: new Door(),
            paint: new Paint(),
            writing: new Objects.Writing(),
            shadow: new Objects.Shadow(),
            bed: new Objects.Bed(),
            inventory: new Inventory(),
            key: new Items.Key(),
            letter1: new Items.Letter1(),
            table: new Objects.Table(),
            letter2: new Items.Letter2(),
            letter3: new Items.Letter3(),
            title: new Objects.Title(),
            ending: new Objects.Ending(),
        }
        this.selectCount = 0;
        this.intro = false;
        this.over = false;
    }

    addTom() {
        this.tom = new Tom();
        return this.tom;
    }

    play(ctx) {
        if ((window.rightPressed && this.X < 630) && window.gameOn) {
            if (!window.items && !this.tom.blockedr) {
                this.X += 3;
            } else {
                this.selectCount += 1;
                if (this.selectCount === 5) {
                    this.selectCount = 0;
                    this.iscreen.moveRight();
                }
            }
            if (this.objects.inventory.items.length >= 0) {
                this.teller.phrase = ["Nothing much here.."];
            }
        } else if ((window.leftPressed && this.X > -50) && window.gameOn) {
            if (!window.items && !this.tom.blockedl) {
                this.X -= 3;
            } else {
                this.selectCount += 1;
                if (this.selectCount === 5) {
                    this.selectCount = 0;
                    this.iscreen.moveLeft();
                }
            }
            if (this.objects.inventory.items.length >= 0) {
                this.teller.phrase = ["Nothing much here.."];
            }
        }
        if ((window.upPressed && this.Y > 250) && !this.tom.blockedu && window.gameOn) {
            if (!window.items) {
                this.Y -= 3;
            }
            if (this.objects.inventory.items.length >= 0) {
                this.teller.phrase = ["Nothing much here.."];
            }
        } else if ((window.downPressed && this.Y < 450) && !this.tom.blockedd && window.gameOn) {
            if (!window.items) {
                this.Y += 3;
            }
            if (this.objects.inventory.items.length >= 0) {
                this.teller.phrase = ["Nothing much here.."];
            }
        }

        if ((this.X > 440 && this.X < 460)&& this.Y < 300) {
            this.objects.paint.dropPaint();
        }

        ctx.clearRect(0, 0, 800, 600);
        ctx.fillRect(0, 0, 800, 600);
        ctx.drawImage(this.background, 0, 0, 800, 600);
        this.objects.door.draw(ctx);
        this.objects.paint.draw(ctx);
        this.objects.table.draw(ctx);
        if (this.objects.paint.dropped) {
            this.objects.key.draw(ctx);
            this.objects.writing.write();
        }
        this.objects.writing.draw(ctx);
        if (this.tom.count === 20 && window.gameOn) {
            this.objects.table.surprise();
            this.tom.count += 1;
        }
        if (this.tom.count === 35 && window.gameOn) {
            this.objects.shadow.gone();
            this.objects.letter3.discover();
            this.tom.count += 1;
        }
        if (this.objects.table.surprised) {
            this.objects.letter2.draw(ctx);
        }
        this.objects.letter3.draw(ctx);
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

        if (window.gameOn && !this.over) {
            this.objects.inventory.draw(ctx);
        } else {
            this.objects.title.draw(ctx);
        }

        if (window.telling) {
            let interactables = this.objects;
            let pos = {x: this.X, y: this.Y};
            this.teller.talk({ ctx, pos, interactables });
        }

        if (window.items) {
            let inventory = this.objects.inventory;
            this.iscreen.open({ ctx, inventory });
        }

        if (this.over) {
            this.objects.ending.draw(ctx);
        }
    }

    // moveObjects(delta) {
    //     this.allObjects().forEach((object) => {
    //         object.move(delta);
    //     });
    // }

    add(object) {
        if (object instanceof paint) {
            this.paintings.push(object);
        }
    }

    // allObjects() {
    //     return [].concat([]);
    // }

    // step(delta) {
    //     this.moveObjects(delta);
    // }
}
