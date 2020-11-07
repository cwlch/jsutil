/*
 * @Author: ch 
 * @Date: 2020-11-07 16:41:13 
 * @Last Modified by:   ch 
 * @Last Modified time: 2020-11-07 16:41:13 
 */

'use strict'
/**
 * 获取变量类型
 * @param {*} o
 * @returns string
 */
export default (o:any):string => (Object.prototype.toString.call(o).match(/\[object (.*?)\]/) || [])[1].toLowerCase();