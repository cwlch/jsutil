/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:55:42
 * @Description: file content
 */
/**
 * 限制可输入正负整数
 * @param val 
 */
const _LimitPNInt = (val:string|number):string  => {
    let num = val.toString();
    // 剔除数字和“-”号以外字符，
    num = num.replace(/[^\d\-]/g,'');
    // 限制只保留开头的“-”号
    num = num.replace(/^-/, '$#$').replace(/\-/g, '').replace('$#$', '-');
    // 避免正负双0开头的数字
    num = num.replace(/^(\-?)0[\d]+/,'$10');
    return num;
}
 
export default _LimitPNInt