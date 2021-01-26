/**
 * 限制可输入正负整数
 * @param val 
 */
const limitPNInt = (val:String|Number):String  => {
    let num = val.toString();
    // 剔除数字和“-”号以外字符，
    num = num.replace(/[^\d\-]/g,'');
    // 限制只保留开头的“-”号
    num = num.replace(/^-/, '$#$').replace(/\-/g, '').replace('$#$', '-');
    return num;
}
 
export default limitPNInt