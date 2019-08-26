"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var ColorPicker = /** @class */ (function () {
    function ColorPicker(canvas) {
        var _this = this;
        this.selectColor = function (event) {
            var pos = utils_1.relativePos(event, _this.canvas);
            var color = _this.pixelColor(pos);
            _this.context.fillStyle = color;
            _this.context.strokeStyle = color;
            _this.callback();
        };
        this.onUpdate = function (callback) {
            _this.callback = callback;
        };
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }
    ColorPicker.prototype.pixelColor = function (point) {
        var pixel = this.context.getImageData(point.x, point.y, 1, 1).data;
        return "rgb(" + pixel[0] + ", " + pixel[1] + ", " + pixel[2] + ")";
    };
    ColorPicker.prototype.selected = function () {
        this.canvas.addEventListener('click', this.selectColor);
    };
    ColorPicker.prototype.unSelected = function () {
        this.canvas.removeEventListener('click', this.selectColor);
    };
    return ColorPicker;
}());
exports.default = ColorPicker;
//# sourceMappingURL=colorPicker.js.map