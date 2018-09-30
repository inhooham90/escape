export default class Iscreen {
    constructor() {
        this.image = new Image();
        this.image.src = './images/iscreen.png';
        this.select = new Image();
        this.select.src = './images/select.png';
        this.first = true;
        this.second = false;
        this.third = false;
        this.fourth = false;
    }

    moveRight() {
        if (this.first) {
            this.first = false;
            this.second = true;
        } else if (this.second) {
            this.second = false;
            this.third = true;
        } else if (this.third) {
            this.third = false;
            this.fourth = true;
        } else if (this.fourth) {
            this.fourth = false;
            this.first = true;
        }
    }

    moveLeft() {
        if (this.first) {
            this.first = false;
            this.fourth = true;
        } else if (this.second) {
            this.second = false;
            this.first = true;
        } else if (this.third) {
            this.third = false;
            this.second = true;
        } else if (this.fourth) {
            this.fourth = false;
            this.third = true;
        }
    }

    drawTab(ctx) {
        ctx.drawImage(this.image, 20, 20, 757, 720);
    }

    drawSelector(ctx) {
        if (this.first) {
            ctx.drawImage(this.select, 128, 30, 120, 120);
        } else if (this.second) {
            ctx.drawImage(this.select, 268, 30, 120, 120);
        } else if (this.third) {
            ctx.drawImage(this.select, 408, 30, 120, 120);
        } else if (this.fourth) {
            ctx.drawImage(this.select, 548, 30, 120, 120);
        }
    }

    open({ ctx, inventory }) {
        const inven = inventory.items;

        this.drawTab(ctx);
        this.drawSelector(ctx);
        ctx.font = '14px "Press Start 2P"';
        let content;
        if (this.first) {
            if (inven[0]) {
                inven[0].read = true;
                content = inven[0].content;
            } else {
                content = ["Nothing here yet."];
            }
        } else if (this.second) {
            if (inven[1]) {
                inven[1].read = true;
                content = inven[1].content;
            } else {
                content = ["Nothing here yet."];
            }
        } else if (this.third) {
            if (inven[2]) {
                inven[2].read = true;
                content = inven[2].content;
            } else {
                content = ["Nothing here yet."];
            }
        } else if (this.fourth) {
            if (inven[3]) {
                inven[3].read = true;
                content = inven[3].content;
            } else {
                content = ["Nothing here yet."];
            }
        }

        content.forEach((line, idx) => {
            let y = (idx + 1) * 45 + 150;
            ctx.fillText(line, 80, y);
        })
    }


}