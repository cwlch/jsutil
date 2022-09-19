/*
 * @Author: ch
 * @Date: 2020-06-01 14:09:49
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 10:13:14
 */
import getVarType from './get-var-type';
'use strict';
/**
 *
 * 金额加千位符格式化
 * @param {number | string} money 金额数据
 * @returns {string} 金额格式数据
 */
var _FormatMoneySymbol = function (money) {
    var moneyType = getVarType(money);
    if (money === '' || moneyType === 'null' || moneyType === 'undefined') {
        return null;
    }
    var strMonery = parseFloat(money).toFixed(2).toString(), intNum = parseInt(strMonery).toString(), floatNum = strMonery.split('.');
    var str = '';
    if (intNum > 999999) {
        str = intNum.split('').reverse().reduce(function (prev, next, index) {
            return ((index % 3) ? next : (next + ',')) + prev;
        });
    }
    else {
        str = intNum;
    }
    return str += ".".concat(floatNum[1]);
};
export default _FormatMoneySymbol;
