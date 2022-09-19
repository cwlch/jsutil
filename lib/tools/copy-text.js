/*
 * @Author: ch
 * @Date: 2021-01-21 09:53:12
 * @Last Modified by: ch
 * @Last Modified time: 2021-01-21 09:57:18
 */
/**
 * 拷贝指定文本
 * @param str
 */
var _CopyText = function (str) {
    try {
        var input = document.createElement('textarea');
        input.value = str;
        input.style.width = '0';
        input.style.height = '0';
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        return true;
    }
    catch (e) {
        return false;
    }
};
export default _CopyText;
