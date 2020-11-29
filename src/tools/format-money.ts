/*
 * @Author: ch 
 * @Date: 2020-06-01 14:09:49 
 * @Last Modified by: ch
 * @Last Modified time: 2020-09-07 11:12:22
 */
import getVarType from './get-varType';
'use strict'
/**
 * 
 * 金额格式化
 * @param {number | string} money 金额数据
 * @returns {string} 金额格式数据
 */
const formatMoney = (money:number | string): string|number =>{
    const moneyType = getVarType(money);
    if(moneyType === 'null' || moneyType === 'undfined'){
        return money;
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
export default formatMoney;