/*
 * @Author: ch
 * @Date: 2020-05-25 11:03:47
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-07 16:08:14
 */
import isEmpty from './tools/is-empty';
import isIdCard from './tools/is-idCard';
import isMoney from './tools/is-money';
import isPhone from './tools/is-phone';
import isName from './tools/is-name';
import getVarType from './tools/get-varType';
import getUaInfo from './tools/get-uaInfo';
import trimSpace from './tools/trim-space';
import stipulateExtend from './tools/stipulate-extend';
import formatDate from './tools/format-date';
import formatMoney from './tools/format-money';
import cookie from './tools/cookie';
import loadScript from './tools/load-script';
import jsBridge from './tools/js-bridge';
import downloadBlobFile from './tools/download-blob-file';
import extend from './tools/extend';
import toJsonSearch from './tools/to-json-search';
import toCapitalMoney from './tools/to-capital-money';
import toBlobURL from './tools/to-blob-url';
import toImgBase64 from './tools/to-img-base64';
export default {
    // 是否为空
    isEmpty: isEmpty,
    // 是否为姓名
    isName: isName,
    // 是否为身份证
    isIdCard: isIdCard,
    // 是否为金额格式
    isMoney: isMoney,
    // 是否为手机号
    isPhone: isPhone,
    // 获取变量类型
    getVarType: getVarType,
    // 获取浏览器信息
    getUaInfo: getUaInfo,
    // 去除空格
    trimSpace: trimSpace,
    // 指定属性继承
    stipulateExtend: stipulateExtend,
    // 时间格式化
    formatDate: formatDate,
    // 金额格式化
    formatMoney: formatMoney,
    // cookie操作
    cookie: cookie,
    // 动态加载JS
    loadScript: loadScript,
    // app交互桥梁
    jsBridge: jsBridge,
    // ajax下载文件
    downloadBlobFile: downloadBlobFile,
    // js对象扩展
    extend: extend,
    // 获取或设置url参数
    toJsonSearch: toJsonSearch,
    // 金额大写转换
    toCapitalMoney: toCapitalMoney,
    // Blob文件转URL
    toBlobURL: toBlobURL,
    // 图片转换成Base64
    toImgBase64: toImgBase64
};
