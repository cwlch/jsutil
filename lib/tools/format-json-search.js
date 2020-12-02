import getVarType from './get-varType';
var toJsonSearch = function (myJson, connector) {
    if (connector === void 0) { connector = '?'; }
    if (getVarType(myJson) !== 'object') {
        throw new Error('必须是JSON对象');
    }
    var arr = [];
    for (var i in myJson) {
        arr.push(i + "=" + encodeURIComponent(myJson[i]));
    }
    return "" + connector + arr.join('&');
};
export default toJsonSearch;
