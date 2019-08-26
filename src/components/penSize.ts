const activeClass = 'active_size';
export default class PenSize {
    private penSize: number = 1;

    public constructor() {
        this.addPenSizeListener();
    }

    private addPenSizeListener(): void {
        const container = document.getElementById('select_pen_size');
        container.addEventListener('click', (event: Event): void => {
            const elem = event.target as HTMLDivElement;
            let prevElem = document.querySelector(`.${activeClass}`);
            if (elem.classList.contains('pen_size')) {
                this.penSize = Number(elem.getAttribute('data-size'));
                if (prevElem) {
                    prevElem.classList.remove(activeClass);
                }
                elem.classList.add(activeClass);
            }
        });
        document.addEventListener('keydown', (event): void => {
            const penSizes = document.getElementsByClassName('pen_size') as HTMLCollection;
            let prevElem = document.querySelector(`.${activeClass}`) as HTMLDivElement;
            if (event.code == 'Numpad1') {
                this.setPenSize(1, prevElem, penSizes);
            }
            if (event.code == 'Numpad2') {
                this.setPenSize(2, prevElem, penSizes);
            }
            if (event.code == 'Numpad3') {
                this.setPenSize(3, prevElem, penSizes);
            }
            if (event.code == 'Numpad4') {
                this.setPenSize(4, prevElem, penSizes);
            }
        })
    }

    private setPenSize(number: number, prevElem: HTMLDivElement, collection: HTMLCollection): void {
        this.penSize = number;
        if (prevElem) {
            prevElem.classList.remove(activeClass);
        }
        collection[number-1].classList.add(activeClass);
    }

    public getPenSize(): number {
        return this.penSize;
    }
}
