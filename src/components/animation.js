"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var Animation = /** @class */ (function () {
    function Animation(animationContainer) {
        var _this = this;
        this.changeLabel = function () {
            var inputValue = _this.getInputRangeValue();
            var currentRange = _this.animationContainer.querySelector('.current_range');
            currentRange.textContent = String(inputValue);
        };
        this.animationContainer = animationContainer;
        this.animationCanvas = this.animationContainer.querySelector('#animation_canvas');
        var rect = this.getCanvasRect();
        this.animationCanvas.setAttribute('width', String(rect.width));
        this.animationCanvas.setAttribute('height', String(rect.height));
        this.changeLabel();
        this.setRangeListener();
        this.addFullScreenListener();
    }
    Animation.prototype.getInputRange = function () {
        return this.animationContainer.querySelector('.input_range');
    };
    Animation.prototype.getInputRangeValue = function () {
        var inputRange = this.getInputRange();
        return Number(inputRange.value);
    };
    Animation.prototype.setRangeListener = function () {
        var _this = this;
        var inputRange = this.getInputRange();
        inputRange.addEventListener('mousemove', this.changeLabel);
        inputRange.addEventListener('change', function () {
            _this.stopAnimation();
            _this.animateFrames(_this.imagesArray);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'ArrowRight') {
                inputRange.value = String(Number(inputRange.value) + 1);
                _this.changeLabel();
                _this.stopAnimation();
                _this.animateFrames(_this.imagesArray);
            }
            if (event.code == "ArrowLeft") {
                inputRange.value = String(Number(inputRange.value) - 1);
                _this.changeLabel();
                _this.stopAnimation();
                _this.animateFrames(_this.imagesArray);
            }
        });
    };
    Animation.prototype.getCanvasRect = function () {
        return this.animationCanvas.getBoundingClientRect();
    };
    Animation.prototype.animateFrames = function (array) {
        var rect = this.getCanvasRect();
        var animationContext = this.animationCanvas.getContext('2d');
        var inputRangeValue = this.getInputRangeValue();
        var frameIndex = 0;
        this.imagesArray = array;
        this.stopAnimation = utils_1.animate(function () {
            if (array[frameIndex]) {
                var image = new Image();
                image.src = array[frameIndex];
                animationContext.clearRect(0, 0, rect.width, rect.height);
                animationContext.drawImage(image, 0, 0, rect.width, rect.height);
                frameIndex++;
            }
            if (frameIndex >= array.length) {
                frameIndex = 0;
            }
        }, inputRangeValue);
    };
    Animation.prototype.addFullScreenListener = function () {
        var _this = this;
        var button = this.animationContainer.querySelector('#full_screen_button');
        button.addEventListener('click', function () {
            _this.animationCanvas.requestFullscreen();
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'NumpadEnter') {
                _this.animationCanvas.requestFullscreen();
            }
        });
    };
    return Animation;
}());
exports.default = Animation;
//# sourceMappingURL=animation.js.map