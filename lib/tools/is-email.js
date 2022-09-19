/*
 * @Author: ch
 * @Date: 2020-11-10 11:22:51
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-01 11:10:48
 */
'use strict';
/**
 * 验证邮箱地址
 */
export default (function (val) { return /^[A-Za-z0-9\u4e00-\u9fa5]+([\.\-_]*[A-Za-z0-9\u4e00-\u9fa5])*@([A-Za-z0-9\u4e00-\u9fa5]+[\.\-_]{0,1}[A-Za-z0-9\u4e00-\u9fa5]+){1,63}\.([A-Za-z0-9\u4e00-\u9fa5]+[\.\-_]{0,1}[A-Za-z0-9\u4e00-\u9fa5]+)+$/.test(val); });
