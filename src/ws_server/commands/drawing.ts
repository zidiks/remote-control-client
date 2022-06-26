import { getMousePos, dragMouse, mouseToggle, setMouseDelay } from "robotjs";

export function drawCircle(sizeStr: string): void {
    const size = +sizeStr;
    setMouseDelay(2);
    const pos = getMousePos();
    mouseToggle('down');
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const x = pos.x + (size * Math.cos(i));
        const y = pos.y + (size * Math.sin(i));
        dragMouse(x, y);
    }
    mouseToggle('up');
}

export function drawRectangle(xStr: string, yStr: string): void {
    const x = +xStr;
    const y = +yStr;
    setMouseDelay(2);
    const perimeter = (x + y)*2;
    const pos = getMousePos();
    mouseToggle('down');
    let xPos = pos.x;
    let yPos = pos.y;
    const duration = 0.005 * perimeter;
    for (let i = 0; i <= perimeter * 4; i += duration) {
        const parts = [
            x,
            x+y,
            2*x+y,
            perimeter,
        ];
        const part = parts.findIndex(part => i <= part) + 1;
        xPos += part === 1 ? duration : part === 3 ? -duration : 0;
        yPos += part === 2 ? duration : part === 4 ? -duration : 0;
        dragMouse(xPos, yPos);
    }
    mouseToggle('up');
}

export function drawSquare(sizeStr: string): void {
    const size = +sizeStr;
    setMouseDelay(2);
    const pos = getMousePos();
    mouseToggle('down');
    let xPos = pos.x;
    let yPos = pos.y;
    const duration = 0.005 * size * 4;
    for (let i = 0; i <= size * 4; i += duration) {
        const part = Math.ceil(i/(size*4)*4);
        xPos += part === 1 ? duration : part === 3 ? -duration : 0;
        yPos += part === 2 ? duration : part === 4 ? -duration : 0;
        dragMouse(xPos, yPos);
    }
    mouseToggle('up');
}