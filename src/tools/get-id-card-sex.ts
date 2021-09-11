/*
 * @Author: ch
 * @Date: 2021-09-11 16:17:02
 * @LastEditors: ch
 * @LastEditTime: 2021-09-11 16:18:12
 * @Description: file content
 */

/**
 * @description: 获取身份证性别
 * @param {string} idCard 身份证号
 * @param {string} sexDesc 对应性别描述数组，下标0为男生描述，1为女生描述 。默认 ['男','女']
 * @return {*}
 */
const getIdCardSex = (idCard: string,sexDesc:string[]=['男','女']) => {
    let sex:number = Number(idCard.slice(16, 17)) % 2 === 0 ? 1 : 0,
        sexName = sexDesc[sex];
    return {
        sex,
        sexName
    }
}
export default getIdCardSex
