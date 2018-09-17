/**
 * 3dx加密
 * 
 */
'use strict';

// 密码本
// T = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIAuGmpyZPfS9YXzhTmZkExMcnvMM0hzpRxxvpxAC2YooXECpPcI4HTROuH2OckLosFWzzc8ud7NCOiQ3ZEjNexoH7+0Gpqiu/ygRUiWNstwb7wAYoZHsVFzcA/HXcNAIrjaKHQKbQdYJeg8k0XzI8SKJd0t6UWgtc48QERxrpDf+nAGQtZuPCuB/YXKzIZ/eF8tuAkkGg16zHbJVLWYkWKq/tjOv5UK+BiroN7osVzO2LYNj6jcFKxRaxmGqBCaOydcUJMQ4ZBx/KqE0TKHR08TY4lmS1TSu5uitFfSG+/WKI7w/Iicq/1V4VFdXnL5ezJK8+hAD1hzJGH3Px4tk/AgMBAAECggEARfbkElTUDOhAgIxGes/2+/kNpXPdYOmQ1/xrYjmC+km7/ldURZecxycKJFWslZ720ObpxruR1Xt6dPGyW2WHfLa5z3hTvtLdHOjA3QV2NxhLJBNG1ChZ+cW2Iu0tGUtEGxIfcWqHL9J7OS6mWmCWhQnvahySaZiZ8vNlpQ1ud2kjumAbhCrgxG8LAATsNOm9wamNM3R5PEnKvJlcsWXoS4VkanpVRbDLLXhL6DTsjJKeN8gpjfteTO/gGrc4OQJMuabSVcTOb+M0cz776HhG0Jem5ESZ95zFKtT5hNLuKOsZZ8T/TQp/5dkZ2oDBJr8kLsL6eBP0/t1IwOF+G2jcQQKBgQD/IYyeT5fhRTxhcaloU4K5duaRoKdU0bKw5LJAQQBVsLZYznOWBQ6t093hmoZTD5LTHC4yxsTdwVfJvnKz7M/l+NYKR2oHFJRzmd9r9DXFdgz27vn/9PApvUlUDTybhMuJ+2KktKGiKONyLlw+YPYmGjM0btciAMKoH+Fc6CC/YQKBgQDIsUXVbhGZLu09HzMly1awq7oDREFktdQz4g6G5zBBX1ao14iPc7RP1+oAi5uIgmlf90L7iaid',
// 排列本
// N = '123123123123123123123123'

const ek = function() {
        //生成随机数
        const a = (min, max) => {
            if (arguments.length == '1') {
                return parseInt(Math.random() * min + 1);
            } else {
                return parseInt(Math.random() * (max - min + 1) + min);
            }
        }

        //返回随机数
        const b = (x, y) => {
            var y = y || 10,
                min, max;
            //如果是1位最小数减1(0-9) (10-99) (100-999)
            min = x == '1' ? Math.pow(y, (x - 1)) - 1 : Math.pow(y, (x - 1));
            //传入最小数最大数
            return a(min, (Math.pow(y, x) - 1));
        }

        let arr = [],
            listNum = this.N.split('');

        //拼接随机数组
        listNum.forEach((o, i) => {
            arr.push(b(listNum[i]));
        });

        return arr.join('');
    },
    dk = function(msgId) {

        //返回每个数字对应的字母
        let d = index => this.T.substr(index, 1);

        let listNum = this.N.split(''),
            index, j = 0,
            key = '';

        //拼接秘钥
        listNum.forEach((o, i) => {
            index = msgId.substr(j, parseInt(listNum[i]));
            key += d(index);
            j += parseInt(listNum[i]);
        });

        return key;
    };

export default class Edk {
    constructor(T, N) {
        this.T = T;
        this.N = N;
    }
    fEDk() {
        if (arguments.length > 0 && arguments.length === 1) {
            return dk.call(this, arguments[0]);
        } else if (arguments.length === 0) {
            return ek.call(this);
        }
    }

};