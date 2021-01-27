const limitInt = (val:string|number):string  => val.toString().replace(/[\D]/g,'');
 
export default limitInt