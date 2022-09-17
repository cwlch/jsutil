/*
 * @Author: ch
 * @Date: 2021-09-11 16:19:39
 * @LastEditors: ch
 * @LastEditTime: 2022-09-16 09:00:38
 * @Description: file content
 */


/**
 * @description: 获取身份证号生日
 * @param {string} idCard 身份证号
 * @return {string} 生日字符串
 */
const _GetIdCardBrithDay = (idCard: string):string => idCard.slice(6, 14)
export default _GetIdCardBrithDay
