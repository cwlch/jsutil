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
 * 获取SessionStorage
 */
var getSessionStorage = function (key) {
    var val = null;
    if (sessionStorage) {
        sessionStorage.getItem(key);
    }
    if (val) {
        val = JSON.parse(val);
    }
    return val;
};
exports.default = getSessionStorage;
