const limitInt = (val:string|number):number  => parseInt(val.toString().replace(/[\D]/g,''));
 
export default limitInt