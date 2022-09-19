/*
 * @Author: ch
 * @Date: 2020-11-24 21:38:12
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
'use strict';
/**
 *
 * 设置localStorage
 */
var _SetLocalStorage = function (key, val) {
    var valStr = JSON.stringify(val);
    if (localStorage) {
        localStorage.setItem(key, valStr);
    }
};
export default _SetLocalStorage;
