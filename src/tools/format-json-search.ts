/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:53:34
 * @Description: file content
 */
import getVarType from './get-var-type';

const _FormatJsonSearch = (myJson:any,connector:string='?'):string=>{
    if(getVarType(myJson) !== 'object'){
        throw new Error('必须是JSON对象');
    }
    let arr:string[] = [];
    for(let i in myJson){
        arr.push(`${i}=${encodeURIComponent(myJson[i])}`);
    }
    return `${connector}${arr.join('&')}`;
}
export default _FormatJsonSearch;
