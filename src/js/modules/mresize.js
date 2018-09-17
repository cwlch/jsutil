'use strict'

const mresize = (psdW = 750, baseFz = 23.4376) => {
    let docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = () => {
            let clientWidth = docEl.clientWidth > psdW ? psdW : docEl.clientWidth;
            if (!clientWidth) {
                return;
            }
            docEl.style.fontSize = baseFz * (clientWidth / psdW) + 'px';
        };

    document.addEventListener('DOMContentLoaded', recalc, false);
    window.addEventListener(resizeEvt, recalc, false);
};

//解决IOS :active无效
document.body && document.body.addEventListener('touchstart', function() {});

export default mresize;
