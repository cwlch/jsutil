/**
 * @desc 函数防抖
 * 好比技能读条 触发后等待一段时间再释放技能，并且重复触发的话会重新计算读条时间
 * @param fn 执行函数
 * @param delay 延迟执行的毫秒数
 * @param immediate 是否立即执行
 */
declare const debounceFn: (fn: (args: any) => void, delay: number, immediate?: boolean) => (args: any) => void;
export default debounceFn;
