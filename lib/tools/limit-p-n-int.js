"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 限制可输入正负整数
 * @param val
 */
var limitPNInt = function (val) {
    var num = val.toString();
    // 剔除数字和“-”号以外字符，
    num = num.replace(/[^\d\-]/g, '');
    // 限制只保留开头的“-”号
    num = num.replace(/^-/, '$#$').replace(/\-/g, '').replace('$#$', '-');
    // 避免正负双0开头的数字
    num = num.replace(/^(\-?)0[\d]+/, '$10');
    return num;
};
exports.default = limitPNInt;
