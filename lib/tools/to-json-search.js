import getVarType from './get-varType';
var toJsonSearch = function (myJson) {
    if (getVarType(myJson) !== 'object') {
        throw new Error('必须是JSON对象');
    }
    var arr = [];
    for (var i in myJson) {
        arr.push(i + "=" + myJson[i]);
    }
    return "?" + arr.join('&');
};
export default toJsonSearch;
