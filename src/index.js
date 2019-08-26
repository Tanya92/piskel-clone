"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pencil_tool_1 = require("./components/pencil_tool");
var frames_1 = require("./components/frames");
var animation_1 = require("./components/animation");
var paint_bucket_tool_1 = require("./components/paint_bucket_tool");
var utils_1 = require("./utils");
var penSize_1 = require("./components/penSize");
var eraser_1 = require("./components/eraser");
var canvasSize_1 = require("./components/canvasSize");
var strokeRectangle_1 = require("./components/strokeRectangle");
var cursorCoordinates_1 = require("./components/cursorCoordinates");
var fillRectangle_1 = require("./components/fillRectangle");
var colorPicker_1 = require("./components/colorPicker");
var GIF = require("gif.js");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.selectedTool = {
            selected: function () { },
            unSelected: function () { },
            onUpdate: function () { }
        };
        this.onCanvasUpdate = function () {
            _this.frames.updatePreview(_this.getState());
        };
        this.clearCanvas = function () {
            var rect = _this.canvas.getBoundingClientRect();
            _this.context.clearRect(0, 0, rect.width, rect.height);
        };
        this.drawImage = function (imageData) {
            var image = new Image();
            image.src = imageData;
            var rect = _this.canvas.getBoundingClientRect();
            _this.context.clearRect(0, 0, rect.width, rect.height);
            _this.context.drawImage(image, 0, 0, rect.width, rect.height);
        };
        this.onColorChange = function () {
            _this.context.strokeStyle = _this.normalizeColor(String(_this.primaryInput.value));
            _this.context.fillStyle = _this.normalizeColor(String(_this.primaryInput.value));
        };
        this.setInputColor = function () {
            _this.primaryInput.value = String(_this.context.fillStyle);
        };
        this.initTools = function () {
            _this.startPenTool();
            _this.startPaintBucketTool();
            _this.startEraserTool();
            _this.startStrokeRectangleTool();
            _this.startFillRectangleTool();
            _this.startColorPickerTool();
        };
    }
    App.prototype.getCanvasRect = function () {
        return this.canvas.getBoundingClientRect();
    };
    App.prototype.initCanvas = function () {
        this.canvas = document.getElementById('draw_canvas');
        var rect = this.getCanvasRect();
        this.canvas.setAttribute('width', String(rect.width));
        this.canvas.setAttribute('height', String(rect.height));
        var context = this.canvas.getContext('2d');
        this.context = context;
    };
    App.prototype.start = function () {
        this.penSize = new penSize_1.default();
        this.canvasSize = new canvasSize_1.default();
        this.canvasSize.setCanvasInformation();
        this.canvasSize.onUpdate(this.onCanvasUpdate);
        this.initCanvas();
        this.initTools();
        this.div = document.createElement('div');
        this.addChangeColorListener();
        this.frames = new frames_1.default(document.getElementById('frames'), this.clearCanvas, this.drawImage);
        this.animation = new animation_1.default(document.getElementById('animation_field'));
        var imagesArray = this.frames.getImagesData();
        this.animation.animateFrames(imagesArray);
        this.cursorCoordinates = new cursorCoordinates_1.default(this.canvas, this.canvasSize);
        this.openDialogWindow();
        this.closeDialogWindow();
        this.addExportImageListeners();
    };
    App.prototype.getState = function () {
        return this.canvas.toDataURL();
    };
    App.prototype.addChangeColorListener = function () {
        this.primaryInput = document.getElementById('primary_color_input');
        this.primaryInput.addEventListener('change', this.onColorChange);
        this.onColorChange();
    };
    App.prototype.normalizeColor = function (color) {
        if (color == "#000" || color == "#000000" || color == "rbg(0,0,0)") {
            return "#010000";
        }
        return color;
    };
    App.prototype.startTool = function (toolObj, tool, callback) {
        if (callback === void 0) { callback = this.onCanvasUpdate; }
        this.selectedTool.unSelected();
        utils_1.cancelBorder(this.div);
        this.selectedTool = toolObj;
        this.div = tool;
        utils_1.paintBorder(this.div);
        toolObj.selected();
        toolObj.onUpdate(callback);
    };
    App.prototype.startPenTool = function () {
        var _this = this;
        var penTool = document.getElementById('pen_tool');
        this.pencilTool = new pencil_tool_1.default(this.canvas, this.penSize, this.canvasSize);
        this.selectedTool = this.pencilTool;
        penTool.addEventListener('click', function () {
            _this.startTool(_this.pencilTool, penTool);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyP') {
                _this.startTool(_this.pencilTool, penTool);
            }
        });
    };
    App.prototype.startPaintBucketTool = function () {
        var _this = this;
        var paintBucketTool = document.getElementById('paint_bucket_tool');
        this.paintBucketTool = new paint_bucket_tool_1.default(this.canvas);
        paintBucketTool.addEventListener('click', function () {
            _this.startTool(_this.paintBucketTool, paintBucketTool);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyB') {
                _this.startTool(_this.paintBucketTool, paintBucketTool);
            }
        });
    };
    App.prototype.startEraserTool = function () {
        var _this = this;
        var eraserTool = document.getElementById('eraser_tool');
        this.eraserTool = new eraser_1.default(this.canvas, this.penSize, this.canvasSize);
        eraserTool.addEventListener('click', function () {
            _this.startTool(_this.eraserTool, eraserTool);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyE') {
                _this.startTool(_this.eraserTool, eraserTool);
            }
        });
    };
    App.prototype.startStrokeRectangleTool = function () {
        var _this = this;
        var strokeRectangleTool = document.getElementById('stroke_rectangle_tool');
        this.strokeRectangleTool = new strokeRectangle_1.default(this.canvas, this.penSize, this.canvasSize);
        strokeRectangleTool.addEventListener('click', function () {
            _this.startTool(_this.strokeRectangleTool, strokeRectangleTool);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyR') {
                _this.startTool(_this.strokeRectangleTool, strokeRectangleTool);
            }
        });
    };
    App.prototype.startFillRectangleTool = function () {
        var _this = this;
        var fillRectangleTool = document.getElementById('fill_rectangle_tool');
        this.fillRectangleTool = new fillRectangle_1.default(this.canvas, this.penSize, this.canvasSize);
        fillRectangleTool.addEventListener('click', function () {
            _this.startTool(_this.fillRectangleTool, fillRectangleTool);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyF') {
                _this.startTool(_this.fillRectangleTool, fillRectangleTool);
            }
        });
    };
    App.prototype.startColorPickerTool = function () {
        var _this = this;
        var colorPickerTool = document.getElementById('color_picker_tool');
        this.colorPickerTool = new colorPicker_1.default(this.canvas);
        colorPickerTool.addEventListener('click', function () {
            _this.startTool(_this.colorPickerTool, colorPickerTool, _this.setInputColor);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyC') {
                _this.startTool(_this.colorPickerTool, colorPickerTool, _this.setInputColor);
            }
        });
    };
    App.prototype.openDialogWindow = function () {
        var openDialogButton = document.getElementById('dialog_button');
        openDialogButton.addEventListener('click', function () {
            var dialogWindow = document.getElementById('dialog_window');
            dialogWindow.showModal();
        });
    };
    App.prototype.closeDialogWindow = function () {
        var closeDialogButton = document.getElementById('close_dialog_button');
        closeDialogButton.addEventListener('click', function () {
            var dialogWindow = document.getElementById('dialog_window');
            dialogWindow.close();
        });
    };
    App.prototype.createGif = function () {
        var imagesArray = this.frames.getImagesData();
        var gif = new GIF({
            workers: 2,
            quality: 13,
            transparent: "#000",
        });
        var promises = [];
        var _loop_1 = function (i) {
            var image = new Image();
            image.src = imagesArray[i];
            promises.push(new Promise(function (resolve) {
                image.onload = function () {
                    gif.addFrame(image);
                    resolve();
                };
            }));
        };
        for (var i = 0; i < imagesArray.length; i++) {
            _loop_1(i);
        }
        Promise.all(promises).then(function () {
            gif.render();
        });
        gif.on('finished', function (blob) {
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "test.gif";
            link.click();
        });
    };
    App.prototype.addExportImageListeners = function () {
        var _this = this;
        var exportButton = document.getElementById('export_button');
        exportButton.addEventListener('click', function (event) {
            _this.createGif();
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'Numpad0') {
                _this.createGif();
            }
        });
    };
    return App;
}());
var app = new App();
app.start();
//# sourceMappingURL=index.js.map