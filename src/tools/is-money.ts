/*
 * @Author: ch 
 * @Date: 2020-04-03 09:38:16 
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-15 10:21:56
 */

'use strict'
/**
 * 金额格式验证,单位到万亿
 * @param {number | string} val 金额
 */
export default (val:string|number):boolean => /^(?:0(?:\.[0-9]{1,2}){0,1}|(?!0)[0-9]{1,13}(?:\.[0-9]{1,2})?)$/.test(val.toString());