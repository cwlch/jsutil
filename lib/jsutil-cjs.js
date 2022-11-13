'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:13
 * @Last Modified by:   ch
 * @Last Modified time: 2020-11-07 16:41:13
 */
/**
 * 获取变量类型
 * 'Null',
 * 'Undefined',
 * 'Object',
 * 'Array',
 * 'String',
 * 'Number',
 * 'Boolean',
 * 'Function',
 * 'RegExp',
 * 'NaN',
 * 'Infinity'
 * 'Date'
 * 自定义构造函数类：小写函数名
 * @param {*} o
 * @returns string
 */
var _GetVarType = (o) => {
    let typeStr = (Object.prototype.toString.call(o).match(/\[object (.*?)\]/) || [])[1];
    if (typeStr === 'Object') {
        const constName = o.constructor.name;
        constName !== 'Object' && (typeStr = `${typeStr}:${constName}`);
    }
    else if (typeStr === 'Number') {
        if (!isFinite(o)) {
            if (isNaN(o)) {
                typeStr = 'NaN';
            }
            else {
                typeStr = 'Infinity';
            }
        }
    }
    return typeStr;
};

/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:19
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 09:05:59
 */
const _IsEmpty = (params = '') => {
    const myType = _GetVarType(params);
    if (params === '' || myType === 'undefined' || myType === 'null' ||
        (myType === 'array' && params.length === 0) || (myType === 'object' && Object.keys(params).length === 0)) {
        return true;
    }
    return false;
};

/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:26
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-30 16:29:22
 */
/**
 *  是否为姓名格式
 * @param {string} val 姓名
 */
var isName = (val) => /^([A-Za-z\.\s]{2,20}|[\u4e00-\u9fa5]{2,20})$/.test(val);

/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:40
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 11:46:37
 */
/**
 * 是否为手机号
 * @param {string} val 手机号
 * @returns {boolean}
 */
var isPhone = (val) => /^1[3-9]\d{9}$/.test(val);

/*
 * @Author: ch
 * @Date: 2020-11-10 11:40:32
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-30 16:53:57
 */
/**
 * 验证是不是座机号
 */
var isTel = (val) => /^0\d{2,3}-\d{7,8}$/.test(val);

/*
 * @Author: ch
 * @Date: 2020-11-10 11:22:51
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-01 11:10:48
 */
/**
 * 验证邮箱地址
 */
var isEmail = (val) => /^[A-Za-z0-9\u4e00-\u9fa5]+([\.\-_]*[A-Za-z0-9\u4e00-\u9fa5])*@([A-Za-z0-9\u4e00-\u9fa5]+[\.\-_]{0,1}[A-Za-z0-9\u4e00-\u9fa5]+){1,63}\.([A-Za-z0-9\u4e00-\u9fa5]+[\.\-_]{0,1}[A-Za-z0-9\u4e00-\u9fa5]+)+$/.test(val);

/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:12
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
const _IsIdCard = (val) => {
    if (_IsEmpty(val)) {
        return false;
    }
    const arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], // 加权因子
    arrValid = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, ...[2]]; // 校验码
    if (/^\d{17}\d|x$/i.test(val)) {
        let sum = 0, idx, i = 0;
        for (; i < val.length - 1; i++) {
            // 对前17位数字与权值乘积求和
            sum += parseInt(val.substr(i, 1), 10) * arrExp[i];
        }
        // 计算模（固定算法）
        idx = sum % 11;
        // 检验第18为是否与校验码相等
        return arrValid[idx] == val.substr(17, 1).toUpperCase();
    }
    else {
        return false;
    }
};

/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:16
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-15 10:21:56
 */
/**
 * 金额格式验证,单位到万亿
 * @param {number | string} val 金额
 */
var isMoney = (val) => /^(?:0(?:\.[0-9]{1,2}){0,1}|(?!0)[0-9]{1,13}(?:\.[0-9]{1,2})?)$/.test(val.toString());

/*
 * @Author: ch
 * @Date: 2020-11-28 09:37:21
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-01 16:25:13
 */
const _SetCookie = (key, value, { domain, path = '/', expires, secure } = {}) => {
    if (!window) {
        throw new Error('setCookie只支持浏览器端使用');
    }
    domain = domain || window.location.hostname;
    const time = new Date().getTime();
    window.document.cookie = `${key}=${encodeURI(value)};domain=${domain};path=${path};${expires ? `expires=${new Date(time + expires)}` : ''};${secure ? `secure=${secure}` : ''}`;
};

/*
 * @Author: ch
 * @Date: 2020-11-24 21:38:12
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
/**
 *
 * 设置SessionStorage
 */
const _SetSessionStorage = (key, val) => {
    const valStr = JSON.stringify(val);
    if (sessionStorage) {
        sessionStorage.setItem(key, valStr);
    }
};

/*
 * @Author: ch
 * @Date: 2020-11-24 21:38:12
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
/**
 *
 * 设置localStorage
 */
const _SetLocalStorage = (key, val) => {
    const valStr = JSON.stringify(val);
    if (localStorage) {
        localStorage.setItem(key, valStr);
    }
};

/*
 * @Author: ch
 * @Date: 2020-11-28 09:37:21
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-28 16:50:41
 */
/**
 * 获取cookie
 * @param key
 * @return 有值返回字符串，不存在返回null
 */
const _GetCookie = (key) => {
    if (!window) {
        throw new Error('getCookie只支持浏览器端使用');
    }
    const r = new RegExp(`(?:^|;+|\\s+)${key}=([^;]*)`), m = window.document.cookie.match(r);
    return !m ? null : decodeURI(m[1]);
};

/*
 * @Author: ch
 * @Date: 2020-11-24 21:38:12
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
/**
 *
 * 获取SessionStorage
 */
const _GetSessionStorage = (key) => {
    let val = null;
    if (sessionStorage) {
        sessionStorage.getItem(key);
    }
    return val;
};

/*
 * @Author: ch
 * @Date: 2020-11-24 21:38:12
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
/**
 *
 * 获取localStorage
 */
const _GetLocalStorage = (key) => {
    let val = null;
    if (localStorage) {
        localStorage.getItem(key);
    }
    return val;
};

/*
 * @Author: ch
 * @Date: 2020-04-03 09:37:38
 * @Last Modified by: ch
 * @Last Modified time: 2020-05-26 09:26:03
 */
/**
 * 获取浏览器信息
 */
var getUaInfo = () => {
    const ua = navigator.userAgent.toLocaleLowerCase();
    let b = '', s = '';
    if (ua.search(/chrome\/(\d+\.\d+)/i) > 0) {
        b = 'chrome';
    }
    else if (ua.search(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i) > 0) {
        b = 'safari';
    }
    else if (ua.search(/firefox\/(\d+\.\d+)/i) > 0) {
        b = 'firefox';
    }
    else if (ua.search(/msie (\d+\.\d+)|trident\/(\d+\.\d+)|edge\/(\d+\.\d+)/i) > 0) {
        b = 'ie';
    }
    else if (ua.search(/opera\/(\d+\.\d+)/i) > 0) {
        b = 'opera';
    }
    if (ua.search(/android/i) > 0) {
        s = 'android';
    }
    else if (ua.search(/ipad/i) > 0) {
        s = 'ipad';
    }
    else if (ua.search(/iphone/i) > 0) {
        s = 'iphone';
    }
    else if (ua.search(/macintosh/i) > 0) {
        s = 'mac';
    }
    else if (ua.search(/windows/i) > 0) {
        s = 'windows';
    }
    return { browser: b, system: s };
};

/*
 * @Author: ch
 * @Date: 2021-09-11 16:17:02
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 09:00:17
 * @Description: file content
 */
/**
 * @description: 获取身份证性别
 * @param {string} idCard 身份证号
 * @param {string} sexDesc 对应性别描述数组，下标0为男生描述，1为女生描述 。默认 ['男','女']
 * @return {*}
 */
const _GetIdCardSex = (idCard, sexDesc = ['男', '女']) => {
    let sex = Number(idCard.slice(16, 17)) % 2 === 0 ? 1 : 0, sexName = sexDesc[sex];
    return {
        sex,
        sexName
    };
};

/*
 * @Author: ch
 * @Date: 2021-09-11 16:19:39
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 09:00:38
 * @Description: file content
 */
/**
 * @description: 获取身份证号生日
 * @param {string} idCard 身份证号
 * @return {string} 生日字符串
 */
const _GetIdCardBrithDay = (idCard) => idCard.slice(6, 14);

/*
 * @Author: ch
 * @Date: 2020-11-28 10:08:58
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 15:40:31
 *
 */
class MyObjectURL {
    constructor(objectURL) {
        this.url = objectURL;
    }
    revoke() {
        const MyURL = window.URL || window.webkitURL;
        MyURL.revokeObjectURL(this.url);
    }
}
/**
 * 二进制文件流转换成可访问的URL
 * @param blob
 * @return Promise
 */
const _FormatBlobUrl = (blob) => {
    let objectURL = '';
    const MyURL = window.URL || window.webkitURL;
    objectURL = MyURL.createObjectURL(blob);
    return new MyObjectURL(objectURL);
};
// return new Promise((res,rej)=>{
//     const reader = new FileReader();    
//         reader.readAsDataURL(blob);
//     reader.onloadend = (e)=>{
//         res(e.target && e.target.result);
//     };
//     reader.onerror = (e) =>{
//         rej(e);
//     }
// });

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-23 09:46:30
 * @Description: file content
 */
const _FormatJsonSearch = (myJson, prefix = '?') => {
    if (_GetVarType(myJson) !== 'object') {
        throw new Error('第一个参数（格式化对象）必须是JSON对象');
    }
    let arr = [];
    for (let i in myJson) {
        arr.push(`${i}=${encodeURIComponent(myJson[i])}`);
    }
    return `${prefix}${arr.join('&')}`;
};

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:53:59
 * @Description: file content
 */
const _FormatSearchJson = (search) => {
    search = search.replace(/\?/g, '&');
    let searchArr = search.split('&'), obj = {};
    searchArr.forEach(i => {
        const me = i.split('=');
        if (me[0]) {
            obj[me[0]] = decodeURIComponent(me[1]);
        }
    });
    return obj;
};

/*
 * @Author: ch
 * @Date: 2020-09-28 11:13:28
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 15:57:31
 *
 *
 *
 */
/**
 * 金额大写转换
 * @param n 金额
 * @param h 金额为负时的前缀
 */
const _FormatMoneyNumCapital = (n, h) => {
    const fraction = ['角', '分'], digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ], unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    h = n < 0 ? (h || '') : '';
    // 小数位转换
    let d = (n.toString().split('.')[1] || '').split(''), s = '';
    n = Math.abs(n);
    if (d.length > 0) {
        for (let i = 0; i < fraction.length; i++) {
            // 使用字符串截取防止计算精度问题
            s += (digit[Number(d[i])] + fraction[i]).replace(/零./, '');
        }
    }
    // for (let i = 0; i < fraction.length; i++) {
    //     s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    // }
    s = s || '整';
    // 整数位转换
    n = Math.floor(n);
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return h + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

/*
 * @Author: ch
 * @Date: 2020-04-03 09:37:34
 * @Last Modified by: ch
 * @Last Modified time: 2020-06-01 17:27:32
 */
/**
 *
 * 时间格式化
 * @param {number|string|Date} d 时间参数能被new Date识别的数字，字符串，日期
 * @param {string} fmt 时间格式参数 字符串类型 默认'yyyy/mm/dd'
 */
const _FormatDate = (date, fmt = 'yyyy/mm/dd') => {
    //  处理不识别的时间表示字符串，如2020年01月01日00时00分00秒
    const dateType = _GetVarType(date);
    if (dateType === 'string') {
        date = date.replace(/\D+/ig, '/');
        let arr = date.split('/');
        // 长度大于3说明带了时分秒信息 特殊时间处理格式
        if (arr.length > 3) {
            let time = ` ${arr[3]}:${arr[4]}:${arr[5]}`;
            arr.length = 3;
            date = arr.join('/') + time;
        }
    }
    try {
        date = date ? dateType === 'date' ? date : new Date(date) : new Date();
    }
    catch (e) {
        throw new Error('不能识别的时间格式');
    }
    const o = {
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
    for (let k in o) {
        if (new RegExp(`(${k})`, 'i').test(fmt)) {
            const str = o[k].toString();
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : (`0${str}`).substr(str.length - 1));
        }
    }
    return fmt;
};

/*
 * @Author: ch
 * @Date: 2020-06-01 14:09:49
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 10:13:14
 */
/**
 *
 * 金额加千位符格式化
 * @param {number | string} money 金额数据
 * @returns {string} 金额格式数据
 */
const _FormatMoneySymbol = (money) => {
    const moneyType = _GetVarType(money);
    if (money === '' || moneyType === 'null' || moneyType === 'undefined') {
        return null;
    }
    const strMonery = parseFloat(money).toFixed(2).toString(), intNum = parseInt(strMonery).toString(), floatNum = strMonery.split('.');
    let str = '';
    if (intNum > 999999) {
        str = intNum.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev;
        });
    }
    else {
        str = intNum;
    }
    return str += `.${floatNum[1]}`;
};

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:55:00
 * @Description: file content
 */
const _LimitInt = (val) => val.toString().replace(/[\D]/g, '');

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:55:18
 * @Description: file content
 */
/**
 * 限制数字及浮点数
 * @param val
 * @param digit 需要保留的小数位数
 */
const _LimitIntFloat = (val, digit) => {
    let num = val.toString();
    num = num.replace(/[^\d\.]/g, '');
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    num = num.replace(/^0[\d]+/, '0');
    // 按照参数设置保留小数位数
    if (digit != null) {
        num = num.replace(new RegExp(`^(\\d+)(\\.?)(\\d{0,${digit}}).*$`), '$1$2$3');
    }
    return num;
};

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:55:42
 * @Description: file content
 */
/**
 * 限制可输入正负整数
 * @param val
 */
const _LimitPNInt = (val) => {
    let num = val.toString();
    // 剔除数字和“-”号以外字符，
    num = num.replace(/[^\d\-]/g, '');
    // 限制只保留开头的“-”号
    num = num.replace(/^-/, '$#$').replace(/\-/g, '').replace('$#$', '-');
    // 避免正负双0开头的数字
    num = num.replace(/^(\-?)0[\d]+/, '$10');
    return num;
};

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:55:58
 * @Description: file content
 */
/**
 * 限制输入正负数字及浮点数
 * @param val
 * @param digit 需要保留的小数位数
 */
const _LimitPNIntFloat = (val, digit) => {
    // /^(\.*)(\d+)(\.?)(\d{0,2}).*$/g
    let num = val.toString();
    // 剔除数字和“-”，“.”号以外字符，
    num = num.replace(/[^\d\.\-]/g, '');
    // 限制只保留开头的“-”号
    num = num.replace(/^-/, '$#$').replace(/\-/g, '').replace('$#$', '-');
    // 限制只允许输入一个“.”
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    // 避免正负0开头不带点的数字
    num = num.replace(/^(\-?)0[\d]+/, '$10');
    // 第一位为“.”自动补0
    num = num.replace(/^\./, '0.');
    // 按照参数设置保留小数位数
    if (digit != null) {
        // num = num.replace(new RegExp(`^(\\-?)(\\d+)(\\.?)(\\d{0,${digit}}).*$`),'$1$2$3$4')
        num = num.replace(new RegExp(`^(\-|\\d+)(\\.?)(\\d{0,${digit}}).*$`), '$1$2$3');
    }
    return num;
};

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 09:06:49
 * @Description: file content
 */
const _LimitMoney = (val) => {
    let num = val.toString();
    //清除"数字"和"."以外的字符
    num = num.replace(/[^\d.]/g, '');
    //前两位不能是0加数字   
    num = num.replace(/^0\d[0-9]*/g, '');
    // 验证第一个字符是数字而不是字符
    num = num.replace(/^\./g, '');
    //连续的点只保留第一个.清除多余的 
    // num = num.replace(/\.{2,}/g, '.'); 
    //保证.只出现一次，而不能出现两次以上  
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    //只能输入两个小数
    num = Math.floor(num * 100) / 100;
    // num.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); 
    return num;
};

/*
 * @Author: ch
 * @Date: 2020-05-09 14:22:47
 * @Last Modified by: ch
 * @Last Modified time: 2020-10-27 09:40:30
 */
/**
 * 并联加载指定的脚本
 * 并联加载[异步]同时加载，不管上个是否加载完成，直接加载全部
 * 全部加载完成后执行Promise成功回调
 * @param array|string 指定的脚本们
 * @return Promise
 */
const _LoadScript = (scripts) => {
    const scriptArr = _GetVarType(scripts) === "string" ? [scripts] : scripts, HEAD = document.getElementsByTagName("head").item(0) || document.documentElement;
    let loaded = 0;
    return new Promise((resolve, reject) => {
        try {
            for (let i = 0; i < scriptArr.length; i++) {
                const scriptNode = document.createElement("script"), scriptLoad = function () {
                    if (!this.readyState || (this.readyState == "loaded" || this.readyState == "complete")) {
                        loaded++;
                        this.onload = this.onreadystatechange = null;
                        this.parentNode.removeChild(this);
                        if (loaded == scriptArr.length) {
                            resolve(true);
                        }
                    }
                };
                scriptNode.setAttribute("type", "text/javascript");
                scriptNode.setAttribute("src", scriptArr[i]);
                scriptNode.addEventListener('load', scriptLoad);
                scriptNode.addEventListener('readystatechange', scriptLoad);
                HEAD.appendChild(scriptNode);
            }
        }
        catch (e) {
            reject(false);
        }
    });
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

/**
* 串联加载指定的脚本
* 串联加载[同步]逐个加载，每个加载完成后加载下一个
* 全部加载完成后return Promise
* @param array|string 指定的脚本们
* @return Promise
*/
const _LoadScriptAwait = (scripts) => __awaiter(void 0, void 0, void 0, function* () {
    const scriptArr = _GetVarType(scripts) === "string" ? [scripts] : scripts;
    for (let i = 0, item; i < scriptArr.length; i++) {
        item = scriptArr[i];
        yield _LoadScript(item);
    }
});

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:49:41
 * @Description: file content
 */
/**
 * 创建一个UUID
 * @param len 长度
 * @param radix  基数
 *
 * uuid() // EB4479E4-CA4A-4377-AC97-5C3424CCA6EF
 * uuid(8, 2)  //  "10010100000011100011101010001011"
 * uuid(8, 10) // "82841022800573848567251899801403"
 * uuid(8, 16) // "F743098834031FDFCE1D8976F9769222"
 */
const _CreateUUID = (len, radix) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [], i = 0;
    radix = radix || chars.length;
    if (len) {
        for (i = 0; i < len; i++)
            uuid[i] = chars[0 | Math.random() * radix];
    }
    else {
        let r = 0;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
};

/*
 * @Author: ch
 * @Date: 2020-11-28 09:37:21
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-28 16:50:41
 */
const _Extend = (target, ...args) => {
    const last = args[args.length - 1], lastType = _GetVarType(last), deep = lastType === 'boolean' ? last : true, soucre = args;
    if (lastType === 'boolean') {
        soucre.length = soucre.length - 1;
    }
    if (soucre.length > 1) {
        soucre.forEach((item) => {
            target = _Extend(target, item, deep);
        });
    }
    else {
        const curSoucre = soucre[0];
        for (let key in curSoucre) {
            const me = curSoucre[key], meType = _GetVarType(me);
            if (deep && (['array', 'object'].includes(meType))) {
                let _target = null;
                if (['object'].includes(meType)) {
                    _target = ['object'].includes(_GetVarType(target[key])) ? target[key] : {};
                }
                else {
                    _target = ['array'].includes(_GetVarType(target[key])) ? target[key] : [];
                }
                target[key] = _Extend(_target, me);
            }
            else if (me !== undefined) {
                target[key] = me;
            }
        }
    }
    return target;
};

/*
 * @Author: ch
 * @Date: 2020-11-24 21:38:12
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
/**
 *
 * 1位数补零
 */
const _FillZero = (num) => {
    let res = num;
    if (num < 10 && num >= 0 && num.toString().indexOf('.') < 0) {
        res = `0${num}`;
    }
    return res;
};

/*
 * @Author: ch
 * @Date: 2020-06-19 11:18:42
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 15:21:30
 */
const suffixMap = {
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpeg',
    'image/png': 'png',
    'image/gif': 'gif',
    'application/msexcel': 'xlxs',
    'application/vnd.ms-excel': 'xls',
    'application/msword': 'doc',
    'application/pdf': 'pdf',
    'application/vnd.ms-powerpoint': 'ppt'
};
const _DownBlobFile = (blob, { name, suffix } = {}) => {
    const $a = document.createElement('a'), fileName = blob.name || '', urlObject = _FormatBlobUrl(blob);
    let index = 0, blobSuffix = '', blobName = '';
    if (fileName) {
        index = fileName.lastIndexOf('.');
        blobSuffix = fileName.substring(index + 1, fileName.length);
        blobName = fileName.substring(0, index);
    }
    // 优先使用传入的Name和后缀 第二使用blob自带的name属性信息。如果前者都不满足，使用blob的type属性生成后缀，生成时间戳文件名
    let myName = name || blobName || _FormatDate(new Date(), 'yyyymmddhhiiss'), mySuffix = suffix || blobSuffix || suffixMap[blob.type];
    $a.href = urlObject.url;
    $a.download = `${myName}.${mySuffix}`;
    $a.click();
};

/*
 * @Author: ch
 * @Date: 2020-06-02 14:45:38
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-01 17:26:16
 */
const _LoactionReplace = (url) => {
    if (window.history.replaceState) {
        window.history.replaceState(null, window.document.title, url);
        window.history.go(0);
    }
    else {
        window.location.replace(url);
    }
};

/*
 * @Author: ch
 * @Date: 2021-01-21 09:53:12
 * @Last Modified by: ch
 * @Last Modified time: 2021-01-21 09:57:18
 */
/**
 * 拷贝指定文本
 * @param str
 */
const _CopyText = (str) => {
    try {
        let input = document.createElement('textarea');
        input.value = str;
        input.style.width = '0';
        input.style.height = '0';
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        return true;
    }
    catch (e) {
        return false;
    }
};

/*
 * @Author: ch
 * @Date: 2021-09-11 15:57:23
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:57:45
 * @Description: file content
 */
const _ToAsyncAwait = (promise, fromatResult = true) => {
    if (!fromatResult) {
        return promise;
    }
    else {
        return promise.then((res) => ({ error: null, result: res })).catch((err) => ({ error: err, result: null }));
    }
};

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-08-27 17:20:09
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:49:19
 * @Description: file content
 */
const _Calc = (symbol, number1, number2, ...args) => {
    if (!['+', '-', '*', '/'].includes(symbol)) {
        throw new Error('第一个参数请传+ - * /计算符');
    }
    const num1 = Number(number1);
    const num2 = Number(number2);
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('第二，三个参数必须传入可计算数字或字符');
    }
    let result = 0;
    // 把浮点数跟整数部分拆解
    const [num1BeforeInt, num1Float] = num1.toString().split('.');
    const [num2BeforeInt, num2Float] = num2.toString().split('.');
    const num1FloatLen = (num1Float === null || num1Float === void 0 ? void 0 : num1Float.length) || 0;
    const num2FloatLen = (num2Float === null || num2Float === void 0 ? void 0 : num2Float.length) || 0;
    // 乘除法直接去掉浮点
    const num1Int = Number(num1.toString().replace('.', ''));
    const num2Int = Number(num2.toString().replace('.', ''));
    if (symbol === '+' || symbol === '-') {
        // 以最长浮点数长度补0
        let m = Math.max(num1FloatLen, num2FloatLen);
        // 使用字符串补0方式得到最后计算数值（不能直接数字升幂，部分数字升幂就会缺精度）
        const resNum1 = Number(`${num1BeforeInt}${num1Float.padEnd(m, '0')}`);
        const resNum2 = Number(`${num2BeforeInt}${num2Float.padEnd(m, '0')}`);
        if (symbol === '+') {
            result = (resNum1 + resNum2) / Math.pow(10, m);
        }
        else {
            result = (resNum1 - resNum2) / Math.pow(10, m);
        }
    }
    else if (symbol === '*') {
        // 两个数的浮点长度加和为幂值
        let m = Math.pow(10, num1FloatLen + num2FloatLen);
        result = (num1Int * num2Int) / m;
    }
    else if (symbol === '/') {
        // 被除数的浮点长度减除数浮点长为幂值
        let m = Math.pow(10, num2FloatLen - num1FloatLen);
        result = (num1Int / num2Int) * m;
    }
    // 有第三位计算数字
    const nextNum = args[0];
    if (nextNum) {
        args.shift();
        result = _Calc(symbol, result, nextNum, ...args);
    }
    return result;
};

/*
 * @Author: sans
 * @Date: 2022-09-18 11:38
 */
/**
 * @desc 函数防抖
 * 好比技能读条 触发后等待一段时间再释放技能，并且重复触发的话会重新计算读条时间
 * @param fn 执行函数
 * @param delay 延迟执行的毫秒数
 * @param immediate 是否立即执行
 */
const _Debounce = (fn, delay, immediate) => {
    let timer;
    if (_GetVarType(fn) !== 'Function') {
        throw new Error('第一个参数，需要为函数哦~');
    }
    return (args) => {
        if (timer)
            clearTimeout(timer);
        // 立即执行
        if (immediate) {
            const callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            if (callNow) {
                fn(args);
            }
        }
        else {
            timer = setTimeout(() => {
                fn(args);
            }, delay);
        }
    };
};

/*
 * @Author: sans
 * @Date: 2022-09-18 11:38
 */
/**
 * @desc 函数节流
 * 连续触发函数，但是在n秒中只执行一次，可以稀释函数执行的频率
 * 好比技能cd 释放技能后要等待冷却时间
 * @param fn 执行函数
 * @param delay 延迟执行的毫秒数 默认为500ms
 * @param type 1 表示时间戳类型(立即触发)  2 表示定时器（到时间再触发）  3 时间戳+定时器版: 实现第一次触发可以立即响应,结束触发后也能有响应
 */
const _Throttle = (fn, delay = 500, type = 1) => {
    let previous = 0, timer;
    if (_GetVarType(fn) !== 'Function') {
        throw new Error('第一个参数，需要为函数哦~');
    }
    return (args) => {
        if (type === 1 || type === 3) {
            let now = Date.now();
            // 当前时间-先前时间 > 延迟时间
            if (now - previous > delay) {
                fn(args);
                previous = now;
            }
        }
        if (type === 2 || type === 3) {
            if (!timer) {
                timer = setTimeout(() => {
                    clearTimeout(timer);
                    timer = null;
                    fn(args);
                }, delay);
            }
        }
    };
};

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-10-16 17:23:56
 * @LastEditors: ch
 * @LastEditTime: 2022-10-17 22:19:53
 * @Description: file content
 */
const formatUnitTime = (formatStr, unit, timeNum) => {
    return formatStr.replace(unit, (unit.length > 1 ? _FillZero(timeNum) : timeNum));
};
const _FormatNumTime = (secondNum, format = 'dd天hh时ii分ss秒', fill = true) => {
    var _a, _b, _c, _d, _e, _f;
    let result = {};
    if (_GetVarType(Number(secondNum)) !== 'Number') {
        throw new Error('第一个参数为需要计算的秒数');
    }
    const unitDay = (_a = format.match(/(d+)/i)) === null || _a === void 0 ? void 0 : _a[0];
    const unitHours = (_b = format.match(/(h+)/i)) === null || _b === void 0 ? void 0 : _b[0];
    const unitMinute = (_c = format.match(/(i+)/i)) === null || _c === void 0 ? void 0 : _c[0];
    const unitSecond = (_d = format.match(/(s+)/i)) === null || _d === void 0 ? void 0 : _d[0];
    let formatTimeStr = format;
    // 根据格式判断，计算所需时间单位及其值
    if (unitDay) {
        result.day = Math.floor(secondNum / 86400);
        result.hours = Math.floor(secondNum % 86400 / 3600);
        result.minute = Math.floor((secondNum % 3600) / 60);
    }
    else if (unitHours) {
        result.hours = Math.floor(secondNum / 3600);
        result.minute = Math.floor((secondNum % 3600) / 60);
    }
    else {
        result.minute = Math.floor(secondNum / 60);
    }
    result.second = Math.floor(secondNum % 60);
    // 表示格式中有天
    if (!_IsEmpty(result.day)) {
        // 天为0,且不需要补齐把天干掉
        if (result.day === 0 && !fill) {
            formatTimeStr = formatTimeStr.replace(formatTimeStr.substring(0, (_e = formatTimeStr.match(/(h+)/i)) === null || _e === void 0 ? void 0 : _e.index), '');
        }
        else {
            formatTimeStr = formatUnitTime(formatTimeStr, unitDay, result.day);
        }
    }
    // 表示格式中有小时
    if (!_IsEmpty(result.hours)) {
        // 天不存在或天为0，小时为0, 且不需要补齐，则把小时干掉
        if (!result.day && result.hours === 0 && !fill) {
            formatTimeStr = formatTimeStr.replace(formatTimeStr.substring(0, (_f = formatTimeStr.match(/(i+)/i)) === null || _f === void 0 ? void 0 : _f.index), '');
        }
        else {
            formatTimeStr = formatUnitTime(formatTimeStr, unitHours, result.hours);
        }
    }
    // 分秒必须会有
    formatTimeStr = formatUnitTime(formatTimeStr, unitMinute, result.minute);
    formatTimeStr = formatUnitTime(formatTimeStr, unitSecond, result.second);
    result.formatTime = formatTimeStr;
    return result;
};

var STATUS;
(function (STATUS) {
    STATUS["AWAIT"] = "await";
    STATUS["PROGRESS"] = "progress;";
    STATUS["STOP"] = "stop";
    STATUS["FINISH"] = "finish";
})(STATUS || (STATUS = {}));
const FORMAT_STR = 'dd天hh时ii分ss秒';
// 私有方法标识
const _calcSecond = Symbol();
class Countdown {
    constructor(options) {
        this.secondNum = 0;
        this.curTime = 0;
        this.endTimeNum = 0;
        this.secondDiff = 0;
        this.stopCalc = null;
        this.result = { status: STATUS.AWAIT, formatTime: '' };
        try {
            this.endTimeNum = new Date(options.endTime).getTime();
        }
        catch (e) {
            throw new Error('time参数必须是一个可识别的时间参数');
        }
        this.options = options;
        // 是否立即启动
        if (options.start) {
            this.start();
        }
        /**
         * @Description: 计算结果
         * 最后差值小于1则完成，
         * @return {*}
         */
    }
    [_calcSecond]() {
        this.secondNum--;
        let formatRes = _FormatNumTime(this.secondNum, this.options.format, this.options.fill);
        this.result = { status: STATUS.PROGRESS, formatTime: formatRes.formatTime };
        this.options.callback && this.options.callback(this.result);
        if (this.secondNum < 1) {
            // 小于1暂停计算
            this.destroy();
        }
        else {
            // 大于1继续计算
            this.stopCalc = setTimeout(() => {
                this[_calcSecond]();
            }, 1000);
        }
    }
    /**
     * @Description: 开始
     * @return {*}
     */
    start() {
        if (this.result.status === STATUS.AWAIT || this.result.status === STATUS.STOP) {
            this.curTime = new Date().getTime();
            this.secondDiff = Math.floor((this.endTimeNum - this.curTime) / 1000);
            this.secondNum = this.secondDiff > 0 ? this.secondDiff : 0;
            this[_calcSecond]();
        }
    }
    /**
     * @Description: 暂停
     * 清除计时器
     * @return {*}
     */
    stop() {
        this.result.status = STATUS.STOP;
        clearTimeout(this.stopCalc);
    }
    /**
     * @Description: 结束
     * 销毁计时器并调完成回调
     * @return {*}
     */
    destroy() {
        this.result.status = STATUS.FINISH;
        clearTimeout(this.stopCalc);
        this.options.finishCallback && this.options.finishCallback(this.result);
    }
}
const _CreateCountdown = ({ endTime, format = FORMAT_STR, fill = true, callback, finishCallback, start = true }) => {
    return new Countdown({
        endTime,
        format,
        fill,
        callback,
        finishCallback,
        start
    });
};

var _a, _b, _c;
// 类的私有属性，利用ES6 Symbol 
const objectSymbol = Symbol('object');
const arraySymbol = Symbol('array');
const paramSymbol = Symbol('param');
class EsEnum {
    constructor(params) {
        // 生成的对象，通过方法对外暴露
        this[_a] = {};
        // 生成的数组，通过方法对外暴露
        this[_b] = [];
        // 原始的对象数据存储
        this[_c] = {};
        if (_GetVarType(params) !== 'Object') {
            throw new Error('参数必须为对象');
        }
        // 把传的参数先作为原始数据保存
        this[paramSymbol] = params;
        // 把参数直接先拷贝一份到最终要暴露的对象中，保证支持Obj.key的访问
        this[objectSymbol] = Object.assign({}, params);
        let valueType = '';
        for (let key in params) {
            const item = params[key];
            const itemType = _GetVarType(item);
            if (valueType && valueType !== itemType) {
                throw new Error(`不支持同数据类型枚举值:${valueType} 和 ${itemType}`);
            }
            valueType = itemType;
            let enumItem = {};
            if (['Number', 'String', 'Boolean'].includes(itemType)) {
                if (this[objectSymbol][item]) {
                    throw new Error(`您的枚举值存在相同项：${item}`);
                }
                this[objectSymbol][item] = key;
                enumItem = { key, value: item };
            }
            else if (itemType === 'Object') {
                for (let childrenVal of Object.values(item)) {
                    if (this[objectSymbol][childrenVal]) {
                        throw new Error(`您的枚举值存在相同项：${childrenVal}`);
                    }
                    if (['Number', 'String'].includes(_GetVarType(childrenVal))) {
                        enumItem = Object.assign(Object.assign({}, item), { key });
                        this[objectSymbol][childrenVal] = enumItem;
                        this[objectSymbol][key] = enumItem;
                    }
                    else {
                        throw new Error('枚举值为对象时，对象属性值只能是字符串、数字');
                    }
                }
            }
            else {
                throw new Error('枚举值只能是字符串、数字、或对象类型');
            }
            this[arraySymbol].push(enumItem);
            Object.freeze(enumItem);
        }
        Object.assign(this, this[objectSymbol]);
        Object.freeze(this[arraySymbol]);
        Object.freeze(this[objectSymbol]);
        Object.freeze(this[paramSymbol]);
    }
    getOriginalObject() {
        return this[paramSymbol];
    }
    getEnumArray() {
        return this[arraySymbol];
    }
    getEnumObject() {
        return this[objectSymbol];
    }
}
_a = objectSymbol, _b = arraySymbol, _c = paramSymbol;
const _CreateEnum = (par) => {
    let obj = new EsEnum(par);
    return Object.freeze(obj);
};

/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:04
 * @Last Modified by: ch
 * @Last Modified time: 2021-01-21 09:58:33
 */

var jsutil = /*#__PURE__*/Object.freeze({
   __proto__: null,
   _IsEmpty: _IsEmpty,
   _IsName: isName,
   _IsPhone: isPhone,
   _IsTel: isTel,
   _IsEmail: isEmail,
   _IsIdCard: _IsIdCard,
   _IsMoney: isMoney,
   _SetCookie: _SetCookie,
   _SetSessionStorage: _SetSessionStorage,
   _SetLocalStorage: _SetLocalStorage,
   _GetCookie: _GetCookie,
   _GetSessionStorage: _GetSessionStorage,
   _GetLocalStorage: _GetLocalStorage,
   _GetVarType: _GetVarType,
   _GetUaInfo: getUaInfo,
   _GetIdCardSex: _GetIdCardSex,
   _GetIdCardBrithDay: _GetIdCardBrithDay,
   _FormatDate: _FormatDate,
   _FormatNumTime: _FormatNumTime,
   _FormatMoneySymbol: _FormatMoneySymbol,
   _FormatMoneyNumCapital: _FormatMoneyNumCapital,
   _FormatBlobUrl: _FormatBlobUrl,
   _FormatJsonSearch: _FormatJsonSearch,
   _FormatSearchJson: _FormatSearchJson,
   _LimitInt: _LimitInt,
   _LimitIntFloat: _LimitIntFloat,
   _LimitPNInt: _LimitPNInt,
   _LimitPNIntFloat: _LimitPNIntFloat,
   _LimitMoney: _LimitMoney,
   _LoadScript: _LoadScript,
   _LoadScriptAwait: _LoadScriptAwait,
   _CreateUUID: _CreateUUID,
   _Extend: _Extend,
   _FillZero: _FillZero,
   _DownBlobFile: _DownBlobFile,
   _LoactionReplace: _LoactionReplace,
   _CopyText: _CopyText,
   _ToAsyncAwait: _ToAsyncAwait,
   _Calc: _Calc,
   _Debounce: _Debounce,
   _Throttle: _Throttle,
   _CreateCountdown: _CreateCountdown,
   _CreateEnum: _CreateEnum
});

/*
 * @Author: ch
 * @Date: 2021-09-11 11:42:25
 * @LastEditors: ch
 * @LastEditTime: 2022-11-08 21:59:54
 * @Description: file content
 */

exports._Calc = _Calc;
exports._CopyText = _CopyText;
exports._CreateCountdown = _CreateCountdown;
exports._CreateEnum = _CreateEnum;
exports._CreateUUID = _CreateUUID;
exports._Debounce = _Debounce;
exports._DownBlobFile = _DownBlobFile;
exports._Extend = _Extend;
exports._FillZero = _FillZero;
exports._FormatBlobUrl = _FormatBlobUrl;
exports._FormatDate = _FormatDate;
exports._FormatJsonSearch = _FormatJsonSearch;
exports._FormatMoneyNumCapital = _FormatMoneyNumCapital;
exports._FormatMoneySymbol = _FormatMoneySymbol;
exports._FormatNumTime = _FormatNumTime;
exports._FormatSearchJson = _FormatSearchJson;
exports._GetCookie = _GetCookie;
exports._GetIdCardBrithDay = _GetIdCardBrithDay;
exports._GetIdCardSex = _GetIdCardSex;
exports._GetLocalStorage = _GetLocalStorage;
exports._GetSessionStorage = _GetSessionStorage;
exports._GetUaInfo = getUaInfo;
exports._GetVarType = _GetVarType;
exports._IsEmail = isEmail;
exports._IsEmpty = _IsEmpty;
exports._IsIdCard = _IsIdCard;
exports._IsMoney = isMoney;
exports._IsName = isName;
exports._IsPhone = isPhone;
exports._IsTel = isTel;
exports._LimitInt = _LimitInt;
exports._LimitIntFloat = _LimitIntFloat;
exports._LimitMoney = _LimitMoney;
exports._LimitPNInt = _LimitPNInt;
exports._LimitPNIntFloat = _LimitPNIntFloat;
exports._LoactionReplace = _LoactionReplace;
exports._LoadScript = _LoadScript;
exports._LoadScriptAwait = _LoadScriptAwait;
exports._SetCookie = _SetCookie;
exports._SetLocalStorage = _SetLocalStorage;
exports._SetSessionStorage = _SetSessionStorage;
exports._Throttle = _Throttle;
exports._ToAsyncAwait = _ToAsyncAwait;
exports.default = jsutil;
