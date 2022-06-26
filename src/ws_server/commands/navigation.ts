import { WebSocket } from "ws";
import { moveMouse, getMousePos } from 'robotjs';

function moveMouseOn(x: number, y: number): void {
    const pos = getMousePos();
    pos.x += +x;
    pos.y += +y;
    moveMouse(pos.x, pos.y);
}

export function mouseUp(y: string): void {
    moveMouseOn(0, -y);
}

export function mouseDown(y: string): void {
    moveMouseOn(0, +y);
}

export function mouseLeft(x: string): void {
    moveMouseOn(-x, 0);
}

export function mouseRight(x: string): void {
    moveMouseOn(+x, 0);
}

export function mousePosition(ws: WebSocket): void {
    const pos = getMousePos();
    ws.send(`mouse_position ${pos.x},${pos.y}`);
}