(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.GT = factory());
}(this, (function () { 'use strict';

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:37:43
     * @Last Modified by: ch
     * @Last Modified time: 2020-05-25 11:51:28
     */
    /**
     * 获取变量类型
     * @param {*} o
     * @returns string
     */
    var getVarType = (function (o) { return (Object.prototype.toString.call(o).match(/\[object (.*?)\]/) || [])[1].toLowerCase(); });

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:38:01
     * @Last Modified by: ch
     * @Last Modified time: 2020-05-26 09:24:48
     */
    var isEmpty = function (params) {
        if (params === void 0) { params = ''; }
        var myType = getVarType(params);
        if (myType === 'array' && params.length === 0) {
            return true;
        }
        if (myType === 'object' && Object.keys(params).length === 0) {
            return true;
        }
        if (myType === 'undefined') {
            return true;
        }
        if (myType === 'null') {
            return true;
        }
        if (myType === 'string' && params.length === 0) {
            return true;
        }
        return false;
    };

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:38:12
     * @Last Modified by: ch
     * @Last Modified time: 2020-05-26 09:23:28
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
     * @Last Modified time: 2020-05-26 09:24:17
     */
    /**
     * 金额格式验证,单位到万亿
     * @param {number | string} val 金额
     */
    var isMoney = (function (val) { return /^(?:0\.\d{0,1}[1-9]|(?!0)\d{1,13}(?:\.\d{0,1}[0-9])?)$/.test(val.toString()); });

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:38:40
     * @Last Modified by: ch
     * @Last Modified time: 2020-05-25 11:03:21
     */
    /**
     * 是否为手机号
     * @param {string} val 手机号
     * @returns {boolean}
     */
    var isPhone = (function (val) { return /^1[3-9]\d{9}$/.test(val); });

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:38:26
     * @Last Modified by: ch
     * @Last Modified time: 2020-05-26 09:26:54
     */
    /**
     *  是否为姓名格式
     * @param {string} val 姓名
     */
    var isName = (function (val) { return /^[A-Za-z\.\s\u4e00-\u9fa5]+$/.test(val); });

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
     * @Date: 2020-04-03 09:38:53
     * @Last Modified by: ch
     * @Last Modified time: 2020-05-26 11:37:30
     */
    /**
     * 去除空格
     */
    var trimSpace = function (str) {
        if (str === void 0) { str = ''; }
        return str.replace(/(^\s*)|(\s*$)/g, '');
    };

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:38:46
     * @Last Modified by: ch
     * @Last Modified time: 2020-05-26 11:35:52
     */
    /**
     * 对象选性继承
     */
    var stipulateExtend = (function (targetObj, originObj) {
        for (var key in targetObj) {
            if (originObj[key] !== undefined) {
                targetObj[key] = originObj[key];
            }
        }
    });

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:37:34
     * @Last Modified by: ch
     * @Last Modified time: 2020-06-01 17:27:32
     */
    /**
     *
     * 时间格式化
     * @param {number|string|Date} d 时间参数 数字，字符串，日期类型
     * @param {string} fmt 时间格式参数 字符串类型 默认'yyyy/MM/dd'
     */
    var formatDate = function (d, fmt) {
        if (fmt === void 0) { fmt = 'yyyy/MM/dd'; }
        if (!d) {
            return false;
        }
        var date = typeof d === 'number' ?
            new Date((d < 10000000000 && d > -10000000000) ? d * 1000 : d) : typeof d === 'string' ? new Date(d.replace(/-/ig, '/')) : d, o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            'S': date.getMilliseconds() //毫秒
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
     * @Last Modified time: 2020-09-07 11:12:22
     */
    /**
     *
     * 金额格式化
     * @param {number | string} money 金额数据
     * @returns {string} 金额格式数据
     */
    var formatMoney = function (money) {
        if (!money) {
            return '0.00';
        }
        var strMonery = parseFloat(money).toFixed(2).toString(), intNum = parseInt(strMonery).toString(), floatNum = strMonery.split('.');
        var str = '';
        if (intNum > 999999) {
            for (var i = 0; i < intNum.length; i++) {
                var item = intNum[i];
                if (i != 0 && i % 3 === 0) {
                    str += "," + item;
                }
                else {
                    str += item;
                }
            }
            str += "." + floatNum[1];
        }
        else {
            str = strMonery;
        }
        return str;
    };

    /*
     * @Author: ch
     * @Date: 2020-04-03 09:37:21
     * @Last Modified by: ch
     * @Last Modified time: 2020-05-25 16:50:41
     */
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

    /*
     * @Author: ch
     * @Date: 2020-05-09 14:22:47
     * @Last Modified by: ch
     * @Last Modified time: 2020-10-27 09:40:30
     */
    /**
     * 并联加载指定的脚本
     * 并联加载[同步]同时加载，不管上个是否加载完成，直接加载全部
     * 全部加载完成后执行回调
     * @param array|string 指定的脚本们
     * @param function 成功后回调的函数
     * @return array 所有生成的脚本元素对象数组
     */
    var loadScripts = function (scripts, callback) {
        var scriptArr = getVarType(scripts) === "string" ? [scripts] : scripts, HEAD = document.getElementsByTagName("head").item(0) || document.documentElement;
        var loaded = 0;
        for (var i = 0; i < scriptArr.length; i++) {
            var scriptNode = document.createElement("script"), scriptLoad = function () {
                if (!this.readyState || (this.readyState == "loaded" || this.readyState == "complete")) {
                    loaded++;
                    this.onload = this.onreadystatechange = null;
                    this.parentNode.removeChild(this);
                    if (loaded == scriptArr.length && typeof callback == "function")
                        callback();
                }
            };
            scriptNode.setAttribute("type", "text/javascript");
            scriptNode.setAttribute("src", scriptArr[i]);
            scriptNode.addEventListener('load', scriptLoad);
            scriptNode.addEventListener('readystatechange', scriptLoad);
            HEAD.appendChild(scriptNode);
        }
    };
    /**
    * 串联加载指定的脚本
    * 串联加载[异步]逐个加载，每个加载完成后加载下一个
    * 全部加载完成后执行回调
    * @param array|string 指定的脚本们
    * @param function 成功后回调的函数
    * @return array 所有生成的脚本元素对象数组
    */
    loadScripts.asyncLoad = function (scripts, callback) {
        var scriptArr = getVarType(scripts) === "string" ? [scripts] : scripts, HEAD = document.getElementsByTagName("head").item(0) || document.documentElement, last = scripts.length - 1;
        var s = new Array(), recursiveLoad = function (i) {
            var scriptNode = s[i] = document.createElement("script"), scriptLoad = function () {
                //Attach handlers for all browsers
                {
                    this.onload = this.onreadystatechange = null;
                    this.parentNode.removeChild(this);
                    if (i != last)
                        recursiveLoad(i + 1);
                    else if (typeof (callback) == "function")
                        callback();
                }
            };
            scriptNode.setAttribute("type", "text/javascript");
            scriptNode.setAttribute("src", scripts[i]);
            scriptNode.addEventListener('onload', scriptLoad);
            scriptNode.addEventListener('onreadystatechange', scriptLoad);
            HEAD.appendChild(scriptNode);
        };
        recursiveLoad(0);
    };

    var __spreadArrays$1 = (undefined && undefined.__spreadArrays) || function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };
    /*
     * @Author: ch
     * @Date: 2020-05-13 10:45:58
     * @Last Modified by: ch
     * @Last Modified time: 2020-08-01 16:08:10
     * jsbridge与APP交互使用的桥梁
     */
    function setupWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
            return callback(window.WebViewJavascriptBridge);
        }
        else {
            document.addEventListener('WebViewJavascriptBridgeReady', function () {
                callback(window.WebViewJavascriptBridge);
            }, false);
        }
        if (!/andriod/.test(window.navigator.userAgent.toLocaleLowerCase())) {
            if (window.WVJBCallbacks) {
                return window.WVJBCallbacks.push(callback);
            }
            window.WVJBCallbacks = [callback];
            var WVJBIframe_1 = document.createElement('iframe');
            WVJBIframe_1.style.display = 'none';
            WVJBIframe_1.src = 'https://__bridge_loaded__';
            document.documentElement.appendChild(WVJBIframe_1);
            setTimeout(function () { document.documentElement.removeChild(WVJBIframe_1); }, 0);
        }
    }
    var jsBridge = {
        callhandler: function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            setupWebViewJavascriptBridge(function (bridge) {
                bridge.callHandler.apply(bridge, __spreadArrays$1([name], args));
            });
        },
        registerhandler: function (name, cb) {
            setupWebViewJavascriptBridge(function (bridge) {
                bridge.registerHandler(name, function (data, responseCallback) {
                    cb(data, responseCallback);
                });
            });
        }
    };

    /*
     * @Author: ch
     * @Date: 2020-06-19 11:18:42
     * @Last Modified by: ch
     * @Last Modified time: 2020-06-19 11:34:56
     */
    var downloadBlobFile = function (blob, fileName) {
        var ua = getUaInfo(), a = document.createElement('a');
        var url = '';
        if (['chrome', 'safari'].includes(ua.browser)) {
            url = window.webkitURL.createObjectURL(blob);
        }
        else {
            url = window.URL.createObjectURL(blob);
        }
        a.href = url;
        a.download = fileName;
        a.click();
    };

    var extend = function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var last = args[args.length - 1], lastType = getVarType(last), deep = lastType === 'boolean' ? last : true, soucre = args; //JSON.parse(JSON.stringify(args));
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

    /*
     * @Author: ch
     * @Date: 2020-09-28 11:13:28
     * @Last Modified by: ch
     * @Last Modified time: 2020-09-28 11:41:40
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
     * @Date: 2020-10-14 10:08:58
     * @Last Modified by: ch
     * @Last Modified time: 2020-10-14 10:09:25
     *
     *
     * Blob文件生成可访问URL
     *
     */
    var blobToURL = function (blob) {
        return new Promise(function (res, rej) {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function (e) {
                res(e.target && e.target.result);
            };
            reader.onerror = function (e) {
                rej(e);
            };
        });
    };

    var repaintImg = function (img, _a) {
        var _b = _a.width, width = _b === void 0 ? img.width : _b, _c = _a.height, height = _c === void 0 ? img.height : _c, _d = _a.type, type = _d === void 0 ? 'image/png' : _d, _e = _a.position, position = _e === void 0 ? 'center' : _e, _f = _a.scale, scale = _f === void 0 ? false : _f;
        var myCanvas = document.createElement('canvas'), ctx = myCanvas.getContext('2d');
        myCanvas.width = width;
        myCanvas.height = height;
        var imgW = img.width, imgH = img.height, newW = width, newH = height, xStart = 0, yStart = 0;
        if (!scale) {
            newW = imgW;
            newH = imgH;
            switch (position) {
                case 'center':
                    xStart = img.width / 2 - width / 2;
                    yStart = img.height / 2 - height / 2;
                    break;
                case 'rightTop':
                    xStart = img.width - width;
                    yStart = 0;
                    break;
                case 'leftBottom':
                    xStart = 0;
                    yStart = img.height - height;
                    break;
                case 'rightBottom':
                    xStart = img.width - width;
                    yStart = img.height - height;
                    break;
                default:
                    xStart = 0;
                    yStart = 0;
                    break;
            }
        }
        ctx.drawImage(img, -xStart, -yStart, newW, newH);
        var imgs = myCanvas.toDataURL(type);
        return imgs;
    };

    /*
     * @Author: ch
     * @Date: 2020-05-25 11:03:47
     * @Last Modified by: ch
     * @Last Modified time: 2020-11-07 16:08:14
     */
    var index = {
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
        loadScript: loadScripts,
        // app交互桥梁
        jsBridge: jsBridge,
        // ajax下载文件
        downloadBlobFile: downloadBlobFile,
        // js对象扩展
        extend: extend,
        // 获取或设置url参数
        toJsonSearch: urlSarch,
        // 金额大写转换
        toCapitalMoney: toCapitalMoney,
        // Blob文件转URL
        toBlobURL: blobToURL,
        // 图片转换成Base64
        toImgBase64: repaintImg
    };

    return index;

})));
