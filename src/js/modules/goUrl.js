'use strict'
import isEmpty from './isEmpty.js';
import ua from './ua.js';

const goUrl  = url => {
    if (ua.browser === 'ie') {
        let a = document.createElement('a');
        a.setAttribute('href', url);
        document.body.appendChild(alink);
        a.click();
    } else {
        location.href = url;
    }
};

export default goUrl;