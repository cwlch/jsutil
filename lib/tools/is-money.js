/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:16
 * @Last Modified by: ch
 * @Last Modified time: 2020-05-26 09:24:17
 */
'use strict';
/**
 * 金额格式验证,单位到万亿
 * @param {number | string} val 金额
 */
export default (function (val) { return /^(?:0\.\d{0,1}[1-9]|(?!0)\d{1,13}(?:\.\d{0,1}[0-9])?)$/.test(val.toString()); });
