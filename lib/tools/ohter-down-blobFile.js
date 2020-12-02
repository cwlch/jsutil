/*
 * @Author: ch
 * @Date: 2020-06-19 11:18:42
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 15:19:02
 */
import formatBlobUrl from './format-blob-url';
import formatDate from './format-date';
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
var downBlobFile = function (blob, fileName, suffix) {
    var $a = document.createElement('a'), urlObject = formatBlobUrl(blob);
    // blob.name = undefined
    var index = 0, name = blob.name || '', blobSuffix = '', blobName = '';
    if (!name) {
        index = name.lastIndexOf('.');
        blobSuffix = name.substring(index + 1, name.length);
        blobName = name.substring(0, index);
    }
    // 优先使用传入的Name和后缀 第二使用blob自带的name属性信息，最后前者都不满足，使用blob的type属性生成后缀，生成时间戳文件名
    var myName = fileName || blobName || formatDate(new Date(), 'yyyymmddhhiiss'), mySuffix = suffix || blobSuffix || suffixMap[blob.type];
    $a.href = urlObject.url;
    $a.download = myName + "." + mySuffix;
    $a.click();
};
export default downBlobFile;
