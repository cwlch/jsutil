"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var limitInt = function (val) { return val.toString().replace(/[\D]/g, ''); };
exports.default = limitInt;
