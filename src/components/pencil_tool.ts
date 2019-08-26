import {getSquareCoordinates} from "../utils";
import {Tool} from "./tool";
import LineDrawer from "./lineDrawer";

export default class PencilTool extends LineDrawer implements Tool {
    protected drawRect = (pos): void => {
        let squareCoordinates = getSquareCoordinates(pos.x, pos.y, this.penSize.getPenSize(), this.canvasSize.getSquareLength());
        this.context.fillRect(squareCoordinates.x, squareCoordinates.y, squareCoordinates.width, squareCoordinates.height);
    }
}
