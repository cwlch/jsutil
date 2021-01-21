"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: ch
 * @Date: 2020-06-19 11:18:42
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 15:21:30
 */
var format_blob_url_1 = __importDefault(require("./format-blob-url"));
var format_date_1 = __importDefault(require("./format-date"));
var suffixMap = {
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpeg',
    'image/png': 'png',
    'image/gif': 'gif',
    'application/msexcel': 'xlxs',
    'application/vnd.ms-excel': 'xls',
    'application/msword': 'doc',
    'application/pdf': 'pdf',
    'application/vnd.ms-powerpoint': 'ppt'
};
var downBlobFile = function (blob, _a) {
    var _b = _a === void 0 ? {} : _a, name = _b.name, suffix = _b.suffix;
    var $a = document.createElement('a'), fileName = blob.name || '', urlObject = format_blob_url_1.default(blob);
    var index = 0, blobSuffix = '', blobName = '';
    if (fileName) {
        index = fileName.lastIndexOf('.');
        blobSuffix = fileName.substring(index + 1, fileName.length);
        blobName = fileName.substring(0, index);
    }
    // 优先使用传入的Name和后缀 第二使用blob自带的name属性信息。如果前者都不满足，使用blob的type属性生成后缀，生成时间戳文件名
    var myName = name || blobName || format_date_1.default(new Date(), 'yyyymmddhhiiss'), mySuffix = suffix || blobSuffix || suffixMap[blob.type];
    $a.href = urlObject.url;
    $a.download = myName + "." + mySuffix;
    $a.click();
};
exports.default = downBlobFile;
