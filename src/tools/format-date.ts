/*
 * @Author: ch 
 * @Date: 2020-04-03 09:37:34 
 * @Last Modified by: ch
 * @Last Modified time: 2020-06-01 17:27:32
 */
import getVarType from './get-var-type';
'use strict'
/**
 * 
 * 时间格式化
 * @param {number|string|Date} d 时间参数能被new Date识别的数字，字符串，日期
 * @param {string} fmt 时间格式参数 字符串类型 默认'yyyy/mm/dd'
 */
 const _FormatDate = (date:any, fmt:string = 'yyyy/mm/dd' ): string =>{
    //  处理不识别的时间表示字符串，如2020年01月01日00时00分00秒
    const dateType = getVarType(date);
    if(dateType === 'string'){
        date = date.replace(/\D+/ig,'/');
        let arr = date.split('/');
        // 长度大于3说明带了时分秒信息 特殊时间处理格式
        if(arr.length > 3){
            let time = ` ${arr[3]}:${arr[4]}:${arr[5]}`
            arr.length = 3;
            date = arr.join('/') + time;
        }
    };
    try{
        date = date ? dateType === 'date' ? date : new Date(date) : new Date();
    } catch(e){
        throw new Error('不能识别的时间格式');
    }
    const o:any = {
            'm+': date.getMonth() + 1, //月份
            'd+': date.getDate(), //日
            'h+': date.getHours(), //小时
            'i+': date.getMinutes(), //分
            's+': date.getSeconds(), //秒ji“    
            'q+': Math.floor((date.getMonth() + 3) / 3), //季度
            'l+': date.getMilliseconds() //毫秒
        };
    if (/(y+)/i.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp(`(${k})`, 'i').test(fmt)) {
            const str = o[k].toString();
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : (`0${str}`).substr(str.length-1));
        }
    }

    return fmt;
}
export default _FormatDate;