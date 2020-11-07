/*
 * @Author: ch
 * @Date: 2020-06-01 14:09:49
 * @Last Modified by: ch
 * @Last Modified time: 2020-09-07 11:12:22
 */
'use strict';
/**
 *
 * 金额格式化
 * @param {number | string} money 金额数据
 * @returns {string} 金额格式数据
 */
var formatMoney = function (money) {
    if (!money) {
        return '0.00';
    }
    var strMonery = parseFloat(money).toFixed(2).toString(), intNum = parseInt(strMonery).toString(), floatNum = strMonery.split('.');
    var str = '';
    if (intNum > 999999) {
        for (var i = 0; i < intNum.length; i++) {
            var item = intNum[i];
            if (i != 0 && i % 3 === 0) {
                str += "," + item;
            }
            else {
                str += item;
            }
        }
        ;
        str += "." + floatNum[1];
    }
    else {
        str = strMonery;
    }
    return str;
};
export default formatMoney;
