/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 08:49:41
 * @Description: file content
 */
/**
 * 创建一个UUID
 * @param len 长度
 * @param radix  基数
 * 
 * uuid() // EB4479E4-CA4A-4377-AC97-5C3424CCA6EF
 * uuid(8, 2)  //  "10010100000011100011101010001011"
 * uuid(8, 10) // "82841022800573848567251899801403"
 * uuid(8, 16) // "F743098834031FDFCE1D8976F9769222"
 */
const _CreateUUID = (len?:number,radix?:number):string =>{
    const chars:string[] = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid:string[] = [],
        i:number=0;
    radix = radix || chars.length;
    if(len){
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    }else{
        let r:number = 0;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4'; 
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}
export default _CreateUUID;