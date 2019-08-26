import {Tool} from "./tool";
import {Point} from "./point";
import {relativePos} from "../utils";

export default class PaintBucket implements Tool {
    private canvas: HTMLCanvasElement;
    private callback: Function;

    public constructor(canvas) {
        this.canvas = canvas;
    }

    public selected(): void {
        this.canvas.addEventListener('click', this.paint);
    }

    public unSelected(): void {
        this.canvas.removeEventListener('click', this.paint);
    }

    private paint = (event): void => {
        const ctx = this.canvas.getContext('2d');
        const startPos = relativePos(event, ctx.canvas);
        const data = ctx.getImageData(0,
            0,
            ctx.canvas.width,
            ctx.canvas.height
        );
        const filledPoints = new Array(data.width * data.height);
        const activePoints = [startPos];
        while (activePoints.length) {
            const pos = activePoints.pop();
            const offset = pos.x + data.width * pos.y;
            if (filledPoints[offset]) {
                continue;
            }
            ctx.fillRect(pos.x, pos.y, 1, 1);
            filledPoints[offset] = true;

            this.forAllPointNeighbors(pos, (neighbor): void => {
                if (neighbor.x >= 0 && neighbor.x < data.width &&
                neighbor.y >= 0 && neighbor.y < data.height &&
                this.isSameColor(data, startPos, neighbor)) {
                    activePoints.push(neighbor);
                }
            })
        }
        this.callback();
    }

    public onUpdate(callback: Function): void {
        this.callback = callback;
    }

    private forAllPointNeighbors(point: Point, fn: Function): void {
        fn({x: point.x, y: point.y + 1});
        fn({x: point.x, y: point.y - 1});
        fn({x: point.x + 1, y: point.y});
        fn({x: point.x - 1, y: point.y});
    }

    private isSameColor = (data: ImageData, pos1: Point, pos2: Point): boolean => {
        const offset1 = (pos1.x + pos1.y * data.width) * 4;
        const offset2 = (pos2.x + pos2.y * data.width) * 4;
        for (let i = 0; i < 4; i++) {
            if (data.data[offset1 + i] != data.data[offset2 + i])
                return false;
        }
        return true;
    }





}
