export interface CommandModel {
    cmd: string;
    cb(...args: any): void;
}