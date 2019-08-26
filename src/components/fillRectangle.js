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
var strokeRectangle_1 = require("./strokeRectangle");
var FillRectangle = /** @class */ (function (_super) {
    __extends(FillRectangle, _super);
    function FillRectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FillRectangle.prototype.createRect = function (rect) {
        this.context.fillRect(rect.left, rect.top, rect.width, rect.height);
    };
    FillRectangle.prototype.stylizeNode = function () {
        this.trackingNode.style.border = 'none';
        this.trackingNode.style.backgroundColor = String(this.context.fillStyle);
    };
    return FillRectangle;
}(strokeRectangle_1.default));
exports.default = FillRectangle;
//# sourceMappingURL=fillRectangle.js.map