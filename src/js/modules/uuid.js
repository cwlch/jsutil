'use strict'
import type from './type.js';

const uuid = () => {
    let d = new Date().getTime();
    if (window.performance && type.isFunction(window.performance.now)) {
        d += performance.now();; //use high-precision timer if available
    }
    const uuidStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuidStr;
};

export default uuid;