/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-08-27 19:04:14
 * @Description: file content
 */

const calc = (symbol, number1, number2, ...args) =>{
    if(!['+','-','*','/'].includes(symbol)){
        throw new Error('第一个参数请传+ - * /计算符');
    }
    const num1 = Number(number1);
    const num2 = Number(number2);
    if(isNaN(num1) || isNaN(num2)){
        throw new Error('第二，三个参数必须传入可计算数字或字符');
    }
    let result = 0;
    // 把浮点数跟整数部分拆解
    const [num1BeforeInt, num1Float] = num1.toString().split('.');
    const [num2BeforeInt, num2Float] = num2.toString().split('.');

    const num1FloatLen = num1Float?.length || 0;
    const num2FloatLen = num2Float?.length || 0;

    // 乘除法直接去掉浮点
    const num1Int = Number(num1.toString().replace('.',''));
    const num2Int = Number(num2.toString().replace('.',''));

    if(symbol === '+' || symbol === '-'){
        // 以最长浮点数长度补0
        let m = Math.max(num1FloatLen, num2FloatLen);
        // 使用字符串补0方式得到最后计算数值（不能直接数字升幂，部分数字升幂就会缺精度）
        const resNum1 = Number(`${num1BeforeInt}${num1Float.padEnd(m,'0')}`);
        const resNum2 = Number(`${num2BeforeInt}${num2Float.padEnd(m,'0')}`);
        if(symbol === '+'){
            result = (resNum1 + resNum2) / Math.pow(10, m);
        }else{
            result = (resNum1 - resNum2) / Math.pow(10, m);
        }

    }else if(symbol === '*'){
        // 两个数的浮点长度加和为幂值
        let m = Math.pow(10, num1FloatLen + num2FloatLen);
        result = (num1Int * num2Int ) / m;
    }else if(symbol === '/'){
        // 被除数的浮点长度减除数浮点长为幂值
        let m = Math.pow(10, num2FloatLen - num1FloatLen)
        result = (num1Int  / num2Int ) * m;
    }
    // 有第三位计算数字
    const nextNum = args[0];
    if(nextNum){
        args.shift()
        result =  calc(symbol, result, nextNum, ...args);
    }
    
    return result;
}
// 加  
let a = 0.56 + 0.28 //原生 0.8400000000000001
let b = calc('+',0.56,0.28) //0.84
console.log(a,b)
// 减
let a1 = 0.3 - 0.1 //原生 0.19999999999999998
let b1 = calc('-',0.3,0.1) //0.2
console.log(a1,b1)

// 乘
let a2 = 0.8 * 0.51 //原生 0.40800000000000003
let b2 = calc('*',0.8,0.51) //0.408
console.log(a2,b2)

// 除
let a3 = 0.95 / 0.1 //原生 9.499999999999998
let b3 = calc('/',0.95,0.1) //9.5
console.log(a3,b3)

// 多位数计算
let a4 = 0.24 + 0.29 + 0.88 //1.4100000000000001
let b4 = calc('+',0.24,0.29,0.88) //1.41
console.log(a4,b4)