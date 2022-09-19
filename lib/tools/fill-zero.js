/*
 * @Author: ch
 * @Date: 2020-11-24 21:38:12
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
'use strict';
/**
 *
 * 1位数补零
 */
var _FillZero = function (num) {
    var res = num;
    if (num < 10 && num >= 0 && num.toString().indexOf('.') < 0) {
        res = "0".concat(num);
    }
    return res;
};
export default _FillZero;
