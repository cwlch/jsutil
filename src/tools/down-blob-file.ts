/*
 * @Author: ch 
 * @Date: 2020-06-19 11:18:42 
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-02 15:21:30
 */
import formatBlobUrl from './format-blob-url';
import formatDate from './format-date';

const suffixMap:any = {
	'image/jpeg' : 'jpeg',
	'image/jpg' : 'jpeg',
	'image/png' : 'png',
	'image/gif' : 'gif',
	'application/msexcel' : 'xlxs',
	'application/vnd.ms-excel' : 'xls',
	'application/msword' : 'doc',
	'application/pdf' : 'pdf',
	'application/vnd.ms-powerpoint' : 'ppt'
}

const _DownBlobFile = (blob:any,{name,suffix}:any={}):void => {
	const $a = document.createElement('a'),
		fileName:string = blob.name || '',		
		urlObject = formatBlobUrl(blob);

	let index:number = 0,
		blobSuffix:string = '',
		blobName:string = '';
	if(fileName){
		index = fileName.lastIndexOf('.');
		blobSuffix = fileName.substring(index+1,fileName.length);
		blobName = fileName.substring(0,index);
	}
	// 优先使用传入的Name和后缀 第二使用blob自带的name属性信息。如果前者都不满足，使用blob的type属性生成后缀，生成时间戳文件名
	let myName:string = name || blobName || formatDate(new Date(),'yyyymmddhhiiss'),
		mySuffix:string = suffix || blobSuffix || suffixMap[blob.type];
		
	$a.href = urlObject.url;
	$a.download = `${myName}.${mySuffix}`;
	$a.click();
}
export default _DownBlobFile;