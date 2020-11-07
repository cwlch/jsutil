/*
 * @Author: ch 
 * @Date: 2020-11-07 16:41:19 
 * @Last Modified by:   ch 
 * @Last Modified time: 2020-11-07 16:41:19 
 */

'use strict'
/**
 * 判断是否为空
 */
import getType from './get-varType'

const isEmpty = (params:any = ''):boolean => {
    const myType:string = getType(params);
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