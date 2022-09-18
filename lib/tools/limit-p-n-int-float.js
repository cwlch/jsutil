/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:55:58
 * @Description: file content
 */
/**
 * 限制输入正负数字及浮点数
 * @param val
 * @param digit 需要保留的小数位数
 */
var _LimitPNIntFloat = function (val, digit) {
    // /^(\.*)(\d+)(\.?)(\d{0,2}).*$/g
    var num = val.toString();
    // 剔除数字和“-”，“.”号以外字符，
    num = num.replace(/[^\d\.\-]/g, '');
    // 限制只保留开头的“-”号
    num = num.replace(/^-/, '$#$').replace(/\-/g, '').replace('$#$', '-');
    // 限制只允许输入一个“.”
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    // 避免正负0开头不带点的数字
    num = num.replace(/^(\-?)0[\d]+/, '$10');
    // 第一位为“.”自动补0
    num = num.replace(/^\./, '0.');
    // 按照参数设置保留小数位数
    if (digit != null) {
        // num = num.replace(new RegExp(`^(\\-?)(\\d+)(\\.?)(\\d{0,${digit}}).*$`),'$1$2$3$4')
        num = num.replace(new RegExp("^(-|\\d+)(\\.?)(\\d{0,".concat(digit, "}).*$")), '$1$2$3');
    }
    return num;
};
export default _LimitPNIntFloat;
