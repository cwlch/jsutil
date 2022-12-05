/**
 * @desc 函数节流
 * 连续触发函数，但是在n秒中只执行一次，可以稀释函数执行的频率
 * 好比技能cd 释放技能后要等待冷却时间
 * @param fn 执行函数
 * @param delay 延迟执行的毫秒数 默认为500ms
 * @param type 1 表示时间戳类型(立即触发)  2 表示定时器（到时间再触发）  3 时间戳+定时器版: 实现第一次触发可以立即响应,结束触发后也能有响应
 */
declare const _Throttle: (fn: (args: any) => void, delay?: number, type?: number) => (args: any) => void;
export default _Throttle;
