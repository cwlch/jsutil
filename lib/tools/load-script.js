/*
 * @Author: ch
 * @Date: 2020-05-09 14:22:47
 * @Last Modified by: ch
 * @Last Modified time: 2020-10-27 09:40:30
 */
import getVarType from './get-varType';
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
            if (!0 || this.readyState == "loaded" || this.readyState == "complete") {
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
export default loadScripts;
