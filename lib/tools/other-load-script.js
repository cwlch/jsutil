"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: ch
 * @Date: 2020-05-09 14:22:47
 * @Last Modified by: ch
 * @Last Modified time: 2020-10-27 09:40:30
 */
var get_varType_1 = __importDefault(require("./get-varType"));
/**
 * 并联加载指定的脚本
 * 并联加载[异步]同时加载，不管上个是否加载完成，直接加载全部
 * 全部加载完成后执行Promise成功回调
 * @param array|string 指定的脚本们
 * @return Promise
 */
var loadScripts = function (scripts) {
    var scriptArr = get_varType_1.default(scripts) === "string" ? [scripts] : scripts, HEAD = document.getElementsByTagName("head").item(0) || document.documentElement;
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
exports.default = loadScripts;
