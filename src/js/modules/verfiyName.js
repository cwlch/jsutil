'use strict';

export default function verfiyName() {
    var reg = /^[a-zA-Z\u4e00-\u9fa5\.\·]+$/g;

    return (reg.test(name) ? true : false);
};