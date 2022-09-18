/*
 * @Author: ch
 * @Date: 2020-11-28 09:37:21
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-01 16:25:13
 */
'use strict';
var _SetCookie = function (key, value, _a) {
    var _b = _a === void 0 ? {} : _a, domain = _b.domain, _c = _b.path, path = _c === void 0 ? '/' : _c, expires = _b.expires, secure = _b.secure;
    if (!window) {
        throw new Error('setCookie只支持浏览器端使用');
    }
    domain = domain || window.location.hostname;
    var time = new Date().getTime();
    window.document.cookie = "".concat(key, "=").concat(encodeURI(value), ";domain=").concat(domain, ";path=").concat(path, ";").concat(expires ? "expires=".concat(new Date(time + expires)) : '', ";").concat(secure ? "secure=".concat(secure) : '');
};
export default _SetCookie;
