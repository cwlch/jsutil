/**
 * html转为字符串输出
 */
'use strict'
import isEmpty from './isEmpty.js';

const escapeHTML = str => {
    if (isEmpty(str)) return '';

    let c = '',
        i = 0,
        arr = str.split('');

    while (i < arr.length) {
        switch (arr[i]) {
            case '<':
                arr[i] = '&lt;';
                break;
            case '>':
                arr[i] = '&gt;';
                break;
        }
        c += arr[i];
        i++;
    }
    return c;
};

export default escapeHTML;