"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
describe("app utils", function () {
    test('relativePos should return object', function () {
        var canvas = {
            getBoundingClientRect: function () {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    height: 0,
                    width: 0
                };
            }
        };
        var event1 = {
            clientX: 490,
            clientY: 9,
        };
        expect(utils_1.relativePos(event1, canvas)).toStrictEqual({
            x: 490,
            y: 9
        });
        var event2 = {
            clientX: 485,
            clientY: 15,
        };
        expect(utils_1.relativePos(event2, canvas)).toStrictEqual({
            x: 485,
            y: 15
        });
    });
    test('getSquareCoordinates return object', function () {
        var x1 = 330;
        var y1 = 173;
        var x2 = 657;
        var y2 = 452;
        var squareLength1 = 16;
        var squareLength2 = 4;
        var penSize1 = 1;
        var penSize2 = 3;
        expect(utils_1.getSquareCoordinates(x1, y1, penSize1, squareLength1)).toStrictEqual({
            x: 320,
            y: 160,
            width: 16,
            height: 16 //squareLength * penSize
        });
        expect(utils_1.getSquareCoordinates(x2, y2, penSize1, squareLength1)).toStrictEqual({
            x: 656,
            y: 448,
            width: 16,
            height: 16 //squareLength * penSize
        });
        expect(utils_1.getSquareCoordinates(x1, y2, penSize2, squareLength2)).toStrictEqual({
            x: 328,
            y: 452,
            width: 12,
            height: 12 //squareLength * penSize
        });
    });
});
//# sourceMappingURL=utils.test.js.map