/*
 * @Author: ch
 * @Date: 2020-11-28 10:08:58
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 15:40:31
 *
 */
var MyObjectURL = /** @class */ (function () {
    function MyObjectURL(objectURL) {
        this.url = objectURL;
    }
    MyObjectURL.prototype.revoke = function () {
        var MyURL = window.URL || window.webkitURL;
        MyURL.revokeObjectURL(this.url);
    };
    return MyObjectURL;
}());
/**
 * 二进制文件流转换成可访问的URL
 * @param blob
 * @return Promise
 */
var _FormatBlobUrl = function (blob) {
    var objectURL = '';
    var MyURL = window.URL || window.webkitURL;
    objectURL = MyURL.createObjectURL(blob);
    return new MyObjectURL(objectURL);
};
export default _FormatBlobUrl;
// return new Promise((res,rej)=>{
//     const reader = new FileReader();    
//         reader.readAsDataURL(blob);
//     reader.onloadend = (e)=>{
//         res(e.target && e.target.result);
//     };
//     reader.onerror = (e) =>{
//         rej(e);
//     }
// });  
