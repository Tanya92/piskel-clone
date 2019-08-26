import {Point} from "./components/point";

export function relativePos(event: MouseEvent, canvas: HTMLCanvasElement): { x: number; y: number } {
    const rect = canvas.getBoundingClientRect();
    return {
        x: Math.floor(event.clientX - rect.left),
        y: Math.floor(event.clientY - rect.top)
    };
}

export function animate(draw: Function, rate: number): Function {
    const start = performance.now();
    const timeBetweenFrames = Math.floor(1000 / rate);
    let nextFrame = start + timeBetweenFrames;
    let id = requestAnimationFrame(function _animate(time): void {
        if (time >= nextFrame) {
            nextFrame += timeBetweenFrames;
            draw();
        }
        id = requestAnimationFrame(_animate);
    });
    return (): void => {
        cancelAnimationFrame(id)
    }
}

export function paintBorder(element: HTMLDivElement): void {
    element.classList.add('active');
}

export function cancelBorder(element: HTMLDivElement): void {
    element.classList.remove('active');
}

export function getSquareCoordinates(x: number,y: number, penSize: number, squareLength: number): {
    x: number;
    y: number;
    width: number;
    height: number;
} {
    return {
        x: Math.floor(x / squareLength) * squareLength,
        y: Math.floor(y / squareLength) * squareLength,
        width: squareLength * penSize,
        height: squareLength * penSize
    }
}

export function drawLine(prevPos: Point, currentPos: Point, callback: Function): void {
    const deltaX = Math.abs(currentPos.x - prevPos.x);
    const deltaY = Math.abs(currentPos.y - prevPos.y);
    const signX = prevPos.x < currentPos.x ? 1 : -1;
    const signY = prevPos.y < currentPos.y ? 1 : -1;
    let error = deltaX - deltaY;
    callback(currentPos);
    while(prevPos.x != currentPos.x || prevPos.y != currentPos.y)
    {
        callback(prevPos);
        let error2 = error * 2;
        //
        if(error2 > -deltaY)
        {
            error -= deltaY;
            prevPos.x += signX;
        }
        if(error2 < deltaX)
        {
            error += deltaX;
            prevPos.y += signY;
        }
    }
}

