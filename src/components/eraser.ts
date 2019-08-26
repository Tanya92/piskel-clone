import LineDrawer from "./lineDrawer";
import {Tool} from "./tool";
import {getSquareCoordinates} from "../utils";

export default class Eraser extends LineDrawer implements Tool {
    protected drawRect = (pos): void => {
        let squareCoordinates = getSquareCoordinates(pos.x, pos.y, this.penSize.getPenSize(), this.canvasSize.getSquareLength());
        this.context.clearRect(squareCoordinates.x, squareCoordinates.y, squareCoordinates.width, squareCoordinates.height);
    }
}
