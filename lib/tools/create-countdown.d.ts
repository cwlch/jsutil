interface Option {
    endTime: number | string;
    format: string;
    fill: Boolean;
    callback?: Function;
    finishCallback?: Function;
    start?: Boolean;
}
declare const _calcSecond: unique symbol;
declare class Countdown {
    private secondNum;
    private curTime;
    private endTimeNum;
    private secondDiff;
    private stopCalc;
    private result;
    options: Option;
    constructor(options: Option);
    [_calcSecond](): void;
    /**
     * @Description: 开始
     * @return {*}
     */
    start(): void;
    /**
     * @Description: 暂停
     * 清除计时器
     * @return {*}
     */
    stop(): void;
    /**
     * @Description: 结束
     * 销毁计时器并调完成回调
     * @return {*}
     */
    destroy(): void;
}
declare const _CreateCountdown: ({ endTime, format, fill, callback, finishCallback, start }: Option) => Countdown;
export default _CreateCountdown;
