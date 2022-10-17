/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-23 09:46:30
 * @Description: file content
 */
import getVarType from './get-var-type';

const _FormatJsonSearch = (myJson:any,prefix:string='?'):string=>{
    if(getVarType(myJson) !== 'object'){
        throw new Error('第一个参数（格式化对象）必须是JSON对象');
    }
    let arr:string[] = [];
    for(let i in myJson){
        arr.push(`${i}=${encodeURIComponent(myJson[i])}`);
    }
    return `${prefix}${arr.join('&')}`;
}
export default _FormatJsonSearch;
