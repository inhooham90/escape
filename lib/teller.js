export default class Teller {
    constructor(){
        this.image = new Image();
        this.image.src = './images/teller.png';
        this.phrase = ["...", "Where.. am I?", "Who am I?"];
    }

    draw(ctx) {
        ctx.drawImage(this.image, 104, 330, 600, 280)
    }

    talk({ ctx, pos, interactables }) {
        const inven = interactables.inventory;
        if ( 
            ((pos.x > 375 && pos.x < 460) && (pos.y > 249 && pos.y < 280))
            && (!interactables.key.found && interactables.paint.dropped)
        ) {
            this.phrase = ["There is a key here"];
            inven.add(interactables.key);
            interactables.key.found = true;
        } else if (    
            ((pos.x > 450 && pos.x < 550) && (pos.y > 300 && pos.y < 360))
            && (interactables.key.found && !inven.full)
        ) {
            this.phrase = ["I can't leave yet..", "I have to remember who I am.."]
        } else if (
            ((pos.x > 123 && pos.x < 213) && (pos.y > 240 && pos.y < 259))
            && (interactables.paint.dropped)
        ) {
            this.phrase = ["I thought I saw someone..", "...", "Was this writing always here?"]
        } else if (
            ((pos.x > 50 && pos.x < 108) && (pos.y > 322 && pos.y < 380) && !interactables.bed.opened)
        ) {
                window.bedsound.play();
                interactables.bed.open();
                this.phrase = ["There is something under", "the bed sheet.", "It's a letter"]
                inven.add(interactables.letter1);
                interactables.letter1.found = true;
        }
        this.draw(ctx);
        ctx.font = '16px "Press Start 2P"';
        this.phrase.forEach( (line, idx) => {
            let y = (idx + 1) * 45 + 385;
            ctx.fillText(line, 175, y);
        })
    }

    
}