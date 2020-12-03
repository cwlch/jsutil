(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.jsUtil = {}));
}(this, (function (exports) { 'use strict';

    /*
     * @Author: ch
     * @Date: 2020-11-07 16:41:13
     * @Last Modified by:   ch
     * @Last Modified time: 2020-11-07 16:41:13
     */
    /**
     * 获取变量类型
     * 'Null',
        'Undefined',
        'Object',
        'Array',
        'String',
        'Number',
        'Boolean',
        'Function',
        'RegExp',
        'NaN',
        'Infinite'
     * @param {*} o
     * @returns string
     */
    var getVarType = (function (o) { return (Object.prototype.toString.call(o).match(/\[object (.*?)\]/) || [])[1].toLowerCase(); });

    /*
     * @Author: ch
     * @Date: 2020-11-07 16:41:19
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-10 09:05:59
     */
    var isEmpty = function (params) {
        if (params === void 0) { params = ''; }
        var myType = getVarType(params);
        if (params === '' || myType === 'undefined' || myType === 'null' ||
            (myType === 'array' && params.length === 0) || (myType === 'object' && Object.keys(params).length === 0)) {
            return true;
        }
        return false;
    };

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:38:26
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-30 16:29:22
     */
    /**
     *  是否为姓名格式
     * @param {string} val 姓名
     */
    var isName = (function (val) { return /^([A-Za-z\.\s]{2,20}|[\u4e00-\u9fa5]{2,20})$/.test(val); });

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:38:40
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-10 11:46:37
     */
    /**
     * 是否为手机号
     * @param {string} val 手机号
     * @returns {boolean}
     */
    var isPhone = (function (val) { return /^1[3-9]\d{9}$/.test(val); });

    /*
     * @Author: ch
     * @Date: 2020-11-10 11:40:32
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-30 16:53:57
     */
    /**
     * 验证是不是座机号
     */
    var isTel = (function (val) { return /^0\d{2,3}-\d{7,8}$/.test(val); });

    /*
     * @Author: ch
     * @Date: 2020-11-10 11:22:51
     * @Last Modified by: ch
     * @Last Modified time: 2020-12-01 11:10:48
     */
    /**
     * 验证邮箱地址
     */
    var isEmail = (function (val) { return /^[A-Za-z0-9\u4e00-\u9fa5]+([\.\-_]*[A-Za-z0-9\u4e00-\u9fa5])*@([A-Za-z0-9\u4e00-\u9fa5]+[\.\-_]{0,1}[A-Za-z0-9\u4e00-\u9fa5]+){1,63}\.([A-Za-z0-9\u4e00-\u9fa5]+[\.\-_]{0,1}[A-Za-z0-9\u4e00-\u9fa5]+)+$/.test(val); });

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:38:12
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-10 10:58:35
     */
    var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };
    var isIdCard = function (val) {
        if (isEmpty(val)) {
            return false;
        }
        var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], // 加权因子
        arrValid = __spreadArrays([1, 0, 'X', 9, 8, 7, 6, 5, 4, 3], [2]); // 校验码
        if (/^\d{17}\d|x$/i.test(val)) {
            var sum = 0, idx = void 0, i = 0;
            for (; i < val.length - 1; i++) {
                // 对前17位数字与权值乘积求和
                sum += parseInt(val.substr(i, 1), 10) * arrExp[i];
            }
            // 计算模（固定算法）
            idx = sum % 11;
            // 检验第18为是否与校验码相等
            return arrValid[idx] == val.substr(17, 1).toUpperCase();
        }
        else {
            return false;
        }
    };

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:38:16
     * @Last Modified by: ch
     * @Last Modified time: 2020-12-01 14:54:14
     */
    /**
     * 金额格式验证,单位到万亿
     * @param {number | string} val 金额
     */
    var isMoney = (function (val) { return /^(?:0(?:\.[0-9]{1,2}){0,1}|(?!0)[0-9]{1,13}(?:\.[0-9]{1,2})?)$/.test(val.toString()); });

    /*
     * @Author: ch
     * @Date: 2020-11-28 09:37:21
     * @Last Modified by: ch
     * @Last Modified time: 2020-12-01 16:25:13
     */
    var setCookie = function (key, value, _a) {
        var _b = _a === void 0 ? {} : _a, domain = _b.domain, _c = _b.path, path = _c === void 0 ? '/' : _c, expires = _b.expires, secure = _b.secure;
        if (!window) {
            throw new Error('setCookie只支持浏览器端使用');
        }
        domain = domain || window.location.hostname;
        var time = new Date().getTime();
        window.document.cookie = key + "=" + encodeURI(value) + ";domain=" + domain + ";path=" + path + ";" + (expires ? "expires=" + new Date(time + expires) : '') + ";" + (secure ? "secure=" + secure : '');
    };

    /*
     * @Author: ch
     * @Date: 2020-11-24 21:38:12
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-10 10:58:35
     */
    /**
     *
     * 设置SessionStorage
     */
    var setSessionStorage = function (key, val) {
        var valStr = JSON.stringify(val);
        if (sessionStorage) {
            sessionStorage.setItem(key, valStr);
        }
    };

    /*
     * @Author: ch
     * @Date: 2020-11-24 21:38:12
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-10 10:58:35
     */
    /**
     *
     * 设置localStorage
     */
    var setLocalStorage = function (key, val) {
        var valStr = JSON.stringify(val);
        if (localStorage) {
            localStorage.setItem(key, valStr);
        }
    };

    /*
     * @Author: ch
     * @Date: 2020-11-28 09:37:21
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-28 16:50:41
     */
    /**
     * 获取cookie
     * @param key
     * @return 有值返回字符串，不存在返回null
     */
    var getCookie = function (key) {
        if (!window) {
            throw new Error('getCookie只支持浏览器端使用');
        }
        var r = new RegExp("(?:^|;+|\\s+)" + key + "=([^;]*)"), m = window.document.cookie.match(r);
        return !m ? null : decodeURI(m[1]);
    };

    /*
     * @Author: ch
     * @Date: 2020-11-24 21:38:12
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-10 10:58:35
     */
    /**
     *
     * 获取SessionStorage
     */
    var getSessionStorage = function (key) {
        var val = null;
        if (sessionStorage) {
            sessionStorage.getItem(key);
        }
        return val;
    };

    /*
     * @Author: ch
     * @Date: 2020-11-24 21:38:12
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-10 10:58:35
     */
    /**
     *
     * 获取localStorage
     */
    var getLocalStorage = function (key) {
        var val = null;
        if (localStorage) {
            localStorage.getItem(key);
        }
        return val;
    };

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:37:38
     * @Last Modified by: ch
     * @Last Modified time: 2020-05-26 09:26:03
     */
    /**
     * 获取浏览器信息
     */
    var getUaInfo = (function () {
        var ua = navigator.userAgent.toLocaleLowerCase();
        var b = '', s = '';
        if (ua.search(/chrome\/(\d+\.\d+)/i) > 0) {
            b = 'chrome';
        }
        else if (ua.search(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i) > 0) {
            b = 'safari';
        }
        else if (ua.search(/firefox\/(\d+\.\d+)/i) > 0) {
            b = 'firefox';
        }
        else if (ua.search(/msie (\d+\.\d+)|trident\/(\d+\.\d+)|edge\/(\d+\.\d+)/i) > 0) {
            b = 'ie';
        }
        else if (ua.search(/opera\/(\d+\.\d+)/i) > 0) {
            b = 'opera';
        }
        if (ua.search(/android/i) > 0) {
            s = 'android';
        }
        else if (ua.search(/ipad/i) > 0) {
            s = 'ipad';
        }
        else if (ua.search(/iphone/i) > 0) {
            s = 'iphone';
        }
        else if (ua.search(/macintosh/i) > 0) {
            s = 'mac';
        }
        else if (ua.search(/windows/i) > 0) {
            s = 'windows';
        }
        return { browser: b, system: s };
    });

    /*
     * @Author: ch
     * @Date: 2020-11-28 10:08:58
     * @Last Modified by: ch
     * @Last Modified time: 2020-12-02 15:40:31
     *
     */
    var MyObjectURL = /** @class */ (function () {
        function MyObjectURL(objectURL) {
            this.url = objectURL;
        }
        MyObjectURL.prototype.revoke = function () {
            var MyURL = window.URL || window.webkitURL;
            MyURL.revokeObjectURL(this.url);
        };
        return MyObjectURL;
    }());
    /**
     * 二进制文件流转换成可访问的URL
     * @param blob
     * @return Promise
     */
    var blobToURL = function (blob) {
        var objectURL = '';
        var MyURL = window.URL || window.webkitURL;
        objectURL = MyURL.createObjectURL(blob);
        return new MyObjectURL(objectURL);
    };
    // return new Promise((res,rej)=>{
    //     const reader = new FileReader();    
    //         reader.readAsDataURL(blob);
    //     reader.onloadend = (e)=>{
    //         res(e.target && e.target.result);
    //     };
    //     reader.onerror = (e) =>{
    //         rej(e);
    //     }
    // });

    var toJsonSearch = function (myJson, connector) {
        if (connector === void 0) { connector = '?'; }
        if (getVarType(myJson) !== 'object') {
            throw new Error('必须是JSON对象');
        }
        var arr = [];
        for (var i in myJson) {
            arr.push(i + "=" + encodeURIComponent(myJson[i]));
        }
        return "" + connector + arr.join('&');
    };

    var toSearchJson = function (search) {
        search = search.replace(/\?/g, '&');
        var searchArr = search.split('&'), obj = {};
        searchArr.forEach(function (i) {
            var me = i.split('=');
            if (me[0]) {
                obj[me[0]] = decodeURIComponent(me[1]);
            }
        });
        return obj;
    };

    /*
     * @Author: ch
     * @Date: 2020-09-28 11:13:28
     * @Last Modified by: ch
     * @Last Modified time: 2020-12-02 15:57:31
     *
     *
     *
     */
    /**
     * 金额大写转换
     * @param n 金额
     * @param h 金额为负时的前缀
     */
    var toCapitalMoney = function (n, h) {
        var fraction = ['角', '分'], digit = [
            '零', '壹', '贰', '叁', '肆',
            '伍', '陆', '柒', '捌', '玖'
        ], unit = [
            ['元', '万', '亿'],
            ['', '拾', '佰', '仟']
        ];
        h = n < 0 ? (h || '') : '';
        n = Math.abs(n);
        var s = '';
        for (var i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (var i = 0; i < unit[0].length && n > 0; i++) {
            var p = '';
            for (var j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        return h + s.replace(/(零.)*零元/, '元')
            .replace(/(零.)+/g, '零')
            .replace(/^整$/, '零元整');
    };

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:37:34
     * @Last Modified by: ch
     * @Last Modified time: 2020-06-01 17:27:32
     */
    /**
     *
     * 时间格式化
     * @param {number|string|Date} d 时间参数能被new Date识别的数字，字符串，日期
     * @param {string} fmt 时间格式参数 字符串类型 默认'yyyy/mm/dd'
     */
    var formatDate = function (date, fmt) {
        if (fmt === void 0) { fmt = 'yyyy/mm/dd'; }
        //  处理不识别的时间表示字符串，如2020年01月01日00时00分00秒
        var dateType = getVarType(date);
        if (dateType === 'string') {
            date = date.replace(/\D+/ig, '/');
            var arr = date.split('/');
            // 长度大于3说明带了时分秒信息 特殊时间处理格式
            if (arr.length > 3) {
                var time = " " + arr[3] + ":" + arr[4] + ":" + arr[5];
                arr.length = 3;
                date = arr.join('/') + time;
            }
        }
        try {
            date = date ? dateType === 'date' ? date : new Date(date) : new Date();
        }
        catch (e) {
            throw new Error('不能识别的时间格式');
        }
        var o = {
            'm+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'i+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            'l+': date.getMilliseconds() //毫秒
        };
        if (/(y+)/i.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")", 'i').test(fmt)) {
                var str = o[k].toString();
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ("0" + str).substr(str.length - 1));
            }
        }
        return fmt;
    };

    /*
     * @Author: ch
     * @Date: 2020-06-01 14:09:49
     * @Last Modified by: ch
     * @Last Modified time: 2020-12-02 10:13:14
     */
    /**
     *
     * 金额格式化
     * @param {number | string} money 金额数据
     * @returns {string} 金额格式数据
     */
    var formatMoney = function (money) {
        var moneyType = getVarType(money);
        if (money === '' || moneyType === 'null' || moneyType === 'undefined') {
            return null;
        }
        var strMonery = parseFloat(money).toFixed(2).toString(), intNum = parseInt(strMonery).toString(), floatNum = strMonery.split('.');
        var str = '';
        if (intNum > 999999) {
            str = intNum.split('').reverse().reduce(function (prev, next, index) {
                return ((index % 3) ? next : (next + ',')) + prev;
            });
        }
        else {
            str = intNum;
        }
        return str += "." + floatNum[1];
    };

    /*
     * @Author: ch
     * @Date: 2020-05-09 14:22:47
     * @Last Modified by: ch
     * @Last Modified time: 2020-10-27 09:40:30
     */
    /**
     * 并联加载指定的脚本
     * 并联加载[异步]同时加载，不管上个是否加载完成，直接加载全部
     * 全部加载完成后执行Promise成功回调
     * @param array|string 指定的脚本们
     * @return Promise
     */
    var loadScripts = function (scripts) {
        var scriptArr = getVarType(scripts) === "string" ? [scripts] : scripts, HEAD = document.getElementsByTagName("head").item(0) || document.documentElement;
        var loaded = 0;
        return new Promise(function (resolve, reject) {
            for (var i = 0; i < scriptArr.length; i++) {
                var scriptNode = document.createElement("script"), scriptLoad = function () {
                    if (!this.readyState || (this.readyState == "loaded" || this.readyState == "complete")) {
                        loaded++;
                        this.onload = this.onreadystatechange = null;
                        this.parentNode.removeChild(this);
                        if (loaded == scriptArr.length) {
                            resolve();
                        }
                    }
                };
                scriptNode.setAttribute("type", "text/javascript");
                scriptNode.setAttribute("src", scriptArr[i]);
                scriptNode.addEventListener('load', scriptLoad);
                scriptNode.addEventListener('readystatechange', scriptLoad);
                HEAD.appendChild(scriptNode);
            }
        });
    };

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    /**
    * 串联加载指定的脚本
    * 串联加载[同步]逐个加载，每个加载完成后加载下一个
    * 全部加载完成后return Promise
    * @param array|string 指定的脚本们
    * @return Promise
    */
    var loadScriptsAwait = function (scripts) { return __awaiter(void 0, void 0, void 0, function () {
        var scriptArr, res, i, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scriptArr = getVarType(scripts) === "string" ? [scripts] : scripts;
                    return [4 /*yield*/, loadScripts(scriptArr[0])];
                case 1:
                    res = _a.sent();
                    i = 1, item = void 0;
                    _a.label = 2;
                case 2:
                    if (!(i < scriptArr.length)) return [3 /*break*/, 5];
                    item = scriptArr[i];
                    return [4 /*yield*/, loadScripts(item)];
                case 3:
                    res = _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, res];
            }
        });
    }); };

    /**
     * 创建一个UUID
     * @param len 长度
     * @param radix  基数
     *
     * uuid() // EB4479E4-CA4A-4377-AC97-5C3424CCA6EF
     * uuid(8, 2)  //  "10010100000011100011101010001011"
     * uuid(8, 10) // "82841022800573848567251899801403"
     * uuid(8, 16) // "F743098834031FDFCE1D8976F9769222"
     */
    var createUUID = function (len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i = 0;
        radix = radix || chars.length;
        if (len) {
            for (i = 0; i < len; i++)
                uuid[i] = chars[0 | Math.random() * radix];
        }
        else {
            var r = 0;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    };

    /*
     * @Author: ch
     * @Date: 2020-11-28 09:37:21
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-28 16:50:41
     */
    var extend = function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var last = args[args.length - 1], lastType = getVarType(last), deep = lastType === 'boolean' ? last : true, soucre = args;
        if (lastType === 'boolean') {
            soucre.length = soucre.length - 1;
        }
        if (soucre.length > 1) {
            soucre.forEach(function (item) {
                target = extend(target, item, deep);
            });
        }
        else {
            var curSoucre = soucre[0];
            for (var key in curSoucre) {
                var me = curSoucre[key], meType = getVarType(me);
                if (deep && (['array', 'object'].includes(meType))) {
                    var _target = null;
                    if (['object'].includes(meType)) {
                        _target = ['object'].includes(getVarType(target[key])) ? target[key] : {};
                    }
                    else {
                        _target = ['array'].includes(getVarType(target[key])) ? target[key] : [];
                    }
                    target[key] = extend(_target, me);
                }
                else if (me !== undefined) {
                    target[key] = me;
                }
            }
        }
        return target;
    };

    /*
     * @Author: ch
     * @Date: 2020-11-24 21:38:12
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-10 10:58:35
     */
    /**
     *
     * 1位数补零
     */
    var fillZero = function (num) {
        var res = num;
        if (num < 10 && num >= 0 && num.toString().indexOf('.') < 0) {
            res = "0" + num;
        }
        return res;
    };

    /*
     * @Author: ch
     * @Date: 2020-06-19 11:18:42
     * @Last Modified by: ch
     * @Last Modified time: 2020-12-02 15:21:30
     */
    var suffixMap = {
        'image/jpeg': 'jpeg',
        'image/jpg': 'jpeg',
        'image/png': 'png',
        'image/gif': 'gif',
        'application/msexcel': 'xlxs',
        'application/vnd.ms-excel': 'xls',
        'application/msword': 'doc',
        'application/pdf': 'pdf',
        'application/vnd.ms-powerpoint': 'ppt'
    };
    var downBlobFile = function (blob, _a) {
        var _b = _a === void 0 ? {} : _a, name = _b.name, suffix = _b.suffix;
        var $a = document.createElement('a'), fileName = blob.name || '', urlObject = blobToURL(blob);
        var index = 0, blobSuffix = '', blobName = '';
        if (fileName) {
            index = fileName.lastIndexOf('.');
            blobSuffix = fileName.substring(index + 1, fileName.length);
            blobName = fileName.substring(0, index);
        }
        // 优先使用传入的Name和后缀 第二使用blob自带的name属性信息。如果前者都不满足，使用blob的type属性生成后缀，生成时间戳文件名
        var myName = name || blobName || formatDate(new Date(), 'yyyymmddhhiiss'), mySuffix = suffix || blobSuffix || suffixMap[blob.type];
        $a.href = urlObject.url;
        $a.download = myName + "." + mySuffix;
        $a.click();
    };

    /*
     * @Author: ch
     * @Date: 2020-06-02 14:45:38
     * @Last Modified by: ch
     * @Last Modified time: 2020-12-01 17:26:16
     */
    var locationReplace = function (url) {
        if (window.history.replaceState) {
            window.history.replaceState(null, window.document.title, url);
            window.history.go(0);
        }
        else {
            window.location.replace(url);
        }
    };

    exports.creatUUID = createUUID;
    exports.downBlobFile = downBlobFile;
    exports.extend = extend;
    exports.fillZero = fillZero;
    exports.formatBlobUrl = blobToURL;
    exports.formatDate = formatDate;
    exports.formatJsonSearch = toJsonSearch;
    exports.formatMoney = formatMoney;
    exports.formatMoneyNumCapital = toCapitalMoney;
    exports.formatSearchJson = toSearchJson;
    exports.getCookie = getCookie;
    exports.getLocalStorage = getLocalStorage;
    exports.getSessionStorage = getSessionStorage;
    exports.getUAInfo = getUaInfo;
    exports.getVarType = getVarType;
    exports.isEmail = isEmail;
    exports.isEmpty = isEmpty;
    exports.isIdCard = isIdCard;
    exports.isMoney = isMoney;
    exports.isName = isName;
    exports.isPhone = isPhone;
    exports.isTel = isTel;
    exports.loactionReplace = locationReplace;
    exports.loadScript = loadScripts;
    exports.loadScriptAwait = loadScriptsAwait;
    exports.setCookie = setCookie;
    exports.setLocalStorage = setLocalStorage;
    exports.setSessionStorage = setSessionStorage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));