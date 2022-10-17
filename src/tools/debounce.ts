/*
 * @Author: sans
 * @Date: 2022-09-18 11:38
 */

import _GetVarType from "./get-var-type";

/**
 * @desc 函数防抖
 * 好比技能读条 触发后等待一段时间再释放技能，并且重复触发的话会重新计算读条时间
 * @param fn 执行函数
 * @param delay 延迟执行的毫秒数
 * @param immediate 是否立即执行
 */
const _Debounce = (fn: (args: any) => void, delay: number, immediate?: boolean) => {
    let timer: any;
    if (_GetVarType(fn) !== 'Function') {
        throw new Error('第一个参数，需要为函数哦~');
    }
    return (args: any) => {
        if (timer) clearTimeout(timer)
        // 立即执行
        if (immediate) {
            const callNow = !timer
            timer = setTimeout(() => {
                timer = null;
            }, delay)
            if (callNow) {
                fn(args);
            }
        } else {
            timer = setTimeout(() => {
                fn(args);
            }, delay)
        }
    }
}
export default _Debounce