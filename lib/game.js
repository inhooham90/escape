import Tom from './tom.js'

export default class Game {
    constructor() {
        this.tom = null;
        this.score = 0;
    }

    addTom() {
        const tom = new Tom();
        this.tom = tom;
        return tom;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 800, 600);
        ctx.fillStyle = '#FFFAFA';
        ctx.fillRect(0, 0, 800, 600);
        this.tom.draw(ctx)
        this.allObjects().forEach((object) => {
        object.draw(ctx);
        });
    }

    add(object) {
        if (object instanceof Tom) {
            this.toms.push(object)
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