import getVarType from './get-varType';

const toJsonSearch = (myJson:any):string=>{
    if(getVarType(myJson) !== 'object'){
        throw new Error('必须是JSON对象');
    }
    let arr:string[] = [];
    for(let i in myJson){
        arr.push(`${i}=${myJson[i]}`);
    }
    return `?${arr.join('&')}`;
}
export default toJsonSearch;
