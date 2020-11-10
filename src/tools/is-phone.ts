/*
 * @Author: ch 
 * @Date: 2020-04-03 09:38:40 
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 11:46:37
 */

'use strict'
/**
 * 是否为手机号
 * @param {string} val 手机号
 * @returns {boolean}
 */
export default (val:string):boolean => /^1[3-9]\d{9}$/.test(val);