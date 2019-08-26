import {relativePos, getSquareCoordinates} from "./utils"

describe("app utils", () => {
    test('relativePos should return object', () => {
        const canvas = {
            getBoundingClientRect() {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    height: 0,
                    width: 0
                }
            }
        } as HTMLCanvasElement;

        const event1 = {
            clientX: 490,
            clientY: 9,
        } as MouseEvent;

        expect(relativePos(event1, canvas)).toStrictEqual(
            {
                x: 490,
                y: 9
            }
        );

        const event2 = {
            clientX: 485,
            clientY: 15,
        } as MouseEvent;

        expect(relativePos(event2, canvas)).toStrictEqual(
            {
                x: 485,
                y: 15
            }
        );
    });
    test('getSquareCoordinates return object', () => {
        const x1 = 330;
        const y1 = 173;
        const x2 = 657;
        const y2 = 452;
        const squareLength1 = 16;
        const squareLength2 = 4;
        const penSize1 = 1;
        const penSize2 = 3;

        expect(getSquareCoordinates(x1, y1, penSize1, squareLength1)).toStrictEqual(
            {
                x: 320,//Math.floor(x / squareLength) * squareLength,
                y: 160,//Math.floor(y / squareLength) * squareLength,
                width: 16,//squareLength * penSize,
                height: 16//squareLength * penSize
            }
        );
        expect(getSquareCoordinates(x2, y2, penSize1, squareLength1)).toStrictEqual(
            {
                x: 656,//Math.floor(x / squareLength) * squareLength,
                y: 448,//Math.floor(y / squareLength) * squareLength,
                width: 16,//squareLength * penSize,
                height: 16//squareLength * penSize
            }
        );

        expect(getSquareCoordinates(x1, y2, penSize2, squareLength2)).toStrictEqual(
            {
                x: 328,//Math.floor(x / squareLength) * squareLength,
                y: 452,//Math.floor(y / squareLength) * squareLength,
                width: 12,//squareLength * penSize,
                height: 12//squareLength * penSize
            }
        );
    })
});
