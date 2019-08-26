import PenSize from "./penSize";
import {Point} from "./point";
import {drawLine, relativePos} from "../utils";
import CanvasSize from "./canvasSize";

export default abstract class LineDrawer {
    private readonly canvas: HTMLCanvasElement;
    private drawing: boolean = false;
    protected context: CanvasRenderingContext2D;
    private callback: Function;
    private penTool: HTMLDivElement;
    protected penSize: PenSize;
    protected squareLength: number;
    private prevPos: Point;
    protected canvasSize: CanvasSize;

    public constructor(canvas: HTMLCanvasElement, penSize: PenSize, canvasSize: CanvasSize) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.penTool = document.getElementById('pen_tool') as HTMLDivElement;
        this.penSize = penSize;
        this.canvasSize = canvasSize;

    }

    public selected(): void {
        this.canvas.addEventListener('mousedown', this.startDraw);
        this.canvas.addEventListener('mousemove', this.draw);
        this.canvas.addEventListener('mouseup', this.stopDraw);
    }

    public unSelected(): void {
        this.canvas.removeEventListener('mousedown', this.startDraw);
        this.canvas.removeEventListener('mousemove', this.draw);
        this.canvas.removeEventListener('mouseup', this.stopDraw);
    }

    private startDraw = (event): void => {
        this.drawing = true;
        this.draw(event);
    };

    private draw = (event): void => {
        if (this.drawing) {
            const pos = relativePos(event, this.canvas);
            if (!this.prevPos) {
                this.prevPos = pos;
            }

            drawLine(this.prevPos, pos, this.drawRect);
            this.prevPos = pos;
        }
    };

    protected abstract drawRect(pos: Point): void;

    private stopDraw = (): void => {
        this.drawing = false;
        this.prevPos = undefined;
        this.callback();
    };

    public onUpdate = (callback): void => {
        this.callback = callback;
    };
}
