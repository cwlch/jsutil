var __spreadArrays = (this && this.__spreadArrays) || function () {
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
            bridge.callHandler.apply(bridge, __spreadArrays([name], args));
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
export default jsBridge;
