/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:26
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-30 16:29:22
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  是否为姓名格式
 * @param {string} val 姓名
 */
exports.default = (function (val) { return /^([A-Za-z\.\s]{2,20}|[\u4e00-\u9fa5]{2,20})$/.test(val); });
