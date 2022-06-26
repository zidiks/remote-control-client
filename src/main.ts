import { RawData, WebSocket, WebSocketServer } from 'ws';
import { httpServer } from './http_server';
import { commands } from "./ws_server/utils";
import { mouseDown, mouseLeft, mousePosition, mouseRight, mouseUp } from "./ws_server/commands/navigation";
import { drawCircle, drawRectangle, drawSquare } from "./ws_server/commands/drawing";
import { printScreen } from "./ws_server/commands/screen";

const HTTP_PORT = 3000;
const WS_PORT = 8080;

const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', (ws: WebSocket) => {
    console.log('connected on the WS port: ' + WS_PORT);
    ws.on('message', (message: RawData) => {
        commands(ws, message.toString(), [
            { cmd: 'mouse_up', cb: mouseUp },
            { cmd: 'mouse_down', cb: mouseDown },
            { cmd: 'mouse_left', cb: mouseLeft },
            { cmd: 'mouse_right', cb: mouseRight },
            { cmd: 'mouse_position', cb: mousePosition },
            { cmd: 'draw_circle', cb: drawCircle },
            { cmd: 'draw_rectangle', cb: drawRectangle },
            { cmd: 'draw_square', cb: drawSquare },
            { cmd: 'prnt_scrn', cb: printScreen }
        ]);
    });
});

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
