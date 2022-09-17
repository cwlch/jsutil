/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-08-31 12:29:35
 * @LastEditors: ch
 * @LastEditTime: 2022-09-01 22:17:22
 * @Description: file content
 */

const isEmpty = require('../src/tools/is-empty').default;

test('空字符串判断',()=>{
    expect(isEmpty('')).toBe(true);
})
test('非空字符串判断',()=>{
    expect(isEmpty('非空字符串判断')).toBe(false);
})
test('undefined类型判断',()=>{
    expect(isEmpty(undefined)).toBe(true);
})
test('null类型判断',()=>{
    expect(isEmpty(null)).toBe(true);
})
test('空数组判断',()=>{
    expect(isEmpty([])).toBe(true);
})
test('非空数组判断',()=>{
    expect(isEmpty([1,2])).toBe(false);
})
test('空对象判断',()=>{
    expect(isEmpty({})).toBe(true);
})
test('非空对象判断',()=>{
    expect(isEmpty({a:'x'})).toBe(false);
})