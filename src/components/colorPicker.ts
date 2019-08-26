import {Point} from "./point";
import {relativePos} from "../utils";

export default class ColorPicker {
    private readonly canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private callback: Function;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }

    private pixelColor(point: Point): string {
        const pixel = this.context.getImageData(point.x, point.y, 1,1).data as Uint8ClampedArray;
        return "rgb(" + pixel[0] + ", " + pixel[1] + ", " + pixel[2] + ")";
    }

    public selected(): void {
        this.canvas.addEventListener('click', this.selectColor);
    }

    public unSelected(): void {
        this.canvas.removeEventListener('click', this.selectColor);
    }

    private selectColor = (event): void => {
        const pos = relativePos(event, this.canvas);
        let color = this.pixelColor(pos);
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
        this.callback();
    };

    public onUpdate = (callback): void => {
        this.callback = callback;
    };
}
