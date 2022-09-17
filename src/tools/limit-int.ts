/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:55:00
 * @Description: file content
 */
const _LimitInt = (val:string|number):string  => val.toString().replace(/[\D]/g,'');
 
export default _LimitInt