/*
 * @Author: ch
 * @Date: 2020-11-24 21:38:12
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * 设置SessionStorage
 */
var setSessionStorage = function (key, val) {
    var valStr = JSON.stringify(val);
    if (sessionStorage) {
        sessionStorage.setItem(key, valStr);
    }
};
exports.default = setSessionStorage;
