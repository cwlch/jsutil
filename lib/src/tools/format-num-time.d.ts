interface Result {
    day?: number;
    hours?: number;
    minute: number;
    second: number;
    formatTime: string;
}
declare const _FormatNumTime: (secondNum: number | string, format?: string, fill?: Boolean) => Result;
export default _FormatNumTime;
