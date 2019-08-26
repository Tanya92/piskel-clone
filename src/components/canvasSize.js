"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var activeClass = 'active_button';
var CanvasSize = /** @class */ (function () {
    function CanvasSize() {
        var _this = this;
        this.canvasSize = 32;
        this.currentSize = 32;
        this.onCanvasSizeSelected = function (elem, prevElem) {
            var scale = _this.currentSize / _this.canvasSize;
            _this.resize(scale);
            _this.callback();
            _this.currentSize = _this.canvasSize;
            _this.setCanvasInformation();
            if (prevElem) {
                prevElem.classList.remove(activeClass);
            }
            elem.classList.add(activeClass);
        };
        this.setCanvasInformation = function () {
            var informationContainer = document.getElementById('information_container');
            var canvasSize = _this.getCanvasSize();
            informationContainer.innerHTML = "\n        <table>\n            <tr class=\"canvas_size_info\"><td>[" + canvasSize + "/" + canvasSize + "]</td></tr>\n            <tr class=\"cursor_coordinates\"></tr>\n        </table>\n         \n        ";
        };
        this.onUpdate = function (callback) {
            _this.callback = callback;
        };
        this.canvas = document.getElementById('draw_canvas');
        this.addCanvasSizeListener();
        this.setCanvasInformation();
    }
    CanvasSize.prototype.getCanvasContext = function () {
        return this.canvas.getContext('2d');
    };
    CanvasSize.prototype.addCanvasSizeListener = function () {
        var _this = this;
        var ctx = this.getCanvasContext();
        ctx.scale(4, 4);
        var container = document.getElementById('scale_canvas_container');
        container.addEventListener('click', function (event) {
            var elem = event.target;
            var prevElem = document.querySelector("." + activeClass);
            if (elem.classList.contains('scale_canvas_button')) {
                _this.canvasSize = Number(elem.getAttribute('data-canvassize'));
                _this.onCanvasSizeSelected(elem, prevElem);
            }
        });
        document.addEventListener('keydown', function (event) {
            var sizeCollection = document.getElementsByClassName('scale_canvas_button');
            var prevElem = document.querySelector("." + activeClass);
            var elemIndex = Array.from(sizeCollection).indexOf(prevElem);
            var nextIndex;
            if (event.code == 'ArrowDown') {
                nextIndex = (elemIndex + 1) % sizeCollection.length;
            }
            if (event.code == 'ArrowUp') {
                nextIndex = elemIndex - 1 % sizeCollection.length;
                if (nextIndex < 0) {
                    nextIndex = sizeCollection.length - 1;
                }
            }
            if (event.code == 'ArrowUp' || event.code == 'ArrowDown') {
                _this.canvasSize = Number(sizeCollection[nextIndex].getAttribute('data-canvassize'));
                _this.onCanvasSizeSelected(sizeCollection[nextIndex], prevElem);
            }
        });
    };
    CanvasSize.prototype.getSquareLength = function () {
        var canvasWidth = this.canvas.width;
        return canvasWidth / this.canvasSize;
    };
    CanvasSize.prototype.getCanvasSize = function () {
        return this.canvasSize;
    };
    CanvasSize.prototype.resize = function (scale) {
        var tmp = document.createElement('canvas');
        var tmpCtx = tmp.getContext('2d');
        var ctx = this.getCanvasContext();
        var canvasWidth = parseInt(getComputedStyle(this.canvas).width);
        var canvasHeight = parseInt(getComputedStyle(this.canvas).height);
        tmp.width = this.canvas.width;
        tmp.height = this.canvas.height;
        tmpCtx.drawImage(this.canvas, 0, 0);
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        var drawWidth = canvasWidth * scale;
        var drawHeight = canvasHeight * scale;
        var leftDraw = (canvasWidth - drawWidth) / 2;
        var topDraw = (canvasHeight - drawHeight) / 2;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(tmp, leftDraw, topDraw, drawWidth, drawHeight);
    };
    return CanvasSize;
}());
exports.default = CanvasSize;
//# sourceMappingURL=canvasSize.js.map