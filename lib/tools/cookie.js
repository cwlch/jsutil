/*
 * @Author: ch
 * @Date: 2020-04-03 09:37:21
 * @Last Modified by: ch
 * @Last Modified time: 2020-05-25 16:50:41
 */
'use strict';
/**
 * cookie操作
 * @param  {...any} args
 */
var cookie = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var domainPrefix = window.location.hostname, _set = function () {
        var name = args[0], value = encodeURI(args[1]) + '; ', domain = args[2] ? "domain=" + args[2] + ";" : "domain=" + domainPrefix + ";", path = args[3] ? "path=" + args[3] + ";" : 'path=/; ', expires = args[4] ? "expires=" + args[4] + ";" : '';
        window.document.cookie = name + "=" + (value + path + expires + domain);
    };
    var _get = function () {
        var name = args[0], r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)"), m = window.document.cookie.match(r);
        return decodeURI((!m ? '' : m[1]));
    };
    args.length > 1 && _set();
    if (args.length == 1) {
        return _get();
    }
};
export default cookie;
