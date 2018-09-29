/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/escape.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/escape.js":
/*!***********************!*\
  !*** ./lib/escape.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./lib/game.js");
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ "./lib/game_view.js");
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_view_js__WEBPACK_IMPORTED_MODULE_1__);




// document.addEventListener("DOMContentLoaded", () => {
const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 800;
canvasEl.height = 600;

const ctx = canvasEl.getContext("2d");
const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
new _game_view_js__WEBPACK_IMPORTED_MODULE_1___default.a(game, ctx).start();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const snd = new Audio("./escape.mp3");
snd.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
}, false);
snd.play();

window.dropsound = new Audio("./drop.mp3");
window.bedsound = new Audio("./bed.mp3");
window.telling = false;

window.frames = 0;

function keyDownHandler(e) {
    if (e.keyCode === 39 && !window.telling) {
        window.rightPressed = true;
        window.walkingRight = true;
    }
    else if (e.keyCode === 37 && !window.telling) {
        window.leftPressed = true;
        window.walkingLeft = true;
    }
    if (e.keyCode === 38 && !window.telling) {
        window.upPressed = true;
        window.walkingRight = true;
    } else if (e.keyCode === 40 && !window.telling) {
        window.downPressed = true;
        window.walkingLeft = true;
    }  
    if (e.keyCode === 77) {
        if (snd.paused) {
            snd.play();
        } else {
            snd.pause();
        }
    }

    if (e.keyCode === 32) {
        if (window.telling) {
            window.telling = false;
        } else {
            window.telling = true;
        }
    }
}
function keyUpHandler(e) {
    if (e.keyCode === 39) {
        window.rightPressed = false;
        window.walkingRight = false;
    }
    else if (e.keyCode === 37) {
        window.leftPressed = false;
        window.walkingLeft = false;
    }
    if (e.keyCode === 38) {
        window.upPressed = false;
        window.walkingRight = false;
    }
    else if (e.keyCode === 40) {
        window.downPressed = false;
        window.walkingLeft = false;
    }
}

// })

// window.addEventListener("keydown", checkKeyPressed)

// let gameCanvas = document.getElementById("game-canvas");
// gameCanvas.width = 800;
// gameCanvas.height = 600;
// let ctx = gameCanvas.getContext("2d");


// const escape = new Game();
// escape.render(ctx)

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _tom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tom.js */ "./lib/tom.js");
/* harmony import */ var _level1_door_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level1/door.js */ "./lib/level1/door.js");
/* harmony import */ var _level1_painting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level1/painting.js */ "./lib/level1/painting.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects.js */ "./lib/objects.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_objects_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inventrory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventrory.js */ "./lib/inventrory.js");
/* harmony import */ var _level1_items_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./level1/items.js */ "./lib/level1/items.js");
/* harmony import */ var _level1_items_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_level1_items_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _teller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teller.js */ "./lib/teller.js");








class Game {
    constructor(ctx) {
        this.teller = new _teller_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.background = new Image();
        this.background.src = './images/background.png';
        this.filterImg = new Image();
        this.filterImg.src = './images/filter.png';
        this.tom = null;
        this.X = 30;
        this.Y = 400;
        this.objects = {
            door: new _level1_door_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
            paint: new _level1_painting_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
            writing: new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Writing(),
            shadow: new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Shadow(),
            bed: new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Bed(),
            inventory: new _inventrory_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
            key: new _level1_items_js__WEBPACK_IMPORTED_MODULE_5___default.a.Key(),
            letter1: new _level1_items_js__WEBPACK_IMPORTED_MODULE_5___default.a.Letter1(),
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
        this.tom = new _tom_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
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

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.tom = this.game.addTom();
    }
    
    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    }



    animate(time) {
        this.game.play(this.ctx);
        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    }
  
}

module.exports = GameView

/***/ }),

/***/ "./lib/inventrory.js":
/*!***************************!*\
  !*** ./lib/inventrory.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inventory; });
class Inventory{
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
        ctx.drawImage(this.image, this.dx, this.dy, 750, 120);
        this.items.forEach ((item, idx) => {
            let x = (idx + 1) * 120 + this.dx;
            let y = this.dy + 102 - item.displayh;
            ctx.drawImage(item.image, x, y, item.displayw, item.displayh)
        })
    }
}

/***/ }),

/***/ "./lib/level1/door.js":
/*!****************************!*\
  !*** ./lib/level1/door.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Door; });
class Door {
    constructor(char) {
        this.image = new Image();
        this.image.src = "./images/door.png";
        this.width = 165;
        this.height = 60;
        this.X = 550;
        this.Y = 450;
        this.opened = false;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.X, this.Y, this.width, this.height);
    }
}



/***/ }),

/***/ "./lib/level1/items.js":
/*!*****************************!*\
  !*** ./lib/level1/items.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const Key = function () {
    this.image = new Image();
    this.image.src = "./images/key.png";
    this.found = false;
    this.displayw = 90;
    this.displayh = 90;
}

Key.prototype = {
    draw: function (ctx) {
        if (!this.found) {
            ctx.drawImage(this.image, 490, 370, 60, 60);
        }
    }
}

const Letter1 = function () {
    this.image = new Image();
    this.image.src = "./images/letter1.png";
    this.content = 
        ("Dear Tom, When I first saw you, I just had to make you mine. Your brown hair.. I dream about them every night.I bet you dream about me, too. Because if you aren't.. It would make me angry and you shouldnt make your future spouse angry. Right, my dear Tom?")
    this.found = false;
    this.displayh = 85;
    this.displayw = 85;
}

Letter1.prototype = {
    draw: function (ctx) {
        if (!this.found) {
        ctx.drawImage(this.image, 90, 440, 40, 40);
        }
    }
}

const Letter2 = function () {
    this.image = new Image();
    this.image.src = "./images/letter2.png";
    this.content =
        ("Dear Tom, When I first saw you, I just had to make you mine. Your brown hair.. I dream about them every night.I bet you dream about me, too. Because if you aren't.. It would make me angry and you shouldnt make your future spouse angry. Right, my dear Tom?")
    this.found = false;
}

Letter2.prototype = {
    draw: function (ctx) {
        ctx.drawImage(this.image, this.x, this.y, 40, 40);
    }
}

module.exports = { Key, Letter1 };

/***/ }),

/***/ "./lib/level1/painting.js":
/*!********************************!*\
  !*** ./lib/level1/painting.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paint; });
class Paint {
    constructor(obj) {
        this.image = new Image();
        this.image.src = "./images/paint1.png";
        this.width = 100;
        this.height = 120;
        this.X = 480;
        this.Y = 200;
        this.falling = false;
        this.dropped = false;
    }

    dropPaint() {
        this.falling = true;
    }

    draw(ctx) {
        if (this.falling && this.Y < 340) {
                this.Y += 10;
            window.dropsound.play();
        }

        if (this.Y === 340) {
            this.falling = false;
            this.dropped = true;
            this.image.src = './images/paint2.png';
            this.width = 130;
            this.height = 45;
            this.X = 450;
            this.Y += 45;
            window.dropsound.pause();
        }
        ctx.drawImage(this.image, this.X, this.Y, this.width, this.height);
    }
}



/***/ }),

/***/ "./lib/objects.js":
/*!************************!*\
  !*** ./lib/objects.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const Writing = function () {
    this.image = new Image();
    this.image.src = "./images/writing.png";
    this.wall = false;
}

Writing.prototype = {
    write: function () {
        this.wall = true;
    },
    draw: function (ctx) {
        if (this.wall) {
            ctx.drawImage(this.image, 180, 250, 180, 150);
        }
    }
}

const Shadow = function () {
    this.image = new Image();
    this.image.src = "./images/shadow.png";
}

Shadow.prototype = {
    draw: function (ctx) {
        ctx.drawImage(this.image, 200, 275, 50, 175);
    }
}

const Bed = function () {
    this.image = new Image();
    this.image.src = "./images/bed.png";
    this.sy = 0;
    this.opened = false;
}

Bed.prototype = {
    open: function() {
        this.sy = 1200;
        this.opened = true;
    },
    draw: function (ctx) {
        ctx.drawImage(this.image, 0, this.sy, 1200, 1200, -65, 300, 350, 350);
    }
}

module.exports = { Writing, Shadow, Bed };

/***/ }),

/***/ "./lib/teller.js":
/*!***********************!*\
  !*** ./lib/teller.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Teller; });
class Teller {
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

/***/ }),

/***/ "./lib/tom.js":
/*!********************!*\
  !*** ./lib/tom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tom; });
class Tom {
    constructor(pos) {
        this.image = new Image();
        this.image.src = "./images/right.png"
        this.width = 200;
        this.height = 200;
        this.sx = 0;
        this.sy = 0;
        this.sh = 1200;
        this.sw = 1200;
        this.blockedr = false;
        this.blockedl = false;
        this.blockedu = false;
        this.blockedd = false;
    }

    checkCollision(pos) {
        if ((pos.x >= 12 && pos.x < 101) && (pos.y > 288 && pos.y < 292)) {
            this.blockedd = true;
        } else {
            this.blockedd = false;
        }

        if (pos.x < 60 && (pos.y > 240 && pos.y < 290)){
            this.blockedl = true;
        } else if (pos.x < 105 && (pos.y > 290 && pos.y < 350)) {
            this.blockedl = true;
        } else if (pos.x < 78 && (pos.y >= 350 && pos.y < 390)) {
            this.blockedl = true;
        } else {
            this.blockedl = false;
        }

        if (pos.x >= 74 && pos.x < 101 && pos.y === 355) {
            this.blockedu = true;
        } else if (pos.x < 75 && pos.y > 390 && pos.y <395 ) {
            this.blockedu = true;
        } else {
            this.blockedu = false;
        }

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
        window.getpos = [obj.x, obj.y];
    obj.ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, obj.x, obj.y, this.width, this.height);
    }
}



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map