import {Point} from "./point";
import {relativePos} from "../utils";
import PenSize from "./penSize";
import CanvasSize from "./canvasSize";
import {Tool} from "./tool";

export default class StrokeRectangle implements Tool {
    private readonly canvas: HTMLCanvasElement;
    private callback: Function;
    public context: CanvasRenderingContext2D;
    private penSize: PenSize;
    private canvasSize: CanvasSize;
    private isDrawing: boolean = false;
    private relativeStart: Point;
    private pageStart: Point;
    protected trackingNode: HTMLDivElement;

    public constructor(canvas: HTMLCanvasElement, penSize: PenSize, canvasSize: CanvasSize) {
        this.canvas = canvas;
        this.penSize = penSize;
        this.canvasSize = canvasSize;
        this.context = this.canvas.getContext('2d');
    }

    public selected(): void {
        this.canvas.addEventListener('mousedown', this.startDraw);
        this.canvas.addEventListener('mousemove', this.drawRectangle);
        addEventListener('mouseup', this.stopDraw);
    }

    public unSelected(): void {
        this.canvas.removeEventListener('mousedown', this.startDraw);
        this.canvas.removeEventListener('mousemove', this.drawRectangle);
        removeEventListener('mouseup', this.stopDraw);
    }

    private getRectangleInfo = (a: Point, b: Point): {
        left: number;
        top: number;
        width: number;
        height: number;
    } => {
        return {
            left: Math.min(a.x, b.x),
            top: Math.min(a.y, b.y),
            width: Math.abs(a.x - b.x),
            height: Math.abs(a.y - b.y)};
    };

    public getLineWidth(): number {
        return this.penSize.getPenSize() * this.canvasSize.getSquareLength()
    }

    private startDraw = (event): void => {
        event.preventDefault();
        this.isDrawing = true;
        this.relativeStart = relativePos(event, this.canvas);
        this.pageStart = {x: event.pageX, y: event.pageY};
        const rect = this.getRectangleInfo(
            this.pageStart,
            {x: event.pageX, y: event.pageY}
        );
        this.trackingNode = document.createElement("div") as HTMLDivElement;
        this.trackingNode.style.position = "absolute";
        this.trackingNode.style.borderColor = String(this.context.fillStyle);
        this.trackingNode.style.borderWidth = String(this.getLineWidth()) + 'px';
        this.trackingNode.style.boxSizing = 'border-box';
        this.trackingNode.style.borderStyle = "solid";
        this.trackingNode.style.top = rect.top + "px";
        this.trackingNode.style.left = rect.left + "px";
        this.stylizeNode();
        document.body.appendChild(this.trackingNode);
    };

    private drawRectangle = (event): void => {
        if(this.isDrawing) {
            const rect = this.getRectangleInfo(
                this.pageStart,
                {x: event.pageX, y: event.pageY}
            );
            if (rect.left != parseInt(this.trackingNode.style.left)) {
                this.trackingNode.style.left = rect.left + "px";
            }
            if (rect.top != parseInt(this.trackingNode.style.top)) {
                this.trackingNode.style.top = rect.top + "px";
            }
            this.trackingNode.style.width = (rect.width) + "px";
            this.trackingNode.style.height = (rect.height) + "px";
        }
    };

    private stopDraw = (event): void => {
        if (this.isDrawing) {
            this.isDrawing  = false;
            const rect = this.getRectangleInfo(
                this.relativeStart,
                relativePos(event, this.context.canvas),
            );
            this.context.lineWidth = this.getLineWidth();
            this.createRect(rect);
            document.body.removeChild(this.trackingNode);
            this.relativeStart = undefined;
            this.pageStart = undefined;
            this.callback();
        }
    };

    public onUpdate(callback: Function): void {
        this.callback = callback;
    }

    protected stylizeNode(): void {

    }

    protected  createRect(rect: {
        left: number;
        top: number;
        width: number;
        height: number;
    }): void {
        this.context.strokeRect(
            rect.left,
            rect.top,
            rect.width,
            rect.height
        );
    }
}
