/*
 * @Author: ch 
 * @Date: 2020-06-19 11:18:42 
 * @Last Modified by: ch
 * @Last Modified time: 2020-06-19 11:34:56
 */
import getUaInfo from './get-userAgentInfo';

const downBlobFile = (blob:string,fileName:string):void => {
	const ua:any = getUaInfo(),
		a = document.createElement('a');
	let url:string = '';
	if(['chrome','safari'].includes(ua.browser)){
		url = window.webkitURL.createObjectURL(blob);
	}else{
		url = window.URL.createObjectURL(blob);
	}
	a.href = url;
	a.download = fileName;
	a.click();
}
export default downBlobFile;