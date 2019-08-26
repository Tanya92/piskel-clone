import {relativePos} from "../utils";
import CanvasSize from "./canvasSize";

export default class CursorCoordinates {
    private readonly canvas: HTMLCanvasElement;
    private canvasSize: CanvasSize;

    public constructor(canvas: HTMLCanvasElement, canvasSize: CanvasSize) {
        this.canvas = canvas;
        this.canvasSize = canvasSize;
        this.cursorListener();
    }

    public cursorListener(): void {
        this.canvas.addEventListener('mousemove', (event): void => {
            const pos = relativePos(event, this.canvas);
            const squareLength = this.canvasSize.getSquareLength();
            const xPos = Math.floor(pos.x / squareLength);
            const yPos = Math.floor(pos.y / squareLength);
            const cursorContainer = document.querySelector('.cursor_coordinates') as HTMLTableRowElement;
            cursorContainer.innerHTML = `
                <td>[[${xPos}:${yPos}]]</td>
            `;
        })
    }
}
