/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 09:06:49
 * @Description: file content
 */
var _LimitMoney = function (val) {
    var num = val.toString();
    //清除"数字"和"."以外的字符
    num = num.replace(/[^\d.]/g, '');
    //前两位不能是0加数字   
    num = num.replace(/^0\d[0-9]*/g, '');
    // 验证第一个字符是数字而不是字符
    num = num.replace(/^\./g, '');
    //连续的点只保留第一个.清除多余的 
    // num = num.replace(/\.{2,}/g, '.'); 
    //保证.只出现一次，而不能出现两次以上  
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    //只能输入两个小数
    num = Math.floor(num * 100) / 100;
    // num.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); 
    return num;
};
export default _LimitMoney;
