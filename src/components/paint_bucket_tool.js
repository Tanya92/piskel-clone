"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var PaintBucket = /** @class */ (function () {
    function PaintBucket(canvas) {
        var _this = this;
        this.paint = function (event) {
            var ctx = _this.canvas.getContext('2d');
            var startPos = utils_1.relativePos(event, ctx.canvas);
            var data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
            var filledPoints = new Array(data.width * data.height);
            var activePoints = [startPos];
            while (activePoints.length) {
                var pos = activePoints.pop();
                var offset = pos.x + data.width * pos.y;
                if (filledPoints[offset]) {
                    continue;
                }
                ctx.fillRect(pos.x, pos.y, 1, 1);
                filledPoints[offset] = true;
                _this.forAllPointNeighbors(pos, function (neighbor) {
                    if (neighbor.x >= 0 && neighbor.x < data.width &&
                        neighbor.y >= 0 && neighbor.y < data.height &&
                        _this.isSameColor(data, startPos, neighbor)) {
                        activePoints.push(neighbor);
                    }
                });
            }
            _this.callback();
        };
        this.isSameColor = function (data, pos1, pos2) {
            var offset1 = (pos1.x + pos1.y * data.width) * 4;
            var offset2 = (pos2.x + pos2.y * data.width) * 4;
            for (var i = 0; i < 4; i++) {
                if (data.data[offset1 + i] != data.data[offset2 + i])
                    return false;
            }
            return true;
        };
        this.canvas = canvas;
    }
    PaintBucket.prototype.selected = function () {
        this.canvas.addEventListener('click', this.paint);
    };
    PaintBucket.prototype.unSelected = function () {
        this.canvas.removeEventListener('click', this.paint);
    };
    PaintBucket.prototype.onUpdate = function (callback) {
        this.callback = callback;
    };
    PaintBucket.prototype.forAllPointNeighbors = function (point, fn) {
        fn({ x: point.x, y: point.y + 1 });
        fn({ x: point.x, y: point.y - 1 });
        fn({ x: point.x + 1, y: point.y });
        fn({ x: point.x - 1, y: point.y });
    };
    return PaintBucket;
}());
exports.default = PaintBucket;
//# sourceMappingURL=paint_bucket_tool.js.map