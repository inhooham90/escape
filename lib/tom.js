export default class Tom {
    constructor(char) {
        this.image = new Image();
        this.image.src = "./images/right.png"
        this.width = 32.5;
        this.height = 55;
        this.X = 30;
        this.Y = 525;
        this.isJumping = false;
        this.isFalling = false;
        this.isWalking = false;
        this.isLookingR = true;
        this.jumpVel = 0;
        this.fallVel = 0;
    }

    draw(ctx) {
        if (window.rightPressed && this.X < 767.5) {
            this.X += 5;
        } else if (window.leftPressed && this.X > 0) {
            this.X -= 5;
        }
        if (window.upPressed && this.Y > 0) {
            this.Y -= 5;
        } else if (window.downPressed && this.Y < 545) {
            this.Y += 5;
        }

        // this.isLookingR = ;
        // this.isWalking = (this.dx != 0);
        // this.isJumping = (this.Y < 525);

        // if ((this.isJumping || this.isFalling) && this.isLookingR) { // jumping or falling looking right
        //     this.image.src = "./images/right_jump.png";
        // } else if ((this.isJumping || this.isFalling) && !this.isLookingR) { // jumping or falling looking left
        //     this.image.src = "./images/left_jump.png";
        // } else if ((!this.isJumping || !this.isFalling) && (!this.isWalking && this.isLookingR)) {
        //     this.image.src = "./images/right.png"; // standing looking r
        // } else if ((!this.isJumping || !this.isFalling) && (!this.isWalking && !this.isLookingR)) {
        //     this.image.src = "./images/left.png"; //standing looking l
        // } else if ((!this.isJumping || !this.isFalling) && (this.isWalking && this.isLookingR)) {
        //     this.image.src = "./images/right.png"; // change this to gif of Tom walking right
        // } else if ((!this.isJumping || !this.isFalling) && (this.isWalking && !this.isLookingR)) {
        //     this.image.src = "./images/left.png"; // change this to gif of Tom walking left
        // } 

    ctx.drawImage(this.image, this.X, this.Y, this.width, this.height);
    }
    
    // jump () {
    //     if (!this.isJumping && !this.isFalling) {
    //         this.fallVel = 0;
    //         this.isJumping = true;
    //         this.jumpVel = 10;
    //     }
    // }

    // reset() {
    //     this.isJumping = false;
    //     this.isFalling = false;
    //     this.isWalking = false;
    //     this.isLookingR = true;
    //     this.jumpVel = 0;
    //     this.fallVel = 0;
    // }

}

