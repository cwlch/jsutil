/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:53:59
 * @Description: file content
 */
var _FormatSearchJson = function (search) {
    search = search.replace(/\?/g, '&');
    var searchArr = search.split('&'), obj = {};
    searchArr.forEach(function (i) {
        var me = i.split('=');
        if (me[0]) {
            obj[me[0]] = decodeURIComponent(me[1]);
        }
    });
    return obj;
};
export default _FormatSearchJson;
