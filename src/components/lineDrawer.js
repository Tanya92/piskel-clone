"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var LineDrawer = /** @class */ (function () {
    function LineDrawer(canvas, penSize, canvasSize) {
        var _this = this;
        this.drawing = false;
        this.startDraw = function (event) {
            _this.drawing = true;
            _this.draw(event);
        };
        this.draw = function (event) {
            if (_this.drawing) {
                var pos = utils_1.relativePos(event, _this.canvas);
                if (!_this.prevPos) {
                    _this.prevPos = pos;
                }
                utils_1.drawLine(_this.prevPos, pos, _this.drawRect);
                _this.prevPos = pos;
            }
        };
        this.stopDraw = function () {
            _this.drawing = false;
            _this.prevPos = undefined;
            _this.callback();
        };
        this.onUpdate = function (callback) {
            _this.callback = callback;
        };
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.penTool = document.getElementById('pen_tool');
        this.penSize = penSize;
        this.canvasSize = canvasSize;
    }
    LineDrawer.prototype.selected = function () {
        this.canvas.addEventListener('mousedown', this.startDraw);
        this.canvas.addEventListener('mousemove', this.draw);
        this.canvas.addEventListener('mouseup', this.stopDraw);
    };
    LineDrawer.prototype.unSelected = function () {
        this.canvas.removeEventListener('mousedown', this.startDraw);
        this.canvas.removeEventListener('mousemove', this.draw);
        this.canvas.removeEventListener('mouseup', this.stopDraw);
    };
    return LineDrawer;
}());
exports.default = LineDrawer;
//# sourceMappingURL=lineDrawer.js.map