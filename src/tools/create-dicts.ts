
/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-09-09 10:30:30
 * @LastEditors: ch
 * @LastEditTime: 2022-11-21 23:01:20
 * @Description:
 * 创建的枚举类，返回一个（通过object对象伪造的）key，value可以相互访问的实例，
 * 实例属性中包含了getEnumObject方法获取到的整个对象。且打印出来能看到实例的私有属性，但他只能看到，是不能直接获取的
 * 特性
 * -不能有相同的key或值，
 * -不能有不同数据类型的值
 * -值只能是String, Number, Boolean, Object4种类型
 * -Object的枚举值，其属性只能是String,Number,Boolean
 * 
 * 实例提供了三个方法
 * getOriginalObject 获取你创建枚举是的原始对象数据 
 * getEnumArray 获取生成的数组数据 
 * getEnumObject 获取生成的对象数据 
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
                if(item[0]){
                    throw new Error(`${key}的value不能是${item[0]}`)
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
                resultObj = {...resultObj, ...item}
            }else{
                throw new Error('对象成员只支持Array,Object类型')
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
