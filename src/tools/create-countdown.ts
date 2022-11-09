import _FormatNumTime from "./format-num-time"

/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-10-12 21:22:58
 * @LastEditors: ch
 * @LastEditTime: 2022-11-08 22:02:49
 * @Description: file content
 */
interface Option {
    endTime: number|string
    format: string
    fill: Boolean
    callback?: Function
    finishCallback?: Function,
    start?:Boolean
}
interface Result {
    status:string,
    formatTime : string
}
enum STATUS {
    AWAIT = 'await',
    PROGRESS = 'progress;',
    STOP = 'stop',
    FINISH = 'finish',
}
const FORMAT_STR = 'dd天hh时ii分ss秒';

// 私有方法标识
const _calcSecond = Symbol();

class Countdown {
    private secondNum: number = 0
    private curTime : Number = 0
    private endTimeNum: number = 0
    private secondDiff : number = 0
    private stopCalc : any = null
    private result:Result = {status:STATUS.AWAIT, formatTime : ''}
    options:Option
    constructor(options:Option){
        try{
            this.endTimeNum = new Date(options.endTime).getTime();
        }catch (e){
            throw new Error('time参数必须是一个可识别的时间参数')
        }
        this.options = options;
        // 是否立即启动
        if(options.start){
            this.start();
        }
        
    /**
     * @Description: 计算结果
     * 最后差值小于1则完成，
     * @return {*}
     */
    }
    [_calcSecond](){
        this.secondNum--;
        let formatRes = _FormatNumTime(this.secondNum, this.options.format, this.options.fill)
        this.result = {status:STATUS.PROGRESS, formatTime : formatRes.formatTime};
        this.options.callback && this.options.callback(this.result)
        if(this.secondNum < 1){
            // 小于1暂停计算
            this.destroy();
        }else{
            // 大于1继续计算
            this.stopCalc = setTimeout(()=>{
                this[_calcSecond]()
            }, 1000)
        }
    }
    /**
     * @Description: 开始
     * @return {*}
     */    
    start(){
        if(this.result.status === STATUS.AWAIT || this.result.status === STATUS.STOP ){
            this.curTime = <number>new Date().getTime();
            this.secondDiff = Math.floor((this.endTimeNum - <number>this.curTime) / 1000);
            this.secondNum = this.secondDiff > 0 ? this.secondDiff : 0;
            this[_calcSecond]();
        }
        
    }
    /**
     * @Description: 暂停
     * 清除计时器
     * @return {*}
     */    
    stop(){
        this.result.status = STATUS.STOP;
        clearTimeout(this.stopCalc);
    }
    /**
     * @Description: 结束
     * 销毁计时器并调完成回调
     * @return {*}
     */    
    destroy(){
        this.result.status = STATUS.FINISH;
        clearTimeout(this.stopCalc);
        this.options.finishCallback && this.options.finishCallback(this.result);
    }
}

const _CreateCountdown = ({
    endTime,
    format = FORMAT_STR,
    fill = true,
    callback,
    finishCallback,
    start = true
    

}:Option)=>{
    return new Countdown({
        endTime,
        format,
        fill,
        callback,
        finishCallback,
        start
    })
}
// const _CreateCountdown = ({
//     endTime,
//     format = FORMAT_STR,
//     fill = true,
//     callback,
//     finishCallback
// }:Option) =>{
//     let endTimeNum = null
//     try{
//         endTimeNum = new Date(endTime).getTime();
//     }catch (e){
//         throw new Error('time参数必须是一个可识别的时间参数')
//     }
//     const curTime = new Date().getTime();
//     const secondDiff = Math.floor((endTimeNum - curTime) / 1000)
//     let secondNum = secondDiff > 0 ? secondDiff : 0;
//     let calcSecondStop:any = null;
//     let result = {
//         status : STATUS.AWAIT,
//     }
//     const calcSecond = () => {
//         secondNum--;
//         result = {
//             status : STATUS.AWAIT,
//             ..._FormatNumTime(secondNum, format, fill)
//         }
//         callback && callback(result);
//         if(secondNum < 1){
//             fn.destroy();
//             return false;
//         }
//         calcSecondStop = setTimeout(calcSecond, 1000)
//     }
    
    
//     const fn = {
//         stop(){
//             result.status = STATUS.STOP;
//             clearTimeout(calcSecondStop);
//         },
//         restart(){
//             if(result.status === STATUS.STOP){
//                 calcSecond()
//             }
//         },
//         destroy(){
//             result.status = STATUS.FINISH;
//             clearTimeout(calcSecondStop);
//             finishCallback && finishCallback(result);
//         }
//     }
//     calcSecond();
//     return fn;
    

// }


export default _CreateCountdown
