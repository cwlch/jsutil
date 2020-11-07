/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:53
 * @Last Modified by: ch
 * @Last Modified time: 2020-05-26 11:37:30
 */
'use strict';
/**
 * 去除空格
 */
var trimSpace = function (str) {
    if (str === void 0) { str = ''; }
    return str.replace(/(^\s*)|(\s*$)/g, '');
};
export default trimSpace;
