"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lineDrawer_1 = require("./lineDrawer");
var utils_1 = require("../utils");
var Eraser = /** @class */ (function (_super) {
    __extends(Eraser, _super);
    function Eraser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawRect = function (pos) {
            var squareCoordinates = utils_1.getSquareCoordinates(pos.x, pos.y, _this.penSize.getPenSize(), _this.canvasSize.getSquareLength());
            _this.context.clearRect(squareCoordinates.x, squareCoordinates.y, squareCoordinates.width, squareCoordinates.height);
        };
        return _this;
    }
    return Eraser;
}(lineDrawer_1.default));
exports.default = Eraser;
//# sourceMappingURL=eraser.js.map