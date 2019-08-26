"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var activeClass = 'active_size';
var PenSize = /** @class */ (function () {
    function PenSize() {
        this.penSize = 1;
        this.addPenSizeListener();
    }
    PenSize.prototype.addPenSizeListener = function () {
        var _this = this;
        var container = document.getElementById('select_pen_size');
        container.addEventListener('click', function (event) {
            var elem = event.target;
            var prevElem = document.querySelector("." + activeClass);
            if (elem.classList.contains('pen_size')) {
                _this.penSize = Number(elem.getAttribute('data-size'));
                if (prevElem) {
                    prevElem.classList.remove(activeClass);
                }
                elem.classList.add(activeClass);
            }
        });
        document.addEventListener('keydown', function (event) {
            var penSizes = document.getElementsByClassName('pen_size');
            var prevElem = document.querySelector("." + activeClass);
            if (event.code == 'Numpad1') {
                _this.setPenSize(1, prevElem, penSizes);
            }
            if (event.code == 'Numpad2') {
                _this.setPenSize(2, prevElem, penSizes);
            }
            if (event.code == 'Numpad3') {
                _this.setPenSize(3, prevElem, penSizes);
            }
            if (event.code == 'Numpad4') {
                _this.setPenSize(4, prevElem, penSizes);
            }
        });
    };
    PenSize.prototype.setPenSize = function (number, prevElem, collection) {
        this.penSize = number;
        if (prevElem) {
            prevElem.classList.remove(activeClass);
        }
        collection[number - 1].classList.add(activeClass);
    };
    PenSize.prototype.getPenSize = function () {
        return this.penSize;
    };
    return PenSize;
}());
exports.default = PenSize;
//# sourceMappingURL=penSize.js.map