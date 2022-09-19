/**
* 串联加载指定的脚本
* 串联加载[同步]逐个加载，每个加载完成后加载下一个
* 全部加载完成后return Promise
* @param array|string 指定的脚本们
* @return Promise
*/
declare const _LoadScriptAwait: (scripts: string | string[]) => Promise<void>;
export default _LoadScriptAwait;
