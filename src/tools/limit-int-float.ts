/**
 * 限制数字及浮点数
 * @param val 
 * @param digit 需要保留的小数位数
 */
const limitIntFloat = (val:string|number,digit:number) :number => {
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

 
export default limitIntFloat