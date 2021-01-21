/*
 * @Author: ch
 * @Date: 2020-11-28 09:37:21
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-28 16:50:41
 */
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_var_type_1 = __importDefault(require("./get-var-type"));
var extend = function (target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var last = args[args.length - 1], lastType = get_var_type_1.default(last), deep = lastType === 'boolean' ? last : true, soucre = args;
    if (lastType === 'boolean') {
        soucre.length = soucre.length - 1;
    }
    if (soucre.length > 1) {
        soucre.forEach(function (item) {
            target = extend(target, item, deep);
        });
    }
    else {
        var curSoucre = soucre[0];
        for (var key in curSoucre) {
            var me = curSoucre[key], meType = get_var_type_1.default(me);
            if (deep && (['array', 'object'].includes(meType))) {
                var _target = null;
                if (['object'].includes(meType)) {
                    _target = ['object'].includes(get_var_type_1.default(target[key])) ? target[key] : {};
                }
                else {
                    _target = ['array'].includes(get_var_type_1.default(target[key])) ? target[key] : [];
                }
                target[key] = extend(_target, me);
            }
            else if (me !== undefined) {
                target[key] = me;
            }
        }
    }
    return target;
};
exports.default = extend;
