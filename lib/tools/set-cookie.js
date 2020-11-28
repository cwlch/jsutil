/*
 * @Author: ch
 * @Date: 2020-11-28 09:37:21
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-28 16:50:41
 */
'use strict';
var setCookie = function (key, value, _a) {
    var _b = _a === void 0 ? {} : _a, domain = _b.domain, _c = _b.path, path = _c === void 0 ? '/' : _c, _d = _b.expires, expires = _d === void 0 ? '' : _d, secure = _b.secure;
    if (!window) {
        throw new Error('setCookie只支持浏览器端使用');
    }
    domain = domain || window.location.hostname;
    window.document.cookie = key + "=" + encodeURI(value) + ";domain=" + domain + ";path=" + path + ";expires=" + expires + ";secure=" + secure;
};
export default setCookie;
