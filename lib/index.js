/*
 * @Author: ch
 * @Date: 2021-09-11 11:42:25
 * @LastEditors: ch
 * @LastEditTime: 2022-09-05 21:50:27
 * @Description: file content
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as gjUtils from './tools/index';
export * from './tools/index';
export default __assign({}, gjUtils);
