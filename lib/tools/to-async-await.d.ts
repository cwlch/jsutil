/**
 * 优化async await标识符错误处理
 * @param {*} promise
 */
interface outData {
    error: string | null;
    result: any;
}
declare const toAsyncAwait: (promise: Promise<any>, fromatResult?: boolean) => Promise<any | outData>;
export default toAsyncAwait;
