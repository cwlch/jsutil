/*
 * @Author: ch 
 * @Date: 2020-04-03 09:38:16 
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 11:46:47
 */

'use strict'
/**
 * 金额格式验证,单位到万亿
 * @param {number | string} val 金额
 */
export default (val:string|number):boolean => /^(?:0\.\d{0,1}[1-9]|(?!0)\d{1,13}(?:\.\d{0,1}[0-9])?)$/.test(val.toString());