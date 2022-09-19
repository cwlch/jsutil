/*
 * @Author: ch
 * @Date: 2020-09-28 11:13:28
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 15:57:31
 *
 *
 *
 */
/**
 * 金额大写转换
 * @param n 金额
 * @param h 金额为负时的前缀
 */
var _FormatMoneyNumCapital = function (n, h) {
    var fraction = ['角', '分'], digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ], unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    h = n < 0 ? (h || '') : '';
    // 小数位转换
    var d = (n.toString().split('.')[1] || '').split(''), s = '';
    n = Math.abs(n);
    if (d.length > 0) {
        for (var i = 0; i < fraction.length; i++) {
            // 使用字符串截取防止计算精度问题
            s += (digit[Number(d[i])] + fraction[i]).replace(/零./, '');
        }
    }
    // for (let i = 0; i < fraction.length; i++) {
    //     s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    // }
    s = s || '整';
    // 整数位转换
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return h + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};
export default _FormatMoneyNumCapital;
