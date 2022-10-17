/*
 * @Author: ch 
 * @Date: 2020-11-07 16:41:13 
 * @Last Modified by:   ch 
 * @Last Modified time: 2020-11-07 16:41:13 
 */

'use strict'
/**
 * 获取变量类型
 * 'Null',
 * 'Undefined',
 * 'Object',
 * 'Array',
 * 'String',
 * 'Number',
 * 'Boolean',
 * 'Function',
 * 'RegExp',
 * 'NaN',
 * 'Infinity'
 * 'Date'
 * 自定义构造函数类：小写函数名
 * @param {*} o
 * @returns string
 */
export default (o:any):string =>{
   let typeStr = (Object.prototype.toString.call(o).match(/\[object (.*?)\]/) || [])[1];
   if(typeStr === 'Object'){
      const constName = o.constructor.name
      constName !== 'Object' && (typeStr = `${typeStr}:${constName}`);
   } else if(typeStr === 'Number'){
      if(!isFinite(o)){
         if(isNaN(o)){
            typeStr = 'NaN'
         }else{
            typeStr = 'Infinity'
         }
      }
   }
   return typeStr;
}