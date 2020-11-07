import getVarType from './get-varType';
var extend = function (target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var last = args[args.length - 1], lastType = getVarType(last), deep = lastType === 'boolean' ? last : true, soucre = args; //JSON.parse(JSON.stringify(args));
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
            var me = curSoucre[key], meType = getVarType(me);
            if (deep && (['array', 'object'].includes(meType))) {
                var _target = null;
                if (['object'].includes(meType)) {
                    _target = ['object'].includes(getVarType(target[key])) ? target[key] : {};
                }
                else {
                    _target = ['array'].includes(getVarType(target[key])) ? target[key] : [];
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
export default extend;
