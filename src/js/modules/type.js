'use strict'
const type = o => Object.prototype.toString.call(o).match(/\[object (.*?)\]/)[1].toLowerCase();

const typeArr = ['Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp',
    'NaN',
    'Infinite'
];

typeArr.forEach(t => {
    type['is' + t] = o => type(o) === t.toLowerCase();;
});

export default type;
