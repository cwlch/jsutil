/*
 * @Author: ch 
 * @Date: 2020-11-28 09:37:21 
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-28 16:50:41
 */
'use strict'
const setCookie = (key:string,value:string,{domain, path = '/',expires='',secure}:any={}):void=>{
    if(!window){
        throw new Error('setCookie只支持浏览器端使用');
    }
    domain = domain || window.location.hostname;
    window.document.cookie = `${key}=${encodeURI(value)};domain=${domain};path=${path};expires=${expires};secure=${secure}`;
    
}
export default setCookie;