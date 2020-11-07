/*
 * @Author: ch
 * @Date: 2020-04-03 09:37:34
 * @Last Modified by: ch
 * @Last Modified time: 2020-06-01 17:27:32
 */
'use strict';
/**
 *
 * 时间格式化
 * @param {number|string|Date} d 时间参数 数字，字符串，日期类型
 * @param {string} fmt 时间格式参数 字符串类型 默认'yyyy/MM/dd'
 */
var formatDate = function (d, fmt) {
    if (fmt === void 0) { fmt = 'yyyy/MM/dd'; }
    if (!d) {
        return false;
    }
    var date = typeof d === 'number' ?
        new Date((d < 10000000000 && d > -10000000000) ? d * 1000 : d) : typeof d === 'string' ? new Date(d.replace(/-/ig, '/')) : d, o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds() //毫秒
    };
    if (/(y+)/i.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")", 'i').test(fmt)) {
            var str = o[k].toString();
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ("0" + str).substr(str.length - 1));
        }
    }
    return fmt;
};
export default formatDate;
