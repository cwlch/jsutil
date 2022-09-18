/*
 * @Author: sans
 * @Date: 2022-09-18 11:38
 */
/**
 * @desc 函数防抖
 * 好比技能读条 触发后等待一段时间再释放技能，并且重复触发的话会重新计算读条时间
 * @param fn 执行函数
 * @param delay 延迟执行的毫秒数
 * @param immediate 是否立即执行
 */
var debounceFn = function (fn, delay, immediate) {
    var timer;
    return function (args) {
        if (timer)
            clearTimeout(timer);
        // 立即执行
        if (immediate) {
            var callNow = !timer;
            timer = setTimeout(function () {
                timer = null;
            }, delay);
            if (callNow) {
                fn(args);
            }
        }
        else {
            timer = setTimeout(function () {
                fn(args);
            }, delay);
        }
    };
};
export default debounceFn;
