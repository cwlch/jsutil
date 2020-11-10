/*
 * @Author: ch 
 * @Date: 2020-04-03 09:38:26 
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 11:46:36
 */
'use strict'
/**
 *  是否为姓名格式
 * @param {string} val 姓名
 */
export default(val:string):boolean => /^[A-Za-z\.\s\u4e00-\u9fa5]+$/.test(val)