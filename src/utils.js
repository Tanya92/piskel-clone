"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function relativePos(event, canvas) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.floor(event.clientX - rect.left),
        y: Math.floor(event.clientY - rect.top)
    };
}
exports.relativePos = relativePos;
function animate(draw, rate) {
    var start = performance.now();
    var timeBetweenFrames = Math.floor(1000 / rate);
    var nextFrame = start + timeBetweenFrames;
    var id = requestAnimationFrame(function _animate(time) {
        if (time >= nextFrame) {
            nextFrame += timeBetweenFrames;
            draw();
        }
        id = requestAnimationFrame(_animate);
    });
    return function () {
        cancelAnimationFrame(id);
    };
}
exports.animate = animate;
function paintBorder(element) {
    element.classList.add('active');
}
exports.paintBorder = paintBorder;
function cancelBorder(element) {
    element.classList.remove('active');
}
exports.cancelBorder = cancelBorder;
function getSquareCoordinates(x, y, penSize, squareLength) {
    return {
        x: Math.floor(x / squareLength) * squareLength,
        y: Math.floor(y / squareLength) * squareLength,
        width: squareLength * penSize,
        height: squareLength * penSize
    };
}
exports.getSquareCoordinates = getSquareCoordinates;
function drawLine(prevPos, currentPos, callback) {
    var deltaX = Math.abs(currentPos.x - prevPos.x);
    var deltaY = Math.abs(currentPos.y - prevPos.y);
    var signX = prevPos.x < currentPos.x ? 1 : -1;
    var signY = prevPos.y < currentPos.y ? 1 : -1;
    var error = deltaX - deltaY;
    callback(currentPos);
    while (prevPos.x != currentPos.x || prevPos.y != currentPos.y) {
        callback(prevPos);
        var error2 = error * 2;
        //
        if (error2 > -deltaY) {
            error -= deltaY;
            prevPos.x += signX;
        }
        if (error2 < deltaX) {
            error += deltaX;
            prevPos.y += signY;
        }
    }
}
exports.drawLine = drawLine;
//# sourceMappingURL=utils.js.map