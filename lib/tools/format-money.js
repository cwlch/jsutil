"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: ch
 * @Date: 2020-06-01 14:09:49
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 10:13:14
 */
var get_var_type_1 = __importDefault(require("./get-var-type"));
'use strict';
/**
 *
 * 金额格式化
 * @param {number | string} money 金额数据
 * @returns {string} 金额格式数据
 */
var formatMoney = function (money) {
    var moneyType = get_var_type_1.default(money);
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
    return str += "." + floatNum[1];
};
exports.default = formatMoney;
