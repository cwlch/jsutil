'use strict'
import type from './type.js';
//简单模板替换,tmp要替换的内容为{xxx},data为对象

const template = (tmpl, data) => tmpl.replace(/\{([^\}]+)\}/g, (k, v) => (type.isUndefined(data[v]) ? '' : data[v]));

export default template;
