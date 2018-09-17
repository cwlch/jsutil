'use strict'
import isEmpty from './isEmpty.js';

const verfiyID = str => {
    if(isEmpty(str)) {
        return 0;
    }

    let arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
    let arrValid = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, ...2]; // 校验码

    if (/^\d{17}\d|x$/i.test(str)) {
        let sum = 0,
            idx,
            i = 0;

        for (; i < str.length - 1; i++) {
            // 对前17位数字与权值乘积求和
            sum += parseInt(str.substr(i, 1), 10) * arrExp[i];
        }
        // 计算模（固定算法）
        idx = sum % 11;
        // 检验第18为是否与校验码相等
        return arrValid[idx] == str.substr(17, 1).toUpperCase();
    } else {
        return 0;
    }
};

export default verfiyID;
