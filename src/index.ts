import PencilTool from "./components/pencil_tool";
import Frames from "./components/frames";
import Animation from "./components/animation";
import PaintBucket from "./components/paint_bucket_tool";
import {Tool} from "./components/tool";
import {paintBorder, cancelBorder} from "./utils";
import PenSize from './components/penSize';
import Eraser from "./components/eraser";
import CanvasSize from "./components/canvasSize";
import StrokeRectangle from "./components/strokeRectangle";
import CursorCoordinates from "./components/cursorCoordinates";
import FillRectangle from "./components/fillRectangle";
import ColorPicker from "./components/colorPicker";
import * as GIF from 'gif.js';

class App {
    private pencilTool: PencilTool;
    private canvas: HTMLCanvasElement;
    private frames: Frames;
    private animation: Animation;
    private primaryInput: HTMLInputElement;
    private paintBucketTool: PaintBucket;
    private selectedTool: Tool = {
        selected(): void {},
        unSelected(): void {},
        onUpdate(): void {}
    };
    private div: HTMLDivElement;
    private context: CanvasRenderingContext2D;
    private penSize: PenSize;
    private eraserTool: Eraser;
    private canvasSize: CanvasSize;
    private strokeRectangleTool: StrokeRectangle;
    private fillRectangleTool: FillRectangle;
    private cursorCoordinates: CursorCoordinates;
    private colorPickerTool: ColorPicker;

    private getCanvasRect(): ClientRect {
        return this.canvas.getBoundingClientRect();
    }


    private initCanvas(): void {
        this.canvas = document.getElementById('draw_canvas') as HTMLCanvasElement;
        const rect = this.getCanvasRect();
        this.canvas.setAttribute('width', String(rect.width));
        this.canvas.setAttribute('height', String(rect.height));
        const context = this.canvas.getContext('2d');
        this.context = context;
    }

    public start(): void {
        this.penSize = new PenSize();
        this.canvasSize = new CanvasSize();
        this.canvasSize.setCanvasInformation();
        this.canvasSize.onUpdate(this.onCanvasUpdate);
        this.initCanvas();
        this.initTools();
        this.div = document.createElement('div');
        this.addChangeColorListener();
        this.frames = new Frames(
            document.getElementById('frames') as HTMLDivElement,
            this.clearCanvas,
            this.drawImage
        );
        this.animation = new Animation(document.getElementById('animation_field') as HTMLDivElement);
        const imagesArray = this.frames.getImagesData();
        this.animation.animateFrames(imagesArray);
        this.cursorCoordinates = new CursorCoordinates(this.canvas, this.canvasSize);
        this.openDialogWindow();
        this.closeDialogWindow();
        this.addExportImageListeners();
    }

    private getState(): string {
        return this.canvas.toDataURL();
    }

    private onCanvasUpdate = (): void => {
        this.frames.updatePreview(
            this.getState()
        );
    };

    private clearCanvas = (): void => {
        const rect = this.canvas.getBoundingClientRect();
        this.context.clearRect(0,0, rect.width, rect.height);
    };

    private drawImage = (imageData: string): void => {
        const image = new Image();
        image.src = imageData;
        const rect = this.canvas.getBoundingClientRect();
        this.context.clearRect(0,0, rect.width, rect.height);
        this.context.drawImage(image, 0, 0, rect.width, rect.height);
    };

    private addChangeColorListener(): void {
        this.primaryInput = document.getElementById('primary_color_input') as HTMLInputElement;
        this.primaryInput.addEventListener('change', this.onColorChange);
        this.onColorChange()
    }

    private onColorChange = (): void => {
        this.context.strokeStyle = this.normalizeColor(String(this.primaryInput.value));
        this.context.fillStyle = this.normalizeColor(String(this.primaryInput.value));
    };

    private normalizeColor(color: string): string {
        if (color == "#000" || color == "#000000" || color == "rbg(0,0,0)") {
            return "#010000"
        }
        return color
    }

    private startTool(toolObj: Tool, tool, callback = this.onCanvasUpdate): void {
        this.selectedTool.unSelected();
        cancelBorder(this.div);
        this.selectedTool = toolObj;
        this.div = tool as HTMLDivElement;
        paintBorder(this.div);
        toolObj.selected();
        toolObj.onUpdate(callback);
    }

    private startPenTool(): void {
        const penTool = document.getElementById('pen_tool');
        this.pencilTool = new PencilTool(this.canvas, this.penSize, this.canvasSize);
        this.selectedTool = this.pencilTool;
        penTool.addEventListener('click', (): void => {
            this.startTool(this.pencilTool, penTool);
        });
        document.addEventListener('keydown', (event): void => {
            if (event.code == 'KeyP') {
                this.startTool(this.pencilTool, penTool);
            }
        })
    }

    private startPaintBucketTool(): void {
        const paintBucketTool = document.getElementById('paint_bucket_tool') as HTMLDivElement;
        this.paintBucketTool = new PaintBucket(this.canvas);
        paintBucketTool.addEventListener('click', (): void => {
            this.startTool(this.paintBucketTool, paintBucketTool);
        })
        document.addEventListener('keydown', (event): void => {
            if (event.code == 'KeyB') {
                this.startTool(this.paintBucketTool, paintBucketTool);
            }
        })
    }

    private startEraserTool(): void {
        const eraserTool = document.getElementById('eraser_tool') as HTMLDivElement;
        this.eraserTool = new Eraser(this.canvas, this.penSize, this.canvasSize);
        eraserTool.addEventListener('click', (): void => {
            this.startTool(this.eraserTool, eraserTool);
        });
        document.addEventListener('keydown', (event): void => {
            if (event.code == 'KeyE') {
                this.startTool(this.eraserTool, eraserTool);
            }
        })
    }

    private startStrokeRectangleTool(): void {
        const strokeRectangleTool = document.getElementById('stroke_rectangle_tool') as HTMLDivElement;
        this.strokeRectangleTool = new StrokeRectangle(this.canvas, this.penSize, this.canvasSize);
        strokeRectangleTool.addEventListener('click', (): void => {
            this.startTool(this.strokeRectangleTool, strokeRectangleTool);
        });
        document.addEventListener('keydown', (event): void => {
            if (event.code == 'KeyR') {
                this.startTool(this.strokeRectangleTool, strokeRectangleTool);
            }
        })
    }

    private startFillRectangleTool(): void {
        const fillRectangleTool = document.getElementById('fill_rectangle_tool') as HTMLDivElement;
        this.fillRectangleTool = new FillRectangle(this.canvas, this.penSize, this.canvasSize);
        fillRectangleTool.addEventListener('click', (): void => {
            this.startTool(this.fillRectangleTool, fillRectangleTool);
        })
        document.addEventListener('keydown', (event): void => {
            if (event.code == 'KeyF') {
                this.startTool(this.fillRectangleTool, fillRectangleTool);
            }
        })
    }

    private startColorPickerTool():void {
        const colorPickerTool = document.getElementById('color_picker_tool') as HTMLDivElement;
        this.colorPickerTool = new ColorPicker(this.canvas);
        colorPickerTool.addEventListener('click', ():void => {
            this.startTool(this.colorPickerTool, colorPickerTool, this.setInputColor);
        });
        document.addEventListener('keydown', (event): void => {
            if (event.code == 'KeyC') {
                this.startTool(this.colorPickerTool, colorPickerTool, this.setInputColor);
            }
        })
    }

    private setInputColor = (): void => {
        this.primaryInput.value = String(this.context.fillStyle);
    };

    private openDialogWindow(): void {
        const openDialogButton = document.getElementById('dialog_button') as HTMLButtonElement;
        openDialogButton.addEventListener('click', (): void => {
            const dialogWindow = document.getElementById('dialog_window') as HTMLDialogElement;
            dialogWindow.showModal();
        })
    }

    private closeDialogWindow(): void {
        const closeDialogButton = document.getElementById('close_dialog_button') as HTMLButtonElement;
        closeDialogButton.addEventListener('click', (): void => {
            const dialogWindow = document.getElementById('dialog_window') as HTMLDialogElement;
            dialogWindow.close();
        })
    }

    private createGif(): void {
        const imagesArray = this.frames.getImagesData();
        const gif = new GIF({
          workers: 2,
          quality: 13,
          transparent: "#000",
        });
        const promises = [];

        for (let i = 0; i < imagesArray.length; i++) {
            const image = new Image();
            image.src = imagesArray[i];
            promises.push(
                new Promise(resolve => {
                    image.onload = () => {
                        gif.addFrame(image);
                        resolve()
                    }
                })
            )
        }
        Promise.all(promises).then(() => {
            gif.render();
        });
        gif.on('finished', function(blob) {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "test.gif";
            link.click()
        });
    }

    private addExportImageListeners() {
        const exportButton = document.getElementById('export_button') as HTMLButtonElement;
        exportButton.addEventListener('click', (event): void => {
            this.createGif();
        });
        document.addEventListener('keydown', (event): void => {
            if (event.code == 'Numpad0') {
                this.createGif();
            }
        });
    }

    private initTools = (): void => {
        this.startPenTool();
        this.startPaintBucketTool();
        this.startEraserTool();
        this.startStrokeRectangleTool();
        this.startFillRectangleTool();
        this.startColorPickerTool();
    }





}

const app = new App();
app.start();
