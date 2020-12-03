/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:04
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 15:31:19
 */
import isEmpty from './tools/is-empty';
import isName from './tools/is-name';
import isPhone from './tools/is-phone';
import isTel from './tools/is-tel';
import isEmail from './tools/is-email';
import isIdCard from './tools/is-idCard';
import isMoney from './tools/is-money';
import setCookie from './tools/set-cookie';
import setSessionStorage from './tools/set-sessionStorage';
import setLocalStorage from './tools/set-localStorage';
import getCookie from './tools/get-cookie';
import getSessionStorage from './tools/get-sessionStorage';
import getLocalStorage from './tools/get-localStorage';
import getVarType from './tools/get-varType';
import getUAInfo from './tools/get-uaInfo';
import formatBlobUrl from './tools/format-blob-url';
import formatJsonSearch from './tools/format-json-search';
import formatSearchJson from './tools/format-search-json';
import formatMoneyNumCapital from './tools/format-moneyNum-capital';
import formatDate from './tools/format-date';
import formatMoney from './tools/format-money';
import loadScript from './tools/other-load-script';
import loadScriptAwait from './tools/other-load-scriptAwait';
import creatUUID from './tools/other-creat-uuid';
import extend from './tools/other-extend';
import fillZero from './tools/other-fillZero';
import downBlobFile from './tools/other-down-blobFile';
import loactionReplace from './tools/other-loaction-replace';
export default {
    // 验证是否为空
    isEmpty: isEmpty,
    // 验证姓名格式
    isName: isName,
    // 验证手机
    isPhone: isPhone,
    // 验证座机号
    isTel: isTel,
    // 验证邮箱地址
    isEmail: isEmail,
    // 验证身份证号
    isIdCard: isIdCard,
    // 验证金额格式
    isMoney: isMoney,
    // 设置cookie
    setCookie: setCookie,
    // 设置seesionStorage，json格式
    setSessionStorage: setSessionStorage,
    // 设置localStorage，JSON格式
    setLocalStorage: setLocalStorage,
    // 获取cookie
    getCookie: getCookie,
    // 获取sessionStorage
    getSessionStorage: getSessionStorage,
    // 获取localStorage
    getLocalStorage: getLocalStorage,
    // 获取变量类型
    getVarType: getVarType,
    // 获取userAgent信息
    getUAInfo: getUAInfo,
    // 格式化时间
    formatDate: formatDate,
    // 格式化金额，添加千分符
    formatMoney: formatMoney,
    // 二进制文件流转可访问URL
    formatBlobUrl: formatBlobUrl,
    // JSON转URLSearch格式串
    formatJsonSearch: formatJsonSearch,
    // URLSearch串转JSON对象
    formatSearchJson: formatSearchJson,
    // 数字金额转中文大写
    formatMoneyNumCapital: formatMoneyNumCapital,
    // 动态加载JS 并联
    loadScript: loadScript,
    // 动态加载JS 串联
    loadScriptAwait: loadScriptAwait,
    // 创建UUID
    creatUUID: creatUUID,
    // 对象拷贝
    extend: extend,
    // 个位数补0
    fillZero: fillZero,
    // 下载二进制文件流文件
    downBlobFile: downBlobFile,
    // 浏览器replace方法
    loactionReplace: loactionReplace
};
