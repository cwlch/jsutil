'use strict'
export default (() => {
    const ua = navigator.userAgent.toLocaleLowerCase();
    let b = '', s = '';

    if(ua.search(/chrome\/(\d+\.\d+)/i) > 0){
        b = 'chrome';
    } else if(ua.search(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i) > 0){
        b = 'safari';
    } else if(ua.search(/firefox\/(\d+\.\d+)/i) > 0){
        b = 'firefox';
    } else if(ua.search(/msie (\d+\.\d+)|trident\/(\d+\.\d+)|edge\/(\d+\.\d+)/i) > 0){
        b = 'ie';
    } else if(ua.search(/opera\/(\d+\.\d+)/i) > 0){
        b = 'opera';
    }

    if(ua.search(/android/i) > 0){
        s = 'android';
    } else if(ua.search(/ipad/i) > 0){
        s = 'ipad';
    } else if(ua.search(/iphone/i) > 0){
        s = 'iphone';
    } else if(ua.search(/macintosh/i) > 0){
        s = 'mac';
    } else if(ua.search(/windows/i) > 0){
        s = 'windows';
    }

    return { browser: b, system: s};
})();