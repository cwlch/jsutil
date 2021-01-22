const limitMoney = (val:String)=>{
    let num = val.toString()
    // 清除"数字"和"."以外的字符
    num = num.replace(/[^\d.]/g,"");
    // 验证第一个字符是数字
    num = num.replace(/^\./g,"");
    // 只保留第一个, 清除多余的
    num = num.replace(/\.{2,}/g,".");
    num = num.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    // 只能输入两个小数
    num = num.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
    return num;
}