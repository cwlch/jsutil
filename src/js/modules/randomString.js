'use strict';
/**
 * [randomStr 生成随机字符串]
 * @param  {Number} rlen [rlen< 10都是数字，>10包含字母（偶数是短字符串，奇数是长字符串）]
 * @param  {Number} len  [len生成长度]
 * @return String
 */
export default function randomStr(rlen, len) { 
    return Math.random().toString(rlen).slice(2, len);
};
