"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emptyFrame = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAGACAYAAAByeNBuAAAUuklEQVR4Xu3WMQ0AAAzDsJU/6bHI5RGoZO3IzhEgQIAAAQIECBAIBRZumSJAgAABAgQIECBwAtQTECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECDwdOcBgTGsrYIAAAAASUVORK5CYII=";
var Frames = /** @class */ (function () {
    function Frames(container, clearCanvas, drawImage) {
        var _this = this;
        this.activeFrame = -1;
        this.counterFrame = 1;
        this.imagesData = [];
        this.createFrame = function () {
            _this.deleteActiveClassName();
            var template = document.createElement('template');
            template.innerHTML = "\n            <div class=\"frame active\">\n                <div class=\"number_frame\">\n                    <span class=\"counter_frame\">" + _this.counterFrame + "</span>\n                </div>\n                <div class=\"delete_frame\">\n                    <img src=\"./assets/frame_icons/delete-icon.svg\" alt=\"delete_icon\" class=\"delete_icon icon_select\">\n                </div>\n                <div class=\"copy_frame\">\n                    <img src=\"./assets/frame_icons/copy-icon.svg\" alt=\"copy_icon\" class=\"copy_icon icon_select\">\n                </div>  \n                <div class=\"expand_frame\">\n                    <img src=\"./assets/frame_icons/expand-icon.svg\" alt=\"expand_icon\" class=\"expand_icon icon_select\">\n                </div>            \n            </div>\n        ";
            _this.container.insertBefore(template.content, _this.container.querySelector('#button_add_frame'));
            _this.activeFrame++;
            _this.imagesData[_this.activeFrame] = emptyFrame;
            _this.counterFrame++;
            var frames = _this.getFramesArray();
            var lastFrame = frames[frames.length - 1];
            _this.setFrameEventListeners(lastFrame);
        };
        this.container = container;
        this.drawImage = drawImage;
        this.container.querySelector('button').addEventListener('click', function () {
            _this.createFrame();
            clearCanvas();
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'NumpadAdd') {
                _this.createFrame();
                clearCanvas();
            }
        });
        this.createFrame();
    }
    Frames.prototype.frameCounterValue = function (frame) {
        return parseInt(frame.querySelector('.counter_frame').textContent);
    };
    Frames.prototype.setFrameCounterValue = function (frame, index) {
        frame.querySelector('.counter_frame').textContent = String(index);
    };
    Frames.prototype.getFramesArray = function () {
        return this.container.getElementsByClassName('frame');
    };
    Frames.prototype.changeIndexes = function (frameIndex) {
        var framesArray = this.getFramesArray();
        var index = frameIndex;
        var length = framesArray.length;
        while (index < length) {
            this.setFrameCounterValue(framesArray[index], index + 1);
            index += 1;
        }
    };
    Frames.prototype.deleteFrame = function (icon) {
        var frame = icon.parentNode;
        var deleteIndex = Array.from(this.getFramesArray()).indexOf(frame);
        if (this.activeFrame < deleteIndex) {
            this.drawImage(this.imagesData[deleteIndex - 1]);
        }
        if (this.activeFrame >= deleteIndex) {
            this.activeFrame--;
            this.drawImage(this.imagesData[deleteIndex - 1]);
        }
        this.counterFrame--;
        this.container.removeChild(frame);
        this.changeIndexes(deleteIndex);
        if (this.imagesData[deleteIndex]) {
            this.imagesData.splice(deleteIndex, 1);
        }
        this.getFramesArray()[this.activeFrame].classList.add('active');
    };
    Frames.prototype.copyFrame = function (icon) {
        this.deleteActiveClassName();
        var frame = icon.parentNode;
        var copyCounter = this.frameCounterValue(frame);
        var copyIndex = copyCounter - 1;
        var elementCopy = frame.cloneNode(true);
        if (frame.nextSibling) {
            this.container.insertBefore(elementCopy, frame.nextSibling).classList.add('active');
        }
        this.setFrameEventListeners(elementCopy);
        this.changeIndexes(copyCounter);
        this.activeFrame = copyCounter;
        this.counterFrame++;
        if (this.imagesData[copyIndex]) {
            this.imagesData.splice(copyCounter, 0, this.imagesData[copyIndex]);
        }
    };
    Frames.prototype.updatePreview = function (imageData) {
        var frame = document.getElementsByClassName('frame')[this.activeFrame];
        if (frame) {
            frame.style.backgroundSize = '100%, auto';
            frame.style.backgroundImage =
                "url(" + imageData + "), url('assets/images/background.png')";
            frame.style.backgroundPosition = 'left top, left top';
            frame.style.backgroundRepeat = 'no-repeat, repeat';
        }
        this.imagesData[this.activeFrame] = imageData;
    };
    Frames.prototype.setFrameEventListeners = function (frame) {
        var _this = this;
        var deleteIcon = frame.querySelector('.delete_frame');
        deleteIcon.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            _this.deleteFrame(event.currentTarget);
        });
        var copyIcon = frame.querySelector('.copy_frame');
        copyIcon.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            _this.copyFrame(event.currentTarget);
        });
        frame.addEventListener('click', function () {
            _this.deleteActiveClassName();
            frame.classList.add('active');
            var activeIndex = Array.from(_this.getFramesArray()).indexOf(frame);
            _this.activeFrame = activeIndex;
            _this.drawImage(_this.imagesData[activeIndex]);
        });
    };
    Frames.prototype.deleteActiveClassName = function () {
        var prevFrame = this.container.querySelector('.frame.active');
        if (prevFrame) {
            prevFrame.classList.remove('active');
        }
    };
    Frames.prototype.getImagesData = function () {
        return this.imagesData;
    };
    return Frames;
}());
exports.default = Frames;
//# sourceMappingURL=frames.js.map