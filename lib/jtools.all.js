(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.jTools = factory());
}(this, (function () { 'use strict';

    /*
     * @Author: ch
     * @Date: 2020-11-07 16:41:13
     * @Last Modified by:   ch
     * @Last Modified time: 2020-11-07 16:41:13
     */
    /**
     * 获取变量类型
     * @param {*} o
     * @returns string
     */
    var getVarType = (function (o) { return (Object.prototype.toString.call(o).match(/\[object (.*?)\]/) || [])[1].toLowerCase(); });

    /*
     * @Author: ch
     * @Date: 2020-11-07 16:41:19
     * @Last Modified by:   ch
     * @Last Modified time: 2020-11-07 16:41:19
     */
    var isEmpty = function (params) {
        if (params === void 0) { params = ''; }
        var myType = getVarType(params);
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

    /*
     * @Author: ch
     * @Date: 2020-11-07 16:41:04
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-07 16:42:42
     */
    var index = {
        // 是否为空
        isEmpty: isEmpty,
        // 获取变量类型
        getVarType: getVarType,
    };

    return index;

})));
