/*
 * @Author: ch
 * @Date: 2020-04-03 09:37:43
 * @Last Modified by: ch
 * @Last Modified time: 2020-05-25 11:51:28
 */
'use strict';
/**
 * 获取变量类型
 * @param {*} o
 * @returns string
 */
export default (function (o) { return (Object.prototype.toString.call(o).match(/\[object (.*?)\]/) || [])[1].toLowerCase(); });
