/*
 * @Author: sans
 * @Date: 2022-09-18 11:38
 */
import _GetVarType from './get-var-type';
/**
 * @desc 函数节流
 * 连续触发函数，但是在n秒中只执行一次，可以稀释函数执行的频率
 * 好比技能cd 释放技能后要等待冷却时间
 * @param fn 执行函数
 * @param delay 延迟执行的毫秒数 默认为500ms
 * @param type 1 表示时间戳类型(立即触发)  2 表示定时器（到时间再触发）  3 时间戳+定时器版: 实现第一次触发可以立即响应,结束触发后也能有响应
 */
var _Throttle = function (fn, delay, type) {
    if (delay === void 0) { delay = 500; }
    if (type === void 0) { type = 1; }
    var previous = 0, timer;
    if (_GetVarType(fn) !== 'function') {
        throw new Error('fn需要为函数哦！');
    }
    return function (args) {
        if (type === 1 || type === 3) {
            var now = Date.now();
            // 当前时间-先前时间 > 延迟时间
            if (now - previous > delay) {
                fn(args);
                previous = now;
            }
        }
        if (type === 2 || type === 3) {
            if (!timer) {
                timer = setTimeout(function () {
                    clearTimeout(timer);
                    timer = null;
                    fn(args);
                }, delay);
            }
        }
    };
};
export default _Throttle;
