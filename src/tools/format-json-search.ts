import getVarType from './get-var-type';

const toJsonSearch = (myJson:any,connector:string='?'):string=>{
    if(getVarType(myJson) !== 'object'){
        throw new Error('必须是JSON对象');
    }
    let arr:string[] = [];
    for(let i in myJson){
        arr.push(`${i}=${encodeURIComponent(myJson[i])}`);
    }
    return `${connector}${arr.join('&')}`;
}
export default toJsonSearch;
