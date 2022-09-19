/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:53:59
 * @Description: file content
 */
const _FormatSearchJson = (search:string):object=>{
    search = search.replace(/\?/g,'&');
    let searchArr:string[] = search.split('&'),
        obj:any = {};
    searchArr.forEach(i =>{
        const me = i.split('=');
        if(me[0]){
            obj[me[0]] = decodeURIComponent(me[1]);
        }
    });
    return obj;
}
export default _FormatSearchJson;
