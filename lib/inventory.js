export default class Inventory{
    constructor() {
        this.items = [];
        this.image = new Image();
        this.image.src = "./images/inventory.png";
        this.dx = 28;
        this.dy = 30;
        this.full = false;
    }
    
    add(item) {
        this.items.push(item);
    }
    
    draw(ctx) {
        if (this.items.length > 3) {
            this.full = true;
        }

        ctx.drawImage(this.image, this.dx, this.dy, 750, 120);
        this.items.forEach ((item, idx) => {
            let x = (idx + 1) * 142;
            let y = this.dy + 102 - item.displayh;
            ctx.drawImage(item.image, x, y, item.displayw, item.displayh)
        })
    }
}