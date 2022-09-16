/*
 * @Author: ch 
 * @Date: 2020-04-03 09:38:12 
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 10:58:35
 */
'use strict'
/**
 * 
 * 是否为身份证号
 */
import isEmpty from './is-empty.js';

const _IsIdCard = (val:string) => {
    if(isEmpty(val)) {
        return false;
    }

    const arrExp:number[] = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], // 加权因子
        arrValid:any[] = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, ...[2]]; // 校验码

    if (/^\d{17}\d|x$/i.test(val)) {
        let sum:number = 0,
            idx:number,
            i:number = 0;

        for (; i < val.length - 1; i++) {
            // 对前17位数字与权值乘积求和
            sum += parseInt(val.substr(i, 1), 10) * arrExp[i];
        }
        // 计算模（固定算法）
        idx = sum % 11;
        // 检验第18为是否与校验码相等
        return arrValid[idx] == val.substr(17, 1).toUpperCase();
    } else {
        return false;
    }
};

export default _IsIdCard;