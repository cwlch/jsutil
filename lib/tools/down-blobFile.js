/*
 * @Author: ch
 * @Date: 2020-06-19 11:18:42
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-30 15:13:35
 */
import getUaInfo from './get-uaInfo';
var downBlobFile = function (blob, fileName) {
    var ua = getUaInfo(), a = document.createElement('a');
    var url = '';
    if (['chrome', 'safari'].includes(ua.browser)) {
        url = window.webkitURL.createObjectURL(blob);
    }
    else {
        url = window.URL.createObjectURL(blob);
    }
    a.href = url;
    a.download = fileName;
    a.click();
};
export default downBlobFile;
