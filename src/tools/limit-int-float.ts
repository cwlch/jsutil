/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:55:18
 * @Description: file content
 */
/**
 * 限制数字及浮点数
 * @param val 
 * @param digit 需要保留的小数位数
 */
const _LimitIntFloat = (val:string|number,digit:number) :number => {
    let num:any = val.toString();
    num = num.replace(/[^\d\.]/g, '');
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');    
    num = num.replace(/^0[\d]+/,'0');
    // 按照参数设置保留小数位数
    if(digit != null){
        num = num.replace(new RegExp(`^(\\d+)(\\.?)(\\d{0,${digit}}).*$`),'$1$2$3')
    }
    return num;
}

 
export default _LimitIntFloat