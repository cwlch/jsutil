"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 限制输入正负数字及浮点数
 * @param val
 * @param digit 需要保留的小数位数
 */
var limitPNIntFloat = function (val, digit) {
    var num = val.toString();
    // 剔除数字和“-”，“.”号以外字符，
    num = num.replace(/[^\d\.\-]/g, '');
    // 限制只保留开头的“-”号
    num = num.replace(/^-/, '$#$').replace(/\-/g, '').replace('$#$', '-');
    // 限制只允许输入一个“.”
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    // 按照参数设置保留小数位数
    if (digit != null) {
        var digitNum = Math.pow(10, digit);
        num = Math.floor(parseFloat(num) * digitNum) / digitNum;
    }
    return parseFloat(num);
};
exports.default = limitPNIntFloat;
