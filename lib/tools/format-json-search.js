"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_varType_1 = __importDefault(require("./get-varType"));
var toJsonSearch = function (myJson, connector) {
    if (connector === void 0) { connector = '?'; }
    if (get_varType_1.default(myJson) !== 'object') {
        throw new Error('必须是JSON对象');
    }
    var arr = [];
    for (var i in myJson) {
        arr.push(i + "=" + encodeURIComponent(myJson[i]));
    }
    return "" + connector + arr.join('&');
};
exports.default = toJsonSearch;
