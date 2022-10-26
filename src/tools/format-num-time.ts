/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-10-16 17:23:56
 * @LastEditors: ch
 * @LastEditTime: 2022-10-17 22:19:53
 * @Description: file content
 */
import _FillZero from './fill-zero';
import _GetVarType from './get-var-type';
import _IsEmpty from './is-empty';
interface Result {
    day?: number,
    hours? : number,
    minute: number,
    second: number,
    formatTime: string
}

const formatUnitTime = (formatStr:string, unit:string, timeNum:number):string => {
    return formatStr.replace(unit, <string>(unit.length > 1 ? _FillZero(timeNum) : timeNum) );
}

const _FormatNumTime = (secondNum:number|string, format:string = 'dd天hh时ii分ss秒', fill:Boolean = true) =>{
    let result:Result = <Result>{};
    if(_GetVarType(Number(secondNum)) !== 'Number'){
        throw new Error('第一个参数为需要计算的秒数');
    }

    const unitDay = format.match(/(d+)/i)?.[0];
    const unitHours = format.match(/(h+)/i)?.[0];
    const unitMinute = format.match(/(i+)/i)?.[0];
    const unitSecond = format.match(/(s+)/i)?.[0];
    let formatTimeStr:string = format;
    // 根据格式判断，计算所需时间单位及其值
    if(unitDay){
        result.day = Math.floor(<number>secondNum / 86400);
        result.hours = Math.floor(<number>secondNum % 86400 / 3600);
        result.minute = Math.floor((<number>secondNum % 3600)/ 60);
    }else if(unitHours){
        result.hours = Math.floor(<number>secondNum / 3600);
        result.minute = Math.floor((<number>secondNum % 3600)/ 60);
    }else{
        result.minute = Math.floor(<number>secondNum / 60);
    }
    result.second = Math.floor(<number>secondNum % 60);

    // 表示格式中有天
    if(!_IsEmpty(result.day)){
        // 天为0,且不需要补齐把天干掉
        if(result.day === 0 && !fill){
            formatTimeStr = formatTimeStr.replace(formatTimeStr.substring(0, formatTimeStr.match(/(h+)/i)?.index), '');
        }else{
            formatTimeStr = formatUnitTime(formatTimeStr,<string>unitDay,<number>result.day);
        }
    }
    // 表示格式中有小时
    if(!_IsEmpty(result.hours)){
        // 天不存在或天为0，小时为0, 且不需要补齐，则把小时干掉
        if(!result.day && result.hours === 0 && !fill){
            formatTimeStr = formatTimeStr.replace(formatTimeStr.substring(0, formatTimeStr.match(/(i+)/i)?.index),'');
        }else{
            formatTimeStr = formatUnitTime(formatTimeStr,<string>unitHours,<number>result.hours);
        }

    }
    // 分秒必须会有
    formatTimeStr = formatUnitTime(formatTimeStr,<string>unitMinute,<number>result.minute);
    formatTimeStr = formatUnitTime(formatTimeStr,<string>unitSecond,<number>result.second);
    result.formatTime = formatTimeStr;
   
    return result;
    
}
export default _FormatNumTime