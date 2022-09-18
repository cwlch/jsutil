/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:13
 * @Last Modified by:   ch
 * @Last Modified time: 2020-11-07 16:41:13
 */
'use strict';
/**
 * 获取变量类型
 * 'Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp',
    'NaN',
    'Infinite'
 * @param {*} o
 * @returns string
 */
export default (function (o) { return (Object.prototype.toString.call(o).match(/\[object (.*?)\]/) || [])[1].toLowerCase(); });
