/*
 * @Author: ch
 * @Date: 2020-04-03 09:37:34
 * @Last Modified by: ch
 * @Last Modified time: 2020-06-01 17:27:32
 */
import getVarType from './get-var-type';
'use strict';
/**
 *
 * 时间格式化
 * @param {number|string|Date} d 时间参数能被new Date识别的数字，字符串，日期
 * @param {string} fmt 时间格式参数 字符串类型 默认'yyyy/mm/dd'
 */
var _FormatDate = function (date, fmt) {
    if (fmt === void 0) { fmt = 'yyyy/mm/dd'; }
    //  处理不识别的时间表示字符串，如2020年01月01日00时00分00秒
    var dateType = getVarType(date);
    if (dateType === 'string') {
        date = date.replace(/\D+/ig, '/');
        var arr = date.split('/');
        // 长度大于3说明带了时分秒信息 特殊时间处理格式
        if (arr.length > 3) {
            var time = " ".concat(arr[3], ":").concat(arr[4], ":").concat(arr[5]);
            arr.length = 3;
            date = arr.join('/') + time;
        }
    }
    ;
    try {
        date = date ? dateType === 'date' ? date : new Date(date) : new Date();
    }
    catch (e) {
        throw new Error('不能识别的时间格式');
    }
    var o = {
        'm+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'i+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'l+': date.getMilliseconds() //毫秒
    };
    if (/(y+)/i.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(".concat(k, ")"), 'i').test(fmt)) {
            var str = o[k].toString();
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ("0".concat(str)).substr(str.length - 1));
        }
    }
    return fmt;
};
export default _FormatDate;
