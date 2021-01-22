const limitInt = (val:String|Number):String  => val.toString().replace(/[\D]/g,'');
 
export default limitInt