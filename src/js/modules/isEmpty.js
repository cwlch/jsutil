/**
 * 
 * 判断是否为空
 */
'use strict'
import type from './type.js';

const isEmpty = (params = '') => {
    if (type.isArray(params) && params.length === 0) {
        return true;
    }
    if (type.isObject(params) && Object.key(params).length === 0) {
        return true;
    }
    if (type.isUndefined(params)) {
        return true;
    }
    if (type.isNull(params)) {
        return true;
    }
    if (type.isString(params) && params.length === 0) {
        return true;
    }
    return false;
};
export default isEmpty;