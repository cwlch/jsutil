/*
 * @Author: ch
 * @Date: 2020-10-14 10:08:58
 * @Last Modified by: ch
 * @Last Modified time: 2020-10-14 10:09:25
 *
 *
 * Blob文件生成可访问URL
 *
 */
var blobToURL = function (blob) {
    return new Promise(function (res, rej) {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function (e) {
            res(e.target && e.target.result);
        };
        reader.onerror = function (e) {
            rej(e);
        };
    });
};
export default blobToURL;
