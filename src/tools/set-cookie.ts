/*
 * @Author: ch 
 * @Date: 2020-11-28 09:37:21 
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-01 16:25:13
 */
'use strict'
const _SetCookie = (key:string,value:string,{domain, path = '/',expires,secure}:any={}):void=>{
    if(!window){
        throw new Error('setCookie只支持浏览器端使用');
    }
    domain = domain || window.location.hostname;
    const time = new Date().getTime();
    window.document.cookie = `${key}=${encodeURI(value)};domain=${domain};path=${path};${expires ? `expires=${new Date(time+expires)}` : ''};${secure ? `secure=${secure}` : ''}`;
    
}
export default _SetCookie;