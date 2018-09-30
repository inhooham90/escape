export default class Teller {
    constructor(){
        this.image = new Image();
        this.image.src = './images/teller.png';
        this.phrase = ["I wake up to a musky odor..", "Where.. am I?", "Who am I?"];
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
            window.keysound.play();
            inven.add(interactables.key);
            interactables.key.found = true;
        } else if (    
            ((pos.x > 450 && pos.x < 550) && (pos.y > 300 && pos.y < 360))
        ) {
            if (interactables.key.found && !inven.full){
                this.phrase = ["I can't leave yet..", "I have to remember who I am.."]
            } else if (!interactables.key.found) {
                this.phrase = ["It's a trap door that leads", "to outside. But it's locked."]
            } else if (inven.full && (!interactables.key.read || !interactables.letter1.read || !interactables.letter2.read || !interactables.letter3.read)) {
                this.phrase = ["I should probably read the", "pieces of diary first..."]
            } else if (inven.full && interactables.key.read && interactables.letter1.read && interactables.letter2.read && interactables.letter3.read) {
                this.phrase = [".. I remember now.. My name", "is Tom. This person will kill", "me if I don't leave..."];
                window.gameEnding = true;
            }
        } else if (
            (pos.x > 123 && pos.x < 213) && (pos.y > 240 && pos.y < 259)
        ) {
            if (interactables.shadow.present && interactables.paint.dropped ){
                this.phrase = ["I thought I saw someone..", "...", "Was this writing always here?"]
            } else if (!interactables.shadow.present && !interactables.letter3.found) {
                this.phrase = ["There is a part of a diary.",
                               "I thought I heard something",
                               "around here.. What was it?"];
                inven.add(interactables.letter3);
                interactables.letter3.found = true;
            }
        } else if (
            ((pos.x > 50 && pos.x < 108) && (pos.y > 322 && pos.y < 380) && !interactables.bed.opened)
        ) {
            window.bedsound.play();
            interactables.bed.open();
            this.phrase = ["There is something under", "the bed sheet.", "It's a part of a diary."]
            inven.add(interactables.letter1);
            interactables.letter1.found = true;
        } else if (
            ((pos.x > 539 && pos.x < 618) && (pos.y > 285 && pos.y < 298))
            && (!interactables.letter2.found && interactables.table.surprised)
        ){ 
            window.bedsound.play();
            this.phrase = ["What happened?", "Where is this from?"]
            interactables.letter2.found = true;
            inven.add(interactables.letter2);
        } 


        this.draw(ctx);
        ctx.font = '16px "Press Start 2P"';
        this.phrase.forEach( (line, idx) => {
            let y = (idx + 1) * 45 + 385;
            ctx.fillText(line, 175, y);
        })
    }

    
}