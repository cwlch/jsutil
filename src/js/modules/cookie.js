'use strict'
import isEmpty from './isEmpty.js';

const cookie = (...args) => {//name value domain path expires;

    const domainPrefix = window.location.hostname;

    const _set = () => { 

        let name = args[0],
            value = encodeURI(args[1]) + '; ',
            domain = (args[2] ? ('domain=' + args[2] + '; ') : ('domain=' + domainPrefix + ';')),
            path = (args[3] ? ('path=' + args[3] + '; ') : 'path=/; '),
            expires = (args[4] ? ('expires=' + args[4] + '; ') : '');

        window.document.cookie = name + '=' + value + path + expires + domain;
    };

    const _get = () => {
        let name = args[0],
            r = new RegExp('(?:^|;+|\\s+)' + name + '=([^;]*)'),
            m = window.document.cookie.match(r);

        return decodeURI((!m ? '' : m[1]));
    };

    args.length > 1 && _set();

    if (args.length == 1) {
        return _get();
    }
}

export default cookie;
