/**
 * 限制数字及浮点数
 * @param {*} val 
 */
const limitIntFloat = (val:String|Number) :String => {
    let num = val.toString();
    num = num.replace(/[\D.]/g, '');
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    return num;
}

 
export default limitIntFloat