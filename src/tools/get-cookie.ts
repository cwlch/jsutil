/*
 * @Author: ch 
 * @Date: 2020-11-28 09:37:21 
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-28 16:50:41
 */
'use strict'
/**
 * 获取cookie
 * @param key
 * @return 有值返回字符串，不存在返回null 
 */
const _GetCookie = (key:string):any=>{
    if(!window){
        throw new Error('getCookie只支持浏览器端使用');
    }
    const r = new RegExp(`(?:^|;+|\\s+)${key}=([^;]*)`),
    m = window.document.cookie.match(r);

    return !m ? null : decodeURI(m[1]);
    
}


export default _GetCookie;