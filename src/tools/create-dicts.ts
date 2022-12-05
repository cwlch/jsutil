
/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-09-09 10:30:30
 * @LastEditors: ch
 * @LastEditTime: 2022-12-05 14:43:53
 * @Description:
 * 
 * 
 */
import { _GetVarType } from "./index";

interface ParamType {
    [key:string] : unknown
}
interface  ResultType extends ParamType{}

// 类的私有属性，利用ES6 Symbol 
const objectSymbol = Symbol('object');
const arraySymbol = Symbol('array');
const exampleSymbol = Symbol('example');

class Dicts {
    private [objectSymbol]:ResultType = {}
    private [arraySymbol]:ResultType[] = []
    private [exampleSymbol]:ResultType = {}
    constructor(params:ParamType){

        if(_GetVarType(params) !== 'Object'){
            throw new Error('参数必须为对象');
        }

        for(let key in params){
            const item = <Array<ParamType|Number|String|Boolean>>params[key];
            const itemType = _GetVarType(item);
            let resultObj:ParamType = {
                key,
            };
            if(itemType === 'Array'){
                resultObj.value = item[0];
                const itemOneType = _GetVarType(item[0])
                if(['Null','Undefined'].includes(itemOneType)){
                    throw new Error(`${key}的value不能是${itemOneType}`)
                }
                const itemTwo = item[1];
                const itemTowType = _GetVarType(itemTwo);
                // 处理第二位参数
                if(itemTowType === 'Object'){
                    resultObj = {...resultObj, ...itemTwo};
                }else{
                    resultObj.label = itemTwo;

                    // 处理数组第三位参数
                    const itemThree = item[2]
                    if(itemThree){
                        resultObj = {...resultObj, ...itemThree}
                    }
                }
            }else if(itemType === 'Object'){
                const itemOneType = _GetVarType(item.values);
                if(['Null','Undefined'].includes(itemOneType)){
                    throw new Error(`${key}的value不能是${itemOneType}`)
                }
                resultObj = {...resultObj, ...item}
            }else{
                throw new Error('成员只支持Array,Object类型')
            }
            this[objectSymbol][key] = this[exampleSymbol][key] = resultObj;
            this[exampleSymbol][resultObj.value as string] = resultObj;
            this[arraySymbol].push(resultObj);
        }
        Object.assign(this, this[exampleSymbol]);
    }
    getArray(){
        return this[arraySymbol];
    }
    getObject(){
        return this[objectSymbol];
    }
}

const _CreateDicts = (par:ParamType) => new Dicts(par);

export default _CreateDicts;
