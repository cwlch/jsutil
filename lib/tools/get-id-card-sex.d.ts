/**
 * @description: 获取身份证性别
 * @param {string} idCard 身份证号
 * @param {string} sexDesc 对应性别描述数组，下标0为男生描述，1为女生描述 。默认 ['男','女']
 * @return {*}
 */
declare const _GetIdCardSex: (idCard: string, sexDesc?: string[]) => {
    sex: number;
    sexName: string;
};
export default _GetIdCardSex;
