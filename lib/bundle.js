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





const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 800;
canvasEl.height = 600;
let game;

if (window.gameOn) {
    let ctx = canvasEl.getContext("2d");
    game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    game.intro = true;
    new _game_view_js__WEBPACK_IMPORTED_MODULE_1___default.a(game, ctx).start();
} else {
    let ctx = canvasEl.getContext("2d");
    game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    new _game_view_js__WEBPACK_IMPORTED_MODULE_1___default.a(game, ctx).start();
}

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
window.keysound = new Audio("./key.mp3");
window.skullsound = new Audio("./skull.mp3");
window.coinsound = new Audio("./change.mp3");
window.steps = new Audio("./steps.mp3");
window.telling = false;
window.items = false;
window.gameOn = false;
window.gameOver = false;

window.frames = 0;

function keyDownHandler(e) {
    if (e.keyCode === 39 && (!window.telling)) {
        window.rightPressed = true;
        window.walkingRight = true;
    }
    else if (e.keyCode === 37 && (!window.telling)) {
        window.leftPressed = true;
        window.walkingLeft = true;
    }
    if (e.keyCode === 38 && (!window.telling)) {
        window.upPressed = true;
        window.walkingRight = true;
    } else if (e.keyCode === 40 && (!window.telling)) {
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

    if (e.keyCode === 32 && window.gameOn && !game.over && !window.items) {
        if (window.telling) {
            window.telling = false;
        } else if (window.telling && game.intro){
            game.intro = false;
            window.telling = false;
        } else if (window.gameEnding) {
            game.over = true;
            window.telling = false;
        } else {
            window.telling = true;
        }
    }
    
    if (e.keyCode === 73 && window.gameOn) {
        if (window.items) {
            window.items = false;
        } else {
            window.items = true;
        }
    } 

    if (e.keyCode === 13) {
        if (!window.gameOn) {
            game.intro = true;
            window.telling = true;
            window.gameOn = true;
            snd.play();
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
/* harmony import */ var _inventory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory.js */ "./lib/inventory.js");
/* harmony import */ var _level1_items_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./level1/items.js */ "./lib/level1/items.js");
/* harmony import */ var _level1_items_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_level1_items_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _teller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teller.js */ "./lib/teller.js");
/* harmony import */ var _iscreen_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iscreen.js */ "./lib/iscreen.js");









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
        this.iscreen = new _iscreen_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.objects = {
            door: new _level1_door_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
            paint: new _level1_painting_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
            writing: new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Writing(),
            shadow: new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Shadow(),
            bed: new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Bed(),
            inventory: new _inventory_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
            key: new _level1_items_js__WEBPACK_IMPORTED_MODULE_5___default.a.Key(),
            letter1: new _level1_items_js__WEBPACK_IMPORTED_MODULE_5___default.a.Letter1(),
            table: new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Table(),
            letter2: new _level1_items_js__WEBPACK_IMPORTED_MODULE_5___default.a.Letter2(),
            letter3: new _level1_items_js__WEBPACK_IMPORTED_MODULE_5___default.a.Letter3(),
            title: new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Title(),
            ending: new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Ending(),
        }
        this.selectCount = 0;
        this.intro = false;
        this.over = false;
    }

    addTom() {
        this.tom = new _tom_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
        if (this.tom.count === 15 && window.gameOn) {
            this.objects.table.surprise();
            this.tom.count += 1;
        }
        if (this.tom.count === 25 && window.gameOn) {
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

/***/ "./lib/inventory.js":
/*!**************************!*\
  !*** ./lib/inventory.js ***!
  \**************************/
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

/***/ }),

/***/ "./lib/iscreen.js":
/*!************************!*\
  !*** ./lib/iscreen.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Iscreen; });
class Iscreen {
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
    this.content = ["It's a key.", "It fits the trap door perfectly."],
    this.read = false;
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
    this.image.src = "./images/letter3.png";
    this.content = 
        [
        "Dear Diary,", 
        "When I first saw Tom, I fell in love with him.",
        "It's destined. Tom and me TOGETHER. Although",
        "Tom doesn't know who I am, we will meet soon.",
        "He is not ready for me yet. I really hope he ",
        "likes me.. unlike the other guys.",
        "HOW DARE THEY TO REJECT ME! Doesn't matter.. ",
        "They are all dead and buried under me HAHA",
        "Tom better like me.. or he'll be joining them!"
    ]
    this.found = false;
    this.displayh = 85;
    this.displayw = 85;
    this.read = false;
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
        [
            "Dear Diary,",
            "Our eyes met. And he didn't look away from me.",
            "My love. I guess that means he's ready to take ",
            "the vow. I can already imagine us, Tom and I,",
            "standing at the podium. HAHA I cannot continue",
            "for my heart flutters too vigorously!",
            "It's time for us to meet Tom. I will be under",
            "your bed tonight for a special surprise!",
            "Surprise event for our first encounter!"
        ]

    this.found = false;
    this.displayh = 85;
    this.displayw = 85;
    this.read = false;
}

Letter2.prototype = {
    draw: function (ctx) {
        if (!this.found) {
            ctx.drawImage(this.image, 660, 320, 40, 40);
        }
    }
}

const Letter3 = function () {
    this.image = new Image();
    this.image.src = "./images/letter1.png";
    this.content =
        [
            "HOW DARE HE",
            " ",
            "IF I CAN'T HAVE TOM",
            " ",
            "NOBODY CAN",
            " ",
            "I'LL KEEP TOM FOREVER MINE",
            " ",
            "FIRST I'LL KILL HIM SO HE CAN'T REFUSE!"
        ]
    this.present = false;
    this.found = false;
    this.displayh = 85;
    this.displayw = 85;
    this.read = false;
}

Letter3.prototype = {
    discover: function () {
        this.present = true;
    },

    draw: function (ctx) {
        if (this.present && !this.found) {
            ctx.drawImage(this.image, 230, 375, 40, 40);
        }
    }
}

module.exports = { Key, Letter1, Letter2, Letter3 };

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
    this.present = true;
}

Shadow.prototype = {
    gone: function () {
        this.present = false;
        window.steps.play();
    },

    draw: function (ctx) {
        if (this.present) {
            ctx.drawImage(this.image, 200, 275, 50, 175);
        }
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

const Table = function () {
    this.image = new Image();
    this.image.src = "./images/beforetable.png";
    this.surprised = false;
}

Table.prototype = {
    surprise: function () {
        this.surprised = true;
        window.coinsound.play();
        window.skullsound.play();
    },
    draw: function (ctx) {
        if (this.surprised) {
            this.image.src = "./images/aftertable.png";
        }
        ctx.drawImage(this.image, 570, 250, 250, 250);
    }
}

const Title = function () {
    this.image = new Image();
    this.image.src = "./images/title.png";
    this.phrase = [
                "Press: ",
                "'enter' to start",
                "'arrows' to move", 
                "'space' for interactions", 
                "'i' for inventory",
                "'m' to toggle music",
            ]
}

Title.prototype = {
    draw: function (ctx) {
        if (!window.gameEnding) {
            ctx.drawImage(this.image, 30, 0, 800, 600);
            ctx.font = '14px "Press Start 2P"';
            this.phrase.forEach((line, idx) => {
                let y = (idx + 1) * 30 + 325;
                ctx.fillText(line, 390, y);
            })
        }
    }
}

const Ending = function () {
    this.image = new Image();
    this.image.src = "./images/ending.png";
    this.phrase = [
        "You successfully escape",
        "with recovered memory.",
        "Soon after, you hear her",
        "devilish scream..",
        "Hopefully you will never",
        "encounter her again..",
        "Thanks for playing"
    ]
}

Ending.prototype = {
    draw: function (ctx) {
        ctx.drawImage(this.image, 30, 0, 800, 600);
        ctx.font = '14px "Press Start 2P"';
        this.phrase.forEach((line, idx) => {
            let y = (idx + 1) * 30 + 325;
            ctx.fillText(line, 108, y);
        })
    }
}


module.exports = { Writing, Shadow, Bed, Table, Title, Ending };

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
        this.count = 0;
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
        } else if (pos.x > 462 && pos.y < 289) {
            this.blockedu = true;
        } else {
            this.blockedu = false;
        }

        if (pos.x > 460 && pos.y >= 250 && pos.y < 285 ) {
            this.blockedr = true;
        } else {
            this.blockedr = false;
        }

    }
    
    draw(obj) {
        if (window.rightPressed && !window.items) {
            this.image.src = "./images/right.png"
        } else if (window.leftPressed && !window.items) {
            this.image.src = "./images/left.png"
        }

        if (window.upPressed && !window.rightPressed && !window.items) {
            window.frames += 150;
        } else if (window.downPressed && !window.leftPressed && !window.items) {
            window.frames += 150;
        } else if (window.upPressed && window.rightPressed && !window.items) {
            window.frames += 150;
        } else if (window.downPressed && window.leftPressed && !window.items) {
            window.frames += 150;
        } else if (!window.upPressed && window.rightPressed && !window.items) {
            window.frames += 150;
        } else if (!window.downPressed && window.leftPressed && !window.items) {
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
                this.count += 1;
                break;
            default:
                break;
        }

        if (window.frames > 7200) {
            this.sy = 0;
            window.frames = 0;
        }
        window.getpos = [[obj.x, obj.y], this.count];
    obj.ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, obj.x, obj.y, this.width, this.height);
    }
}



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map