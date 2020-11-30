/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:04
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-30 15:33:08
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
import toBlobUrl from './tools/to-blob-url';
import toJsonSearch from './tools/to-json-search';
import toSearchJson from './tools/to-search-json';
import toMoneyNumCapital from './tools/to-moneyNum-capital';
import fromatDate from './tools/format-date';
import fromatMoney from './tools/format-money';
import loadScript from './tools/load-script';
import loadScriptAwait from './tools/load-scriptAwait';
import creatUUID from './tools/creat-uuid';
import extend from './tools/extend';
import fillZero from './tools/fill-zero';
import downBlobFile from './tools/down-blobFile';
import loactionReplace from './tools/loaction-replace';
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
    // 二进制文件流转可访问URL
    toBlobUrl: toBlobUrl,
    // JSON转URLSearch格式串
    toJsonSearch: toJsonSearch,
    // URLSearch串转JSON对象
    toSearchJson: toSearchJson,
    // 数字金额转中文大写
    toMoneyNumCapital: toMoneyNumCapital,
    // 格式化时间
    fromatDate: fromatDate,
    // 格式化金额，添加千分符
    fromatMoney: fromatMoney,
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
