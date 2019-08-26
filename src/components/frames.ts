const emptyFrame = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAGACAYAAAByeNBuAAAUuklEQVR4Xu3WMQ0AAAzDsJU/6bHI5RGoZO3IzhEgQIAAAQIECBAIBRZumSJAgAABAgQIECBwAtQTECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECDwdOcBgTGsrYIAAAAASUVORK5CYII=";

type DrawImage = (data: string) => void;

export default class Frames {
    private container: HTMLDivElement;
    private activeFrame: number = -1;
    private counterFrame: number = 1;
    private imagesData: string[] = [];
    private readonly drawImage: DrawImage;

    public constructor(container: HTMLDivElement, clearCanvas: Function, drawImage: DrawImage) {
        this.container = container;
        this.drawImage = drawImage;
        this.container.querySelector('button').addEventListener('click', (): void => {
            this.createFrame();
            clearCanvas();
        });
        document.addEventListener('keydown', (event): void => {
            if (event.code == 'NumpadAdd') {
                this.createFrame();
                clearCanvas();
            }
        });
        this.createFrame();
    }


    private createFrame = (): void => {
        this.deleteActiveClassName();
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="frame active">
                <div class="number_frame">
                    <span class="counter_frame">${this.counterFrame}</span>
                </div>
                <div class="delete_frame">
                    <img src="./assets/frame_icons/delete-icon.svg" alt="delete_icon" class="delete_icon icon_select">
                </div>
                <div class="copy_frame">
                    <img src="./assets/frame_icons/copy-icon.svg" alt="copy_icon" class="copy_icon icon_select">
                </div>  
                <div class="expand_frame">
                    <img src="./assets/frame_icons/expand-icon.svg" alt="expand_icon" class="expand_icon icon_select">
                </div>            
            </div>
        `;
        this.container.insertBefore(template.content, this.container.querySelector('#button_add_frame'));
        this.activeFrame++;
        this.imagesData[this.activeFrame] = emptyFrame;
        this.counterFrame++;
        const frames = this.getFramesArray();
        const lastFrame = frames[frames.length - 1];
        this.setFrameEventListeners(lastFrame);
    };

    private frameCounterValue(frame: HTMLDivElement): number  {
        return parseInt(frame.querySelector('.counter_frame').textContent);
    }

    private setFrameCounterValue(frame: HTMLDivElement, index: number): void {
        frame.querySelector('.counter_frame').textContent = String(index);
    }

    private getFramesArray(): HTMLCollection {
        return this.container.getElementsByClassName('frame');
    }

    private changeIndexes(frameIndex: number): void {
        const framesArray = this.getFramesArray();
        let index = frameIndex;
        const length = framesArray.length;
        while(index < length) {
            this.setFrameCounterValue(framesArray[index] as HTMLDivElement, index + 1);
            index += 1;
        }
    }

    private deleteFrame(icon): void {
        const frame = icon.parentNode;
        const deleteIndex = Array.from(this.getFramesArray()).indexOf(frame);

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
            this.imagesData.splice(deleteIndex,1);
        }
        this.getFramesArray()[this.activeFrame].classList.add('active')
    }

    private copyFrame(icon): void {
        this.deleteActiveClassName();
        const frame = icon.parentNode;
        const copyCounter = this.frameCounterValue(frame);
        const copyIndex = copyCounter - 1;
        const elementCopy = frame.cloneNode(true) as HTMLDivElement;

        if(frame.nextSibling) {
            this.container.insertBefore(elementCopy, frame.nextSibling).classList.add('active');
        }
        this.setFrameEventListeners(elementCopy);
        this.changeIndexes(copyCounter);
        this.activeFrame = copyCounter;

        this.counterFrame++;
        if(this.imagesData[copyIndex]) {
            this.imagesData.splice(copyCounter,0, this.imagesData[copyIndex])
        }
    }

    public updatePreview(imageData: string): void {
        const frame = document.getElementsByClassName('frame')[this.activeFrame] as HTMLDivElement;
        if (frame) {
            frame.style.backgroundSize = '100%, auto';
            frame.style.backgroundImage =
                `url(${imageData}), url('assets/images/background.png')`;
            frame.style.backgroundPosition = 'left top, left top';
            frame.style.backgroundRepeat = 'no-repeat, repeat';

        }
        this.imagesData[this.activeFrame] = imageData;
    }

    private setFrameEventListeners(frame): void {
        const deleteIcon = frame.querySelector('.delete_frame');
        deleteIcon.addEventListener('click', (event): void => {
            event.stopImmediatePropagation();
            this.deleteFrame(event.currentTarget);
        });
        const copyIcon = frame.querySelector('.copy_frame');
        copyIcon.addEventListener('click', (event): void => {
            event.stopImmediatePropagation();
            this.copyFrame(event.currentTarget);
        });
        frame.addEventListener('click', (): void => {
            this.deleteActiveClassName();
            frame.classList.add('active');
            const activeIndex = Array.from(this.getFramesArray()).indexOf(frame);
            this.activeFrame = activeIndex;
            this.drawImage(this.imagesData[activeIndex]);
        })
    }

    private deleteActiveClassName(): void {
        const prevFrame = this.container.querySelector('.frame.active');
        if (prevFrame) {
            prevFrame.classList.remove('active');
        }
    }

    public getImagesData(): string[] {
        return this.imagesData;
    }

}
