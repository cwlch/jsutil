/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:19
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-10 09:05:59
 */
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断变量是否为空
 */
var get_var_type_1 = __importDefault(require("./get-var-type"));
var isEmpty = function (params) {
    if (params === void 0) { params = ''; }
    var myType = get_var_type_1.default(params);
    if (params === '' || myType === 'undefined' || myType === 'null' ||
        (myType === 'array' && params.length === 0) || (myType === 'object' && Object.keys(params).length === 0)) {
        return true;
    }
    return false;
};
exports.default = isEmpty;
