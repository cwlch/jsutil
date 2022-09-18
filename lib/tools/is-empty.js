/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:19
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 09:05:59
 */
'use strict';
/**
 * 判断变量是否为空
 */
import getType from './get-var-type';
var _IsEmpty = function (params) {
    if (params === void 0) { params = ''; }
    var myType = getType(params);
    if (params === '' || myType === 'undefined' || myType === 'null' ||
        (myType === 'array' && params.length === 0) || (myType === 'object' && Object.keys(params).length === 0)) {
        return true;
    }
    return false;
};
export default _IsEmpty;
