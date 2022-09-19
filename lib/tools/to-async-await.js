/*
 * @Author: ch
 * @Date: 2021-09-11 15:57:23
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:57:45
 * @Description: file content
 */
var _ToAsyncAwait = function (promise, fromatResult) {
    if (fromatResult === void 0) { fromatResult = true; }
    if (!fromatResult) {
        return promise;
    }
    else {
        return promise.then(function (res) { return ({ error: null, result: res }); }).catch(function (err) { return ({ error: err, result: null }); });
    }
};
export default _ToAsyncAwait;
