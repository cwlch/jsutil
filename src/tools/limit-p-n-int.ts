/**
 * 限制可输入正负整数
 * @param val 
 */
const limitInt = (val:String|Number):String  => val.toString().replace(/[\D]/g,'');
 
export default limitInt