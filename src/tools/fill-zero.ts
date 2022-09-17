/*
 * @Author: ch 
 * @Date: 2020-11-24 21:38:12 
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
'use strict'
/**
 * 
 * 1位数补零
 */

const _FillZero = (num:number|string):number|string => {
    let res:number|string = num;
    if(num < 10 && num >= 0 && num.toString().indexOf('.') < 0){
        res = `0${num}`;
    }
    return res;
};

export default _FillZero;