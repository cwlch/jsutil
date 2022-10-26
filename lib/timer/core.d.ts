interface TimerOption {
    maxUnit: String;
    fillZero: Boolean;
    callback?: Function;
    finish?: Function;
}
interface Unit {
}
declare const _defaultOption: TimerOption;
declare class Timer {
    option: TimerOption;
    day?: number;
    hours: number;
    minute: number;
    second: number;
    status: string;
    constructor(option: TimerOption);
    stop(): void;
    start(): void;
    restart(): void;
}
