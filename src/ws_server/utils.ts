import { CommandModel } from "./models";
import { WebSocket } from "ws";

export function commands(ws: WebSocket, message: string, commands: CommandModel[]) {
    const msg = message.split(' ');
    const cmd = msg.shift();
    const args = msg;
    if (!cmd) {
        console.log('No command!');
        return;
    }
    commands.find((command: CommandModel) => cmd === command.cmd)?.cb(...args, ws);
}