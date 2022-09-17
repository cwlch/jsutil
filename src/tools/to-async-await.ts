/*
 * @Author: ch
 * @Date: 2021-09-11 15:57:23
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:57:45
 * @Description: file content
 */

 
/**
 * 优化async await标识符错误处理
 * @param {*} promise 
 */
interface outData {
    error:string|null,
    result:any
}
const _ToAsyncAwait = (promise:Promise<any>,fromatResult:boolean=true) : Promise<any|outData> => {
    if(!fromatResult){
        return promise;
    }else{
        return promise.then((res:any) => ({error:null,result:res})).catch((err:any) => ({error:err,result:null}));
    }
}

export default _ToAsyncAwait