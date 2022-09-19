/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:53:34
 * @Description: file content
 */
import getVarType from './get-var-type';
var _FormatJsonSearch = function (myJson, connector) {
    if (connector === void 0) { connector = '?'; }
    if (getVarType(myJson) !== 'object') {
        throw new Error('必须是JSON对象');
    }
    var arr = [];
    for (var i in myJson) {
        arr.push("".concat(i, "=").concat(encodeURIComponent(myJson[i])));
    }
    return "".concat(connector).concat(arr.join('&'));
};
export default _FormatJsonSearch;
