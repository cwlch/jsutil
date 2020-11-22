/*
 * @Author: ch
 * @Date: 2020-11-10 11:22:51
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 11:30:53
 */
'use strict';
/**
 * 验证邮箱地址
 */
export default (function (val) { return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(val); });
