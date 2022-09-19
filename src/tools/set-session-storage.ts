/*
 * @Author: ch 
 * @Date: 2020-11-24 21:38:12 
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
'use strict'
/**
 * 
 * 设置SessionStorage
 */

const _SetSessionStorage = (key:string,val:any):any => {
    const valStr:string = JSON.stringify(val)
    if(sessionStorage){
        sessionStorage.setItem(key,valStr);
    }
};

export default _SetSessionStorage;