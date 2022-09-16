/*
 * @Author: ch 
 * @Date: 2020-06-01 14:09:49 
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 10:13:14
 */
import getVarType from './get-var-type';
'use strict'
/**
 * 
 * 金额加千位符格式化
 * @param {number | string} money 金额数据
 * @returns {string} 金额格式数据
 */
const _FormatMoneySymbol = (money:number | string): string|number|null =>{
    const moneyType = getVarType(money);
    if(money === '' || moneyType === 'null' || moneyType === 'undefined'){
        return null;
    }
    const strMonery:string =  parseFloat(money as string).toFixed(2).toString(),
        intNum:any = parseInt(strMonery).toString(),
        floatNum:string[] = strMonery.split('.');
    let str:string = '';
    if(intNum > 999999){
        str =  intNum.split('').reverse().reduce((prev:string, next:string, index:number) => {
            return ((index % 3) ? next : (next + ',')) + prev;
          })
    }else{
        str = intNum;
    }
    return str += `.${floatNum[1]}`;
}
export default _FormatMoneySymbol;