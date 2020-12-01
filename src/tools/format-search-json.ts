const toSearchJson = (search:string):object=>{
    search = search.replace('?','&');
    let searchArr:string[] = search.split('&'),
        obj:any = {};
    searchArr.forEach(i =>{
        const me = i.split('=');
        if(me[0]){
            obj[me[0]] = me[1];
        }
    });
    return obj;
}
export default toSearchJson;
