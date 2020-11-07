import getVarType from './get-varType';
import extend from './extend';
var get = function (url, key) {
    var start = url.indexOf('?'), searchStr = url.substring(start + 1, url.length), searchSArr = searchStr.split('&'), seearchObj = {};
    for (var _i = 0, searchSArr_1 = searchSArr; _i < searchSArr_1.length; _i++) {
        var i = searchSArr_1[_i];
        var me = i.split('=');
        if (me[1]) {
            // 处理index?a=xxx#/dd
            var m = me[1].split('#');
            seearchObj[me[0]] = m[0];
        }
    }
    if (!key) {
        return seearchObj;
    }
    else {
        return seearchObj[key];
    }
};
var set = function (url, arg) {
    var historyObj = get(url), newObj = extend(historyObj, arg), arr = [];
    for (var i in newObj) {
        arr.push(i + "=" + newObj[i]);
    }
    return arr.join('&');
};
var urlSarch = function (url, key) {
    var res = '';
    if (!key || getVarType(key) === 'string') {
        res = get(url, key);
    }
    else if (getVarType(key) === 'object') {
        res = set(url, key);
    }
    return res;
};
export default urlSarch;
