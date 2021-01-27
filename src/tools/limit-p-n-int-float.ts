
/**
 * 限制输入正负数字及浮点数
 * @param val 
 * @param digit 需要保留的小数位数
 */
const limitPNIntFloat = (val:string|number,digit:number) :number => {
    // /^(\.*)(\d+)(\.?)(\d{0,2}).*$/g
    let num:any = val.toString();
    // 剔除数字和“-”，“.”号以外字符，
    num = num.replace(/[^\d\.\-]/g, '');
    // 限制只保留开头的“-”号
    num = num.replace(/^-/, '$#$').replace(/\-/g, '').replace('$#$', '-');
    // 限制只允许输入一个“.”
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');    
    // 避免正负0开头不带点的数字
    num = num.replace(/^(\-?)0[\d]+/,'$10');
    // 第一位为“.”自动补0
    num = num.replace(/^\./,'0.');
    // 按照参数设置保留小数位数
    if(digit != null){
        // num = num.replace(new RegExp(`^(\\-?)(\\d+)(\\.?)(\\d{0,${digit}}).*$`),'$1$2$3$4')
        num = num.replace(new RegExp(`^(\-|\\d+)(\\.?)(\\d{0,${digit}}).*$`),'$1$2$3')
    }
    return num;
}

 
export default limitPNIntFloat;