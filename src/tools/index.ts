/*
 * @Author: ch 
 * @Date: 2020-11-07 16:41:04 
 * @Last Modified by: ch
 * @Last Modified time: 2021-01-21 09:58:33
 */
import isEmpty from './is-empty';
import isName from './is-name';
import isPhone from './is-phone';
import isTel from './is-tel';
import isEmail from './is-email';
import isIdCard from './is-id-card';
import isMoney from './is-money';
import setCookie from './set-cookie';
import setSessionStorage from './set-session-storage';
import setLocalStorage from './set-local-storage';
import getCookie from './get-cookie';
import getSessionStorage from './get-session-storage';
import getLocalStorage from './get-local-storage';
import getVarType from './get-var-type';
import getUaInfo from './get-ua-info';
import getIdCardSex from './get-id-card-sex';
import getIdCardBrithDay from './get-id-card-brith-day';
import formatBlobUrl from './format-blob-url';
import formatJsonSearch from './format-json-search';
import formatSearchJson from './format-search-json';
import formatMoneyNumCapital from './format-money-num-capital';
import formatDate from './format-date';
import formatMoneySymbol from './format-money-symbol';
import limitInt from './limit-int';
import limitIntFloat from './limit-int-float';
import limitPNInt from './limit-p-n-int';
import limitPNIntFloat from './limit-p-n-int-float';
import loadScript from './load-script';
import loadScriptAwait from './load-script-await';
import creatUuid from './creat-uuid';
import extend from './extend';
import fillZero from './fill-zero';
import downBlobFile from './down-blob-file';
import loactionReplace from './loaction-replace';
import copyText from './copy-text';
import toAsyncAwait from './to-async-await';
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
    getUaInfo,
    // 获取身份证号性别
    getIdCardSex,
    // 获取身份证号生日
    getIdCardBrithDay,
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
    creatUuid,
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
    // 同步方法
    toAsyncAwait
};
