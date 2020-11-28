/*
 * @Author: ch 
 * @Date: 2020-11-28 10:08:58 
 * @Last Modified by: ch
 * @Last Modified time: 2020-11-29 10:09:25
 * 
 */

 /**
  * 二进制文件流转换成可访问的URL
  * @param blob 
  */
const blobToURL = (blob:any):any =>{
    return new Promise((res,rej)=>{
        const reader = new FileReader();    
            reader.readAsDataURL(blob);
        reader.onloadend = (e)=>{
            res(e.target && e.target.result);
        };
        reader.onerror = (e) =>{
            rej(e);
        }
    });   
        
}
export default blobToURL;