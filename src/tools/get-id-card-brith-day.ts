/*
 * @Author: ch
 * @Date: 2021-09-11 16:19:39
 * @LastEditors: ch
 * @LastEditTime: 2021-09-11 16:25:56
 * @Description: file content
 */


/**
 * @description: 获取身份证号生日
 * @param {string} idCard 身份证号
 * @return {string} 生日字符串
 */
const getIdCardBirthDay = (idCard: string):string => idCard.slice(6, 14)
export default getIdCardBirthDay
