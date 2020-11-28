/*
 * @Author: ch 
 * @Date: 2020-05-09 14:22:47 
 * @Last Modified by: ch
 * @Last Modified time: 2020-10-27 09:40:30
 */
import loadScript from './load-script';
import getVarType from './get-varType';


/** 
* 串联加载指定的脚本
* 串联加载[同步]逐个加载，每个加载完成后加载下一个
* 全部加载完成后return Promise
* @param array|string 指定的脚本们
* @return Promise
*/

const loadScriptsAwait = (scripts:string|string[]):any =>{
    const scriptArr:any = getVarType(scripts) === "string" ? [scripts] : scripts;
    scriptArr.forEach(async (item:string,index:number) => {
        let res = await loadScript(item);
        if(index === scriptArr.lenth-1){
            return res;
        }
    });
    
        
    // last = scripts.length - 1;
	// let s = new Array(),
	// recursiveLoad = function (i:number) { //递归
	// 	const scriptNode = s[i] = document.createElement("script"),
	// 	scriptLoad = function () {
	// 		if (this.readyState == "loaded" || this.readyState == "complete") {
	// 			this.onload = this.onreadystatechange = null; this.parentNode.removeChild(this);
	// 			if (i != last){
	// 				recursiveLoad(i + 1); 
	// 			}else {
	// 				return Promise.resolve();
	// 			}
	// 		}
	// 	};
	// 	scriptNode.setAttribute("type", "text/javascript");
	// 	scriptNode.setAttribute("src", scripts[i]);
	// 	scriptNode.addEventListener('onload',scriptLoad);
	// 	scriptNode.addEventListener('onreadystatechange',scriptLoad);
	// 	HEAD.appendChild(scriptNode);
	// };
	// recursiveLoad(0);
};

export default loadScriptsAwait;