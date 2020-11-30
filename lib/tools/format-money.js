/*
 * @Author: ch
 * @Date: 2020-06-01 14:09:49
 * @Last Modified by: ch
 * @Last Modified time: 2020-09-07 11:12:22
 */
import getVarType from './get-varType';
'use strict';
/**
 *
 * 金额格式化
 * @param {number | string} money 金额数据
 * @returns {string} 金额格式数据
 */
var formatMoney = function (money) {
    var moneyType = getVarType(money);
    if (moneyType === 'null' || moneyType === 'undfined') {
        return money;
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
    return str += "." + floatNum[1];
};
export default formatMoney;
