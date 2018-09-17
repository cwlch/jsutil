'use strict'
import isEmpty from './isEmpty.js';
import type from './type.js';
import extend from './extend.js';

const formatBalance = (num, opt = {
    style: 'decimal',
    currency: 'cny',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true
})  => num.toLocaleString('zh', opt);

const formatDecimal = (num, opt = {
    minimumFractionDigits: 2,
    useGrouping: false
}) => num.toLocaleString('zh', opt);

const formatDate = (num, opt = {}) => {

    let newNum = num;

    if(type.isUndefined(opt.showType)){
        newNum = newNum.toLocaleString('zh', opt);
    }else{
        let showTypeArr = !type.isUndefined(opt.showType) &&  Array.from(opt.showType);
        if (type.isUndefined(opt.formatString)) {
            opt.formatString = opt.showType;
            let formatStrArr = Array.from(opt.formatString);
            newNum = '';
            for(let value of formatStrArr){
                switch(value){
                    case '月':
                        newNum += num.toLocaleString('zh', {month: 'numeric'});
                        break;
                    case '日':
                        newNum += num.toLocaleString('zh', {day: 'numeric'});
                        break;
                    case '时':
                        newNum += ' ' + num.toLocaleString('zh', {hour: 'numeric'});
                        break;
                    case '分':
                        newNum += num.toLocaleString('zh', {minute: 'numeric'}) + '分';
                        break;
                    case '秒':
                        newNum += num.toLocaleString('zh', {second: 'numeric'}) + '秒';
                        break;
                    default:
                        newNum += num.toLocaleString('zh', {year: 'numeric'});
                        break;
                }
            }
        } else {
            let showDateType = Array.from(opt.showType);

            for(let value of showDateType){
                switch(value){
                    case '月':
                        opt = extend(true, {month: '2-digit'}, opt);
                        break;
                    case '日':
                        opt = extend(true, {day: '2-digit'}, opt);
                        break;
                    case '时':
                        opt = extend(true, {hour: '2-digit'}, opt);
                        break;
                    case '分':
                        opt = extend(true, {minute: '2-digit'}, opt);
                        break;
                    case '秒':
                        opt = extend(true, {second: '2-digit'}, opt);
                        break;
                    default:
                        opt = extend(true, {year: 'numeric'}, opt);
                        break;
                }
            }
            newNum = num.toLocaleString('zh', opt).replace(/\//g, opt.formatString);
        }

        
    }

    return newNum;
}

/** 
 * @描述：格式化任何数字字符串
 * @num ->数字或者数字字符串
 * @type ->格式化类型，默认为number，金额->currency，日期->date
 * @opt -> 对象，参考toLocaleString具体用法
 */
export default function formatNumber(num, type = 'number', opt) {
    if (type === 'number') {
        return formatDecimal(parseFloat(num), opt);
    }

    if (type === 'currency') {
        return formatBalance(parseFloat(num), opt);
    }

    if (type === 'date') {
        return formatDate(num, opt);
    }
}
