/**
 * 对象拷贝方法
 */
'use strict';
import type from './type.js';

const extend = (override = false, des = {}, ...src) => {

    let dess, srcs = [];
    
    if (!type.isBoolean(override)) { //如果第一个参数不是boolean值，则重新赋值
        dess = override;
        for(let i of src){
            if(type.isArray(des)){
                srcs = [...des, ...src];
            }else{
                srcs.push(des, i);
            }
        }
    } else {
        dess = des;
        srcs = src;
    }

    if (type.isArray(dess)) {
        if(!type.isBoolean(override)){
            dess = [...dess, ...srcs];
        }else{
            for(let i of srcs){
                if(type.isArray(i)){
                    dess = Array.from(new Set([...dess, ...i]));
                }else{
                    dess.push(i);
                }
            }
        }
    } else {
        for (let value of srcs) {
            for (let i in value) {
                if (type.isBoolean(override) && override) {
                    if(type.isObject(dess[i]) && type.isObject(value[i])){
                        extend(override, dess[i], value[i]);
                    }else{
                        dess[i] = value[i];
                    } 
                }else {
                    dess[i] = value[i]; 
                }
            }
        }
    }

    return dess;
};

export default extend;