/*
 * @Author: ch 
 * @Date: 2020-11-07 16:41:04 
 * @Last Modified by: ch
 * @Last Modified time: 2021-01-21 09:58:33
 */
import isEmpty from './tools/is-empty';
import isName from './tools/is-name';
import isPhone from './tools/is-phone';
import isTel from './tools/is-tel';
import isEmail from './tools/is-email';
import isIdCard from './tools/is-id-card';
import isMoney from './tools/is-money';
import setCookie from './tools/set-cookie';
import setSessionStorage from './tools/set-session-storage';
import setLocalStorage from './tools/set-local-storage';
import getCookie from './tools/get-cookie';
import getSessionStorage from './tools/get-session-storage';
import getLocalStorage from './tools/get-local-storage';
import getVarType from './tools/get-var-type';
import getUAInfo from './tools/get-ua-info';
import formatBlobUrl from './tools/format-blob-url';
import formatJsonSearch from './tools/format-json-search';
import formatSearchJson from './tools/format-search-json';
import formatMoneyNumCapital from './tools/format-money-num-capital';
import formatDate from './tools/format-date';
import formatMoneySymbol from './tools/format-money-symbol';
import limitInt from './tools/limit-int';
import limitIntFloat from './tools/limit-int-float';
import limitPNInt from './tools/limit-p-n-int';
import limitPNIntFloat from './tools/limit-p-n-int-float';
import loadScript from './tools/load-script';
import loadScriptAwait from './tools/load-script-await';
import creatUUID from './tools/creat-uuid';
import extend from './tools/extend';
import fillZero from './tools/fill-zero';
import downBlobFile from './tools/down-blob-file';
import loactionReplace from './tools/loaction-replace';
import copyText from './tools/copy-text';
export {
    // 验证是否为空
    isEmpty,
    // 验证姓名格式
    isName,
    // 验证手机
    isPhone,
    // 验证座机号
    isTel,
    // 验证邮箱地址
    isEmail,
    // 验证身份证号
    isIdCard,
    // 验证金额格式
    isMoney,
    // 设置cookie
    setCookie,
    // 设置seesionStorage，json格式
    setSessionStorage,
    // 设置localStorage，JSON格式
    setLocalStorage,
    // 获取cookie
    getCookie,
    // 获取sessionStorage
    getSessionStorage,
    // 获取localStorage
    getLocalStorage,
    // 获取变量类型
    getVarType,
    // 获取userAgent信息
    getUAInfo,
    // 格式化时间
    formatDate,
    // 格式化金额，添加千分符
    formatMoneySymbol,
    // 数字金额转中文大写
    formatMoneyNumCapital,
    // 二进制文件流转可访问URL
    formatBlobUrl,
    // JSON转URLSearch格式串
    formatJsonSearch,
    // URLSearch串转JSON对象
    formatSearchJson,
    // 限制输入整数
    limitInt,
    // 限制输入整数和浮点数
    limitIntFloat,
    // 限制输入正负整数
    limitPNInt,
    // 限制输入正负整数及浮点数
    limitPNIntFloat,
    // 动态加载JS 并联
    loadScript,
    // 动态加载JS 串联
    loadScriptAwait,
    // 创建UUID
    creatUUID,
    // 对象拷贝
    extend,
    // 个位数补0
    fillZero,
    // 下载二进制文件流文件
    downBlobFile,
    // 浏览器replace方法
    loactionReplace,
    // 文本拷贝
    copyText,
};