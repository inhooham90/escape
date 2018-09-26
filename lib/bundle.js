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




document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 800;
    canvasEl.height = 600;

    const ctx = canvasEl.getContext("2d");
    const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    new _game_view_js__WEBPACK_IMPORTED_MODULE_1___default.a(game, ctx).start();
})




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


class Game {
    constructor() {
        this.toms = [];
        this.score = 0;
    }

    addTom() {
        const tom = new _tom_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.add(tom);
        return tom;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 800, 600);
        ctx.fillStyle = '#FFFAFA';
        ctx.fillRect(0, 0, 800, 600);

        this.allObjects().forEach((object) => {
            object.draw(ctx);
        });
    }

    add(object) {
        if (object instanceof _tom_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.toms.push(object)
        }
    }

    moveObjects(delta) {
        this.allObjects().forEach((object) => {
            object.move(delta);
        });
    }

    allObjects() {
        return [].concat(this.toms);
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
        this.tom = this.game.addTom(); // do next
    }
    
    start() {
        // this.bindKeyHandlers();
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    }

    // bindKeyHandlers() {
    //     const tom = this.tom;
    //     Object.keys(GameView.MOVES).forEach((k) => {
    //         const move = GameView.MOVES[k];
    //         key(k, () => { tom.move()})
    //     })
    //     key("space", () => { tom.jump(); });
    // }

    animate(time) {
        const timeDelta = time - this.lastTime;

        this.game.step(timeDelta);
        this.game.draw(this.ctx);
        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    }


}

GameView.MOVES = {
    a: [-1, 0],
    d: [1, 0],
};

module.exports = GameView

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

    setPos(x, y) {
    this.X = x;
    this.Y = y;
    }

    draw(ctx) {
        if ((this.isJumping || this.isFalling) && this.isLookingR) { // jumping or falling looking right
            this.image.src = "./images/right_jumping";
        } else if ((this.isJumping || this.isFalling) && !this.isLookingR) { // jumping or falling looking left
            this.image.src = "./images/left_jumping";
        } else if ((!this.isJumping || !this.isFalling) && (!this.isWalking && this.isLookingR)) {
            this.image.scr = "./images/right.png"; // standing looking r
        } else if ((!this.isJumping || !this.isFalling) && (!this.isWalking && !this.isLookingR)) {
            this.image.scr = "./images/left.png"; //standing looking l
        } else if ((!this.isJumping || !this.isFalling) && (this.isWalking && this.isLookingR)) {
            this.image.scr = "./images/right.png"; // change this to gif of Tom walking right
        } else if ((!this.isJumping || !this.isFalling) && (this.isWalking && !this.isLookingR)) {
            this.image.scr = "./images/right.png"; // change this to gif of Tom walking left
        } 

    ctx.drawImage(this.image, this.X, this.Y, this.width, this.height);
    }
    
    jump () {
        if (!this.isJumping && !this.isFalling) {
            this.fallVel = 0;
            this.isJumping = true;
            this.jumpVel = 10;
        }
    }

    reset() {
        this.isJumping = false;
        this.isFalling = false;
        this.isWalking = false;
        this.isLookingR = true;
        this.jumpVel = 0;
        this.fallVel = 0;
    }

    move(timeDelta) {
        this.pos = [this.X + 5, this.Y];
    }

    
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map