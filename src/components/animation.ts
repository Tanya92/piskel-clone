import {animate} from "../utils";

export default class Animation {
    private animationContainer: HTMLDivElement;
    private stopAnimation: Function;
    private imagesArray: string[];
    private animationCanvas: HTMLCanvasElement;

    public constructor(animationContainer: HTMLDivElement) {
        this.animationContainer = animationContainer;
        this.animationCanvas = this.animationContainer.querySelector('#animation_canvas');
        const rect = this.getCanvasRect();
        this.animationCanvas.setAttribute('width', String(rect.width));
        this.animationCanvas.setAttribute('height', String(rect.height));
        this.changeLabel();
        this.setRangeListener();
        this.addFullScreenListener();
    }

    private getInputRange(): HTMLInputElement {
        return this.animationContainer.querySelector('.input_range') as HTMLInputElement;
    }

    public getInputRangeValue(): number {
        const inputRange = this.getInputRange();
        return Number(inputRange.value);
    }

    private changeLabel = (): void => {
        const inputValue = this.getInputRangeValue();
        const currentRange = this.animationContainer.querySelector('.current_range') as HTMLSpanElement;
        currentRange.textContent = String(inputValue);
    };

    private setRangeListener(): void {
        const inputRange = this.getInputRange();
        inputRange.addEventListener('mousemove', this.changeLabel);
        inputRange.addEventListener('change', (): void => {
            this.stopAnimation();
            this.animateFrames(this.imagesArray);
        });
        document.addEventListener('keydown', (event): void => {
            if (event.code == 'ArrowRight') {
                inputRange.value = String(Number(inputRange.value) + 1);
                this.changeLabel();
                this.stopAnimation();
                this.animateFrames(this.imagesArray);
            }
            if (event.code == "ArrowLeft") {
                inputRange.value = String(Number(inputRange.value) - 1);
                this.changeLabel();
                this.stopAnimation();
                this.animateFrames(this.imagesArray);
            }
        })
    }

    private getCanvasRect(): ClientRect {
        return this.animationCanvas.getBoundingClientRect();
    }

    public animateFrames(array: string[]): void {
        const rect = this.getCanvasRect();
        const animationContext = this.animationCanvas.getContext('2d');
        const inputRangeValue = this.getInputRangeValue();
        let frameIndex = 0;
        this.imagesArray = array;
        this.stopAnimation = animate((): void => {
            if (array[frameIndex]) {
                const image = new Image();
                image.src = array[frameIndex];
                animationContext.clearRect(0,0, rect.width, rect.height);
                animationContext.drawImage(image, 0, 0, rect.width, rect.height);
                frameIndex++;

            }
            if (frameIndex >= array.length) {
                frameIndex = 0;
            }

        }, inputRangeValue);
    }

    private addFullScreenListener(): void {
        const button = this.animationContainer.querySelector('#full_screen_button');
        button.addEventListener('click', (): void => {
            this.animationCanvas.requestFullscreen();
        });
        document.addEventListener('keydown', (event): void => {
            if (event.code == 'NumpadEnter') {
                this.animationCanvas.requestFullscreen();
            }
        })
    }

}
