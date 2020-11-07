/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:01
 * @Last Modified by: ch
 * @Last Modified time: 2020-05-26 09:24:48
 */
'use strict';
/**
 * 判断是否为空
 */
import getType from './get-varType';
var isEmpty = function (params) {
    if (params === void 0) { params = ''; }
    var myType = getType(params);
    if (myType === 'array' && params.length === 0) {
        return true;
    }
    if (myType === 'object' && Object.keys(params).length === 0) {
        return true;
    }
    if (myType === 'undefined') {
        return true;
    }
    if (myType === 'null') {
        return true;
    }
    if (myType === 'string' && params.length === 0) {
        return true;
    }
    return false;
};
export default isEmpty;
