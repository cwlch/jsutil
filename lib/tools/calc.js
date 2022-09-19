var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-08-27 17:20:09
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:49:19
 * @Description: file content
 */
var _Calc = function (symbol, number1, number2) {
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    if (!['+', '-', '*', '/'].includes(symbol)) {
        throw new Error('第一个参数请传+ - * /计算符');
    }
    var num1 = Number(number1);
    var num2 = Number(number2);
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('第二，三个参数必须传入可计算数字或字符');
    }
    var result = 0;
    // 把浮点数跟整数部分拆解
    var _a = num1.toString().split('.'), num1BeforeInt = _a[0], num1Float = _a[1];
    var _b = num2.toString().split('.'), num2BeforeInt = _b[0], num2Float = _b[1];
    var num1FloatLen = (num1Float === null || num1Float === void 0 ? void 0 : num1Float.length) || 0;
    var num2FloatLen = (num2Float === null || num2Float === void 0 ? void 0 : num2Float.length) || 0;
    // 乘除法直接去掉浮点
    var num1Int = Number(num1.toString().replace('.', ''));
    var num2Int = Number(num2.toString().replace('.', ''));
    if (symbol === '+' || symbol === '-') {
        // 以最长浮点数长度补0
        var m = Math.max(num1FloatLen, num2FloatLen);
        // 使用字符串补0方式得到最后计算数值（不能直接数字升幂，部分数字升幂就会缺精度）
        var resNum1 = Number("".concat(num1BeforeInt).concat(num1Float.padEnd(m, '0')));
        var resNum2 = Number("".concat(num2BeforeInt).concat(num2Float.padEnd(m, '0')));
        if (symbol === '+') {
            result = (resNum1 + resNum2) / Math.pow(10, m);
        }
        else {
            result = (resNum1 - resNum2) / Math.pow(10, m);
        }
    }
    else if (symbol === '*') {
        // 两个数的浮点长度加和为幂值
        var m = Math.pow(10, num1FloatLen + num2FloatLen);
        result = (num1Int * num2Int) / m;
    }
    else if (symbol === '/') {
        // 被除数的浮点长度减除数浮点长为幂值
        var m = Math.pow(10, num2FloatLen - num1FloatLen);
        result = (num1Int / num2Int) * m;
    }
    // 有第三位计算数字
    var nextNum = args[0];
    if (nextNum) {
        args.shift();
        result = _Calc.apply(void 0, __spreadArray([symbol, result, nextNum], args, false));
    }
    return result;
};
export default _Calc;
