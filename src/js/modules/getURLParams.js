'use strict'
import isEmpty from './isEmpty.js';

const getUrlParams = query => {

    if (isEmpty(query)) return '';

    let subUrl = location.search.slice(location.search.indexOf('?') + 1),
        subArr = subUrl.split('&') || [],
        querystr = '';

    return subArr.forEach(function(v) {
        v.indexOf(query + '=') === 0 && (querystr = v.slice(query.length + 1))
    }), querystr;
};

export default getUrlParams;