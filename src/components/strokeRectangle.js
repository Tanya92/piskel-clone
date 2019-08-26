"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var StrokeRectangle = /** @class */ (function () {
    function StrokeRectangle(canvas, penSize, canvasSize) {
        var _this = this;
        this.isDrawing = false;
        this.getRectangleInfo = function (a, b) {
            return {
                left: Math.min(a.x, b.x),
                top: Math.min(a.y, b.y),
                width: Math.abs(a.x - b.x),
                height: Math.abs(a.y - b.y)
            };
        };
        this.startDraw = function (event) {
            event.preventDefault();
            _this.isDrawing = true;
            _this.relativeStart = utils_1.relativePos(event, _this.canvas);
            _this.pageStart = { x: event.pageX, y: event.pageY };
            var rect = _this.getRectangleInfo(_this.pageStart, { x: event.pageX, y: event.pageY });
            _this.trackingNode = document.createElement("div");
            _this.trackingNode.style.position = "absolute";
            _this.trackingNode.style.borderColor = String(_this.context.fillStyle);
            _this.trackingNode.style.borderWidth = String(_this.getLineWidth()) + 'px';
            _this.trackingNode.style.boxSizing = 'border-box';
            _this.trackingNode.style.borderStyle = "solid";
            _this.trackingNode.style.top = rect.top + "px";
            _this.trackingNode.style.left = rect.left + "px";
            _this.stylizeNode();
            document.body.appendChild(_this.trackingNode);
        };
        this.drawRectangle = function (event) {
            if (_this.isDrawing) {
                var rect = _this.getRectangleInfo(_this.pageStart, { x: event.pageX, y: event.pageY });
                if (rect.left != parseInt(_this.trackingNode.style.left)) {
                    _this.trackingNode.style.left = rect.left + "px";
                }
                if (rect.top != parseInt(_this.trackingNode.style.top)) {
                    _this.trackingNode.style.top = rect.top + "px";
                }
                _this.trackingNode.style.width = (rect.width) + "px";
                _this.trackingNode.style.height = (rect.height) + "px";
            }
        };
        this.stopDraw = function (event) {
            if (_this.isDrawing) {
                _this.isDrawing = false;
                var rect = _this.getRectangleInfo(_this.relativeStart, utils_1.relativePos(event, _this.context.canvas));
                _this.context.lineWidth = _this.getLineWidth();
                _this.createRect(rect);
                document.body.removeChild(_this.trackingNode);
                _this.relativeStart = undefined;
                _this.pageStart = undefined;
                _this.callback();
            }
        };
        this.canvas = canvas;
        this.penSize = penSize;
        this.canvasSize = canvasSize;
        this.context = this.canvas.getContext('2d');
    }
    StrokeRectangle.prototype.selected = function () {
        this.canvas.addEventListener('mousedown', this.startDraw);
        this.canvas.addEventListener('mousemove', this.drawRectangle);
        addEventListener('mouseup', this.stopDraw);
    };
    StrokeRectangle.prototype.unSelected = function () {
        this.canvas.removeEventListener('mousedown', this.startDraw);
        this.canvas.removeEventListener('mousemove', this.drawRectangle);
        removeEventListener('mouseup', this.stopDraw);
    };
    StrokeRectangle.prototype.getLineWidth = function () {
        return this.penSize.getPenSize() * this.canvasSize.getSquareLength();
    };
    StrokeRectangle.prototype.onUpdate = function (callback) {
        this.callback = callback;
    };
    StrokeRectangle.prototype.stylizeNode = function () {
    };
    StrokeRectangle.prototype.createRect = function (rect) {
        this.context.strokeRect(rect.left, rect.top, rect.width, rect.height);
    };
    return StrokeRectangle;
}());
exports.default = StrokeRectangle;
//# sourceMappingURL=strokeRectangle.js.map