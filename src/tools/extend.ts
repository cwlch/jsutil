/*
 * @Author: ch 
 * @Date: 2020-11-28 09:37:21 
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-28 16:50:41
 */
'use strict'
import getVarType from './get-var-type';
const _Extend = (target:any, ...args:any):object =>{
    const last:any = args[args.length-1],
        lastType:string = getVarType(last),
        deep = lastType === 'boolean' ? last : true,
        soucre = args;
    if(lastType === 'boolean'){
        soucre.length = soucre.length - 1;
    }
    if(soucre.length > 1){
        soucre.forEach((item:any) => {
            target = _Extend(target, item, deep);
        });
    }else{
        const curSoucre = soucre[0];
        for(let key in curSoucre){
            const me = curSoucre[key],
                meType = getVarType(me);
            if(deep && (['array','object'].includes(meType))){
                let _target = null;
                if(['object'].includes(meType)){
                    _target = ['object'].includes(getVarType(target[key])) ? target[key] : {}
                }else{
                    _target = ['array'].includes(getVarType(target[key])) ? target[key] : []

                }
                target[key] = _Extend(_target,me);
            }else if(me !== undefined){
                target[key] = me;
            }
        }
    }
    return target;
}
export default  _Extend;