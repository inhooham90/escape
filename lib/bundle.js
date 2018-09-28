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

/***/ "./lib/door.js":
/*!*********************!*\
  !*** ./lib/door.js ***!
  \*********************/
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
const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _game_view_js__WEBPACK_IMPORTED_MODULE_1___default.a(game, ctx).start();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const snd = new Audio("./escape.mp3");
snd.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
}, false);
snd.play();

window.frames = 0;

function keyDownHandler(e) {
    if (e.keyCode === 39) {
        window.rightPressed = true;
        window.walkingRight = true;
    }
    else if (e.keyCode === 37) {
        window.leftPressed = true;
        window.walkingLeft = true;
    }
    if (e.keyCode === 38) {
        window.upPressed = true;
        window.walkingRight = true;
    }
    else if (e.keyCode === 40) {
        window.downPressed = true;
        window.walkingLeft = true;
    } else if (e.keyCode === 77) {
        if (snd.paused) {
            snd.play();
        } else {
            snd.pause();
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
/* harmony import */ var _door_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./door.js */ "./lib/door.js");
/* harmony import */ var _painting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painting.js */ "./lib/painting.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects.js */ "./lib/objects.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_objects_js__WEBPACK_IMPORTED_MODULE_3__);





class Game {
    constructor() {
        this.background = new Image();
        this.background.src = './images/background.png';
        this.filterImg = new Image();
        this.filterImg.src = './images/filter.png';
        this.tom = null;
        this.X = 30;
        this.Y = 400;
        this.door = new _door_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.paint = new _painting_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.writing = new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Writing();
        this.shadow = new _objects_js__WEBPACK_IMPORTED_MODULE_3___default.a.Shadow();
    
    }

    addTom() {
        this.tom = new _tom_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        return this.tom;
    }

    draw(ctx) {
        if (window.rightPressed && this.X < 630) {
            this.X += 3;
        } else if (window.leftPressed && this.X > -30) {
            this.X -= 3;
        }
        if (window.upPressed && this.Y > 250) {
            this.Y -= 3;
        } else if (window.downPressed && this.Y < 450) {
            this.Y += 3;
        }

        if ((this.X > 450 && this.X < 600)&& this.Y < 330) {
            this.paint.dropPaint();
        }

        if ((this.X > 500 && this.X < 600) && (this.Y > 350 && this.Y < 430)) {
            console.log("Door is locked");
        }

        ctx.clearRect(0, 0, 800, 600);
        ctx.fillRect(0, 0, 800, 600);
        ctx.drawImage(this.background, 0, 0, 800, 600);
        this.door.draw(ctx);
        this.paint.draw(ctx);
        this.writing.draw(ctx);
        this.tom.draw({ctx: ctx, x: this.X, y: this.Y});
        if (this.X < 500) {
            this.shadow.draw(ctx);
        } else 
        this.shadow
        ctx.drawImage(this.filterImg, this.X - 700, this.Y - 710, 1600, 1600)
        this.allObjects().forEach((object) => {
        object.draw(ctx);
        });
    }

    add(object) {
        if (object instanceof paint) {
            this.paintings.push(object);
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
        const timeDelta = time - this.lastTime;

        this.game.step(timeDelta);
        this.game.draw(this.ctx);
        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    }
  
}

module.exports = GameView

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
}

Writing.prototype = {
    draw: function (ctx) {
        ctx.drawImage(this.image, 180, 250, 120, 100);
    }
}

const Shadow = function () {
    this.image = new Image();
    this.image.src = "./images/shadow.png";
}

Shadow.prototype = {
    draw: function (ctx) {
        ctx.drawImage(this.image, 700, 400, 50, 175);
    }
}

module.exports = { Writing, Shadow };

/***/ }),

/***/ "./lib/painting.js":
/*!*************************!*\
  !*** ./lib/painting.js ***!
  \*************************/
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
    }

    dropPaint() {
        this.falling = true;
    }

    draw(ctx) {
        if (this.falling) {
            if (this.Y < 340) {
                this.Y += 10;
            }
        }

        if (this.Y === 340) {
            this.falling = false;
            this.image.src = './images/paint2.png';
            this.width = 130;
            this.height = 45;
            this.X = 450;
            this.Y += 45;
        }
        ctx.drawImage(this.image, this.X, this.Y, this.width, this.height);
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
        if ((this.X > 450 && this.X < 600) && (this.Y > 330 && this.Y < 400)) {
            console.log("working");
        }

    obj.ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, obj.x, obj.y, this.width, this.height);
    }
}



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map