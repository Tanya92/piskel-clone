const activeClass = 'active_button';
export default class CanvasSize {
    private canvasSize: number = 32;
    private readonly canvas: HTMLCanvasElement;
    private currentSize: number = 32;
    private callback: Function;

    public constructor() {
        this.canvas = document.getElementById('draw_canvas') as HTMLCanvasElement;
        this.addCanvasSizeListener();
        this.setCanvasInformation();
    }

    private getCanvasContext(): CanvasRenderingContext2D {
        return this.canvas.getContext('2d');
    }

    private addCanvasSizeListener(): void {
        const ctx = this.getCanvasContext();
        ctx.scale(4,4);
        const container = document.getElementById('scale_canvas_container');
        container.addEventListener('click', (event: Event): void => {
            const elem = event.target as HTMLDivElement;
            let prevElem = document.querySelector(`.${activeClass}`) as HTMLDivElement;
            if (elem.classList.contains('scale_canvas_button')) {
                this.canvasSize = Number(elem.getAttribute('data-canvassize'));
                this.onCanvasSizeSelected(elem, prevElem);
            }
        });
        document.addEventListener('keydown', (event): void => {
            const sizeCollection = document.getElementsByClassName('scale_canvas_button') as HTMLCollection;
            let prevElem = document.querySelector(`.${activeClass}`) as HTMLDivElement;
            const elemIndex = Array.from(sizeCollection).indexOf(prevElem);

            let nextIndex;
            if (event.code == 'ArrowDown') {
                nextIndex = (elemIndex + 1) % sizeCollection.length;
            }
            if (event.code == 'ArrowUp') {
                nextIndex = elemIndex - 1 % sizeCollection.length;
                if (nextIndex < 0) {
                    nextIndex = sizeCollection.length - 1;
                }
            }
            if (event.code == 'ArrowUp' || event.code == 'ArrowDown') {
                this.canvasSize = Number(sizeCollection[nextIndex].getAttribute('data-canvassize'));
                this.onCanvasSizeSelected(sizeCollection[nextIndex] as HTMLDivElement, prevElem);
            }
        })
    }

    private onCanvasSizeSelected = (elem: HTMLDivElement, prevElem: HTMLDivElement): void => {

        let scale = this.currentSize / this.canvasSize;
        this.resize(scale);
        this.callback();
        this.currentSize = this.canvasSize;
        this.setCanvasInformation();
        if (prevElem) {
            prevElem.classList.remove(activeClass);
        }
        elem.classList.add(activeClass);
    };

    public getSquareLength(): number {
        const canvasWidth = this.canvas.width;
        return canvasWidth / this.canvasSize;
    }

    public getCanvasSize(): number {
        return this.canvasSize;
    }

    public setCanvasInformation = (): void => {
        const informationContainer = document.getElementById('information_container') as HTMLDivElement;
        const canvasSize = this.getCanvasSize();
        informationContainer.innerHTML = `
        <table>
            <tr class="canvas_size_info"><td>[${canvasSize}/${canvasSize}]</td></tr>
            <tr class="cursor_coordinates"></tr>
        </table>
         
        `;
    };

    private resize(scale): void {
        const tmp = document.createElement('canvas');
        const tmpCtx = tmp.getContext('2d');
        const ctx = this.getCanvasContext();
        const canvasWidth = parseInt(getComputedStyle(this.canvas).width);
        const canvasHeight = parseInt(getComputedStyle(this.canvas).height);
        tmp.width = this.canvas.width;
        tmp.height = this.canvas.height;
        tmpCtx.drawImage(this.canvas, 0, 0);
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        const drawWidth = canvasWidth * scale;
        const drawHeight = canvasHeight * scale;
        const leftDraw = (canvasWidth - drawWidth) / 2;
        const topDraw = (canvasHeight - drawHeight) / 2;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(tmp, leftDraw, topDraw, drawWidth, drawHeight);
    }

    public onUpdate = (callback): void => {
        this.callback = callback;
    };


}
