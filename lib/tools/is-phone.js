/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:40
 * @Last Modified by: ch
 * @Last Modified time: 2020-05-25 11:03:21
 */
'use strict';
/**
 * 是否为手机号
 * @param {string} val 手机号
 * @returns {boolean}
 */
export default (function (val) { return /^1[3-9]\d{9}$/.test(val); });
