/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:12
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
'use strict';
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * 是否为身份证号
 */
var is_empty_js_1 = __importDefault(require("./is-empty.js"));
var isIdCard = function (val) {
    if (is_empty_js_1.default(val)) {
        return false;
    }
    var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], // 加权因子
    arrValid = __spreadArray([1, 0, 'X', 9, 8, 7, 6, 5, 4, 3], [2]); // 校验码
    if (/^\d{17}\d|x$/i.test(val)) {
        var sum = 0, idx = void 0, i = 0;
        for (; i < val.length - 1; i++) {
            // 对前17位数字与权值乘积求和
            sum += parseInt(val.substr(i, 1), 10) * arrExp[i];
        }
        // 计算模（固定算法）
        idx = sum % 11;
        // 检验第18为是否与校验码相等
        return arrValid[idx] == val.substr(17, 1).toUpperCase();
    }
    else {
        return false;
    }
};
exports.default = isIdCard;
