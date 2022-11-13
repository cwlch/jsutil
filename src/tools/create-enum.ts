
/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-09-09 10:30:30
 * @LastEditors: ch
 * @LastEditTime: 2022-11-13 00:23:03
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
// 类的私有属性，利用ES6 Symbol 
const objectSymbol = Symbol('object');
const arraySymbol = Symbol('array');
const paramSymbol = Symbol('param');
class EsEnum {
    // 生成的对象，通过方法对外暴露
    private [objectSymbol]:ParamType = {};
    // 生成的数组，通过方法对外暴露
    private [arraySymbol]:ParamType[] = [];
    // 原始的对象数据存储
    private [paramSymbol]:ParamType = {};

    constructor(params:ParamType){
        if(_GetVarType(params) !== 'Object'){
            throw new Error('参数必须为对象');
        }
        // 把传的参数先作为原始数据保存
        this[paramSymbol] = params;
        // 把参数直接先拷贝一份到最终要暴露的对象中，保证支持Obj.key的访问
        this[objectSymbol] = {...params};
        let valueType = '';
        for(let key in params){
            const item = params[key];
            const itemType = _GetVarType(item);
            if(valueType && valueType !== itemType){
                throw new Error(`不支持同数据类型枚举值:${valueType} 和 ${itemType}`);
            }
            valueType = itemType;
            let enumItem:ParamType = {}
            if(['Number', 'String', 'Boolean'].includes(itemType) ){
                if(this[objectSymbol][item as string]){
                    throw new Error(`您的枚举值存在相同项：${item}`);
                }
                this[objectSymbol][item as string] = key;
                enumItem = {key,value:item};
            }else if(itemType === 'Object'){
                for(let childrenVal of Object.values(<ParamType>item)){
                    if(this[objectSymbol][childrenVal as string]){
                        throw new Error(`您的枚举值存在相同项：${childrenVal}`);
                    }
                    if(['Number', 'String'].includes(_GetVarType(childrenVal))){
                        enumItem = {...item as ParamType, key}
                        this[objectSymbol][childrenVal as string] = enumItem
                        this[objectSymbol][key] = enumItem
                    }else{
                        throw new Error('枚举值为对象时，对象属性值只能是字符串、数字');
                    }
                }
            }else{
                throw new Error('枚举值只能是字符串、数字、或对象类型');
            }
            this[arraySymbol].push(enumItem);
            Object.freeze(enumItem);
        }
        Object.assign(this, this[objectSymbol]);
        Object.freeze(this[arraySymbol]);
        Object.freeze(this[objectSymbol]);
        Object.freeze(this[paramSymbol]);
    }
    getOriginalObject(){
        return this[paramSymbol]
    }

    getEnumArray(){
        return this[arraySymbol]
    }
    getEnumObject(){
        return this[objectSymbol]
    }
};

const _CreateEnum = (par:ParamType)=>{
    let obj = new EsEnum(par);
    return Object.freeze(obj);
};

export default _CreateEnum;
