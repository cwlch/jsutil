/*
 * @Author: ch
 * @Date: 2020-04-03 09:38:46
 * @Last Modified by: ch
 * @Last Modified time: 2020-05-26 11:35:52
 */
'use strict';
/**
 * 对象选性继承
 */
export default (function (targetObj, originObj) {
    for (var key in targetObj) {
        if (originObj[key] !== undefined) {
            targetObj[key] = originObj[key];
        }
    }
});
