/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2021-06-28 16:53:29
 * @LastEditors: ch
 * @LastEditTime: 2022-09-01 22:17:06
 * @Description: file content
 */
const getVarType = require('../src/tools/get-var-type').default;

test('获取数字变量类型',()=>{
    expect(getVarType(1)).toBe('number');
})
test('获取字符串变量类型',()=>{
    expect(getVarType('xxx')).toBe('string');
})
test('获取数组变量类型',()=>{
    expect(getVarType([])).toBe('array');
})
test('获取对象变量类型',()=>{
    expect(getVarType({})).toBe('object');
})
test('获取函数变量类型',()=>{
    expect(getVarType(()=>{})).toBe('function');
})
test('获取null变量类型',()=>{
    expect(getVarType(null)).toBe('null');
})
test('获取undefined变量类型',()=>{
    expect(getVarType(undefined)).toBe('undefined');
})
test('获取Boolen变量类型',()=>{
    expect(getVarType(true)).toBe('boolean');
})