/**
 *
 * 时间格式化
 * @param {number|string|Date} d 时间参数能被new Date识别的数字，字符串，日期
 * @param {string} fmt 时间格式参数 字符串类型 默认'yyyy/mm/dd'
 */
declare const _FormatDate: (date: any, fmt?: string) => string;
export default _FormatDate;
