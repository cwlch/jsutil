'use strict'
import isEmpty from './isEmpty.js';

const verfiyBankCard = str => {

    if(isEmpty(num)) return 0;

    let strArr = [...(str.split(' ').join(''))].reverse(),
        oddArr = [],
        evenArr = [],
        oddRes = 0,
        evenRes = 0;

    strArr.forEach((v, i) => {
        if ((i + 1) % 2 == 0) {
            evenArr.push(strArr[i] * 2)
        } else {
            oddArr.push(strArr[i] * 1);
        }
    });

    oddArr.forEach((v, i) => {
        oddRes += v * 1;
    });

    evenArr.forEach((v, i) => {
        evenRes += v * 1;
    });

    if ((oddRes + evenRes) % 10 == 0) {
        return 1;
    } else {
        return 0;
    }
};

export default verfiyBankCard;