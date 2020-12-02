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
    formatMoney,
    // 二进制文件流转可访问URL
    formatBlobUrl,
    // JSON转URLSearch格式串
    formatJsonSearch,
    // URLSearch串转JSON对象
    formatSearchJson,
    // 数字金额转中文大写
    formatMoneyNumCapital,
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
    loactionReplace
};