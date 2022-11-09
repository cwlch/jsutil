
/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-09-09 10:30:30
 * @LastEditors: ch
 * @LastEditTime: 2022-11-09 09:58:56
 * @Description: file content
 */
import { _GetVarType } from "./index";

interface ParamType {
    [key:string] : unknown
}
const finalSymbol = Symbol('final');
const paramSymbol = Symbol('param');
class EsEnum {
    private [finalSymbol]:ParamType = {}
    private [paramSymbol]:ParamType = {}
    constructor(params:ParamType){
        if(_GetVarType(params) !== 'Object'){
            throw new Error('参数必须为对象');
        }
        this[paramSymbol] = params;
        this[finalSymbol] = {...params}
        for(let key in params){
            const item = params[key];
            const itemType = _GetVarType(item)
            if(['Number', 'String'].includes(itemType) ){
                if(this[finalSymbol][item as string]){
                    throw new Error(`您的枚举值存在相同项：${item}`);
                }
                this[finalSymbol][item as string] = key;
            }else if(itemType === 'Object'){
                for(let childrenVal of Object.values(<ParamType>item)){
                    if(this[finalSymbol][childrenVal as string]){
                        throw new Error(`您的枚举值存在相同项：${childrenVal}`);
                    }
                    if(['Number', 'String'].includes(_GetVarType(childrenVal))){
                        this[finalSymbol][childrenVal as string] = {...item as ParamType, key}
                    }else{
                        throw new Error('枚举值为对象时，对象属性值只能是字符串、数字');
                    }
                }
            }else{
                throw new Error('枚举值只能是字符串、数字、或对象类型');
            }
            // Object.freeze(this[finalSymbol]);
        }
        Object.assign(this, this[finalSymbol]);
    }
    getOriginalObject(){
        return this[paramSymbol]
    }
    getEnumObject(){
        return this[finalSymbol]
    }
};

const _CreateEnum = (par:ParamType)=>{
    let obj = new EsEnum(par);
    return Object.freeze(obj);
};

export default _CreateEnum;
