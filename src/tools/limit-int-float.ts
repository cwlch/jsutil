/**
 * 限制数字及浮点数
 * @param val 
 * @param digit 需要保留的小数位数
 */
const limitIntFloat = (val:string|number,digit:number) :number => {
    let num:any = val.toString();
    num = num.replace(/[\D.]/g, '');
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    // 按照参数设置保留小数位数
    if(digit != null){
        const digitNum = Math.pow(10,digit);
        num = Math.floor(parseFloat(num) * digitNum) / digitNum
    }
    return parseFloat(num);
}

 
export default limitIntFloat