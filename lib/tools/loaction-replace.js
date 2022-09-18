/*
 * @Author: ch
 * @Date: 2020-06-02 14:45:38
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-01 17:26:16
 */
var _LoactionReplace = function (url) {
    if (window.history.replaceState) {
        window.history.replaceState(null, window.document.title, url);
        window.history.go(0);
    }
    else {
        window.location.replace(url);
    }
};
export default _LoactionReplace;
