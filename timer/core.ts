/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-10-16 16:53:47
 * @LastEditors: ch
 * @LastEditTime: 2022-10-16 17:19:46
 * @Description: file content
 */
interface TimerOption {
    maxUnit: String
    fillZero: Boolean
    callback?: Function
    finish?: Function
}
interface Unit {
    
}
const _defaultOption:TimerOption = {
    fillZero : true,
    maxUnit : 'day'
}
class Timer {
    option: TimerOption
    day?: number
    hours: number
    minute: number
    second: number
    status: string
    constructor(option:TimerOption){
        this.option = {..._defaultOption, ...option,};
        this.hours = 0;
        this.minute = 0;
        this.second = 0;
        this.status = 'progress';
    }
    stop(){

    }
    start(){

    }
    restart(){

    }
    
}