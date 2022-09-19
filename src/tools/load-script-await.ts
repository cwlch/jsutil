/*
 * @Author: ch 
 * @Date: 2020-05-09 14:22:47 
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-03 10:00:10
 */
import loadScript from './load-script';
import getVarType from './get-var-type';


/** 
* 串联加载指定的脚本
* 串联加载[同步]逐个加载，每个加载完成后加载下一个
* 全部加载完成后return Promise
* @param array|string 指定的脚本们
* @return Promise
*/

const _LoadScriptAwait = async (scripts:string|string[]):Promise<void> =>{
	const scriptArr:any = getVarType(scripts) === "string" ? [scripts] : scripts;
	for(let i:number = 0,item:string; i < scriptArr.length; i++){
		item = scriptArr[i];
		await loadScript(item);
	}
};

export default _LoadScriptAwait;