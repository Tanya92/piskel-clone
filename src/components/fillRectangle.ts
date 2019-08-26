import StrokeRectangle from "./strokeRectangle";

export default class FillRectangle extends StrokeRectangle {
    protected  createRect(rect: {
        left: number;
        top: number;
        width: number;
        height: number;
    }): void {
        this.context.fillRect(rect.left, rect.top, rect.width, rect.height);
    }

    protected stylizeNode(): void {
        this.trackingNode.style.border = 'none';
        this.trackingNode.style.backgroundColor = String(this.context.fillStyle);
    }
}
