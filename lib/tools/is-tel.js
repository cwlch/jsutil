/*
 * @Author: ch
 * @Date: 2020-11-10 11:40:32
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 11:55:34
 */
'use strict';
/**
 * 验证是不是座机号
 */
export default (function (val) { return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(val); });
