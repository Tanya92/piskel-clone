"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var CursorCoordinates = /** @class */ (function () {
    function CursorCoordinates(canvas, canvasSize) {
        this.canvas = canvas;
        this.canvasSize = canvasSize;
        this.cursorListener();
    }
    CursorCoordinates.prototype.cursorListener = function () {
        var _this = this;
        this.canvas.addEventListener('mousemove', function (event) {
            var pos = utils_1.relativePos(event, _this.canvas);
            var squareLength = _this.canvasSize.getSquareLength();
            var xPos = Math.floor(pos.x / squareLength);
            var yPos = Math.floor(pos.y / squareLength);
            var cursorContainer = document.querySelector('.cursor_coordinates');
            cursorContainer.innerHTML = "\n                <td>[[" + xPos + ":" + yPos + "]]</td>\n            ";
        });
    };
    return CursorCoordinates;
}());
exports.default = CursorCoordinates;
//# sourceMappingURL=cursorCoordinates.js.map